// Mengaktifkan sistem slide Reveal.js dengan ukuran proporsional
Reveal.initialize({
  width: 1200,         // Lebar standar layar presentasi modern
  height: 700,         // Tinggi standar agar tidak kepotong di laptop
  margin: 0.08,        // Jarak aman di tepi layar (8%)
  minScale: 0.2,       // Bisa mengecil otomatis di layar HP
  maxScale: 1.5,       // Batas maksimal perbesaran
  controls: true,      // Tombol panah navigasi
  progress: true,      // Garis indikator di bawah layar
  center: true,        // Konten tepat di tengah
  hash: true,          // Menyimpan nomor slide di URL
  transition: 'slide'  // Animasi perpindahan slide
});

// Fitur Interaktif Slide 7: Memutar Lagu
let isPlaying = false;

function toggleMusic() {
  const audio = document.getElementById('my-audio');
  const eq = document.getElementById('eq-bars');
  const btn = document.getElementById('play-btn');

  if (!isPlaying) {
    audio.play().then(() => {
      isPlaying = true;
      eq.classList.add('playing');
      btn.innerHTML = '<i class="fa-solid fa-pause"></i> Jeda Lagu';
    }).catch(() => {
      alert('Pastikan file "lagu.mp3" (What If I Call - Alex Crichton) sudah ditaruh di dalam folder proyekmu!');
    });
  } else {
    audio.pause();
    isPlaying = false;
    eq.classList.remove('playing');
    btn.innerHTML = '<i class="fa-solid fa-play"></i> Putar "What If I Call"';
  }

  // Otomatis berhenti animasi jika lagu selesai diputar
  audio.onended = function() {
    isPlaying = false;
    eq.classList.remove('playing');
    btn.innerHTML = '<i class="fa-solid fa-play"></i> Putar "What If I Call"';
  };
}

// Fitur Interaktif Slide 9: Tombol Like Instagram
let likes = 1240;
let isLiked = false;

function likePost() {
  const countEl = document.getElementById('like-count');
  const btnEl = document.getElementById('like-btn');
  const iconEl = document.getElementById('heart-icon');

  isLiked = !isLiked;
  if (isLiked) {
    likes++;
    btnEl.classList.add('liked');
    iconEl.className = 'fa-solid fa-heart';
  } else {
    likes--;
    btnEl.classList.remove('liked');
    iconEl.className = 'fa-regular fa-heart';
  }
  countEl.textContent = likes.toLocaleString();
}

// Fitur Interaktif Slide 10: Perbandingan Data Era 2000 vs 2026
function showEra(year) {
  const display = document.getElementById('era-card');
  if (year === '2000') {
    display.innerHTML = `
      <h4 style="color: var(--danger); margin-bottom: 8px;"><i class="fa-solid fa-hourglass-start"></i> Era 2000 (Dial-Up & Static)</h4>
      <p style="font-size: 0.85em; margin: 4px 0;">• Kecepatan Jaringan: <strong>56 Kbps</strong></p>
      <p style="font-size: 0.85em; margin: 4px 0;">• Format Utama: Teks HTML polos, Gambar GIF/JPG (< 50 KB)</p>
      <p style="font-size: 0.85em; margin: 4px 0;">• Waktu unduh 1 lagu MP3: <strong>± 15 hingga 20 Menit</strong></p>
    `;
  } else {
    display.innerHTML = `
      <h4 style="color: var(--success); margin-bottom: 8px;"><i class="fa-solid fa-rocket"></i> Era 2026 (Gigabit & 5G)</h4>
      <p style="font-size: 0.85em; margin: 4px 0;">• Kecepatan Jaringan: <strong>100+ Mbps s/d 1 Gbps</strong></p>
      <p style="font-size: 0.85em; margin: 4px 0;">• Format Utama: Video 4K/8K HDR, WebGL 3D, Lossless Audio</p>
      <p style="font-size: 0.85em; margin: 4px 0;">• Waktu unduh 1 lagu MP3: <strong>Kurang dari 1 Detik</strong></p>
    `;
  }
}

// Fitur Interaktif Slide 11: Kuis Evaluasi
function verifyQuiz(isCorrect) {
  const feedback = document.getElementById('quiz-feedback');
  if (isCorrect) {
    feedback.innerHTML = `<span style="color: var(--success);"><i class="fa-solid fa-check"></i> Jawaban Tepat! Peningkatan kapasitas bandwidth dan teknologi kompresi data menjadi motor utama evolusi media.</span>`;
  } else {
    feedback.innerHTML = `<span style="color: var(--danger);"><i class="fa-solid fa-xmark"></i> Kurang tepat! Coba pikirkan faktor infrastruktur dan kecepatan jaringan internet.</span>`;
  }
}