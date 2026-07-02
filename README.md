# 오창현 축가 홈페이지

정적 HTML/CSS/JavaScript로 만든 축가 문의용 홈페이지입니다.

## 로컬 실행

```bash
python3 -m http.server 8080
```

접속: `http://localhost:8080`

## Google Sheet 관리

Google Sheet 탭을 3개 만듭니다.

```text
videos
A열: YouTube URL

songs
A열: 가수
B열: 곡명

reviews
A열: 이름
B열: 후기
```

각 탭을 CSV로 웹에 게시한 뒤 `portfolio-data.js`에 URL을 넣습니다.

```js
window.GOOGLE_SHEET_VIDEO_CSV_URL = "";
window.GOOGLE_SHEET_SONG_CSV_URL = "";
window.GOOGLE_SHEET_REVIEW_CSV_URL = "";
```
