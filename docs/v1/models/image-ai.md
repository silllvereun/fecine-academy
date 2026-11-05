---
title: "이미지 생성 AI"
description: "FECINE에서 쓰는 이미지 생성 모델"
status: "published"
serviceVersion: "1.74.0"
revised: "2026-11-06"
---
# 이미지 생성 AI

이미지 생성 AI는 프롬프트와 참조 이미지로 정지 화면을 만듭니다. FECINE에서는 **등장인물** · **공간·배경** · **미술·소품** 이미지([20장](/v1/chapters/20-characters), [21장](/v1/chapters/21-backgrounds-props)), 캐릭터 시트([22장](/v1/chapters/22-character-sheets)), **샷 이미지**([26장](/v1/chapters/26-scene-frames))를 만들 때 씁니다.

## FECINE v1.74.0의 이미지 모델

모델 이름과 참조 이미지 한도, 한 번에 만드는 후보 수만 모델 정의에서 확인했습니다. 개발사·특징·요금은 아직 검증하지 않았습니다.

| 모델 | 참조 이미지 최대 | 한 번에 후보 최대 | 개발사 | 요금 |
| --- | --- | --- | --- | --- |
| GPT Image 2 | 1장 또는 16장 (공급 경로에 따라 다름) | 4장 | <Badge type="warning" text="확인 필요" /> | <Badge type="warning" text="확인 필요" /> |
| Nano Banana 2 | 1장 | 1장 | <Badge type="warning" text="확인 필요" /> | <Badge type="warning" text="확인 필요" /> |
| Nano Banana Pro | 2장 | 1장 | <Badge type="warning" text="확인 필요" /> | <Badge type="warning" text="확인 필요" /> |
| Qwen Image 3.0 (`GLOBAL`) | 3장 | 6장 | <Badge type="warning" text="확인 필요" /> | <Badge type="warning" text="확인 필요" /> |
| Seedream 5.0 | 14장 | 4장 | <Badge type="warning" text="확인 필요" /> | <Badge type="warning" text="확인 필요" /> |
| Seedream 5.0 Pro | 10장 | 4장 | <Badge type="warning" text="확인 필요" /> | <Badge type="warning" text="확인 필요" /> |

::: tip FECINE에서 확인하는 법
이미지를 만들 때 모델을 고르면 모델에 따라 비율·크기·수량, 품질·형식·배경(투명) 같은 선택지가 달라집니다. 캐릭터 시트는 대표 이미지와 참조 이미지를 받는 모델이 필요합니다(22장). 샷 이미지의 `장수`는 모델이 한 번에 만들 수 있는 만큼 고를 수 있고, 후보를 1장만 만드는 모델(Nano Banana 계열)에서는 `장수` 선택이 보이지 않습니다. 후보는 실제로 받은 장수만큼만 크레딧이 차감됩니다.
:::

## 출처와 확인

| 항목 | 값 |
| --- | --- |
| 기준 버전 | FECINE v1.74.0 |
| 출처 | FECINE v1.74.0 모델 정의와 릴리스 노트 (2026-11-06 확인) |
| 확인 날짜 | 2026-11-06 |

화면에 보이는 모델과 값은 운영 설정(모델 등록, 워크스페이스 허용, 요금 등록)에 따라 달라질 수 있습니다. 항상 FECINE 화면에 표시된 값이 기준입니다.
