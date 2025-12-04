# Panduan Kustomisasi Portfolio Website

Dokumen ini berisi panduan lengkap untuk mengubah konten, gaya (style), animasi, dan aset pada website portfolio ini.

## 1. Struktur Project
- **`src/components/`**: Berisi semua komponen React (Hero, About, Projects, dll).
- **`src/index.css`**: File CSS utama dan konfigurasi tema Tailwind.
- **`src/App.jsx`**: Komponen utama yang menyatukan semua bagian.
- **`src/assets/`**: (Opsional) Tempat menyimpan gambar atau aset statis.

---

## 2. Mengubah Konten (Teks & Data)

Hampir semua data (Project, Pengalaman, Skill) disimpan dalam bentuk **Array** di dalam file komponen masing-masing. Anda tidak perlu mengubah HTML secara langsung, cukup ubah datanya.

### a. Mengubah Data Project
Buka file: `src/components/Projects.jsx`
Cari variabel `projects`. Ubah atau tambah objek di dalamnya:
```javascript
const projects = [
  {
    id: 1,
    title: "Nama Project Baru",
    category: "Web App", // Kategori untuk filter
    description: "Deskripsi project anda...",
    tech: ["React", "Tailwind"], // Teknologi yang digunakan
    image: "bg-blue-900" // Ganti dengan class warna atau path gambar
  },
  // ...
];
```

### b. Mengubah Pengalaman Kerja
Buka file: `src/components/Experience.jsx`
Cari variabel `experiences`:
```javascript
const experiences = [
  {
    id: 1,
    role: "Jabatan Anda",
    company: "Nama Perusahaan",
    period: "2023 - Sekarang",
    description: "Deskripsi pekerjaan..."
  },
  // ...
];
```

### c. Mengubah Skill
Buka file: `src/components/Skills.jsx`
Cari variabel `categories`. Anda bisa mengubah nama kategori atau list skill di dalamnya.

### d. Mengubah Teks Hero (Judul Utama)
Buka file: `src/components/Hero.jsx`
Cari bagian `<h1>` dan ubah teks "akai" atau sub-judul di bawahnya.

---

## 3. Mengganti Aset (Gambar)

### Cara Menggunakan Gambar Sendiri
1.  Siapkan file gambar (misal: `profile.jpg`, `project1.png`).
2.  Simpan gambar di folder `public/` (buat folder `images` di dalamnya agar rapi, misal `public/images/`).
3.  Panggil gambar di komponen:

**Contoh di `About.jsx` (Foto Profil):**
```jsx
// Ganti div placeholder dengan img tag
<div className="relative aspect-square rounded-2xl overflow-hidden">
  <img 
    src="/images/profile.jpg" 
    alt="Profile" 
    className="w-full h-full object-cover" 
  />
</div>
```

**Contoh di `Projects.jsx` (Thumbnail Project):**
Ubah properti `image` di data `projects` menjadi path gambar:
```javascript
{
  // ...
  image: "/images/project1.png" 
}
```
*Catatan: Jika menggunakan path string untuk gambar, Anda perlu memodifikasi kode render di `Projects.jsx` untuk menggunakan tag `<img>` alih-alih `div` dengan class background.*

---

## 4. Mengubah Gaya (Style) & Warna

Website ini menggunakan **Tailwind CSS v4**.

### a. Mengganti Warna Aksen (Neon)
Buka file: `src/index.css`
Cari blok `@theme` dan ubah nilai hex color:
```css
@theme {
  --color-neon: #ccff00; /* Ganti dengan kode warna hex keinginan Anda */
  /* ... */
}
```
Semua elemen yang menggunakan class `text-neon`, `bg-neon`, atau `border-neon` akan otomatis berubah.

### b. Mengganti Font
1.  Import font baru di `src/index.css` (atau di `index.html` via Google Fonts).
2.  Update variabel font di `src/index.css`:
```css
@theme {
  --font-sans: 'Nama Font Baru', sans-serif;
  --font-display: 'Nama Font Heading', sans-serif;
}
```

---

## 5. Mengatur Animasi (GSAP)

Animasi diatur menggunakan **GSAP ScrollTrigger**.

### a. Mengubah Perilaku Scroll (Replay)
Jika Anda ingin animasi **hanya main sekali** (tidak mengulang saat scroll naik-turun), buka komponen yang diinginkan (misal `About.jsx`) dan ubah `toggleActions`:

```javascript
scrollTrigger: {
  // ...
  // play: mainkan saat masuk viewport
  // reverse: mainkan mundur saat keluar viewport
  // Ubah menjadi "play none none none" agar hanya main sekali
  toggleActions: "play reverse play reverse", 
}
```

### b. Mengubah Kecepatan Animasi
Ubah properti `duration` pada fungsi `gsap.from()` atau `gsap.to()`. Nilai dalam detik (misal `duration: 1` = 1 detik).

---

## 6. Menjalankan & Build

### Menjalankan di Komputer Lokal
```bash
npm run dev
```

### Build untuk Hosting (Vercel/Netlify)
```bash
npm run build
```
Folder `dist/` akan terbentuk dan siap untuk di-upload.
