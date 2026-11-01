# FECINE ACADEMY

《처음 시작하는 AI 영상 제작》 V1 온라인 교재 사이트입니다. 로그인 없이 누구나 무료로 읽습니다.

- 목표 주소: https://learn.fecine.ai (독립 서브도메인, 기본 경로 `/`)
- 기술: VitePress 1.6 · Vue 3 · Markdown
- 기준: 교재 V1 `1.0.0-preview` · FECINE 서비스 `v1.38.0` 화면
- 패키지 관리: npm (`package-lock.json`)

## 빠른 시작

Node.js 20 이상이 필요합니다(`.nvmrc` = 20).

```bash
npm ci
```

```bash
npm run dev
```

개발 서버: http://localhost:5173

```bash
npm run build
```

```bash
npm run check
```

```bash
npm run preview
```

| 명령 | 하는 일 |
| --- | --- |
| `npm run dev` | 개발 서버 (수정하면 바로 반영) |
| `npm run build` | 정적 사이트 빌드 → `docs/.vitepress/dist` |
| `npm run check` | 빌드 결과의 내부 링크·앵커·이미지·다운로드 파일 검사 (깨진 것이 있으면 실패) |
| `npm run preview` | 빌드 결과를 로컬에서 미리 보기 (http://localhost:4173) |

## 디렉터리

```text
fecine-academy/
├─ docs/                        VitePress 소스 (srcDir)
│  ├─ index.md                  홈
│  ├─ guide/                    시작하기 (판과 무관)
│  ├─ about/                    버전·변경 이력·집필 현황·확인 필요 항목·작성 기준
│  ├─ v1/                       교재 V1 (V2는 docs/v2/로 추가)
│  │  ├─ parts/                 PART 01–08 소개 ........ 생성
│  │  ├─ chapters/              1–33장, 실습 1–3 ........ 생성
│  │  ├─ foundations/           영상 제작 기초 .......... 생성
│  │  ├─ ai-basics/             AI 기술 기초 ............ 생성
│  │  ├─ models/                AI 모델 가이드 .......... 생성 (template.md는 직접 작성)
│  │  ├─ resources/             실습 자료실 ............. prompts·checklists 생성, 나머지 직접 작성
│  │  ├─ appendix/              부록 A–D ................ 생성
│  │  ├─ about/                 책 소개·커리큘럼·기능 요약 생성
│  │  └─ instructor/            파트너사 강의 가이드 ..... 생성
│  ├─ public/
│  │  ├─ images/v1/captures/    화면 캡처 (cap-NN-NN.png)
│  │  ├─ downloads/v1/          실습 다운로드 파일 ....... 생성
│  │  └─ brand/                 FECINE 로고·공유 이미지
│  └─ .vitepress/
│     ├─ config.mts             사이트 설정 (목차, 검색, SEO, 마크다운)
│     ├─ generated/             페이지 목록·구조 (생성, 사이드바와 집필 현황이 읽음)
│     └─ theme/                 테마 (브랜드 색, 장 머리말, 안내 상자, 컴포넌트)
├─ scripts/
│  └─ check-site.mjs            빌드 결과 링크 검사
├─ templates/                   새 장·모델 페이지 템플릿
└─ amplify.yml                  AWS Amplify 빌드 설정
```

## 콘텐츠 관리

### 원고와 페이지

교재 본문은 별도로 관리하는 원고에서 만들어집니다. 표에 “생성”으로 적힌 폴더의 페이지는 원고가 바뀌면 다시 만들어 덮어쓰므로, 고칠 내용은 이슈나 풀 리퀘스트로 알려 주세요. 반영은 원고에서 합니다.

- `guide/`, `about/`(루트), `index.md`, `v1/models/template.md`, `v1/resources/` 일부, 이론 보강 페이지(`v1/foundations/`·`v1/ai-basics/`의 주제 페이지, `v1/models/text-ai.md`)는 직접 작성한 파일입니다.
- 본문의 ‘확인 필요’ 표시는 실제 서비스와 대조가 남은 곳입니다. 목록은 `/about/verification`에 있습니다.

### 페이지 상태

페이지 앞부분의 `status`로 관리합니다.

| 값 | 뜻 | 표시 |
| --- | --- | --- |
| `published` | 집필 완료 | 페이지 위 “게시” |
| `planned` | 집필 계획만 있음 | 페이지 위 “작성 예정”, 안내 상자, 사이드바 “· 작성 예정”, 검색엔진 `noindex` |

집필 현황(`/about/status`)은 `docs/.vitepress/generated/pages.json`에서 자동으로 만들어집니다.

### 이미지·영상·첨부 파일

| 종류 | 위치 | 쓰는 법 |
| --- | --- | --- |
| 화면 캡처 | `docs/public/images/v1/captures/` | `![캡처 27-01 …](/images/v1/captures/cap-27-01.png)` |
| 생성 결과 이미지 | `docs/public/images/v1/results/` | 실제 생성한 결과만. 없으면 `<Badge type="warning" text="자료 준비 중" />` |
| 결과 영상 | `docs/public/media/v1/` | `<VideoExample src="/media/v1/30-a.mp4" caption="결과 30-A …" meta="모델 · 길이 · 크레딧" />` |
| 다운로드 | `docs/public/downloads/v1/` | `<DownloadCard href="/downloads/v1/…" title="…" />` |

큰 영상 파일(수십 MB 이상)은 저장소 대신 CDN(S3 + CloudFront 등)에 두고 절대 주소로 넣는 것을 권합니다.

### 새 판(V2) 추가

`docs/v2/`를 만들고 `config.mts`에 `/v2/` 사이드바를 더합니다. V1 페이지는 그대로 둡니다. 버전 표시는 페이지 앞부분의 `serviceVersion`, `revised`와 `generated/structure.json`의 교재 개정 번호를 씁니다.

## 배포 (AWS Amplify Hosting)

1. Amplify 콘솔 → **새 앱 → GitHub**에서 이 저장소와 배포 브랜치(`main`)를 고릅니다. 다른 FECINE 서비스의 Amplify 앱과는 별개의 앱입니다.
2. 빌드 설정은 저장소의 `amplify.yml`을 그대로 씁니다.
   - Node.js 20 · `npm ci` · `npm run build` → `npm run check`
   - 출력 디렉터리: `docs/.vitepress/dist`
3. **재작성 및 리디렉션**에 404 규칙을 더합니다.

   | 소스 | 대상 | 유형 |
   | --- | --- | --- |
   | `/<*>` | `/404.html` | 404 (Rewrite) |

4. **사용자 지정 도메인**에서 `learn.fecine.ai`를 연결하고, 안내되는 DNS 레코드를 등록합니다.
5. 첫 배포 후 `https://learn.fecine.ai/sitemap.xml`을 검색엔진에 제출합니다.

환경 변수는 필요 없습니다. 페이지 주소는 `.html`로 끝납니다(`cleanUrls: false`). Amplify 정적 호스팅에서 별도 재작성 규칙 없이 그대로 열리게 하려는 설정입니다.

“최종 수정” 날짜는 git 기록에서 읽습니다. 빌드 환경이 얕은 복제(shallow clone)라 날짜가 빌드 시각으로 보이면, 빌드 전에 `git fetch --unshallow`를 더합니다.

## 라이선스

- 교재 글과 실습 자료: [CC BY-NC-SA 4.0](LICENSE-CONTENT.md)
- 사이트 코드(`docs/.vitepress/`, `scripts/`): [MIT](LICENSE)
- FECINE 이름·로고·브랜드 자료와 서비스 화면 캡처는 라이선스 대상이 아니며, 모든 권리는 AIIR Inc.에 있습니다.
