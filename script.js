"use strict";

// ==============================
// Site data and editable settings
// ==============================
const SITE_CONFIG = {
  artistName: "오창현",
  instagramLabel: "@_din.oh",
  instagramUrl: "https://www.instagram.com/_din.oh?igsh=NHdjZXNqMWU4Nm5i",
  email: "och0615@naver.com",
  kakaoTalk: "och0615",
  phone: "010-0000-0000", // TODO: 실제 연락처로 교체하세요.
};

const TRUST_POINTS = [
  {
    title: "진심 어린 마음",
    body: "신랑 신부님께 직접 전하는 마음이 가장 중요하다고 생각합니다.",
  },
  {
    title: "안정적인 축가",
    body: "최고의 컨디션으로 무대를 선보이기 위해 꾸준히 목 관리와 연습에 매진합니다.",
  },
  {
    title: "꼼꼼한 음향 체크",
    body: "축가 전 음향과 무대 상태를 확인하고 원하는 분위기에 맞춰 준비합니다.",
  },
  {
    title: "넓은 지역 상담",
    body: "서울, 경기, 충청, 강원 등 일정 확인 후 합리적인 가격으로 안내드립니다.",
  },
];

const PROCESS_STEPS = [
  {
    title: "문의 접수",
    body: "예식 날짜, 장소, 원하는 분위기와 희망곡을 편하게 남겨주세요.",
  },
  {
    title: "상담 및 선곡",
    body: "두 분의 사랑 이야기에 어울리는 곡과 축가 분위기를 함께 상담합니다.",
  },
  {
    title: "예식 전 확인",
    body: "예식 흐름과 요청사항을 다시 확인하고, 필요한 준비를 꼼꼼히 챙깁니다.",
  },
  {
    title: "현장 리허설",
    body: "축가 전 음향, 마이크, 동선을 확인해 풍성하고 아름다운 분위기를 준비합니다.",
  },
  {
    title: "본식 축가 진행",
    body: "가창력을 뽐내기보다 축하의 마음을 담아 예식의 흐름과 조화를 이루겠습니다.",
  },
];

const EVENT_PHOTOS = [
  "assets/portfolio-4.webp",
  "assets/portfolio-5.webp",
  "assets/portfolio-6.webp",
  "assets/portfolio-7.webp",
  "assets/portfolio-8.webp",
  "assets/portfolio-9.webp",
  "assets/portfolio-10.webp",
  "assets/portfolio-11.webp",
  "assets/portfolio-13.webp",
  "assets/portfolio-1.webp",
  "assets/portfolio-3.webp",
  "assets/portfolio-12.webp",
];

const INITIAL_GALLERY_COUNT = 4;
const GALLERY_INCREMENT = 4;
const INITIAL_VIDEO_COUNT = 2;
const VIDEO_INCREMENT = 2;

const SONGS = [
  { artist: "성시경", title: "너의 모든 순간" },
  { artist: "로이킴", title: "내게 사랑이 뭐냐고 물어본다면" },
  { artist: "로이킴", title: "달리 표현할 수 없어요" },
  { artist: "로이킴", title: "봄이와도" },
  { artist: "김동률", title: "감사" },
  { artist: "오반", title: "flower" },
  { artist: "이무진", title: "청혼하지 않을 이유를 못 찾았어" },
  { artist: "그냥", title: "우리 사랑은 필름 같았으면 해요" },
  { artist: "정승환", title: "마치 오늘처럼" },
];

