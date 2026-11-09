// Mengaktifkan sistem slide Reveal.js dengan ukuran proporsional
Reveal.initialize({
  width: 1500,         // Lebar standar layar presentasi modern
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

// Fitur Interaktif Slide 7: Memutar Lagu "What If I Call - Alex Crichton"
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