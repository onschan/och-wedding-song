// Google Analytics 4 측정 ID입니다. "G-" 로 시작하는 값을 넣으면 방문과 문의
// 버튼 클릭 집계가 켜집니다. 비워두면 측정 스크립트를 아예 불러오지 않습니다.
window.GA_MEASUREMENT_ID = "";

// Google Sheet를 "웹에 게시"한 CSV URL을 넣으면 시트 내용을 불러옵니다.
// 비워두면 코드에 있는 기본 데이터를 사용합니다.
window.GOOGLE_SHEET_VIDEO_CSV_URL = "https://docs.google.com/spreadsheets/d/1F1mobGe9E0OCLrnz0MBO2_eYFL8ONYteo9oY_laQOn0/gviz/tq?tqx=out:csv&sheet=videos";
window.GOOGLE_SHEET_SONG_CSV_URL = "https://docs.google.com/spreadsheets/d/1F1mobGe9E0OCLrnz0MBO2_eYFL8ONYteo9oY_laQOn0/gviz/tq?tqx=out:csv&sheet=songs";
window.GOOGLE_SHEET_REVIEW_CSV_URL = "https://docs.google.com/spreadsheets/d/1F1mobGe9E0OCLrnz0MBO2_eYFL8ONYteo9oY_laQOn0/gviz/tq?tqx=out:csv&sheet=reviews";

// Google Sheet를 연결하기 전까지 사용할 기본 YouTube 링크입니다.
window.REFERENCE_VIDEOS = [
  "https://www.youtube.com/watch?v=bxSqYRMq_9g",
  "https://www.youtube.com/watch?v=dvF5I-faSH4",
  "https://www.youtube.com/watch?v=157RdAksOpo",
  "https://www.youtube.com/watch?v=rzfnO0hF67w",
];
