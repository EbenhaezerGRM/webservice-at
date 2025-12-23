# Dokumentasi Tugas Web Service - RESTful API

**Nama:** Ebenhaezer George Renaldi Muljadi  
**NIM:** 2702230461
**Mata Kuliah:** Automation Testing

---

## Deskripsi
Project ini adalah implementasi RESTful API sederhana menggunakan **Express.js** untuk manajemen data produk. API ini mendukung operasi CRUD (Create, Read, Update, Delete) dan diuji menggunakan **Thunder Client**.

### Teknologi yang Digunakan
* **Backend:** Node.js & Express.js
* **Database:** Array JavaScript (Simulasi In-Memory)
* **Testing Tool:** Thunder Client

### Cara Menjalankan Server
1.  Pastikan Node.js sudah terinstall.
2.  Buka terminal di folder project.
3.  Install dependency (jika belum):
    ```bash
    npm install express
    ```
4.  Jalankan server:
    ```bash
    node server.js
    ```
5.  Server berjalan di `http://localhost:3000`.

---

## Daftar Endpoint API

Berikut adalah daftar endpoint yang tersedia untuk pengujian:

### 0. Cek Status Server (Home)
* **Method:** `GET`
* **URL:** `http://localhost:3000`
* **Deskripsi:** Mengecek apakah server berjalan atau mengakses halaman frontend (jika ada).

### 1. Mengambil Semua Data (Read All)
* **Method:** `GET`
* **URL:** `http://localhost:3000/api/products`
* **Deskripsi:** Menampilkan seluruh daftar produk yang ada.

### 2. Mengambil Data Spesifik (Read One)
* **Method:** `GET`
* **URL:** `http://localhost:3000/api/products/1`
* **Deskripsi:** Menampilkan detail produk berdasarkan ID (contoh ID: 1).

### 3. Menambah Data Baru (Create)
* **Method:** `POST`
* **URL:** `http://localhost:3000/api/products`
* **Body (JSON):**
    ```json
    {
      "nama": "Keyboard Mechanical",
      "harga": 500000
    }
    ```
* **Deskripsi:** Menambahkan produk baru ke dalam database. ID akan digenerate otomatis.

### 4. Mengubah Data (Update)
* **Method:** `PUT`
* **URL:** `http://localhost:3000/api/products/3`
* **Body (JSON):**
    ```json
    {
      "nama": "Keyboard Mechanical RGB (Updated)",
      "harga": 750000
    }
    ```
* **Deskripsi:** Mengupdate data produk pada ID 3 (Data yang baru saja dibuat).

### 5. Menghapus Data (Delete)
* **Method:** `DELETE`
* **URL:** `http://localhost:3000/api/products/3`
* **Deskripsi:** Menghapus produk dengan ID 3 dari database.

---
