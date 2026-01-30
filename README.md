```powershell
cd backend
npm install express sequelize mysql2 body-parser cors dotenv

```

*(Setelah ini, baru kamu push ke GitHub).*

---

### LANGKAH 2: Isi File `README.md` (Copy Semua)

Ini adalah isi file `README.md` yang sudah saya rapikan jadi satu. Di dalamnya sudah tertulis instruksi instalasi lengkap untuk Dosen/Teman yang mau coba kodinganmu.

**File:** `README.md` (Simpan di folder paling luar)

```markdown
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

```

---

## ⚙️ Instalasi & Konfigurasi

Ikuti langkah ini untuk menjalankan proyek di komputer lokal:

### 1. Persiapan Database

Pastikan XAMPP/MySQL berjalan, lalu buat database baru:

```sql
CREATE DATABASE db_remedial_ucp1;

```

### 2. Instalasi Dependensi

Masuk ke folder backend dan install semua library yang dibutuhkan:

```bash
cd backend
npm install express sequelize mysql2 body-parser cors dotenv

```

### 3. Konfigurasi Environment

Buat file bernama `.env` di dalam folder `backend`, lalu isi:

```ini
DB_NAME=db_remedial_ucp1
DB_USER=root
DB_PASSWORD=      <-- Isi password database Anda (kosongkan jika default XAMPP)
DB_HOST=localhost
DB_DIALECT=mysql
DB_PORT=3306      <-- Sesuaikan port (bisa 3306 atau 3309)
PORT=3000

```

### 4. Menjalankan Server

```bash
node index.js

```

*Akses aplikasi di browser: `http://localhost:3000*`

---

## 📡 Dokumentasi API (Postman)

### 📘 Manajemen Buku (Admin)

| Method | Endpoint | Deskripsi |
| --- | --- | --- |
| `GET` | `/api/books` | Melihat daftar buku |
| `POST` | `/api/books` | Menambah buku (Admin) |

**Screenshots:**

### 📕 Peminjaman (User)

| Method | Endpoint | Body JSON |
| --- | --- | --- |
| `POST` | `/api/borrow` | `{ "bookId": 1, "latitude": -7.7, "longitude": 110.3 }` |

**Screenshots:**

### 📒 History & Tracking (Admin)

| Method | Endpoint | Deskripsi |
| --- | --- | --- |
| `GET` | `/api/borrow` | Lihat semua history |
| `GET` | `/api/borrow/user/:id` | **Filter History per User ID** |

**Screenshots:**

---

## 📸 Screenshots Aplikasi

**1. Mode Admin (Monitoring History & Maps)**
*Admin dapat melihat tabel peminjaman lengkap dengan tombol "Cek Maps".*
*(Sesuaikan nama file gambar Anda)*

**2. Mode User (Peminjaman)**
*User meminjam buku dan memberikan izin lokasi browser.*

---

## 👨‍💻 Kontributor

**Remedial UCP 1 - Pengembangan Aplikasi Web**

| Nama | NIM | Kelas |
| --- | --- | --- |
| **M. Alfiansyah Azad** | **20230140126** | **C** |

```

```
