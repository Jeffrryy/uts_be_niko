
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
- Mr.Dicky 
- Mr.Ikbar
- Orang orang random di internet
- Orang Orang Terdekat Saya
