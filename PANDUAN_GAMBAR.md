# Panduan Mengelola Gambar Project

## ✅ Masalah Terselesaikan

Path gambar telah diperbaiki dari `"images/projects/..."` menjadi `"/images/projects/..."` (dengan slash `/` di depan).

**Penting:** Path gambar di Vite/React harus **selalu dimulai dengan `/`** untuk merujuk ke folder `public/`.

---

## 📁 Struktur Folder Gambar

```
public/
└── images/
    └── projects/
        ├── sibi-main.jpg          ← Gambar utama (untuk card)
        ├── sibi-screenshot-1.jpg  ← Screenshot 1 (untuk detail)
        ├── sibi-screenshot-2.jpg  ← Screenshot 2 (untuk detail)
        └── sibi-screenshot-3.jpg  ← Screenshot 3 (untuk detail)
```

---

## 📐 Rekomendasi Ukuran Gambar

### Untuk Gambar Utama (Card Project)
- **Ukuran:** 1200 x 800 px
- **Aspect Ratio:** 3:2
- **Format:** JPG atau PNG
- **File Size:** < 200 KB (untuk performa optimal)

### Untuk Screenshot Detail Page
- **Ukuran:** 1920 x 1080 px (Full HD)
- **Aspect Ratio:** 16:9
- **Format:** JPG atau PNG  
- **File Size:** < 500 KB

---

## 🔧 Cara Resize Gambar

### Opsi 1: Menggunakan Online Tool (Paling Mudah)

**1. TinyPNG / TinyJPG** (https://tinypng.com/)
- Upload gambar
- Otomatis compress tanpa kehilangan kualitas
- Download hasil

**2. Image Resizer** (https://imageresizer.com/)
- Upload gambar
- Set ukuran yang diinginkan (misal: 1200x800)
- Download hasil

**3. Squoosh** (https://squoosh.app/)
- Upload gambar
- Adjust quality dan ukuran
- Download hasil

### Opsi 2: Menggunakan Software Desktop

**1. GIMP (Free)**
- Buka gambar di GIMP
- Image > Scale Image
- Set width: 1200px (height akan auto adjust)
- Export as JPG/PNG

**2. Adobe Photoshop**
- Buka gambar
- Image > Image Size
- Set width: 1200px
- Save for Web

**3. Paint.NET (Free, Windows)**
- Buka gambar
- Image > Resize
- Set ukuran yang diinginkan
- Save

### Opsi 3: Batch Resize (Untuk Banyak Gambar)

**Windows:**
- Gunakan **FastStone Photo Resizer** (free)
- Bisa resize banyak gambar sekaligus

**Mac:**
- Gunakan **Automator** (built-in)
- Buat workflow untuk resize

**Online:**
- **BIRME** (https://www.birme.net/)
- Upload multiple images
- Set target size
- Download all

---

## 💡 Tips Ukuran Gambar

### Untuk Mobile App Screenshots (seperti SIBI)

Jika screenshot dari Android:
1. **Original size** biasanya 1080 x 2400 px (portrait)
2. **Resize untuk web:** 600 x 1333 px (lebih kecil untuk performance)
3. **Crop jika perlu** untuk fokus ke konten penting

### Untuk Web App Screenshots

1. **Full page:** 1920 x 1080 px (landscape)
2. **Dashboard:** 1440 x 900 px
3. **Mobile view:** 375 x 812 px (iPhone X size)

---

## 🚀 Quick Reference: Format Path

```javascript
// ✅ BENAR - dengan slash di depan
image: "/images/projects/my-project.jpg"

// ❌ SALAH - tanpa slash
image: "images/projects/my-project.jpg"

// ✅ BENAR - untuk external URL
image: "https://example.com/image.jpg"
```

---

## 📦 Compression Tips

Untuk mengurangi file size tanpa mengurangi kualitas visual:

1. **Format JPG:** Untuk foto/screenshot dengan banyak warna
   - Quality: 80-85% (sweet spot antara size & quality)

2. **Format PNG:** Untuk gambar dengan teks/UI yang tajam
   - Use PNG-8 jika tidak butuh transparency
   - Use PNG-24 jika butuh transparency

3. **Format WebP:** Format modern (support browser terbaru)
   - 25-35% lebih kecil dari JPG
   - Quality yang sama

---

## 🎯 Checklist Sebelum Upload Gambar

- [ ] Gambar sudah di-resize ke ukuran yang tepat
- [ ] File size < 500 KB (idealnya < 200 KB)
- [ ] Nama file menggunakan lowercase dan dash (contoh: `my-project-1.jpg`)
- [ ] Path menggunakan `/images/projects/...`
- [ ] Gambar sudah disimpan di folder `public/images/projects/`
- [ ] Test di browser untuk memastikan gambar tampil

---

## 🔍 Troubleshooting

### Gambar tidak muncul?

1. **Cek path:** Harus dimulai dengan `/`
2. **Cek nama file:** Case-sensitive! `SIBI.jpg` ≠ `sibi.jpg`
3. **Cek lokasi file:** Harus di `public/images/projects/`
4. **Refresh browser:** Hard refresh dengan Ctrl+Shift+R (Windows) atau Cmd+Shift+R (Mac)
5. **Cek console:** Buka Developer Tools (F12) dan lihat error

### Gambar terlalu besar/lambat loading?

1. Compress gambar menggunakan TinyPNG
2. Resize ke ukuran yang lebih kecil
3. Convert ke format WebP

### Gambar blur/pecah?

1. Pastikan ukuran original lebih besar dari target
2. Jangan resize dari ukuran kecil ke besar
3. Gunakan quality 85% atau lebih tinggi saat compress

---

## 📚 Tools Recommendation Summary

| Purpose | Tool | Link | Price |
|---------|------|------|-------|
| Compress | TinyPNG | https://tinypng.com | Free |
| Simple Resize | ImageResizer | https://imageresizer.com | Free |
| Advanced Edit | Squoosh | https://squoosh.app | Free |
| Batch Resize | BIRME | https://www.birme.net | Free |
| Desktop Editor | GIMP | https://www.gimp.org | Free |

---

**Sekarang gambar Anda seharusnya sudah tampil! 🎉**

Refresh browser dengan **Ctrl+Shift+R** untuk melihat perubahan.
