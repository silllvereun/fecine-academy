---
title: "영상 생성 AI"
description: "FECINE에서 쓰는 영상 생성 모델"
status: "published"
serviceVersion: "1.38.0"
revised: "2026-11-01"
---
# 영상 생성 AI

영상 생성 AI는 프롬프트와 참조 이미지로 움직이는 장면을 만듭니다. FECINE에서는 **스토리보드**에서 장면마다 영상을 생성하고, 결과는 테이크(T1, T2 …)로 남습니다([27장](/v1/chapters/27-video-generation)).

## FECINE v1.38.0의 영상 모델

| 모델 | 길이 | 해상도 | 특징 |
| --- | --- | --- | --- |
| [Seedance 2.0 / 2.0 VIP](/v1/models/video/seedance-2-0) | 4–15초 | 480p · 720p · 1080p | 참조 이미지 여러 장, 음성 생성 |
| [Seedance 2.0 Fast / Fast VIP](/v1/models/video/seedance-2-0-fast) | 4–15초 | 480p · 720p | 빠름 |
| [Seedance 2.5 / 2.5 VIP](/v1/models/video/seedance-2-5) | 4–30초 | 480p · 720p · 1080p | 긴 장면 |
| [Kling v3](/v1/models/video/kling-v3) | 3–15초 | 720p · 1080p · 2k · 4k | 높은 해상도(2k · 4k) 선택 가능 |
| [Wan 3.0](/v1/models/video/wan-3-0) | 2–30초 | 480p · 720p · 1080p | 이미지 최대 10장 · 오디오 5개 참조 |

## 함께 읽기

- [8장 AI는 어떻게 그림과 영상을 만드나](/v1/chapters/08-how-ai-generates)
- [12장 모델을 고르는 7가지 기준](/v1/chapters/12-choosing-models)
- [26장 장면 프레임으로 시작 화면 정하기](/v1/chapters/26-scene-frames)

## 출처와 확인

| 항목 | 값 |
| --- | --- |
| 기준 버전 | FECINE v1.38.0 |
| 출처 | FECINE v1.38.0 모델 설정 (2026-10-31 확인) |
| 확인 날짜 | 2026-10-31 |

화면에 보이는 모델과 값은 운영 설정(모델 등록, 워크스페이스 허용, 요금 등록)에 따라 달라질 수 있습니다. 항상 FECINE 화면에 표시된 값이 기준입니다.
