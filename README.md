# Kalkulator Nilai Mahasiswa

## 1. Deskripsi Program

Kalkulator Nilai Mahasiswa adalah program berbasis web yang dibuat menggunakan HTML, CSS, dan JavaScript. Program ini berfungsi untuk memasukkan nama dan nilai mahasiswa, menentukan predikat berdasarkan nilai yang diperoleh, menampilkan riwayat nilai, serta menghitung rata-rata nilai mahasiswa.

Program ini dibuat untuk menerapkan konsep dasar pemrograman, khususnya percabangan (`if-else`) dan perulangan (`for`).

## 2. Tujuan Program

Tujuan pembuatan program ini adalah:
- Memahami penggunaan HTML, CSS, dan JavaScript dalam pembuatan website.
- Menerapkan percabangan untuk menentukan predikat nilai mahasiswa.
- Menerapkan perulangan untuk menampilkan dan mengolah data mahasiswa.
- Melakukan validasi input agar data yang dimasukkan sesuai.
- Menghitung rata-rata nilai mahasiswa secara otomatis.

## 3. Teknologi yang Digunakan

- **HTML:** Membuat struktur halaman, formulir input, tombol, dan tabel.
- **CSS:** Mengatur tampilan halaman agar lebih rapi, menarik, dan responsif.
- **JavaScript:** Mengatur logika program, validasi input, penentuan predikat, serta pengolahan data mahasiswa.

## 4. Fitur Program

Program ini memiliki beberapa fitur, yaitu:

1. Memasukkan nama mahasiswa.
2. Memasukkan nilai mahasiswa dengan rentang 0–100.
3. Memeriksa validitas nama dan nilai.
4. Menentukan predikat nilai secara otomatis.
5. Menampilkan riwayat nilai mahasiswa dalam tabel.
6. Menghitung jumlah mahasiswa yang telah dimasukkan.
7. Menghitung rata-rata nilai seluruh mahasiswa.
8. Menampilkan pesan jika input tidak valid atau belum terdapat data.

## 5. Penjelasan Konsep Pemrograman

### A. Percabangan (`if-else`)

Percabangan digunakan untuk memeriksa kondisi dan menentukan tindakan yang sesuai.

Dalam program ini, percabangan digunakan untuk memvalidasi input dan menentukan predikat nilai mahasiswa berdasarkan rentang nilai berikut:

| Rentang Nilai | Predikat | Keterangan |
|---|---|---|
| 90–100 | A | Sangat Baik |
| 80–89 | B | Baik |
| 70–79 | C | Cukup |
| 60–69 | D | Kurang |
| 0–59 | E | Tidak Lulus |

Program juga memeriksa apakah nama kosong, nilai berada di luar rentang 0–100, atau nilai bukan bilangan bulat.

### B. Perulangan (`for`)

Perulangan `for` digunakan untuk menjalankan perintah berulang kali selama kondisi yang ditentukan terpenuhi.

Dalam program ini, perulangan digunakan untuk:
- Membaca seluruh data mahasiswa yang tersimpan.
- Menampilkan data mahasiswa ke dalam tabel riwayat nilai.
- Menjumlahkan seluruh nilai mahasiswa untuk menghitung rata-rata.

### C. Array

Array `dataMahasiswa` digunakan untuk menyimpan data mahasiswa secara sementara. Data yang disimpan meliputi nama, nilai, predikat, dan keterangan.

Data tersebut digunakan untuk menampilkan riwayat nilai dan melakukan perhitungan rata-rata.

### D. Fungsi

Fungsi `tampilkanNilai()` digunakan untuk menampilkan seluruh data mahasiswa ke dalam tabel. Fungsi ini membuat kode lebih terstruktur dan memudahkan pengelolaan tampilan data.

### E. Perhitungan Rata-rata

Rata-rata nilai dihitung dengan membagi total seluruh nilai dengan jumlah mahasiswa.

**Rumus:**

Rata-rata = Total seluruh nilai / Jumlah mahasiswa

Contoh, jika nilai mahasiswa adalah 90, 80, dan 70, maka:

Rata-rata = (90 + 80 + 70) / 3 = 80

Hasil perhitungan akan ditampilkan ketika tombol **Proses Ulang Riwayat** ditekan.

## 6. Alur Kerja Program

1. Pengguna memasukkan nama dan nilai mahasiswa.
2. Program memeriksa apakah input sudah valid.
3. Percabangan `if-else` menentukan predikat berdasarkan nilai.
4. Data mahasiswa disimpan ke dalam array.
5. Perulangan `for` menampilkan data ke dalam tabel riwayat nilai.
6. Pengguna dapat memasukkan data mahasiswa lainnya.
7. Pengguna menekan tombol **Proses Ulang Riwayat** untuk melihat jumlah mahasiswa dan rata-rata nilai.

## 7. Struktur File

```text
kalkulator-nilai-mahasiswa/
├── index.html
├── style.css
├── script.js
└── README.md
```

- `index.html`: Struktur halaman website.
- `style.css`: Pengaturan tampilan website.
- `script.js`: Logika program, percabangan, perulangan, dan perhitungan.
- `README.md`: Dokumentasi program.

## 8. Cara Menjalankan Program

1. Unduh atau salin repository ke komputer.
2. Buka folder proyek menggunakan Visual Studio Code.
3. Pastikan seluruh file tersedia dalam satu folder.
4. Buka `index.html` menggunakan browser atau ekstensi Live Server.
5. Masukkan nama dan nilai mahasiswa.
6. Klik **Hitung Nilai** untuk melihat predikat.
7. Klik **Proses Ulang Riwayat** untuk menghitung jumlah mahasiswa dan rata-rata nilai.

Program juga dapat dipublikasikan menggunakan GitHub Pages agar dapat diakses melalui browser tanpa menjalankan VS Code.

## 9. Kesimpulan

Kalkulator Nilai Mahasiswa merupakan aplikasi web sederhana yang menerapkan konsep dasar pemrograman melalui HTML, CSS, dan JavaScript. Percabangan `if-else` digunakan untuk memvalidasi input dan menentukan predikat nilai, sedangkan perulangan `for` digunakan untuk menampilkan data dan menghitung rata-rata nilai mahasiswa.

Melalui program ini, pengguna dapat memahami penerapan percabangan, perulangan, array, fungsi, dan pengolahan data dalam menyelesaikan masalah sederhana secara terstruktur.

**Catatan:** Data mahasiswa disimpan sementara di dalam program dan akan hilang ketika halaman dimuat ulang. Program ini belum menggunakan database untuk penyimpanan permanen.

## 10. Identitas Pembuat

- **Nama:** M. Rifqi Ridwanulloh
- **Program:** Kalkulator Nilai Mahasiswa
- **Bahasa:** HTML, CSS, JavaScript

