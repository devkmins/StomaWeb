# StomaWeb

<br />

## 목차

- [StomaWeb](#stomaweb)
  - [목차](#목차)
  - [프로젝트 소개](#프로젝트-소개)
    - [프로젝트 배경](#프로젝트-배경)
  - [기획](#기획)
    - [컴포넌트](#컴포넌트)
    - [페이지](#페이지)
  - [설계](#설계)
    - [요구사항 정리](#요구사항-정리)
    - [기술 스택](#기술-스택)
    - [라우터 설정](#라우터-설정)
    - [함수](#함수)
    - [타입 설계](#타입-설계)
    - [컴포넌트 설계](#컴포넌트-설계)
    - [페이지 설계](#페이지-설계)
    - [SEO 설계](#seo-설계)
  - [페이지 및 기능](#페이지-및-기능)
  - [반응형 페이지](#반응형-페이지)
  - [해결한 문제들](#해결한-문제들)
  - [배운 것들](#배운-것들)
  - [전역 상태](#전역-상태)
  - [디렉토리 구조](#디렉토리-구조)
  - [커밋 컨벤션](#커밋-컨벤션)

<br />

## 프로젝트 소개

StomaWeb은 주식, 암호화폐 등의 정보를 제공하여 투자 종목을 발굴할 때 도움을 주는 투자 정보 제공 웹 사이트입니다.

<br />

### 프로젝트 배경

StomaWeb은 주식, 암호화폐, 뉴스 등의 유용한 정보들을 편리하게 확인할 수 있도록 사용자 경험을 중시하여 개발하자는 생각과 더불어, Next JS와 같이 새롭게 학습한 기술들과 테크니컬 SEO를 적용시켜 실제로 사용자를 모아 수익을 얻는, 실제 시장에 진입하는 경험을 해보자는 생각에서 시작되었습니다.

<br />

## 기획

### 컴포넌트

| 헤더 컴포넌트                                                                                                                           | 사이드바 컴포넌트                                                                                                                           | 푸터 컴포넌트                                                                                                                           | 설명 모달 컴포넌트                                                                                                                      | 상단 이동 컴포넌트                                                                                                                      |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="" alt="헤더 컴포넌트 기획" src="https://github.com/devkmins/StomaWeb/assets/59950909/7e3679f3-c180-4c7e-b6a6-1d71dbfc9663"> | <img width="" alt="사이드바 컴포넌트 기획" src="https://github.com/devkmins/StomaWeb/assets/59950909/0afa534a-a77e-4dfb-9894-b8cd0686d105"> | <img width="" alt="푸터 컴포넌트 기획" src="https://github.com/devkmins/StomaWeb/assets/59950909/1cfdbace-b8f5-42c8-b81f-2f3617dfb193"> | <img width="" alt="설명 모달 컴포넌트" src="https://github.com/devkmins/StomaWeb/assets/59950909/9fd12251-ac34-44de-a147-14e52fa7c6e1"> | <img width="" alt="상단 이동 컴포넌트" src="https://github.com/devkmins/StomaWeb/assets/59950909/287f7ae9-6e09-4f44-b6ef-aff6ae1d528a"> |

<br />

### 페이지

| 홈 페이지                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="50%" alt="홈 페이지 기획" src="https://github.com/devkmins/StomaWeb/assets/59950909/23fb315a-123d-4661-aaf5-316f153e095e"><img width="50%" alt="홈 페이지 기획" src="https://github.com/devkmins/StomaWeb/assets/59950909/ca7122e3-2a1a-4798-90d2-77759de3b5a6"> |

| 관심 종목 페이지                                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="50%" alt="관심 종목 페이지 기획" src="https://github.com/devkmins/StomaWeb/assets/59950909/be3c355d-35d7-4e6b-957a-463e73b81e43"> |

| 시장 페이지 - 뉴스 페이지                                                                                                                               | 시장 페이지 - 주식 페이지                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img width="800" alt="시장 페이지 - 뉴스 페이지 기획" src="https://github.com/devkmins/StomaWeb/assets/59950909/a487dfc7-9999-4461-ac7e-3a06f55b7e3d" > | <img width="800" alt="시장 페이지 - 주식 페이지 기획" src="https://github.com/devkmins/StomaWeb/assets/59950909/00689a76-32fa-4ff3-989e-f8a13abd9e4c"> |

| 시장 페이지 - 지수 페이지                                                                                                                              | 시장 페이지 - 외환 페이지                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img width="800" alt="시장 페이지 - 지수 페이지 기획" src="https://github.com/devkmins/StomaWeb/assets/59950909/31bc972f-60a4-47cc-a3ac-4dc4a35b6b1a"> | <img width="800" alt="시장 페이지 - 외환 페이지 기획" src="https://github.com/devkmins/StomaWeb/assets/59950909/910737f1-34d4-4328-ab4c-30b61fc34784"> |

| 시장 페이지 - 선물 페이지                                                                                                                              | 시장 페이지 - 펀드 및 ETF 페이지                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="800" alt="시장 페이지 - 선물 페이지 기획" src="https://github.com/devkmins/StomaWeb/assets/59950909/910737f1-34d4-4328-ab4c-30b61fc34784"> | <img width="800" alt="시장 페이지 - 펀드 및 ETF 페이지 기획" src="https://github.com/devkmins/StomaWeb/assets/59950909/910737f1-34d4-4328-ab4c-30b61fc34784"> |

| 시장 페이지 - 암호화폐 페이지                                                                                                                              | 시장 페이지 - IPO 일정 페이지                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="800" alt="시장 페이지 - 암호화폐 페이지 기획" src="https://github.com/devkmins/StomaWeb/assets/59950909/6da82c8f-f96e-4aa3-80f6-85a93adc8fd9"> | <img width="800" alt="시장 페이지 - IPO 일정 페이지 기획" src="https://github.com/devkmins/StomaWeb/assets/59950909/b6c03939-955a-4fb6-97a9-33e60e882674"> |

| 투자 · 경제 공부 페이지 - 강의 페이지                                                                                                                              | 투자 · 경제 공부 페이지 - 도서 페이지                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img width="800" alt="투자 · 경제 공부 페이지 - 강의 페이지 기획" src="https://github.com/devkmins/StomaWeb/assets/59950909/6154fbb2-a0dd-4b40-b7b4-4c5bff62bdf9"> | <img width="800" alt="투자 · 경제 공부 페이지 - 도서 페이지 기획" src="https://github.com/devkmins/StomaWeb/assets/59950909/827e9537-f6d0-4a00-a490-d7afdc8c2287"> |

| 투자 · 경제 공부 페이지 - 금융 관련 서비스 페이지                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="50%" alt="투자 · 경제 공부 페이지 - 금융 관련 서비스 페이지 기획" src="https://github.com/devkmins/StomaWeb/assets/59950909/2d477512-a248-4c00-bd37-26e2940bee17" style="display: block; margin: 0 auto;"> |

| 투자 · 경제 공부 페이지 - 전 세계 은행들의 보고서 페이지                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="33.3%" alt="투자 · 경제 공부 페이지 - 전 세계 은행들의 보고서 페이지 기획" src="https://github.com/devkmins/StomaWeb/assets/59950909/f5333106-0cc9-4e67-a05e-8e53f0c29f25"><img width="33.3%" alt="투자 · 경제 공부 페이지 - 전 세계 은행들의 보고서 페이지 기획" src="https://github.com/devkmins/StomaWeb/assets/59950909/705d0ab5-1fd1-43d1-b5f0-e5ac3ca1f8dc"><img width="33.3%" alt="투자 · 경제 공부 페이지 - 전 세계 은행들의 보고서 페이지 기획" src="https://github.com/devkmins/StomaWeb/assets/59950909/f4b67945-df36-488c-9440-6e2c60ca547a"> |

| 더 보기 페이지 - 이 웹사이트에 대하여 페이지                                                                                                                               | 더 보기 페이지 - 문의하기 페이지                                                                                                                               | 더 보기 페이지 - 이용약관 페이지                                                                                                                               | 더 보기 페이지 - 개인정보 정책 페이지                                                                                                                               | 더 보기 페이지 - 언어 변경 페이지                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="100%" alt="더 보기 페이지 - 이 웹사이트에 대하여 페이지 기획" src="https://github.com/devkmins/StomaWeb/assets/59950909/16d81b07-390d-4ccf-882a-2c9118040932"> | <img width="100%" alt="더 보기 페이지 - 문의하기 페이지 기획" src="https://github.com/devkmins/StomaWeb/assets/59950909/89e51712-7a0e-484a-b446-20e473ce7097"> | <img width="100%" alt="더 보기 페이지 - 이용약관 페이지 기획" src="https://github.com/devkmins/StomaWeb/assets/59950909/186809f2-bb11-4fc3-b048-9e99bdfe4842"> | <img width="100%" alt="더 보기 페이지 - 개인정보 정책 페이지 기획" src="https://github.com/devkmins/StomaWeb/assets/59950909/8b8c0f78-d7e6-4bdc-bfd0-80a5023725a3"> | <img width="100%" alt="더 보기 페이지 - 언어 변경 페이지 기획" src="https://github.com/devkmins/StomaWeb/assets/59950909/e39419e9-fefd-47e2-a197-a565a44252a1"> |

| 검색 페이지                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="50%" alt="검색 페이지 기획" src="https://github.com/devkmins/StomaWeb/assets/59950909/0bae7c50-d26e-4ae3-99a2-b7466ec079a5"> |

## 설계

### 요구사항 정리

### 기술 스택

### 라우터 설정

### 함수

### 타입 설계

### 컴포넌트 설계

### 페이지 설계

### SEO 설계

## 페이지 및 기능

## 반응형 페이지

## 해결한 문제들

## 배운 것들

## 전역 상태

## 디렉토리 구조

## 커밋 컨벤션

| 제목     | 설명                                              |
| -------- | ------------------------------------------------- |
| feat     | 새로운 기능 추가                                  |
| fix      | 버그 수정                                         |
| refactor | 리팩토링                                          |
| design   | CSS 등 사용자 UI 디자인                           |
| init     | 프로젝트 초기 생성                                |
| remove   | 코드 제거 및 파일을 삭제하는 작업을 수행하는 경우 |
| edit     | 기존의 파일, 코드 수정 및 개선                    |
| types    | 공통 타입 추가                                    |
| README   | 리드미 작성                                       |
