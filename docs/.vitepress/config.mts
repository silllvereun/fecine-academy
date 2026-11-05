import { defineConfig, type DefaultTheme, type HeadConfig } from 'vitepress'
import container from 'markdown-it-container'
import taskLists from 'markdown-it-task-lists'
import structure from './generated/structure.json' with { type: 'json' }
import pages from './generated/pages.json' with { type: 'json' }

const SITE = 'https://learn.fecine.ai'
const TITLE = 'FECINE ACADEMY'
const DESCRIPTION =
  '처음 시작하는 AI 영상 제작 — 영상 제작의 기초부터 생성형 AI 모델 이해, FECINE 실전 워크플로까지. 누구나 무료로 배우는 온라인 교재.'

const planned = new Set(pages.filter((p) => p.status === 'planned').map((p) => p.link))
const item = (text: string, link: string): DefaultTheme.SidebarItem => ({
  text: planned.has(link) ? `${text} · 작성 예정` : text,
  link,
})

const modelCards = [
  ['Seedance 2.0 / 2.0 VIP', 'seedance-2-0'],
  ['Seedance 2.0 Fast / Fast VIP', 'seedance-2-0-fast'],
  ['Seedance 2.5 / 2.5 VIP', 'seedance-2-5'],
  ['Kling v3', 'kling-v3'],
  ['Wan 3.0', 'wan-3-0'],
]

const sidebar: DefaultTheme.SidebarItem[] = [
  {
    text: '시작하기',
    items: [
      item('어디서 시작할까요?', '/guide/start'),
      item('연속 프로젝트 「비 오는 정류장」', '/guide/project'),
      item('무료로 해 볼 수 있는 범위', '/guide/free'),
    ],
  },
  ...structure.parts.map((p) => ({
    text: `${p.code}. ${p.name}`,
    collapsed: true,
    items: [item('PART 소개', `/v1/parts/${p.slug}`), ...p.chapters.map((c) => item(c.title, c.link))],
  })),
  {
    text: '영상 제작 기초',
    collapsed: true,
    items: [item('영상 제작 기초 안내', '/v1/foundations/'), ...structure.tracks.foundations.items.map((c) => item(c.title, c.link))],
  },
  {
    text: 'AI 기술 기초',
    collapsed: true,
    items: [item('AI 기술 기초 안내', '/v1/ai-basics/'), ...structure.tracks['ai-basics'].items.map((c) => item(c.title, c.link))],
  },
  {
    text: 'AI 모델 가이드',
    collapsed: true,
    items: [
      item('AI 모델 가이드 안내', '/v1/models/'),
      item('12장 모델을 고르는 7가지 기준', '/v1/chapters/12-choosing-models'),
      item('13장 크레딧과 비용 계산', '/v1/chapters/13-credits-and-cost'),
      item('텍스트 생성 AI', '/v1/models/text-ai'),
      item('이미지 생성 AI', '/v1/models/image-ai'),
      item('영상 생성 AI', '/v1/models/video-ai'),
      ...modelCards.map(([t, s]) => item(t, `/v1/models/video/${s}`)),
      item('모델별 비교와 요금 (부록 A)', '/v1/appendix/a-models-cost'),
      item('모델 페이지 작성 기준', '/v1/models/template'),
    ],
  },
  {
    text: '실습 자료실',
    collapsed: true,
    items: [
      item('실습 자료실 안내', '/v1/resources/'),
      item('예제 대본·프롬프트 모음', '/v1/resources/prompts'),
      item('영상 제작 체크리스트', '/v1/resources/checklists'),
      item('다운로드', '/v1/resources/downloads'),
      item('이미지 레퍼런스', '/v1/resources/image-references'),
      item('실습 워크북', '/v1/resources/workbook'),
      item('PDF 교재', '/v1/resources/pdf'),
    ],
  },
  {
    text: '부록',
    collapsed: true,
    items: [item('부록 안내', '/v1/appendix/'), ...structure.appendix.map((a) => item(a.title, a.link))],
  },
  {
    text: '교재 정보',
    collapsed: true,
    items: [
      item('책 소개', '/v1/about/book'),
      item('인쇄 교재 목차와 커리큘럼', '/v1/about/curriculum'),
      item('FECINE 제작 흐름', '/v1/about/flow'),
      item('FECINE 기능 요약', '/v1/about/features-summary'),
      item('버전과 변경 이력', '/about/versions'),
      item('집필 현황', '/about/status'),
      item('확인이 필요한 항목', '/about/verification'),
      item('페이지 작성 기준', '/about/template'),
      item('파트너사 강의 진행 가이드', '/v1/instructor/'),
      item('수업 예산 짜기', '/v1/instructor/budget'),
    ],
  },
]