const REVIEWS = [
  {
    name: "박**",
    quote: "정말 만족합니다. 친절하시고 진심 다해 축가 불러주셔서 감동이었어요. 노래는 말할 것도 없이 대만족이었어요.",
  },
  {
    name: "채**",
    quote: "덕분에 결혼식 잘 마무리했습니다. 노래를 너무 잘 부르셔서 하객분들도 다들 좋아하셨습니다. 다시 한번 진심으로 감사합니다.",
  },
  {
    name: "허**",
    quote: "예식 전 리허설 때 신부대기실에서 노래 듣고 기대했는데 역시나 본식 때 너무 잘해주셨어요. 다들 축가 누구냐고 물어봤어요. 목소리만 들으면 진짜 로이킴 온 줄 알았다니까요. 덕분에 식 너무 잘 끝났습니다.",
  },
  {
    name: "이**",
    quote: "카톡으로 연락을 수시로 너무 잘해주세요. 음색이 너무 좋아서 또 듣고 싶을 정도예요. 노래 너무 잘 불러주셔서 어디서 구했는지 직원들이 물어보더라구요. 믿고 맡겨보세요.",
  },
  {
    name: "김**",
    quote: "목소리가 너무 따뜻하고 진심으로 축복을 바라는 부드러운 음색이 와닿았어요. 전체적인 식장의 분위기와 신랑신부가 원하는 무드를 노래와 멘트로 잘 맞춰주는 점이 센스 있다고 생각했습니다.",
  },
  {
    name: "권**",
    quote: "축가를 담당해주기로 한 친구가 갑자기 사정이 생겨 못하게 되면서 걱정이 많았는데, 빠른 상담을 통해 축가 진행하게 됐어요. 진짜 최고의 선택이었고 덕분에 식이 더 완벽했습니다.",
  },
  {
    name: "김**",
    quote: "괜찮은 노래 리스트 알려주셔서 그중에 하나 골라 요청드렸고, 진심 너무 잘 불러주셔서 감사했어요. 추천합니다.",
  },
];

const FAQS = [
  {
    question: "진행 조건은 어떻게 안내되나요?",
    answer: "예식 지역, 일정, 준비 방식에 따라 달라질 수 있어 상담문의를 부탁드립니다. 날짜와 장소를 남겨주시면 합리적인 가격으로 진행 가능한 조건을 안내드립니다.",
  },
  {
    question: "원하는 곡으로 진행 가능한가요?",
    answer: "가능합니다. 두 분의 사랑 이야기에 어울리는 곡인지, 예식 분위기와 잘 어울리는지 함께 상담해드립니다.",
  },
  {
    question: "추천곡 상담도 가능한가요?",
    answer: "가능합니다. 원하는 분위기와 전달하고 싶은 마음을 기준으로 두 분께 어울리는 축가를 추천드립니다.",
  },
  {
    question: "예식 당일 현장 확인도 진행하나요?",
    answer: "네. 축가 전 꼼꼼한 음향 체크와 마이크, 동선 확인을 통해 예식 흐름과 조화를 이루도록 준비합니다.",
  },
  {
    question: "리허설도 진행하나요?",
    answer: "현장 상황에 맞춰 가능한 범위에서 확인합니다. 신랑신부님께서 원하는 분위기를 자연스럽게 연출하는 데 집중합니다.",
  },
  {
    question: "갑작스러운 펑크 상황에도 섭외 가능한가요?",
    answer: "일정이 가능하다면 진행 가능합니다. 소중한 결혼식이 더욱 빛날 수 있도록 가능한 범위에서 편히 상담해드립니다.",
  },
];

// ==============================
// Rendering helpers
// ==============================
const $ = (selector) => document.querySelector(selector);

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getYouTubeId(url) {
  if (!url) return "";
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) return parsed.pathname.replace("/", "");
    if (parsed.hostname.includes("youtube.com")) {
      if (parsed.searchParams.get("v")) return parsed.searchParams.get("v");
      const shortsMatch = parsed.pathname.match(/\/shorts\/([^/]+)/);
      if (shortsMatch) return shortsMatch[1];
    }
  } catch (error) {
    return "";
  }
  return "";
}

function getYouTubeEmbedUrl(url) {
  const youtubeId = getYouTubeId(url);
  if (!youtubeId) return "";
  return `https://www.youtube-nocookie.com/embed/${youtubeId}`;
}

function extractYouTubeUrls(value) {
  const matches = String(value || "").match(/https?:\/\/[^\s"',<>]+/g) || [];
  const seen = new Set();
  return matches.filter((url) => {
    if (!getYouTubeId(url) || seen.has(url)) return false;
    seen.add(url);
    return true;
  });
}

function parseCsvRows(csv) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let index = 0; index < csv.length; index += 1) {
    const char = csv[index];
    const next = csv[index + 1];

    if (char === '"' && quoted && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(cell.trim());
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell.trim());
      if (row.some(Boolean)) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }

  row.push(cell.trim());
  if (row.some(Boolean)) rows.push(row);
  return rows;
}

