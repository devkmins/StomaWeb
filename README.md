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
    - [디자인](#디자인)
      - [데스크톱](#데스크톱)
      - [모바일](#모바일)
  - [설계](#설계)
    - [요구사항 정리](#요구사항-정리)
    - [기술 스택](#기술-스택)
    - [Routes 설정](#routes-설정)
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

<br />

### 디자인

#### 데스크톱

| 헤더 컴포넌트                                                                                                                                         | 헤더 컴포넌트(검색 아이콘 클릭)                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="800" alt="헤더 컴포넌트 데스크톱 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/8264d4e7-4e2e-4933-9a2f-ae358a790cc6"> | <img width="800" alt="헤더 컴포넌트(검색 아이콘 클릭) 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/6dab6b2b-7bc3-492e-b357-bd7f36ce04b3"> |

<br />

| 사이드바 컴포넌트                                                                                                                                         | 사이드바 컴포넌트(관심 종목 카테고리 O)                                                                                                                                         | 사이드바 컴포넌트(확장)                                                                                                                                         | 사이드바 컴포넌트(확장, 관심 종목 카테고리 O)                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="400" alt="사이드바 컴포넌트 데스크톱 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/07b06806-ea38-4a62-993c-265d5d7490b1"> | <img width="400" alt="사이드바 컴포넌트(관심 종목 카테고리 O) 데스크톱 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/a7bbf86f-0bcf-4ec9-a06a-18eeef62f3ff"> | <img width="400" alt="사이드바 컴포넌트(확장) 데스크톱 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/86f866bd-6577-4494-b5d8-d00953bd34b0"> | <img width="400" alt="사이드바 컴포넌트(확장, 관심 종목 카테고리 O) 데스크톱 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/5827402c-cd4d-4315-8e7e-fe1abb5cd1c3"> |

<br />

| 푸터 컴포넌트                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="400" alt="푸터 컴포넌트 데스크톱 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/fe5d1cef-e5ec-42fa-bf74-528e350b3538"> |

<br />

| 설명 모달 컴포넌트                                                                                                                                         | 설명 모달 컴포넌트(예시)                                                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="400" alt="설명 모달 컴포넌트 데스크톱 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/3c06e6c8-9aa6-4a2b-a6eb-cd873f07d0a3"> | <img width="400" alt="설명 모달 컴포넌트(예시) 데스크톱 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/a5fdb8ce-7cc6-4d3c-bd05-f074334902c6"> |

<br />

| 상단 이동 컴포넌트                                                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="200" alt="상단 이동 컴포넌트 데스크톱 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/b27478f6-1138-49f5-a402-a7e093e5598c"> |

<br />

| 홈 페이지                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="50%" alt="홈 페이지 데스크톱 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/1bf27486-1728-42bc-a070-753905769877"> |

<br />

| 관심 종목 페이지                                                                                                                                         | 관심 종목 페이지(마우스 hover)                                                                                                                                         | 관심 종목 페이지(카테고리 O)                                                                                                                                         | 관심 종목 페이지(마우스 hover, 카테고리 O)                                                                                                                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="400" alt="관심 종목 페이지 데스크톱 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/217204b5-e23b-4371-acf6-c5da397a5b03"> | <img width="400" alt="관심 종목 페이지(마우스 hover) 데스크톱 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/d133cb30-14f6-4ee8-947d-9c5fe7908328"> | <img width="400" alt="관심 종목 페이지(카테고리 O) 데스크톱 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/b3b355fe-16ef-4f47-b1fc-fc240a6de343"> | <img width="400" alt="관심 종목 페이지(마우스 hover, 카테고리 O) 데스크톱 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/9cc36103-4185-4f08-bece-ec7fcef5d07a"> |

| 관심 종목 페이지(설정 아이콘 클릭, 관심 종목 메뉴, 관심 종목 O)                                                                                                                                         | 관심 종목 페이지(설정 아이콘 클릭, 관심 종목 메뉴, 관심 종목 X)                                                                                                                                         | 관심 종목 페이지(설정 아이콘 클릭, 관심 종목 메뉴, 선택)                                                                                                                                         | 관심 종목 페이지(설정 아이콘 클릭, 카테고리 메뉴, 카테고리 X)                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="400" alt="관심 종목 페이지(설정 아이콘 클릭, 관심 종목 메뉴, 관심 종목 O) 데스크톱 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/c4fc9178-af49-4e7f-9ed0-70ea21c1440b"> | <img width="400" alt="관심 종목 페이지(설정 아이콘 클릭, 관심 종목 메뉴, 관심 종목 X) 데스크톱 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/680f562f-d7bd-4f94-ac4b-93cfbb829abb"> | <img width="400" alt="관심 종목 페이지(설정 아이콘 클릭, 관심 종목 메뉴, 선택) 데스크톱 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/37218c32-6762-4bed-8edb-6d1433fa9899"> | <img width="400" alt="관심 종목 페이지(설정 아이콘 클릭, 카테고리 메뉴, 카테고리 X) 데스크톱 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/d75ea811-4628-49e7-bdc0-75a7d8642c06"> |

| 관심 종목 페이지(카테고리 O, 설정 아이콘 클릭, 관심 종목 메뉴, 관심 종목 O)                                                                                                                                         | 관심 종목 페이지(카테고리 O, 설정 아이콘 클릭, 관심 종목 메뉴, 관심 종목 X)                                                                                                                                         | 관심 종목 페이지(카테고리 O, 설정 아이콘 클릭, 관심 종목 메뉴, 선택)                                                                                                                                         | 관심 종목 페이지(카테고리 O, 설정 아이콘 클릭, 카테고리 메뉴, 선택)                                                                                                                                         | 관심 종목 페이지(카테고리 O, 설정 아이콘 클릭, 카테고리 메뉴)                                                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="400" alt="관심 종목 페이지(카테고리 O, 설정 아이콘 클릭, 관심 종목 메뉴, 관심 종목 O) 데스크톱 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/b6a54385-afb4-418e-9abf-39a345e32228"> | <img width="400" alt="관심 종목 페이지(카테고리 O, 설정 아이콘 클릭, 관심 종목 메뉴, 관심 종목 X) 데스크톱 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/4919b75b-ae0d-4b72-bc60-e34f6c9319fc"> | <img width="400" alt="관심 종목 페이지(카테고리 O, 설정 아이콘 클릭, 관심 종목 메뉴, 선택) 데스크톱 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/9d31a856-c17f-45df-bf57-3288ba13d5f5"> | <img width="400" alt="관심 종목 페이지(카테고리 O, 설정 아이콘 클릭, 카테고리 메뉴, 선택) 데스크톱 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/0b9f52e9-4737-4d4d-a8c1-63fc1e981f17"> | <img width="400" alt="관심 종목 페이지(카테고리 O, 설정 아이콘 클릭, 카테고리 메뉴) 데스크톱 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/e1f32c25-b4a3-48b9-aee5-5564edff6b6c"> |

<br />

#### 모바일

| 헤더 컴포넌트                                                                                                                                       | 헤더 컴포넌트(검색 아이콘 클릭)                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="800" alt="헤더 컴포넌트 모바일 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/e720d5fd-93e5-4201-a91f-2f374eea4f99"> | <img width="800" alt="헤더 컴포넌트(검색 아이콘 클릭) 모바일 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/04064cda-f378-4e7b-95fb-51164f1d2472"> |

<br />

| 사이드바 컴포넌트                                                                                                                                       | 사이드바 컴포넌트(관심 종목 카테고리 O)                                                                                                                                       | 사이드바 컴포넌트(확장)                                                                                                                                       | 사이드바 컴포넌트(확장, 관심 종목 카테고리 O)                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="400" alt="사이드바 컴포넌트 모바일 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/c09bb881-8e9f-4cf7-b982-cdf0c768381d"> | <img width="400" alt="사이드바 컴포넌트(관심 종목 카테고리 O) 모바일 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/d6b06877-80aa-4732-bac0-d1078c52682d"> | <img width="400" alt="사이드바 컴포넌트(확장) 모바일 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/6d18bbea-5edf-4da4-b43d-2fccdb54a122"> | <img width="400" alt="사이드바 컴포넌트(확장, 관심 종목 카테고리 O) 모바일 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/00f48134-e627-4836-bf5b-a073aada0b9e"> |

<br />

| 푸터 컴포넌트                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="400" alt="푸터 컴포넌트 모바일 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/673a4c33-f26d-4510-8ac0-9cefae7410aa"> |

<br />

| 설명 모달 컴포넌트                                                                                                                                       | 설명 모달 컴포넌트(예시)                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="400" alt="설명 모달 컴포넌트 모바일 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/35f180fa-4000-4ae4-abaf-8122666ad22c"> | <img width="400" alt="설명 모달 컴포넌트(예시) 모바일 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/4f88c93c-77a7-43a5-8276-ce44983bb9a1"> |

<br />

| 상단 이동 컴포넌트                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="200" alt="상단 이동 컴포넌트 모바일 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/66b2343f-7ecb-4de4-9736-9b3efe51ad4a"> |

<br />

| 홈 페이지                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="50%" alt="홈 페이지 모바일 디자인" src="https://github.com/devkmins/StomaWeb/assets/59950909/1bf27486-1728-42bc-a070-753905769877"> |

<br />

## 설계

### 요구사항 정리

### 기술 스택

### Routes 설정

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
