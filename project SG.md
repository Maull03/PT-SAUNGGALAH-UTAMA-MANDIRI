# Project Documentation: PT. Saunggalah Utama Mandiri Landing Page

## 1. Project Overview
**Project Name:** PT. Saunggalah Utama Mandiri Website Rebuild
**Tech Stack:** React JS (Vite), Tailwind CSS (direkomendasikan untuk styling yang bersih dan bebas tabrakan class), Framer Motion (opsional, untuk animasi halus saat scrolling).
**Design Style:** Clean, Professional, Corporate, and Informative.
**Architecture Pattern:** Component-Based Architecture (Separation of Concerns).

## 2. Color Palette & Typography
Berdasarkan profil perusahaan (PDF), warna utama yang dominan digunakan adalah kombinasi Biru Dongker (Navy), Kuning Emas (Gold/Mustard), Abu-abu (Silver/Grey), dan Putih.

*   **Primary Blue (Navy):** `#29364F` (Digunakan untuk Header, teks utama, background section gelap/kontras).
*   **Primary Gold (Kuning/Emas):** `#F2B820` (Digunakan untuk aksen garis, tombol utama, ikon, highlight text).
*   **Silver/Grey:** `#9CA3AF` atau `#F3F4F6` (Digunakan untuk background section terang, border, elemen bayangan logo).
*   **White:** `#FFFFFF` (Background utama untuk menjaga kesan *clean*).
*   **Text Dark:** `#1F2937` (Untuk paragraf yang panjang agar nyaman dibaca).
*   **Typography:** Disarankan menggunakan kombinasi font *Sans-serif* yang modern dan terbaca jelas seperti **Inter**, **Roboto**, atau **Montserrat**.

## 3. Project Architecture & Folder Structure
Struktur folder ini dirancang secara modular. Memisahkan antara komponen UI murni (Dumb Components) dengan komponen bagian halaman (Smart/Section Components) serta memisahkan data statis agar *file component* tidak bengkak.

```text
src/
│
├── assets/                 # Menyimpan file statis
│   ├── images/             # (Contoh: image_05b8c0.png untuk logo, foto proyek)
│   └── icons/              # Ikon kustom
│
├── components/             # Komponen UI Reusable (Dumb Components)
│   ├── ui/                 # Button, Card, SectionTitle, Modal, dll
│   └── layout/             # Navbar, Footer
│
├── data/                   # Data statis yang diekstrak dari PDF (menghindari hardcode di UI)
│   ├── servicesData.js     # Data list layanan (Konstruksi, Property, Pajak, dll)
│   ├── portfolioData.js    # Data list proyek (KIK, Hotel Kampi, dll)
│   └── companyData.js      # Kontak, Legalitas, Visi Misi, Sejarah
│
├── sections/               # Komponen raksasa spesifik untuk Landing Page
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── VisionMission.jsx
│   ├── ServicesSection.jsx
│   ├── PortfolioSection.jsx
│   ├── TrustLegality.jsx   # Menampilkan Sertifikasi & Legalitas (SBU, ASPEKNAS)
│   └── ContactSection.jsx
│
├── styles/                 # Global styling (index.css / tailwind.css)
│   └── index.css
│
├── utils/                  # Helper functions
│
├── App.jsx                 # Entry point, tempat merender susunan sections
└── main.jsx                # React DOM render
```

## 4. Content Strategy (Mapping dari PDF ke Website)

### A. Hero / Beranda
*   **Visual:** Logo Pentagonal (Silver & Gold) di Header atau tengah.
*   **Headline:** "PT. SAUNGGALAH UTAMA MANDIRI"
*   **Slogan:** "Your Trusted Partner"
*   **CTA (Call to Action):** Tombol "Lihat Layanan Kami" & "Hubungi Kami".

### B. Tentang Kami (About Us)
*   **Deskripsi:** Penjelasan perusahaan yang menjunjung tinggi nilai adat, sportivitas, dan profesionalisme di tengah persaingan bisnis (berdasarkan hal. 2 PDF).
*   **Sejarah Singkat (Timeline UI):** 
    *   **2021:** Berdiri dengan Visi & Misi tulus.
    *   **2022 - Seterusnya:** Still Growth & Strong. Rekanan dan konsumen terus menjadikan pilihan utama.

### C. Visi & Misi
Ditampilkan dengan layout berdampingan atau *Cards* yang bersih.
*   **Visi:** Menjadi perusahaan di bidang *financial engineering*, konstruksi, properti, sarana prasarana, dan agro industri yang profesional dan terpercaya.
*   **Misi:** Menjadi mitra perusahaan yang handal dan memberikan pelayanan terbaik untuk membangun bisnis bersama.

### D. Usaha & Layanan (Services)
Sangat cocok menggunakan format *Grid Card 3 Kolom*. Terdapat 7 layanan utama:
1.  Pendanaan & Bagi Hasil Usaha
2.  Civil Construction & Manufacturing
3.  Property
4.  Pengadaan Barang & Suku Cadang
5.  Perlengkapan & Alat Keamanan
6.  Mechanical Electrical & Plumbing (MEP)
7.  Finance Engineering (Konsultasi Keuangan, Pajak, Akuntansi)

### E. Proyek / Portofolio
Menampilkan galeri atau *slider* proyek unggulan:
*   Kawasan Industri Kendal (KIK)
*   Hotel Kampi (Sunter)
*   Global Islamic Green School
*   Fasilitas Gardu Induk PLN 150kV Subang Baru, dll.

### F. Legalitas & Trust (Nilai Jual Ekstra)
Menampilkan kredibilitas perusahaan dengan *Badges* atau *List Icons*:
*   Legalitas Kemenkumham, NIB, & NPWP.
*   Memiliki Sertifikat Badan Usaha (SBU) Konstruksi dari LPJK.
*   Anggota ASPEKNAS & Astekindo.

### G. Kontak & Footer
*   **Alamat Pusat:** Jl. Cikananga - Tambakbaya, Blok Kliwon, Kab. Kuningan.
*   **Alamat Cabang:** Perum Grand Cikarang City, Kab. Bekasi.
*   **Kontak Personal:** Drajat, Rudi Achmad, Dodoy Widjaya (Bisa menggunakan ikon WhatsApp).
*   **Email:** saunggalah.utama@gmail.com
*   **Website:** www.saunggalah.co.id

## 5. Konfigurasi Tailwind (Opsional - tailwind.config.js)
Agar palet warna tidak bertabrakan dan konsisten, daftarkan warna di config Tailwind:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#29364F',
          gold: '#F2B820',
          silver: '#9CA3AF',
          light: '#F8FAFC'
        }
      }
    }
  }
}
```
