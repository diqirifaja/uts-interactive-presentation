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