export default defineConfig({
  lang: 'ko-KR',
  title: TITLE,
  titleTemplate: `:title | ${TITLE}`,
  description: DESCRIPTION,
  cleanUrls: false,
  lastUpdated: true,
  metaChunk: true,
  sitemap: { hostname: SITE },
  srcExclude: ['**/README.md', 'public/**'],

  head: [
    // Light is the default; a reader's own choice (the toggle) is kept in localStorage.
    ['script', {}, `try{if(!localStorage.getItem('vitepress-theme-appearance'))localStorage.setItem('vitepress-theme-appearance','light')}catch(e){}`],
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: '48x48' }],
    ['link', { rel: 'apple-touch-icon', href: '/brand/mark.png' }],
    ['meta', { name: 'theme-color', content: '#7A4DFF' }],
    ['meta', { property: 'og:site_name', content: TITLE }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'ko_KR' }],
    ['meta', { property: 'og:image', content: `${SITE}/brand/og-20260921-v2.png` }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],

  transformHead({ pageData }) {
    if (pageData.isNotFound) return [['meta', { name: 'robots', content: 'noindex' }]]
    const path = pageData.relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '.html')
    const url = `${SITE}/${path}`
    const title = pageData.frontmatter.title ? `${pageData.frontmatter.title} | ${TITLE}` : TITLE
    const desc = pageData.frontmatter.description || DESCRIPTION
    const head: HeadConfig[] = [
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: desc }],
    ]
    if (pageData.frontmatter.status === 'planned') head.push(['meta', { name: 'robots', content: 'noindex' }])
    return head
  },

  markdown: {
    image: { lazyLoading: true },
    // The default slugify uses NFKD, which splits Hangul into jamo and breaks
    // hand-written Korean anchors (#a-1-영상-모델). Keep composed Hangul.
    anchor: {
      slugify: (s: string) =>
        s
          .normalize('NFC')
          .trim()
          .toLowerCase()
          .replace(/[\s ]+/g, '-')
          .replace(/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~·—–]+/g, '-')
          .replace(/-{2,}/g, '-')
          .replace(/^-+|-+$/g, '')
          .replace(/^(\d)/, '_$1'),
    },
    config(md) {
      md.use(taskLists, { enabled: false, label: true })
      for (const [name, title] of [
        ['cost', 'COST'],
        ['check', 'CHECK'],
      ]) {
        md.use(container, name, {
          render(tokens: any[], idx: number) {
            const t = tokens[idx]
            if (t.nesting === 1) {
              const label = t.info.trim().slice(name.length).trim() || title
              return `<div class="${name} custom-block"><p class="custom-block-title">${md.utils.escapeHtml(label)}</p>\n`
            }
            return '</div>\n'
          },
        })
      }
    },
  },

  themeConfig: {
    logo: { src: '/brand/mark.png', alt: 'FECINE' },
    siteTitle:
      '<span class="brand-wordmark" role="img" aria-label="FECINE"></span><span class="brand-divider" aria-hidden="true">|</span><span class="brand-sub">ACADEMY</span>',
    nav: [
      { text: '교재', link: '/v1/parts/part-01', activeMatch: '^/v1/(parts|chapters)/' },
      {
        text: '기초 이론',
        items: [
          { text: '영상 제작 기초', link: '/v1/foundations/' },
          { text: 'AI 기술 기초', link: '/v1/ai-basics/' },
          { text: 'AI 모델 가이드', link: '/v1/models/' },
        ],
        activeMatch: '^/v1/(foundations|ai-basics|models)/',
      },
      { text: '실습 자료실', link: '/v1/resources/', activeMatch: '^/v1/resources/' },
      { text: '부록', link: '/v1/appendix/', activeMatch: '^/v1/appendix/' },
      {
        text: 'V1',
        items: [
          { text: '변경 이력', link: '/about/versions' },
          { text: '집필 현황', link: '/about/status' },
          { text: '확인이 필요한 항목', link: '/about/verification' },
          { text: '강사 가이드', link: '/v1/instructor/' },
          { text: '수업 예산 짜기', link: '/v1/instructor/budget' },
        ],
      },
    ],
    sidebar: { '/': sidebar },
    outline: { level: [2, 3], label: '이 페이지의 목차' },
    docFooter: { prev: '이전', next: '다음' },
    lastUpdated: { text: '최종 수정', formatOptions: { dateStyle: 'medium', timeStyle: undefined } },
    returnToTopLabel: '맨 위로',
    sidebarMenuLabel: '목차',
    darkModeSwitchLabel: '화면 모드',
    lightModeSwitchTitle: '밝은 화면으로',
    darkModeSwitchTitle: '어두운 화면으로',
    langMenuLabel: '언어',
    externalLinkIcon: true,
    notFound: {
      title: '페이지를 찾을 수 없습니다',
      quote: '주소가 바뀌었거나 아직 작성되지 않은 페이지입니다.',
      linkText: '처음으로',
      linkLabel: '처음으로 가기',
    },
    footer: {
      message:
        '누구나 무료로 열람할 수 있는 <a href="https://fecine.ai" target="_blank" rel="noopener">FECINE</a> 공식 교재입니다.',
      copyright: '© 2026 AIIR Inc.',
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '교재 검색', buttonAriaLabel: '교재 검색' },
          modal: {
            displayDetails: '자세히 보기',
            resetButtonTitle: '검색어 지우기',
            backButtonTitle: '닫기',
            noResultsText: '검색 결과가 없습니다',
            footer: { selectText: '이동', navigateText: '선택', closeText: '닫기' },
          },
        },
        miniSearch: {
          searchOptions: { prefix: true, fuzzy: 0.1, boost: { title: 4, text: 2, titles: 1 } },
        },
      },
    },
  },
})
