---
title: "Seedance 2.0 Fast / Fast Enterprise"
description: "Seedance 2.0 Fast / Fast Enterprise 영상 생성 모델 — FECINE v1.82.0 기준"
status: "published"
serviceVersion: "1.82.0"
revised: "2026-11-10"
---
# Seedance 2.0 Fast / Fast Enterprise

::: info 이 페이지를 읽는 법
표의 값은 FECINE v1.74.0의 모델 정의와 릴리스 노트에서 확인한 내용이고, 이름·경로 표시는 v1.82.0 화면 기준으로 고쳤습니다. 확인하지 못한 항목은 <Badge type="warning" text="확인 필요" />로 두었고, 추측해서 채우지 않습니다.
:::

| 항목 | 내용 |
| --- | --- |
| 모델 이름 | Seedance 2.0 Fast / Fast Enterprise |
| 개발사 | <Badge type="warning" text="확인 필요" /> |
| 역할 | 영상 생성 — FECINE 스토리보드의 씬 영상 |
| 생성 원리 | 모델별 방식 <Badge type="warning" text="확인 필요" /> · 일반 원리는 [8장](/v1/chapters/08-how-ai-generates) |
| 입력 | 프롬프트, 참조 이미지(장수 <Badge type="warning" text="확인 필요" />) |
| 출력 | 영상 4–15초, 480p · 720p |
| 참조 이미지 자동 맞춤 | 참조 이미지가 너무 작으면 자동으로 키워 보내고, 받을 수 없는 가로세로 비율(약 1:2.5~2.5:1 밖)이면 요청 전에 이미지 이름과 함께 알려 줌(크레딧 차감 없음). 워터마크는 끄고 요청함(v1.75.0) |
| 주요 기능과 장점 | 빠름 |
| 제약사항 및 한계 | 1080p 없음 (480p · 720p만) |
| 일반 / Enterprise | 일반(Standard)과 Enterprise는 같은 모델을 서로 다른 공급 경로(Enterprise는 정식 기업 계약 경로)로 돌립니다. 길이·해상도는 같지만 **가격은 경로마다 다를 수 있고**, 모델 목록에서는 한 줄로 묶여 `약 n 크레딧부터`로 보이며 고르면 경로별 가격이 펼쳐집니다. 이름 옆에 건물 아이콘(`Enterprise`)이 붙습니다. 예전에는 이 경로를 ‘Global’로 불렀습니다(v1.80.0에서 이름이 바뀜). 실존 인물 등장인물로 Seedance 영상을 만들려면 `Seedance 실존 인물 인증`이 필요합니다(일반·Enterprise 중 어디에 해당하는지 <Badge type="warning" text="확인 필요" />). 부록 A 참고 |
| 추천 활용 상황 (확인된 사양 기준) | 연습·테스트용 (부록 A) |
| FECINE에서 사용하는 방법 | 스토리보드 > 모델 탭 > `씬 영상 생성`에서 **모델**을 고른 뒤 **길이**·**해상도**를 생성 버튼 위 선택 상자에서 정한 뒤 **생성 · 예상 크레딧** ([27장](/v1/chapters/27-video-generation)) |
| 실제 생성 예제 | <Badge type="warning" text="자료 준비 중" /> |
| 비용 | 화면의 `약 n 크레딧`으로 확인 · 초당 가격 — 일반(Standard): 480p 0.055 · 720p 0.115 (공식가보다 2% 저렴) / Enterprise: 480p 0.062 · 720p 0.132 (USD 1 = 1 크레딧, 2026-11-05 [모델·가격](https://fecine.ai/models/pricing) 페이지 기준) · 계산법은 [13장](/v1/chapters/13-credits-and-cost) |
| 생성 시간 | 릴리스 실측(참고): 480p, 4초 생성에 약 107–126초 · 화면의 `예상 시간 약 …`으로 확인 |
| 다른 모델과 비교 | [부록 A.1 영상 모델](/v1/appendix/a-models-cost#a-1-영상-모델) |

## 출처와 확인

| 항목 | 값 |
| --- | --- |
| 기준 버전 | FECINE v1.82.0 |
| 출처 | FECINE v1.74.0 모델 정의, v1.75.0~v1.82.0 릴리스 노트와 화면 문구 (2026-11-10 확인) |
| 확인 날짜 | 2026-11-10 |

화면에 보이는 모델과 값은 운영 설정(모델 등록, 워크스페이스 허용, 요금 등록)에 따라 달라질 수 있습니다. 항상 FECINE 화면에 표시된 값이 기준입니다.
