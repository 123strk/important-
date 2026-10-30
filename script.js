/* ============ KONFIGURASI (EDIT BAGIAN INI) ============ */
const PASSWORD = "kekal"; // huruf besar/kecil & tanda baca diabaikan
const PW_HINT = "Petunjuk: lagu yang bikin kamu inget aku";
const MY_NAME = "Lanika";

// Telegram (lihat cara dapat token & chat ID di catatan bawah)
const TG_BOT_TOKEN = "9091435439:AAGm3eISWbF3vm7jrsQV8xQFCKfZ3m0akxA";
const TG_CHAT_ID = "7787396735";

const BGM_POEM = "audio/Pamungkas - To The Bone (Official Music Video)(mp3j.cc).mp3"; // backsound halaman puisi
const BGM_ASK = "audio/Nadin Amizah - Kekal (Official Lyric Video)(mp3j.cc).mp3"; // backsound halaman nembak (beda lagu)

const POEMS = [
  {
    text: "Barangkali, semesta tidak sedang bercanda ketika mempertemukan kita. \nSebab, dari sekian banyak manusia, entah mengapa, hatiku mengenali sesuatu yang bahkan belum pernah dicarinya.",
    time: "23.26 · 29 okt",
  },
  {
    text: "Tidak ada yang istimewa dari hari-hariku, sampai namamu hadir dan hal-hal sederhana mulai memiliki alasan untuk membuatku bahagia.",
    time: "23.38 · 29 okt",
  },
  {
    text: "Aku tidak tahu ke mana perasaan ini akan bermuara, tetapi untuk pertama kalinya, ketidakpastian tidak terasa menakutkan. Sebab, ada kemungkinan bahwa esok masih tentang kamu.",
    time: "23.50 · 29 okt",
  },
  {
    text: "Bahkan sebelum kita menjadi apa-apa, aku telah menemukan bahagia dalam hal-hal yang belum tentu kauingat; percakapan yang enggan usai, tawa yang ingin kuulang, dan dirimu yang diam-diam ingin kukenali lebih jauh.",
    time: "00.00 · 30 okt",
  },
  {
    text: "Dari sekian banyak hal yang datang dan pergi, aku ingin kamu menjadi satu-satunya yang tidak perlu kutakuti kehilangan. Sebab, jika dunia memang sementara, biarlah perasaanku kepadamu menjadi pengecualian.",
    time: "19.03 · 30 okt",
  },
  {
    text: "Aku tidak pernah tahu bahwa seseorang bisa terasa seperti rumah, sampai akhirnya aku mengenalmu. Kini, ke mana pun kakiku melangkah, ada bagian dari diriku yang selalu ingin pulang kepadam",
    time: "19.05 · 30 okt",
  },
  {
    text: "Jika waktu mengizinkan, aku ingin mengenalmu dalam setiap musim, mencintaimu dalam segala keadaan, dan tetap menemukan alasan untuk memilihmu, berulang kali.",
    time: "19.07 · 30 okt",
  },
  {
    text: "Barangkali tidak ada yang benar-benar abadi di antara kehidupan yang begitu fana. Namun, jika aku diberi kesempatan untuk mengabadikan satu hal, aku ingin itu adalah segala tentangmu.",
    time: "19.10 · 30 okt",
  },
];

