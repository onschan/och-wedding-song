# 오창현 축가 개인 홈페이지

감동을 선사하는 안정적인 축가, 축가 전문 보컬 오창현의 축가 예약 문의를 늘리기 위한 단순 정적 웹사이트입니다.

## 파일 구조

```text
.
├── index.html
├── styles.css
├── script.js
├── portfolio-data.js
├── README.md
└── assets/
    ├── main-hero.webp
    └── portfolio-*.webp
```

## 실행 방법

별도 빌드 과정이 없습니다.

1. `index.html` 파일을 브라우저에서 직접 엽니다.
2. 로컬 서버가 필요하면 아래처럼 간단히 실행할 수 있습니다.

```bash
python3 -m http.server 8080
```

그다음 `http://localhost:8080`으로 접속합니다.

## 폼 전송 방식

현재 예약 문의 폼은 서버 없이 동작할 수 있도록 `mailto:` 방식으로 구현되어 있습니다.

- 제출 시 필수값, 연락처, 이메일, 개인정보 동의 여부를 JavaScript로 검증합니다.
- 검증이 통과되면 입력값을 이메일 제목과 본문으로 정리해 기본 메일 앱을 엽니다.
- 수신 이메일은 `script.js`의 `SITE_CONFIG.email` 값을 수정하면 됩니다.

운영 시 안정적인 접수를 원하면 `script.js`의 TODO 주석 지점을 Formspree, Google Form, 자체 API 등으로 교체하세요.

## YouTube 레퍼런스 영상 관리

홈페이지 안에는 관리자 화면을 넣지 않습니다. 정적 사이트에서는 인증/권한 처리가 없기 때문에 운영 기능을 페이지 안에 숨겨두는 방식은 권장하지 않습니다.

대신 `portfolio-data.js` 파일에서 YouTube 링크, 제목, 설명만 관리합니다.

```js
window.REFERENCE_VIDEOS = [
  {
    title: "레퍼런스 영상 제목",
    description: "영상 분위기나 곡 설명",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID",
  },
];
```

관리 방식:

- 항목을 추가하려면 `{ title, description, youtubeUrl }` 객체를 배열에 추가합니다.
- 항목을 숨기려면 해당 객체를 삭제하거나 `youtubeUrl`을 빈 값으로 둡니다.
- YouTube 썸네일은 자동으로 커버 이미지처럼 표시됩니다.
- 직접 업로드한 포트폴리오 영상/사진은 `assets/`와 `script.js`의 기본 포트폴리오 데이터로 관리합니다.

중요한 한계:

- 서버가 없는 정적 사이트라서 방문자가 직접 업로드하거나, 관리자가 브라우저에서 수정한 내용을 모든 방문자에게 즉시 반영하는 기능은 없습니다.
- 그런 기능이 필요하면 Supabase, Firebase, Google Sheet, CMS 같은 외부 저장소와 인증이 필요합니다.
- 현재 목적에는 YouTube 링크를 데이터 파일로 관리하고, 사이트 배포 시 함께 반영하는 방식이 가장 단순합니다.

## 수정하기 쉬운 위치

- 연락처, 이메일, 인스타그램, 크몽 링크: `script.js` 상단 `SITE_CONFIG`
- YouTube 레퍼런스 영상: `portfolio-data.js`
- 신뢰 포인트, 진행 과정, 직접 업로드 포트폴리오, 추천곡, 후기, FAQ: `script.js` 상단 데이터 상수
- SEO 메타 태그와 Open Graph 정보: `index.html`의 `<head>`
- 색상, 여백, 반응형 스타일: `styles.css`의 `:root`와 미디어 쿼리

## 구현 메모

- React, Next.js, Vue, Tailwind, Bootstrap 없이 HTML/CSS/JavaScript만 사용했습니다.
- 모바일에서는 하단 고정 CTA를 제공하고, 데스크톱에서는 헤더 CTA를 중심으로 문의 이동을 유도합니다.
- 포트폴리오는 실제 첨부 사진과 노래 미리 듣기 영역으로 구성했습니다.
