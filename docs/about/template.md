---
title: 페이지 작성 기준
description: 교재 장 페이지의 표준 구조와 안내 상자 사용법
status: published
revised: "2026-11-01"
---

# 페이지 작성 기준

새 장을 쓰거나 V2를 준비할 때 따르는 기준입니다. 저장소의 `academy/templates/chapter-template.md`를 복사해서 시작합니다.

## 장 페이지의 9단계

교재 V1의 원고는 **WHY · HOW · PRACTICE · REVIEW** 네 단계로 쓰여 있고, 각 단계가 아래 9개 항목을 담습니다. 새 장도 같은 순서로 씁니다.

| 표준 항목 | V1 원고의 위치 |
| --- | --- |
| 1. 이번 장에서 배울 내용 | WHY — 여는 질문, 목표 3개, 완성 결과물 (제목 아래 카드에 자동 표시 — `<ChapterGoals />`) |
| 2. 관련 영상 기술 및 AI 개념 | HOW — 개념 설명과 표 |
| 3. FECINE 기능 이해하기 | HOW — 기능 설명, 화면 구성 |
| 4. 화면 따라 하기 | HOW — “FECINE에서 하기” 단계, 화면 캡처 |
| 5. 실제 제작 실습 | PRACTICE — 실습 번호, 복사해 쓰는 예제 |
| 6. 생성 결과 확인 및 분석 | PRACTICE — 결과 번호(결과 NN-X), 평가표 |
| 7. 문제 해결 TIP | REVIEW — 상황 · 화면 문구 · 해결 표 |
| 8. 직접 해보기 | REVIEW — 응용 과제 |
| 9. 핵심 개념 정리 | REVIEW — 체크리스트, 확인 문제와 정답 |

## 페이지 앞부분(frontmatter)

```yaml
---
title: "34장 장 제목"
description: "검색 결과와 공유 카드에 보이는 한 문장"
chapter: "34장"
part: "PART 08 활용과 문제 해결"
status: "published"        # 또는 planned (작성 예정)
serviceVersion: "1.38.0"   # 화면을 확인한 FECINE 버전
revised: "2026-11-01"      # 원고를 마지막으로 고친 날
goals:
  - "목표 1"
result: "완성 결과물"
---
```

## 안내 상자

| 상자 | 쓰는 곳 | 쓰는 법 |
| --- | --- | --- |
| TIP | 더 잘하는 방법 | `::: tip TIP` |
| NOTE | 알아 둘 사실 | `::: info NOTE` |
| CHECK | 따라 한 뒤 확인할 것 | `::: check CHECK` |
| 주의 | 비용·데이터 손실·되돌릴 수 없는 일 | `::: warning 주의` |
| COST | 크레딧이 드는 실습 | `::: cost COST · 비용` |

## 자료 표시 원칙

- 화면 이름과 버튼 이름은 FECINE 화면에 보이는 그대로 씁니다.
- 실제로 생성하지 않은 결과 이미지·영상은 넣지 않고 `<Badge type="warning" text="자료 준비 중" />`으로 표시합니다.
- 결과 영상은 `<VideoExample src="/media/v1/…mp4" caption="결과 30-A …" meta="모델 · 길이 · 크레딧" />`로 싣습니다. `src`가 없으면 ‘자료 준비 중’으로 보입니다.
- 아직 없는 기능은 본문에 쓰지 않고 [부록 D 향후 기능](/v1/appendix/d-future)에 둡니다.