const SONGS = [
  {
    title: "you!",
    artist: "LANY",
    src: "audio/LANY - you! (official video)(mp3j.cc).mp3",
    def: "Kamu datang ketika hidupku tidak sedang baik-baik saja. Tanpa kusadari, kehadiranmu perlahan mengubah banyak hal. Kamu seperti sesuatu yang selama ini kucari tanpa pernah tahu bahwa sebenarnya aku membutuhkannya.",
  },
  {
    title: "dna",
    artist: "LANY",
    src: "audio/LANY - dna (official lyric video)(mp3j.cc).mp3",
    def: "Aku tidak peduli jika orang-orang menganggapku terlalu mudah jatuh cinta. Sebab, kali ini aku tidak sedang bermain-main dengan perasaan. Aku benar-benar ingin mengenalmu, mencintaimu, dan menunjukkan bahwa perasaanku kepadamu bukan sesuatu yang sementara.",
  },
  {
    title: "No",
    artist: "LANY",
    src: "audio/LANY - No (Official Lyric Video).mp3",
    def: "Aku tidak tahu apakah ada sesuatu yang tidak akan kulakukan untukmu. Rasanya, selama itu tentang kamu, aku akan selalu menemukan alasan untuk mengiyakan. Sebab, mencintaimu membuat kata tidak menjadi sesuatu yang sulit kuucapkan.",
  },
  {
    title: "Out Of My League",
    artist: "LANY",
    src: "audio/LANY - Out Of My League (Official Lyric Video)(mp3j.cc).mp3",
    def: "Terkadang aku masih tidak percaya seseorang sepertimu bisa memilih seseorang sepertiku. Kamu begitu istimewa dalam pandanganku, sampai aku sering merasa bahwa keberadaanmu dalam hidupku merupakan keberuntungan yang tidak pernah benar-benar bisa kujelaskan.",
  },
  {
    title: "nything 4 u",
    artist: "LANY",
    src: "audio/LANY - anything 4 u (Lyric Video).mp3",
    def: "Aku tahu banyak hal tentangmu, bahkan hal-hal kecil yang mungkin tidak kamu sadari. Mungkin selama ini kamu hanya menganggapku seseorang yang selalu ada, tanpa pernah tahu bahwa diam-diam aku ingin menjadi seseorang yang bisa mencintaimu lebih dari sekadar seorang teman.",
  },
  {
    title: "THANK YOU 4 LOVIN' ME",
    artist: "Paul Partohap",
    src: "audio/Paul Partohap - THANK YOU 4 LOVIN' ME (Lyric Video)(mp3j.cc).mp3",
    def: "Terima kasih karena tetap memilihku, bahkan ketika aku sendiri masih memiliki banyak kekurangan. Kamu membuatku ingin menjadi seseorang yang lebih baik, bukan karena aku takut kehilanganmu, melainkan karena aku ingin menjadi seseorang yang pantas untuk terus mendampingimu.",
  },
  {
    title: "SECOND IS FINE",
    artist: "Paul Partohap",
    src: "audio/LANY - Paul Partohap - SECOND IS FINE (Lyric Video).mp3",
    def: "Aku tidak selalu harus menjadi yang paling utama dalam segala hal. Jika memang belum bisa menjadi yang pertama bagimu, mungkin aku masih bisa menerima tempat yang tersisa, selama keberadaanku tetap berarti dalam hidupmu.",
  },
  {
    title: "Lover Stay",
    artist: "Pamungkas",
    src: "audio/Pamungkas - Lover Stay Official Music Video.mp3",
    def: "Aku ingin menjadi lebih dari sekadar seseorang yang kamu kenal. Aku ingin berada di dekatmu, mengenal segala tentangmu, dan berharap suatu hari nanti kamu menyadari bahwa ada seseorang yang selama ini ingin kamu pilih, bukan hanya kamu jadikan tempat singgah.",
  },
  {
    title: "Queen Of The Hearts",
    artist: "Pamungkas",
    src: "audio/Pamungkas - Queen Of The Hearts.mp3",
    def: "Aku masih sering tidak percaya bagaimana seseorang sepertimu bisa tiba-tiba hadir, mendekat, dan membuatku jatuh hati sedemikian rupa. Barangkali kamu tidak pernah berniat mengambil hatiku, tetapi nyatanya kamu berhasil melakukannya.",
  },
  {
    title: "Deeper",
    artist: "Pamungkas",
    src: "audio/Pamungkas - Deeper (Official Music Video).mp3",
    def: "Sebelum mengenalmu, aku tidak pernah benar-benar memahami bagaimana rasanya jatuh cinta sedalam ini. Namun, sejak kamu hadir, semuanya terasa berbeda. Aku ingin melihatmu bahagia, bahkan ingin tetap berada di sisimu ketika dunia tidak sedang berpihak kepadamu.",
  },
  {
    title: "One Only",
    artist: "Pamungkas",
    src: "audio/Pamungkas - One Only (Lyrics Video)(mp3j.cc).mp3",
    def: "Aku tidak meminta banyak hal darimu. Aku hanya ingin menjadi seseorang yang kamu tuju setelah perjalanan panjangmu. Sejauh apa pun kamu pergi, semoga suatu hari nanti kamu tetap ingin kembali kepadaku",
  },
];