async function fetchCsvRows(url) {
  const fetchUrl = new URL(url);
  if (fetchUrl.protocol === "http:" || fetchUrl.protocol === "https:") {
    fetchUrl.searchParams.set("_", String(Date.now()));
  }
  const response = await fetch(fetchUrl.toString(), { cache: "no-store" });
  if (!response.ok) throw new Error(`Google Sheet 응답 오류: ${response.status}`);
  return parseCsvRows(await response.text());
}

function removeHeaderRow(rows, headers) {
  if (!rows.length) return rows;
  const firstRow = rows[0].map((cell) => cell.toLowerCase().replace(/\s/g, ""));
  const hasHeader = headers.some((header) => firstRow.includes(header));
  return hasHeader ? rows.slice(1) : rows;
}

function createReferenceVideo(url, index) {
  return {
    title: `축가 라이브 ${String(index + 1).padStart(2, "0")}`,
    song: "실제 라이브",
    body: "",
    videoUrl: url,
    embedUrl: getYouTubeEmbedUrl(url),
  };
}

function resolvePortfolioImage(item) {
  if (item.image) return item.image;
  const youtubeId = getYouTubeId(item.videoUrl || item.youtubeUrl);
  if (youtubeId) return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  return "";
}

function getFallbackReferenceVideos() {
  if (!Array.isArray(window.REFERENCE_VIDEOS)) return [];
  return window.REFERENCE_VIDEOS
    .map((item, index) => {
      const videoUrl = typeof item === "string" ? item : item?.youtubeUrl;
      return createReferenceVideo(String(videoUrl || "").trim(), index);
    })
    .filter((item) => item.title && item.videoUrl && item.embedUrl);
}

async function getReferenceVideos() {
  const sheetUrl = String(
    window.GOOGLE_SHEET_VIDEO_CSV_URL || window.GOOGLE_SHEET_CSV_URL || "",
  ).trim();
  if (!sheetUrl) return getFallbackReferenceVideos();

  try {
    const rows = await fetchCsvRows(sheetUrl);
    const urls = extractYouTubeUrls(rows.flat().join("\n"));
    if (!urls.length) return getFallbackReferenceVideos();
    return urls.map(createReferenceVideo).filter((item) => item.embedUrl);
  } catch (error) {
    console.warn("Google Sheet 영상 목록을 불러오지 못했습니다.", error);
    return getFallbackReferenceVideos();
  }
}

async function getSongs() {
  const sheetUrl = String(window.GOOGLE_SHEET_SONG_CSV_URL || "").trim();
  if (!sheetUrl) return SONGS;

  try {
    const rows = removeHeaderRow(await fetchCsvRows(sheetUrl), [
      "artist",
      "title",
      "가수",
      "곡명",
      "노래",
    ]);
    const songs = rows
      .map(([artist, title]) => ({
        artist: String(artist || "").trim(),
        title: String(title || "").trim(),
      }))
      .filter((song) => song.artist && song.title);
    return songs.length ? songs : SONGS;
  } catch (error) {
    console.warn("Google Sheet 추천 축가 목록을 불러오지 못했습니다.", error);
    return SONGS;
  }
}

async function getReviews() {
  const sheetUrl = String(window.GOOGLE_SHEET_REVIEW_CSV_URL || "").trim();
  if (!sheetUrl) return REVIEWS;

  try {
    const rows = removeHeaderRow(await fetchCsvRows(sheetUrl), [
      "name",
      "quote",
      "이름",
      "후기",
      "리뷰",
    ]);
    const reviews = rows
      .map(([name, quote]) => ({
        name: String(name || "").trim(),
        quote: String(quote || "").trim(),
      }))
      .filter((review) => review.name && review.quote);
    return reviews.length ? reviews : REVIEWS;
  } catch (error) {
    console.warn("Google Sheet 후기 목록을 불러오지 못했습니다.", error);
    return REVIEWS;
  }
}

