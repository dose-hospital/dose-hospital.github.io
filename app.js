// app.js
const CLICK_SRC = "./click.mp3";
const CLICK_VOLUME = 0.35;

document.addEventListener("click", (e) => {
  const link = e.target.closest("a[href]");
  const btn  = e.target.closest("button");

  if (!link && !btn) return;

  const target = link || btn;

  // 눌림 효과
  target.classList.add("clicked");
  setTimeout(() => target.classList.remove("clicked"), 140);

  // ✅ 새 오디오 인스턴스 생성 (중요!)
  const sound = new Audio(CLICK_SRC);
  sound.volume = CLICK_VOLUME;
  sound.play().catch(() => {});

  // 링크면: 소리 먼저 → 살짝 지연 후 이동
  if (link) {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || link.target === "_blank") return;

    e.preventDefault();
    setTimeout(() => {
      window.location.href = href;
    }, 120); // 소리 들릴 최소 시간
  }
});
