# 📚 Library System with Geolocation (Remedial UCP 1)

> **Pengembangan Aplikasi Web**
>
> Backend sistem manajemen perpustakaan dengan fitur unggulan **Peminjaman Berbasis Lokasi (Geolocation Tracking)**.

![NodeJS](https://img.shields.io/badge/Node.js-18.x-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-4.x-000000?style=flat-square&logo=express&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-6.x-52B0E7?style=flat-square&logo=sequelize&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.x-4479A1?style=flat-square&logo=mysql&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-7952B3?style=flat-square&logo=bootstrap&logoColor=white)

---

## 📋 Daftar Isi

- [Deskripsi Proyek](#-deskripsi-proyek)
- [Fitur Utama](#-fitur-utama)
- [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
- [Struktur Folder](#-struktur-folder)
- [Instalasi & Konfigurasi](#-instalasi--konfigurasi)
- [Dokumentasi API](#-dokumentasi-api-postman)
- [Screenshots Aplikasi](#-screenshots-aplikasi)
- [Kontributor](#-kontributor)

---

## 🎯 Deskripsi Proyek

**Library System with Geolocation** adalah aplikasi backend yang dirancang untuk memvalidasi posisi fisik pengguna saat melakukan transaksi peminjaman buku. Sistem ini mencatat koordinat Latitude dan Longitude pengguna secara otomatis menggunakan Geolocation API browser.

Sistem ini memiliki dua peran utama:
1.  **User:** Meminjam buku (Wajib mengaktifkan GPS).
2.  **Admin:** Mengelola buku dan memantau lokasi peminjaman via Google Maps.

---

## ✨ Fitur Utama

- **🔐 Role-Based Access Control (RBAC):** Pemisahan hak akses endpoint antara Admin dan User.
- **📍 Geolocation Tracking:** Menyimpan data Latitude & Longitude setiap kali transaksi terjadi.
- **🗺️ Google Maps Integration:** Link otomatis ke Google Maps untuk melihat lokasi peminjam.
- **📚 Book Management:** Fitur CRUD lengkap untuk pengelolaan data buku.
- **📜 Audit Logs:** Riwayat peminjaman yang mencatat Waktu, User ID, Buku, dan Lokasi.

---

## 🛠 Teknologi yang Digunakan

| Kategori | Teknologi | Deskripsi |
| :--- | :--- | :--- |
| **Backend** | Node.js & Express.js | Framework server-side |
| **Database** | MySQL | Database Relasional |
| **ORM** | Sequelize | Koneksi & Model Database |
| **Frontend** | HTML5 & Bootstrap 5 | Antarmuka pengguna (Single Page) |
| **Library** | Dotenv, Cors, Body-parser | Utilitas pendukung |

---

## 📂 Struktur Folder

```bash
root/
├── backend/
│   ├── config/         # Konfigurasi Database (Sequelize)
│   ├── controllers/    # Logika Bisnis (Borrow & Books)
│   ├── middleware/     # Auth (IsUser / IsAdmin)
│   ├── models/         # Skema Tabel (Book & BorrowLog)
│   ├── routes/         # Endpoint API
│   ├── .env            # Variabel Environment (Password DB)
│   └── index.js        # Server Entry Point
├── frontend/
│   └── index.html      # Tampilan Web (UI)
└── README.md           # Dokumentasi Proyek