function renderList(selector, items, template) {
  const root = $(selector);
  if (!root) return;
  root.innerHTML = items.map(template).join("");
}

async function renderContent() {
  const [referenceVideos, songs, reviews] = await Promise.all([
    getReferenceVideos(),
    getSongs(),
    getReviews(),
  ]);

  renderList(
    "#trustGrid",
    TRUST_POINTS,
    (item) => `
      <article class="trust-card fade-target">
        <strong>${item.title}</strong>
        <p>${item.body}</p>
      </article>
    `,
  );

  renderList(
    "#processList",
    PROCESS_STEPS,
    (item, index) => `
      <li class="process-item fade-target">
        <span class="process-step">${String(index + 1).padStart(2, "0")}</span>
        <strong>${item.title}</strong>
        <p>${item.body}</p>
      </li>
    `,
  );

  renderList(
    "#eventMediaGrid",
    EVENT_PHOTOS,
    (image, index) => `
      <figure class="photo-card fade-target ${index >= INITIAL_GALLERY_COUNT ? "is-collapsed" : ""}">
        <img src="${escapeHtml(image)}" alt="" loading="${index < 4 ? "eager" : "lazy"}" />
      </figure>
    `,
  );

  renderList(
    "#referenceVideoGrid",
    referenceVideos,
    (item, index) => `
      <article class="youtube-card fade-target ${index >= INITIAL_VIDEO_COUNT ? "is-collapsed" : ""}">
        <div class="youtube-frame">
          <iframe
            src="${escapeHtml(item.embedUrl)}"
            title="${escapeHtml(item.title)}"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </article>
    `,
  );

  renderList(
    "#songList",
    songs,
    (song) => `
      <li class="song-item fade-target">
        <span class="song-artist">${escapeHtml(song.artist)}</span>
        <span class="song-main">
          <strong>${escapeHtml(song.title)}</strong>
        </span>
      </li>
    `,
  );

  renderList(
    "#reviewGrid",
    reviews,
    (item) => `
      <article class="review-card fade-target">
        <div class="review-card-head">
          <strong>${escapeHtml(item.name)}</strong>
          <span class="review-rating" aria-label="별점 5점">★ 5.0</span>
        </div>
        <p>“${escapeHtml(item.quote)}”</p>
      </article>
    `,
  );

  renderList(
    "#faqList",
    FAQS,
    (item) => `
      <details class="faq-item fade-target">
        <summary>${item.question}</summary>
        <p>${item.answer}</p>
      </details>
    `,
  );
}

// ==============================
// Form validation and mailto flow
// ==============================
function getFormValues(form) {
  return Object.fromEntries(new FormData(form).entries());
}

