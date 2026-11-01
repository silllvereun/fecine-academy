// Checks the built site (docs/.vitepress/dist): every internal link, anchor, image and
// download resolves. Run after `npm run build`.  Exit code 1 on any broken reference.
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { join, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const dist = resolve(dirname(fileURLToPath(import.meta.url)), '../docs/.vitepress/dist')
if (!existsSync(dist)) {
  console.error('dist not found — run `npm run build` first')
  process.exit(1)
}

const files = []
const walk = (d) => {
  for (const f of readdirSync(d)) {
    const p = join(d, f)
    if (statSync(p).isDirectory()) walk(p)
    else if (p.endsWith('.html')) files.push(p)
  }
}
walk(dist)

const ids = new Map()
const idsOf = (file) => {
  if (!ids.has(file)) {
    const html = readFileSync(file, 'utf8')
    ids.set(file, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])))
  }
  return ids.get(file)
}

const target = (from, url) => {
  let path = url.startsWith('/') ? join(dist, url) : join(dirname(from), url)
  if (url.endsWith('/') || url === '') path = join(path, 'index.html')
  if (existsSync(path) && statSync(path).isDirectory()) path = join(path, 'index.html')
  return path
}

const broken = []
let links = 0
for (const file of files) {
  const html = readFileSync(file, 'utf8')
  // Only the page body: skip <head> preload hints and inline scripts.
  const body = html.slice(html.indexOf('<body'))
  for (const m of body.matchAll(/\s(href|src)="([^"]+)"/g)) {
    const raw = m[2].replace(/&amp;/g, '&')
    if (/^(https?:|mailto:|tel:|data:|javascript:)/.test(raw)) continue
    links++
    const [pathPart, hash] = raw.split('#')
    const page = pathPart ? target(file, decodeURIComponent(pathPart)) : file
    if (!existsSync(page)) {
      broken.push(`${file.slice(dist.length)} → ${raw} (missing file)`)
      continue
    }
    if (hash && page.endsWith('.html') && !idsOf(page).has(decodeURIComponent(hash))) {
      broken.push(`${file.slice(dist.length)} → ${raw} (missing anchor)`)
    }
  }
}

console.log(`pages ${files.length} · internal references ${links} · broken ${broken.length}`)
for (const b of broken) console.log('  ' + b)
process.exit(broken.length ? 1 : 0)
