# 📚 Library System with Geolocation (Remedial UCP 1)

> **Pengembangan Aplikasi Web**
>
> Backend sistem manajemen perpustakaan sederhana dengan fitur unggulan **Peminjaman Berbasis Lokasi (Geolocation Tracking)**.

![NodeJS](https://img.shields.io/badge/Node.js-18.x-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-4.x-000000?style=flat-square&logo=express&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-6.x-52B0E7?style=flat-square&logo=sequelize&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.x-4479A1?style=flat-square&logo=mysql&logoColor=white)

---

## 📋 Daftar Isi

- [Deskripsi Proyek](#-deskripsi-proyek)
- [Fitur Utama](#-fitur-utama)
- [Teknologi & Library](#-teknologi--library)
- [Struktur Folder](#-struktur-folder)
- [Instalasi & Konfigurasi](#-instalasi--konfigurasi)
- [Dokumentasi API](#-dokumentasi-api-postman)
- [Screenshots Aplikasi](#-screenshots-aplikasi)
- [Kontributor](#-kontributor)

---

## 🎯 Deskripsi Proyek

**Library System with Geolocation** adalah aplikasi backend untuk memvalidasi posisi fisik pengguna saat melakukan transaksi peminjaman buku. Sistem mencatat koordinat Latitude dan Longitude pengguna secara otomatis menggunakan Geolocation API browser dan menyimpannya ke database.

Aplikasi ini memiliki dua mode akses:
1.  **User Mode:** Untuk meminjam buku (Wajib menyalakan GPS).
2.  **Admin Mode:** Untuk mengelola buku (CRUD) dan memantau lokasi peminjam via Google Maps.

---

## ✨ Fitur Utama

- **🔐 Role-Based Access Control:** Endpoint API dibedakan untuk Admin dan User.
- **📍 Geolocation Tracking:** Pencatatan Latitude/Longitude otomatis saat transaksi.
- **🗺️ Google Maps Integration:** Link langsung ke Google Maps untuk melihat lokasi peminjam.
- **📚 Book Management:** Tambah, Hapus, dan Lihat daftar buku.
- **📜 History Logs:** Riwayat peminjaman lengkap dengan User ID dan Waktu.

---

## 🛠 Teknologi & Library

Berikut adalah daftar paket yang digunakan dalam proyek ini:

- **Core:** `Node.js`, `Express.js`
- **Database:** `MySQL`, `Sequelize`, `mysql2`
- **Security & Config:** `dotenv` (Environment Variables), `cors` (Cross-Origin Resource Sharing)
- **Utilities:** `body-parser` (JSON Parsing)
- **Frontend:** HTML5, Bootstrap 5 (CDN)

---

## 📂 Struktur Folder

```bash
root/
├── backend/
│   ├── config/         # Konfigurasi Database
│   ├── controllers/    # Logika Bisnis (Buku & Peminjaman)
│   ├── middleware/     # Auth (IsUser / IsAdmin)
│   ├── models/         # Skema Tabel Database
│   ├── routes/         # Endpoint API
│   ├── .env            # Variabel Environment (Sensitif)
│   └── index.js        # Server Entry Point
├── frontend/
│   └── index.html      # Tampilan Web (UI)
└── README.md           # Dokumentasi Proyek

⚙️ Instalasi & KonfigurasiIkuti langkah ini untuk menjalankan proyek di komputer lokal:1. Persiapan DatabasePastikan XAMPP/MySQL berjalan, lalu buat database baru:SQLCREATE DATABASE db_remedial_ucp1;
2. Instalasi DependensiMasuk ke folder backend dan install semua library yang dibutuhkan:Bashcd backend
npm install express sequelize mysql2 body-parser cors dotenv
3. Konfigurasi EnvironmentBuat file bernama .env di dalam folder backend, lalu isi:Ini, TOMLDB_NAME=db_remedial_ucp1
DB_USER=root
DB_PASSWORD=      <-- Isi password database Anda (kosongkan jika default XAMPP)
DB_HOST=localhost
DB_DIALECT=mysql
DB_PORT=3306      <-- Sesuaikan port (bisa 3306 atau 3309)
PORT=3000
4. Menjalankan ServerBashnode index.js
Akses aplikasi di browser: http://localhost:3000📡 Dokumentasi API (Postman)📘 Manajemen Buku (Admin)MethodEndpointDeskripsiGET/api/booksMelihat daftar bukuPOST/api/booksMenambah buku (Admin)Screenshots:📕 Peminjaman (User)MethodEndpointBody JSONPOST/api/borrow{ "bookId": 1, "latitude": -7.7, "longitude": 110.3 }Screenshots:📒 History & Tracking (Admin)MethodEndpointDeskripsiGET/api/borrowLihat semua historyGET/api/borrow/user/:idFilter History per User IDScreenshots:📸 Screenshots Aplikasi1. Mode Admin (Monitoring History & Maps)Admin dapat melihat tabel peminjaman lengkap dengan tombol "Cek Maps".2. Mode User (Peminjaman)User meminjam buku dan memberikan izin lokasi browser.👨‍💻 KontributorRemedial UCP 1 - Pengembangan Aplikasi WebNamaNIMKelas[ISI NAMA LENGKAP][ISI NIM][ISI KELAS]