const PROMISES = [
  "Aku ga janji kamu bakal bahagia terus. Tapi aku janji akan selalu berusaha ada waktu kamu sedih.",
  "Aku ga janji kita ga akan pernah berantem. Tapi aku janji ga akan pergi gitu aja saat kita ga sepakat.",
  "Aku ga janji jadi yang sempurna. Tapi aku janji jujur, belajar, dan terus memilih kamu.",
];
/* ======================================================= */

/* ---------- Helper ---------- */
const $ = (id) => document.getElementById(id);
const bgm = $("bgm");
const songAudio = $("songAudio");
let lastChoice = null;

/* ---------- Navigasi halaman + musik ---------- */
function go(id) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo(0, 0);

  // musik latar
  if (id === "p-poem") {
    playBGM(BGM_POEM);
  } else if (id === "p-ask") {
    playBGM(BGM_ASK);
  } else {
    bgm.pause();
  }

  // hentikan lagu playlist kalau pindah dari halaman playlist
  if (id !== "p-playlist") {
    songAudio.pause();
    $("playBtn").textContent = "▶";
  }
}

function playBGM(src) {
  if (!bgm.src.endsWith(src)) {
    bgm.src = src;
  }
  bgm.volume = 0.5;
  bgm.play().catch(() => {});
}

/* ---------- Password ---------- */
$("hintText").textContent = PW_HINT;

const norm = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();

function checkPw() {
  if (norm($("pw").value) === norm(PASSWORD)) {
    go("p-poem");
  } else {
    $("pwErr").textContent = "Belum tepat, coba lagi ya 🥺";
    $("pw").classList.remove("shake");
    void $("pw").offsetWidth; // restart animasi
    $("pw").classList.add("shake");
  }
}

$("pw").addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkPw();
});

/* ---------- Puisi bertumpuk ---------- */
let poemIdx = 0;
const stack = $("stack");

POEMS.forEach((p, i) => {
  const d = document.createElement("div");
  d.className = "tweet";
  d.style.zIndex = POEMS.length - i;
  d.style.transform = `rotate(${(i % 2 ? 1 : -1) * Math.min(i, 3) * 1.5}deg)`;
  d.innerHTML = `
    <div class="head">
      <div class="avatar">♡</div>
      <div><b class="name">${MY_NAME}</b><br>@nikaa</div>
    </div>
    <div class="body">${p.text}</div>
    <div class="foot">${p.time}</div>
  `;
  d.onclick = () => nextPoem(d);
  stack.appendChild(d);
});

updateCounter();

function nextPoem(el) {
  if (el.classList.contains("gone")) return;
  el.classList.add("gone");
  poemIdx++;
  updateCounter();
  if (poemIdx >= POEMS.length) {
    $("toPlaylist").style.display = "inline-block";
  }
}

function updateCounter() {
  $("counter").textContent =
    poemIdx < POEMS.length
      ? `${poemIdx + 1} / ${POEMS.length}`
      : "Itu semuanya 🤍";
}

/* ---------- Playlist ---------- */
let cur = -1;
const list = $("songList");

SONGS.forEach((s, i) => {
  const d = document.createElement("div");
  d.className = "song";
  d.id = "song" + i;
  d.innerHTML = `
    <div><b>${s.title}</b><br><small>${s.artist}</small></div>
    <span>▶</span>
  `;
  d.onclick = () => loadSong(i, true);
  list.appendChild(d);
});

function loadSong(i, autoplay) {
  cur = i;
  songAudio.src = SONGS[i].src;

  document
    .querySelectorAll(".song")
    .forEach((x) => x.classList.remove("playing"));
  $("song" + i).classList.add("playing");

  $("defBox").innerHTML = `<b>Definisi: ${SONGS[i].title}</b>${SONGS[i].def}`;

  if (autoplay) {
    songAudio.play();
    $("playBtn").textContent = "⏸";
  }
}

