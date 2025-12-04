# Cara Menambahkan Project Baru

Panduan lengkap untuk menambahkan project Anda sendiri ke dalam portfolio.

## 📂 Struktur File

```
MYPORTOFOLIO/
├── src/
│   ├── data/
│   │   └── projectsData.js  ← Data semua project disini
│   └── components/
│       ├── Projects.jsx      ← Tampilan list project
│       └── ProjectDetail.jsx ← Tampilan detail project
└── public/
    └── images/
        └── projects/          ← Simpan gambar project disini
```

## 🎯 Langkah-Langkah Menambahkan Project Baru

### 1. Siapkan Gambar Project

Simpan gambar-gambar project Anda di folder `public/images/projects/`. 

**Rekomendasi:**
- Format: PNG atau JPG
- Ukuran minimal: 1200x800px
- Nama file: gunakan lowercase dengan dash (contoh: `my-awesome-project.png`)

Contoh:
```
public/
└── images/
    └── projects/
        ├── my-project-main.png
        ├── my-project-feature-1.png
        └── my-project-feature-2.png
```

### 2. Edit File `src/data/projectsData.js`

Buka file `src/data/projectsData.js` dan tambahkan object project baru ke dalam array `projectsData`:

```javascript
export const projectsData = [
  // ... project yang sudah ada ...
  
  // Project baru Anda
  {
    id: 5, // Gunakan ID yang belum dipakai (increment dari ID terakhir)
    title: "Judul Project Anda",
    subtitle: "Subtitle/Tagline",
    category: "Web App", // Pilihan: "Web App", "Game Dev", "AI / ML", atau buat kategori baru
    description: "Deskripsi singkat project (1-2 kalimat) untuk ditampilkan di card.",
    detailedDescription: "Deskripsi lengkap project untuk halaman detail. Jelaskan secara detail tentang project, teknologi yang digunakan, dan tujuan pembuatannya.",
    year: "2025",
    awards: "Award yang pernah didapat (opsional)",
    
    // Path gambar
    image: "/images/projects/my-project-main.png", // Gambar utama
    images: [
      "/images/projects/my-project-main.png",
      "/images/projects/my-project-feature-1.png",
      "/images/projects/my-project-feature-2.png"
    ],
    
    // Teknologi yang digunakan
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    
    // Fitur-fitur utama
    features: [
      "Fitur pertama yang menarik",
      "Fitur kedua yang powerful",
      "Fitur ketiga yang unik",
      "Dan seterusnya..."
    ],
    
    // Tantangan yang dihadapi selama development
    challenges: [
      "Tantangan pertama dan bagaimana mengatasinya",
      "Tantangan kedua dan solusinya",
      "Tantangan ketiga dan pembelajarannya"
    ],
    
    // Hasil dan dampak project
    results: [
      "1000+ pengguna aktif",
      "Featured di Product Hunt",
      "Meningkatkan efisiensi 50%"
    ],
    
    // Links (opsional, bisa dikosongkan dengan "#")
    link: "#", // Link general
    github: "https://github.com/username/project-name",
    liveDemo: "https://project-demo.com"
  }
];
```

### 3. Menambahkan Kategori Baru (Opsional)

Jika Anda ingin menambahkan kategori baru:

1. Buka `src/components/Projects.jsx`
2. Cari baris dengan `const categories = ...`
3. Tambahkan kategori baru Anda:

```javascript
const categories = ["All", "Web App", "Game Dev", "AI / ML", "Mobile App"]; // Tambahkan "Mobile App"
```

### 4. Simpan dan Refresh Browser

Setelah menambahkan data project baru:
1. **Simpan** file `src/data/projectsData.js`
2. **Refresh** browser Anda
3. Project baru akan muncul otomatis!

## 📝 Template Project Baru

Copy-paste template ini untuk menambahkan project baru dengan cepat:

