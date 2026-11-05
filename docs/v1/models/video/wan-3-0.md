---
title: "Wan 3.0 / 3.0 Global / 3.0 Prime Global"
description: "Wan 3.0 · Wan 3.0 Global · Wan 3.0 Prime Global 영상 생성 모델 — FECINE v1.74.0 기준"
status: "published"
serviceVersion: "1.74.0"
revised: "2026-11-06"
---
# Wan 3.0 / 3.0 Global / 3.0 Prime Global

::: info 이 페이지를 읽는 법
표의 값은 FECINE v1.74.0의 모델 정의와 릴리스 노트에서 확인한 내용입니다. 확인하지 못한 항목은 <Badge type="warning" text="확인 필요" />로 두었고, 추측해서 채우지 않습니다.
:::

| 항목 | 내용 |
| --- | --- |
| 모델 이름 | Wan 3.0 / Wan 3.0 Global / Wan 3.0 Prime Global (두 Global 모델은 목록에서 `GLOBAL` 배지) |
| 개발사 | <Badge type="warning" text="확인 필요" /> |
| 역할 | 영상 생성 — FECINE 스토리보드의 씬 영상 |
| 생성 원리 | 모델별 방식 <Badge type="warning" text="확인 필요" /> · 일반 원리는 [8장](/v1/chapters/08-how-ai-generates) |
| 입력 | 프롬프트(Wan 3.0 최대 20,000자), 참조 이미지 최대 10장, 오디오 참조 최대 5개 |
| 출력 | 영상 2–30초, 480p · 720p · 1080p. 비율 16:9 · 9:16 · 1:1 · 4:3 · 3:4 · adaptive (Global · Prime Global은 21:9도) |
| 주요 기능과 장점 | 이미지 최대 10장 · 오디오 5개 참조 |
| 제약사항 및 한계 | <Badge type="warning" text="확인 필요" /> |
| 일반 / Global | Wan 3.0 Global과 Wan 3.0 Prime Global이 따로 있습니다. 21:9 지원 외의 차이, Global과 Prime Global의 차이는 <Badge type="warning" text="확인 필요" /> |
| 추천 활용 상황 (확인된 사양 기준) | 참조를 많이 쓰는 씬, 긴 씬. 21:9 작품은 Global · Prime Global |
| FECINE에서 사용하는 방법 | 스토리보드 > 모델 탭 > `씬 영상 생성`에서 **모델**을 고른 뒤 **길이**·**해상도**를 정하고 **생성** ([27장](/v1/chapters/27-video-generation)) |
| 실제 생성 예제 | <Badge type="warning" text="자료 준비 중" /> |
| 비용 | 화면의 `약 n 크레딧`으로 확인 · 단가 <Badge type="warning" text="확인 필요" /> · 계산법은 [13장](/v1/chapters/13-credits-and-cost) |
| 생성 시간 | 화면의 `예상 시간 약 …`으로 확인 |
| 다른 모델과 비교 | [부록 A.1 영상 모델](/v1/appendix/a-models-cost#a-1-영상-모델) |

## 출처와 확인

| 항목 | 값 |
| --- | --- |
| 기준 버전 | FECINE v1.74.0 |
| 출처 | FECINE v1.74.0 모델 정의와 릴리스 노트 (2026-11-06 확인) |
| 확인 날짜 | 2026-11-06 |

화면에 보이는 모델과 값은 운영 설정(모델 등록, 워크스페이스 허용, 요금 등록)에 따라 달라질 수 있습니다. 항상 FECINE 화면에 표시된 값이 기준입니다.