function buildMailtoUrl(values) {
  const inquiryType = values.inquiryType || "축가 문의";
  const name = values.name || "상담 문의";
  const phone = values.phone || "";
  const message = values.message || "";
  const subject = `[축가 문의] ${name} / ${inquiryType}`;
  const body = [
    "축가 상담 문의드립니다.",
    "",
    `문의 유형: ${inquiryType}`,
    `이름: ${name}`,
    `연락처: ${phone}`,
    "",
    "문의 내용:",
    message,
  ].join("\n");

  return `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function setMessage(message, type = "success") {
  const messageNode = $("#formMessage");
  if (!messageNode) return;
  messageNode.textContent = message;
  messageNode.classList.toggle("error", type === "error");
}

function setMailFallbackMessage() {
  const messageNode = $("#formMessage");
  if (!messageNode) return;
  messageNode.textContent = "";
  messageNode.classList.remove("error");
  messageNode.append("일부 앱에서는 메일 앱이 열리지 않을 수 있습니다.");
  messageNode.append(document.createElement("br"));
  messageNode.append("열리지 않으면 ");

  const emailLink = document.createElement("a");
  emailLink.href = `mailto:${SITE_CONFIG.email}`;
  emailLink.textContent = SITE_CONFIG.email;
  messageNode.append(emailLink, ` 또는 카카오톡 ${SITE_CONFIG.kakaoTalk}으로 문의 주세요.`);
}

function bindForm() {
  const form = $("#inquiryForm");
  if (!form) return;

  const mailLink = $("#mailSubmit");
  if (!mailLink) return;

  const updateMailLink = () => {
    mailLink.href = buildMailtoUrl(getFormValues(form));
  };

  form.addEventListener("input", updateMailLink);
  form.addEventListener("change", updateMailLink);
  updateMailLink();

  mailLink.addEventListener("click", () => {
    updateMailLink();
    setMessage("메일 앱을 여는 중입니다.");

    window.setTimeout(() => {
      setMailFallbackMessage();
    }, 900);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    mailLink.click();
  });
}

// ==============================
// Interactions
// ==============================
function bindProgressiveToggle(containerSelector, buttonSelector, initialCount, incrementCount) {
  const button = $(buttonSelector);
  const container = $(containerSelector);
  if (!button || !container) return;

  let visibleCount = initialCount;
  const items = Array.from(container.children);

  const updateItems = () => {
    items.forEach((item, index) => {
      item.classList.toggle("is-collapsed", index >= visibleCount);
    });

    if (items.length <= initialCount) {
      button.hidden = true;
      return;
    }

    const isFullyExpanded = visibleCount >= items.length;
    button.hidden = false;
    button.textContent = isFullyExpanded ? "접기" : "더 보기";
    button.setAttribute("aria-expanded", String(isFullyExpanded));
  };

  updateItems();

  button.addEventListener("click", () => {
    if (visibleCount >= items.length) {
      visibleCount = initialCount;
    } else {
      visibleCount = Math.min(visibleCount + incrementCount, items.length);
    }

    updateItems();
  });
}

function bindGalleryToggle() {
  bindProgressiveToggle("#eventMediaGrid", "#galleryToggle", INITIAL_GALLERY_COUNT, GALLERY_INCREMENT);
  bindProgressiveToggle("#referenceVideoGrid", "#youtubeToggle", INITIAL_VIDEO_COUNT, VIDEO_INCREMENT);
}

function bindReviewCarousel() {
  const track = $("#reviewGrid");
  const prev = $("#reviewPrev");
  const next = $("#reviewNext");
  if (!track || !prev || !next) return;

  const getStep = () => {
    const card = track.querySelector(".review-card");
    if (!card) return track.clientWidth;
    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap || "0");
    return card.getBoundingClientRect().width + gap;
  };

  const updateButtons = () => {
    const maxScroll = track.scrollWidth - track.clientWidth - 2;
    prev.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= maxScroll;
  };

  prev.addEventListener("click", () => {
    track.scrollBy({ left: -getStep(), behavior: "smooth" });
  });

  next.addEventListener("click", () => {
    track.scrollBy({ left: getStep(), behavior: "smooth" });
  });

  track.addEventListener("scroll", updateButtons, { passive: true });
  window.addEventListener("resize", updateButtons);
  updateButtons();
}

function setupFadeIn() {
  const targets = document.querySelectorAll(".fade-target");
  if (!("IntersectionObserver" in window)) {
    targets.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  targets.forEach((node) => observer.observe(node));
}

function setupParallax() {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const targets = Array.from(document.querySelectorAll("[data-parallax]"));
  if (mediaQuery.matches || !targets.length) return;

  let ticking = false;

  const update = () => {
    const viewportCenter = window.innerHeight / 2;

    targets.forEach((target) => {
      const speed = Number(target.dataset.parallax || 0.04);
      const rect = target.getBoundingClientRect();
      const distance = rect.top + rect.height / 2 - viewportCenter;
      const y = Math.max(-22, Math.min(22, distance * speed * -1));
      target.style.setProperty("--parallax-y", `${y.toFixed(2)}px`);
    });

    ticking = false;
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
}

function setupStickyHeader() {
  const header = $(".site-header");
  if (!header) return;

  const update = () => {
    header.classList.toggle("is-fixed", window.scrollY > 80);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

async function init() {
  await renderContent();
  bindForm();
  bindGalleryToggle();
  bindReviewCarousel();
  setupStickyHeader();
  setupFadeIn();
  setupParallax();
  $("#year").textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", init);