```javascript
{
  id: X, // Ganti dengan ID yang sesuai
  title: "Nama Project",
  subtitle: "Subtitle Project",
  category: "Web App",
  description: "Deskripsi singkat untuk card.",
  detailedDescription: "Deskripsi lengkap untuk halaman detail.",
  year: "2025",
  awards: "Awards",
  image: "/images/projects/nama-project.png",
  images: [
    "/images/projects/nama-project.png",
    "/images/projects/nama-project.png",
    "/images/projects/nama-project.png"
  ],
  technologies: ["Tech1", "Tech2", "Tech3"],
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ],
  challenges: [
    "Challenge 1",
    "Challenge 2"
  ],
  results: [
    "Result 1",
    "Result 2",
    "Result 3"
  ],
  link: "#",
  github: "https://github.com/username/repo",
  liveDemo: "https://demo.com"
}
```

## 🎨 Tips

### Menulis Deskripsi yang Baik

**Description (Singkat):**
- Maksimal 2 kalimat
- Fokus pada value proposition
- Jelaskan apa yang membuat project ini menarik

**DetailedDescription (Lengkap):**
- 3-5 kalimat
- Jelaskan konteks dan tujuan project
- Sebutkan teknologi utama yang digunakan
- Jelaskan target audience atau use case

### Memilih Gambar yang Tepat

1. **Gambar Utama (image):** Screenshot yang paling mewakili project
2. **Gallery (images):** 
   - Gambar 1: Overview/landing page
   - Gambar 2: Fitur utama
   - Gambar 3: Dashboard/detail feature

### Menulis Features yang Menarik

- Gunakan action words (contoh: "Real-time data synchronization" bukan "Data sync")
- Fokus pada benefit, bukan hanya technical details
- Maksimal 6-8 features untuk readability

### Challenges yang Bermakna

- Jangan hanya list masalah, tapi juga solusinya
- Tunjukkan learning process Anda
- Highlight technical skills yang digunakan untuk solve problems

## 🚀 Contoh Project Lengkap

```javascript
{
  id: 5,
  title: "TaskFlow Pro",
  subtitle: "Smart Productivity",
  category: "Web App",
  description: "A modern task management app with AI-powered prioritization and team collaboration features.",
  detailedDescription: "TaskFlow Pro adalah aplikasi manajemen tugas yang menggunakan AI untuk membantu prioritasi task berdasarkan deadline, importance, dan workload. Aplikasi ini dibangun dengan React dan Node.js, dilengkapi dengan real-time collaboration features menggunakan WebSocket.",
  year: "2024",
  awards: "Best Productivity App 2024",
  image: "/images/projects/taskflow-main.png",
  images: [
    "/images/projects/taskflow-main.png",
    "/images/projects/taskflow-dashboard.png",
    "/images/projects/taskflow-team.png"
  ],
  technologies: ["React", "Node.js", "OpenAI", "Socket.io", "PostgreSQL", "Tailwind CSS"],
  features: [
    "AI-powered task prioritization",
    "Real-time team collaboration",
    "Smart deadline reminders",
    "Analytics and productivity insights",
    "Mobile-responsive design",
    "Dark/Light mode support"
  ],
  challenges: [
    "Implementasi AI prioritization yang akurat memerlukan training dengan berbagai dataset task management",
    "Real-time sync across devices memerlukan optimization untuk mengurangi latency",
    "Design system yang konsisten antara mobile dan desktop view"
  ],
  results: [
    "5,000+ active users dalam 3 bulan",
    "Average productivity increase 35%",
    "4.8/5 rating di Product Hunt"
  ],
  link: "#",
  github: "https://github.com/yourusername/taskflow-pro",
  liveDemo: "https://taskflow-pro.com"
}
```

## ❓ FAQ

**Q: Berapa maksimal project yang bisa ditampilkan?**
A: Tidak ada limit, tapi untuk UX yang optimal disarankan 6-12 project.

**Q: Bagaimana cara menghapus project?**
A: Hapus object project dari array `projectsData` dan hapus juga gambarnya dari folder `public/images/projects/`.

**Q: Bisa menggunakan gambar dari URL eksternal?**
A: Bisa! Gunakan full URL pada field `image` dan `images`, contoh: `"https://example.com/image.png"`

**Q: Bagaimana cara mengubah urutan project?**
A: Ubah urutan object dalam array `projectsData`. Project yang paling atas akan muncul duluan.

---

**Selamat membuat portfolio! 🎉**

Jika ada pertanyaan atau butuh bantuan, jangan ragu untuk bertanya!