function togglePlay() {
  if (cur < 0) {
    loadSong(0, true);
    return;
  }
  if (songAudio.paused) {
    songAudio.play();
    $("playBtn").textContent = "⏸";
  } else {
    songAudio.pause();
    $("playBtn").textContent = "▶";
  }
}

function nextSong() {
  loadSong((cur + 1) % SONGS.length, true);
}

function prevSong() {
  loadSong((cur - 1 + SONGS.length) % SONGS.length, true);
}

songAudio.addEventListener("ended", nextSong);

songAudio.addEventListener("timeupdate", () => {
  if (songAudio.duration) {
    $("seek").value = (songAudio.currentTime / songAudio.duration) * 100;
  }
});

$("seek").addEventListener("input", (e) => {
  if (songAudio.duration) {
    songAudio.currentTime = (e.target.value / 100) * songAudio.duration;
  }
});

/* ---------- Kotak kecil (3 isi) ---------- */
const slides = document.querySelectorAll("#boxPanel .slide");
slides.forEach((s, i) => {
  s.textContent = PROMISES[i];
});
let sIdx = 0;

function toggleBox() {
  $("boxPanel").classList.toggle("open");
}

function slide(d) {
  slides[sIdx].classList.remove("show");
  sIdx = (sIdx + d + slides.length) % slides.length;
  slides[sIdx].classList.add("show");
  $("slideNo").textContent = `${sIdx + 1} / ${slides.length}`;
}

/* ---------- Jawaban ---------- */
function answer(choice) {
  lastChoice = choice;
  const pct = $("pct").value;
  let msg = "";

  if (choice === "yes") {
    msg =
      "Terima kasih sudah memilih aku 🥹💗 Aku janji akan jaga kepercayaanmu.";
    confetti();
  } else if (choice === "no") {
    msg =
      "Terima kasih sudah jujur. Aku hargai banget, dan semoga kita tetap baik-baik saja 🤍";
  } else {
    msg = `Ga apa-apa, ambil waktumu. Aku tunggu dengan sabar 🤍 (Kamu suka aku sekitar ${pct}% sejauh ini, makasih sudah jujur!)`;
  }

  // reset tombol kirim supaya bisa kirim ulang kalau dia ganti jawaban
  const btn = $("sendBtn");
  btn.disabled = false;
  btn.textContent = "Kirim jawaban 📩";

  $("resultText").textContent = msg;
  $("result").classList.add("show");
  $("result").scrollIntoView({ behavior: "smooth" });
}


/* ---------- Kirim jawaban ke Telegram ---------- */
async function sendTele() {
  const btn = $("sendBtn");
  const pct = $("pct").value;

  const label = {
    yes: "YES 💗",
    no: "NO",
    think: "Masih perlu berpikir 🤔",
  }[lastChoice];

  const text = `💌 Jawaban dari dia:\n\nPilihan: ${label}\nPersentase suka: ${pct}%`;

  btn.disabled = true;
  btn.textContent = "Mengirim...";

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TG_CHAT_ID,
          text: text,
        }),
      },
    );

    const data = await res.json();

    if (!res.ok || !data.ok) {
      throw new Error(data.description || "Gagal mengirim");
    }

    btn.textContent = "Terkirim ✅";
  } catch (err) {
    console.error("Telegram error:", err);
    alert("Gagal mengirim pesan: " + err.message);
    btn.disabled = false;
    btn.textContent = "Gagal, coba lagi 🥺";
  }

}


/* ---------- Efek hati ---------- */
function confetti() {
  const box = $("hearts");
  for (let i = 0; i < 30; i++) {
    const h = document.createElement("div");
    h.className = "heart";
    h.textContent = ["💗", "💖", "💕", "🌸"][Math.floor(Math.random() * 4)];
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDelay = Math.random() * 1.5 + "s";
    box.appendChild(h);
    setTimeout(() => h.remove(), 6000);
  }
}
