<!-- # Tugas Individu Sequelize

## Deskripsi
Proyek ini adalah aplikasi manajemen pesanan makanan yang dibangun menggunakan Node.js dan Sequelize sebagai ORM untuk berinteraksi dengan database MySQL. Aplikasi ini memungkinkan pengguna untuk mengelola pelanggan, pesanan, menu makanan, dan pembayaran.

## Fitur
- **Manajemen Pelanggan**: Tambah, lihat, perbarui, dan hapus pelanggan.
- **Manajemen Pesanan**: Buat, lihat, perbarui, dan hapus pesanan.
- **Manajemen Menu Makanan**: Tambah, lihat, perbarui, dan hapus item menu.
- **Manajemen Pembayaran**: Buat, lihat, dan hapus pembayaran.

## Struktur Proyek

.
├── controller
│ ├── customerController.js
│ ├── foodItemController.js
│ ├── listMenuController.js
│ ├── orderController.js
│ ├── paymentController.js
│ └── ...
├── models
│ ├── association.js
│ ├── customerModel.js
│ ├── foodItemModel.js
│ ├── listMenuModel.js
│ ├── orderModel.js
│ ├── paymentModel.js
│ └── ...
├── routes
│ ├── customerRoute.js
│ ├── foodItemRoute.js
│ ├── listMenuRoute.js
│ ├── orderRoute.js
│ ├── paymentRoute.js
│ └── ...
├── seeders
│ └── seeder.js
├── utils
│ └── connection.js
├── index.js
├── .gitignore
└── package-lock.json

## Instalasi
1. Clone repositori ini.
2. Jalankan `npm install` untuk menginstal semua dependensi.
3. Buat file `.env` dan atur variabel berikut:
   ```
   DB_NAME=nama_database
   PORT=3000
   ```
4. Jalankan migrasi dan seeder (jika ada) untuk menyiapkan database:
   ```bash
   node seeders/seeder.js
   ```
5. Jalankan aplikasi:
   ```bash
   node index.js
   ```

## Penggunaan
- **API Endpoints**:
  - Pelanggan:
    - `POST /customer/create`: Membuat pelanggan baru.
    - `GET /customer/find`: Mendapatkan semua pelanggan.
    - `GET /customer/findbyid/:id`: Mendapatkan pelanggan berdasarkan ID.
    - `PUT /customer/update/:id`: Memperbarui informasi pelanggan.
    - `DELETE /customer/delete/:id`: Menghapus pelanggan.
  
  - Pesanan:
    - `POST /order/create`: Membuat pesanan baru.
    - `GET /order/findall`: Mendapatkan semua pesanan.
    - `GET /order/findbyid/:id`: Mendapatkan pesanan berdasarkan ID.
    - `PUT /order/update/:id`: Memperbarui informasi pesanan.
    - `DELETE /order/delete/:id`: Menghapus pesanan.

  - Menu Makanan:
    - `POST /food/create`: Membuat item menu baru.
    - `GET /food/findall`: Mendapatkan semua item menu.
    - `GET /food/findbyid/:id`: Mendapatkan item menu berdasarkan ID.
    - `DELETE /food/delete/:id`: Menghapus item menu.

  - Pembayaran:
    - `POST /payment/create`: Membuat pembayaran baru.
    - `GET /payment/findall`: Mendapatkan semua pembayaran.
    - `GET /payment/findbyid/:id`: Mendapatkan pembayaran berdasarkan ID.
    - `DELETE /payment/delete/:id`: Menghapus pembayaran.

## Credit

chatGpt,
Niko Christian(diri saya),
para penyelamat random di ,google,
        :)

 -->

# Aplikasi Pemesanan Makanan Online

Aplikasi ini adalah sistem pemesanan makanan online yang menyediakan API untuk mengelola pelanggan, pesanan, menu makanan, dan pembayaran.

## Fitur

- Manajemen Pelanggan
- Manajemen Pesanan
- Manajemen Menu Makanan
- Manajemen Pembayaran
- Autentikasi Pengguna

## Teknologi yang Digunakan

- Node.js
- Express.js
- Sequelize (ORM)
- MySQL
- JSON Web Token (JWT) untuk autentikasi

## Instalasi

1. Klon repositori ini:
   ```bash
   git clone https://github.com/Jeffrryy/TugasIndividuSequelize.git
   cd TugasIndividuSequelize
   ```

2. Instal dependensi:
   ```bash
   npm install
   ```

3. Buat file `.env` di root proyek dan isi dengan konfigurasi berikut:
   ```
   DB_NAME=db_pemesananmakananonline
   PORT=3000
   JWT_SECRET=your_jwt_secret
   ```

4. Jalankan migrasi dan seeder (jika ada) untuk menyiapkan database:
   ```bash
   node seeders/seeder.js
   ```

5. Jalankan aplikasi:
   ```bash
   node index.js
   ```

## Penggunaan

### Autentikasi

- `POST /register`: Mendaftarkan pengguna baru
- `POST /login`: Masuk dan mendapatkan token JWT

### API Endpoints

Hanya Customer endpoint yang memerlukan token JWT dalam header Authorization.

#### Pelanggan
- `POST /customer/create`: Membuat pelanggan baru
- `GET /customer/findall`: Mendapatkan semua pelanggan
- `GET /customer/findbyid/:id`: Mendapatkan pelanggan berdasarkan ID
- `PUT /customer/update/:id`: Memperbarui informasi pelanggan
- `DELETE /customer/delete/:id`: Menghapus pelanggan

#### Pesanan
- `POST /order/create`: Membuat pesanan baru
- `GET /order/findall`: Mendapatkan semua pesanan
- `GET /order/findbyid/:id`: Mendapatkan pesanan berdasarkan ID
- `PUT /order/update/:id`: Memperbarui informasi pesanan
- `DELETE /order/delete/:id`: Menghapus pesanan

#### Menu Makanan
- `POST /food/create`: Membuat item menu baru
- `GET /food/findall`: Mendapatkan semua item menu
- `GET /food/findbyid/:id`: Mendapatkan item menu berdasarkan ID
- `DELETE /food/delete/:id`: Menghapus item menu

#### Pembayaran
- `POST /payment/create`: Membuat pembayaran baru
- `GET /payment/findall`: Mendapatkan semua pembayaran
- `GET /payment/findbyid/:id`: Mendapatkan pembayaran berdasarkan ID
- `DELETE /payment/delete/:id`: Menghapus pembayaran

## Kontribusi

Kontribusi selalu diterima. Silakan buat pull request untuk perbaikan atau penambahan fitur.


## Kredit

- ChatGPT
- Niko Christian
- Orang orang random di internet
- Orang Orang Terdekat Saya
