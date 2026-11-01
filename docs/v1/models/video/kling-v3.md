---
title: "Kling v3"
description: "Kling v3 영상 생성 모델 — FECINE v1.38.0 기준"
status: "published"
serviceVersion: "1.38.0"
revised: "2026-11-01"
---
# Kling v3

::: info 이 페이지를 읽는 법
표의 값은 FECINE v1.38.0에서 확인한 내용입니다. 확인하지 못한 항목은 <Badge type="warning" text="확인 필요" />로 두었고, 추측해서 채우지 않습니다.
:::

| 항목 | 내용 |
| --- | --- |
| 모델 이름 | Kling v3 |
| 개발사 | <Badge type="warning" text="확인 필요" /> |
| 역할 | 영상 생성 — FECINE 스토리보드의 장면 영상 |
| 생성 원리 | 모델별 방식 <Badge type="warning" text="확인 필요" /> · 일반 원리는 [8장](/v1/chapters/08-how-ai-generates) |
| 입력 | 프롬프트, 이미지 1장(항상 첫 프레임) |
| 출력 | 영상 3–15초, 720p · 1080p · 2k · 4k |
| 주요 기능과 장점 | 높은 해상도(2k · 4k) 선택 가능 |
| 제약사항 및 한계 | 화면 비율 16:9만, 참조 이미지 1장, 참조 보이스 없음 |
| 일반 / VIP | 일반 / VIP 구분 없음 |
| 추천 활용 상황 (확인된 사양 기준) | 16:9 고해상도 장면. 장면 프레임을 먼저 만든 경우 (26장) |
| FECINE에서 사용하는 방법 | 스토리보드 > 모델 탭 > 장면 영상 생성에서 **모델**을 고른 뒤 **길이**·**해상도**를 정하고 **생성** ([27장](/v1/chapters/27-video-generation)) |
| 실제 생성 예제 | <Badge type="warning" text="자료 준비 중" /> |
| 비용 | 화면의 `약 n 크레딧`으로 확인 · 단가 <Badge type="warning" text="확인 필요" /> · 계산법은 [13장](/v1/chapters/13-credits-and-cost) |
| 생성 시간 | 화면의 `예상 시간 약 …`으로 확인 |
| 다른 모델과 비교 | [부록 A.1 영상 모델](/v1/appendix/a-models-cost#a-1-영상-모델) |

## 출처와 확인

| 항목 | 값 |
| --- | --- |
| 기준 버전 | FECINE v1.38.0 |
| 출처 | FECINE v1.38.0 모델 설정 (2026-10-31 확인) |
| 확인 날짜 | 2026-10-31 |

화면에 보이는 모델과 값은 운영 설정(모델 등록, 워크스페이스 허용, 요금 등록)에 따라 달라질 수 있습니다. 항상 FECINE 화면에 표시된 값이 기준입니다.
