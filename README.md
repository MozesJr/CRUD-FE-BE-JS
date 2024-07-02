
# CRUD Data Mahasiswa

Ini adalah aplikasi CRUD (Create, Read, Update, Delete) sederhana untuk mengelola data mahasiswa. Aplikasi ini dibangun menggunakan JavaScript, Node.js, Express, MongoDB, dan Vue.js.

## Fitur

- Tambah Mahasiswa
- Lihat Daftar Mahasiswa
- Edit Mahasiswa
- Hapus Mahasiswa

## Persyaratan

- Node.js dan npm (Node Package Manager)
- MongoDB

## Langkah-langkah Instalasi

### Clone Repository

```bash
git clone https://github.com/MozesJr/CRUD-FE-BE-JS.git
cd CRUD-FE-BE-JS
```

### Backend

1. Masuk ke directory `backend`:
   
    ```bash
    cd backend
    ```

2. Instal dependensi:

    ```bash
    npm install
    ```

3. Jalankan server backend:

    ```bash
    node server.js
    ```

### Frontend

1. Masuk ke directory `frontend`:

    ```bash
    cd ../frontend
    ```

2. Instal dependensi:

    ```bash
    npm install
    ```

3. Jalankan aplikasi frontend:

    ```bash
    npm run serve
    ```

## Menjalankan Aplikasi

1. Pastikan MongoDB telah berjalan di sistem Anda. Anda dapat menjalankan MongoDB menggunakan perintah berikut jika telah diinstal:

    ```bash
    mongod
    ```

2. Jalankan server backend terlebih dahulu dengan mengikuti langkah-langkah di atas.

3. Setelah server backend berjalan, jalankan aplikasi frontend dengan mengikuti langkah-langkah di atas.

4. Buka browser dan akses aplikasi di `http://localhost:8080`.

## Struktur Direktori

```
CRUD-FE-BE-JS/
├── backend/
│   ├── node_modules/
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── StudentForm.vue
│   │   │   └── StudentList.vue
│   │   ├── views/
│   │   │   ├── AddStudent.vue
│   │   │   ├── EditStudent.vue
│   │   │   └── Home.vue
│   │   ├── App.vue
│   │   ├── main.js
│   │   └── router.js
│   ├── package.json
│   └── vue.config.js
└── README.md
```

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan buat pull request atau laporkan masalah melalui halaman issues.

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).
