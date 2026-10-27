Program Kalkulator Nilai Mahasiswa adalah program berbasis web yang dibuat menggunakan tiga bahasa pemrograman, yaitu HTML, CSS, dan JavaScript. Program ini bertujuan untuk membantu pengguna memasukkan data mahasiswa, menentukan predikat berdasarkan nilai yang diperoleh, menampilkan riwayat nilai, serta menghitung rata-rata nilai seluruh mahasiswa yang telah dimasukkan.

Program ini menerapkan dua konsep dasar pemrograman, yaitu percabangan (if-else) dan perulangan (for).
1. Penjelasan HTML (index.html)
HTML berfungsi untuk membuat struktur dan komponen utama pada halaman web.

Bagian-bagian HTML dalam program ini adalah:
- Judul program: Menampilkan judul “Kalkulator Nilai Mahasiswa” agar pengguna mengetahui fungsi program.
- Formulir input: Menyediakan kolom untuk memasukkan nama dan nilai mahasiswa.
- Tombol Hitung Nilai: Digunakan untuk memproses data yang telah dimasukkan.
- Bagian hasil: Menampilkan predikat dan keterangan nilai mahasiswa.
- Tabel riwayat nilai: Menampilkan daftar nama, nilai, dan predikat mahasiswa yang telah diproses.
- Tombol Proses Ulang Riwayat: Digunakan untuk menghitung jumlah mahasiswa dan rata-rata nilai mereka.
HTML juga menghubungkan file CSS melalui style.css dan file JavaScript melalui script.js, sehingga tampilan dan fungsi program dapat berjalan bersama.
2. Penjelasan CSS (style.css)
CSS berfungsi untuk mengatur tampilan halaman web agar lebih menarik, rapi, dan mudah digunakan.

Beberapa pengaturan yang digunakan antara lain:
- body: Mengatur jenis huruf, warna latar belakang, dan jarak halaman.
- .container: Mengatur area utama program, termasuk lebar, jarak dalam, dan sudut kotak.
- input: Mengatur tampilan kolom untuk memasukkan nama dan nilai mahasiswa.
- button: Mengatur warna, ukuran, dan tampilan tombol.
- table: Mengatur lebar tabel, garis pembatas, serta posisi teks.
- @media: Menyesuaikan tampilan agar tetap nyaman digunakan pada layar yang lebih kecil, seperti ponsel.
Dengan CSS, program tidak hanya berfungsi dengan baik, tetapi juga memiliki tampilan yang lebih teratur dan nyaman dilihat.
3. Penjelasan JavaScript (script.js)
JavaScript merupakan bagian utama yang menjalankan logika program. Pada bagian ini terdapat proses pemeriksaan input, penentuan predikat nilai, penyimpanan data sementara, penampilan tabel, dan perhitungan rata-rata.
A. Mengambil elemen HTML
Pada awal program terdapat kode seperti berikut:
const form = document.getElementById("formNilai");
const hasil = document.getElementById("hasil");


Kode tersebut digunakan untuk mengambil elemen HTML berdasarkan ID-nya. Dengan demikian, JavaScript dapat membaca input, menampilkan hasil, dan merespons tindakan pengguna.
B. Memproses input mahasiswa
Ketika pengguna menekan tombol Hitung Nilai, program membaca nama dan nilai yang dimasukkan.
const nama = document.getElementById("nama").value.trim();
const nilai = Number(document.getElementById("nilai").value);


- value digunakan untuk mengambil nilai yang dimasukkan pengguna.
- trim() menghapus spasi di awal dan akhir nama.
- Number() mengubah input nilai menjadi tipe data angka.
Setelah itu, program memeriksa apakah data yang dimasukkan sudah sesuai.
C. Percabangan if-else
Percabangan digunakan untuk mengambil keputusan berdasarkan kondisi tertentu. Dalam program ini, percabangan memiliki beberapa kondisi.

Contoh kode:
if (nilai >= 90) {
    predikat = "A";
    keterangan = "Sangat Baik";
} else if (nilai >= 80) {
    predikat = "B";
    keterangan = "Baik";
} else if (nilai >= 70) {
    predikat = "C";
    keterangan = "Cukup";
} else if (nilai >= 60) {
    predikat = "D";
    keterangan = "Kurang";
} else {
    predikat = "E";
    keterangan = "Tidak Lulus";
}


Cara kerjanya adalah program memeriksa kondisi secara berurutan. Jika nilai memenuhi suatu kondisi, program menetapkan predikat yang sesuai dan tidak perlu memeriksa kondisi berikutnya.

Berikut pembagian predikat nilai:
Rentang nilai	Predikat	Keterangan
90–100	A	Sangat Baik
80–89	B	Baik
70–79	C	Cukup
60–69	D	Kurang
0–59	E	Tidak Lulus

Selain menentukan predikat, if-else juga digunakan untuk memeriksa nama kosong, nilai di luar rentang 0–100, dan nilai yang bukan bilangan bulat.

Dengan demikian, program memiliki lebih dari lima kondisi percabangan sesuai kebutuhan tugas.
D. Menyimpan data mahasiswa
Setelah data dinyatakan valid dan predikat berhasil ditentukan, data dimasukkan ke dalam array menggunakan kode:
dataMahasiswa.push({
    nama: nama,
    nilai: nilai,
    predikat: predikat,
    keterangan: keterangan
});


Array dataMahasiswa berfungsi sebagai tempat penyimpanan sementara untuk seluruh data mahasiswa yang telah dimasukkan.

Contohnya, jika pengguna memasukkan tiga mahasiswa, array akan menyimpan ketiga data tersebut selama halaman masih berjalan. Data ini belum disimpan secara permanen ke database.
E. Perulangan for
Perulangan for digunakan untuk menjalankan suatu perintah berulang kali selama kondisi yang ditentukan masih terpenuhi.

Contoh kode:
for (let i = 0; i < dataMahasiswa.length; i++) {
    const mahasiswa = dataMahasiswa[i];
}


Penjelasannya:
- let i = 0 berarti perulangan dimulai dari indeks 0.
- i < dataMahasiswa.length berarti perulangan berjalan selama indeks masih berada dalam jumlah data.
- i++ berarti nilai indeks bertambah satu setiap kali perulangan dilakukan.
Perulangan tersebut digunakan untuk membaca setiap data mahasiswa, kemudian menampilkannya ke dalam tabel riwayat nilai.

Program juga menggunakan for untuk menjumlahkan seluruh nilai mahasiswa sebelum menghitung rata-rata.
F. Menampilkan riwayat nilai
Fungsi tampilkanNilai() bertugas menampilkan data mahasiswa ke tabel HTML.

Sebelum tabel diperbarui, bagian isi tabel dikosongkan menggunakan:
daftarNilai.innerHTML = "";


Selanjutnya, perulangan for membaca seluruh data dalam array. Setiap data dimasukkan ke dalam baris tabel yang berisi nama, nilai, dan predikat.

Dengan cara ini, setiap mahasiswa baru yang ditambahkan akan muncul dalam tabel tanpa harus membuat tabel secara manual.
G. Menghitung rata-rata nilai
Ketika tombol Proses Ulang Riwayat ditekan, program memeriksa apakah terdapat data mahasiswa.

Jika data tersedia, program menjumlahkan seluruh nilai menggunakan perulangan for.
let total = 0;

for (let i = 0; i < dataMahasiswa.length; i++) {
    total += dataMahasiswa[i].nilai;
}

const rataRata = total / dataMahasiswa.length;


Rumus yang digunakan adalah:
\[
\text{Rata-rata} =
\frac{\text{Total seluruh nilai}}{\text{Jumlah mahasiswa}}
\]

Sebagai contoh, terdapat tiga mahasiswa dengan nilai 90, 80, dan 70.
\[
\text{Rata-rata}=\frac{90+80+70}{3}=80
\]

Hasil yang ditampilkan adalah jumlah mahasiswa sebanyak 3 orang dan rata-rata nilai sebesar 80,00.
4. Alur kerja program
Secara keseluruhan, program berjalan dengan urutan berikut:
1. Pengguna memasukkan nama dan nilai

2. JavaScript memeriksa validitas input

3. Percabangan if-else menentukan predikat

4. Data disimpan ke dalam array

5. Perulangan for menampilkan riwayat nilai

6. Program menghitung rata-rata jika diminta


5. Contoh penggunaan program
Misalnya, pengguna memasukkan data berikut:
Nama mahasiswa	Nilai	Predikat
Andi	95	A — Sangat Baik
Budi	85	B — Baik
Citra	75	C — Cukup
Deni	65	D — Kurang
Eka	50	E — Tidak Lulus

Setelah seluruh data dimasukkan, tabel akan menampilkan kelima mahasiswa tersebut. Jika tombol Proses Ulang Riwayat ditekan, program akan menghitung rata-rata nilai:
\[\frac{95+85+75+65+50}{5}=74\]

Jadi, jumlah mahasiswa adalah 5 orang dan rata-rata nilainya adalah 74,00.
6. Kesimpulan
Program Kalkulator Nilai Mahasiswa merupakan contoh penerapan dasar pemrograman web yang menggabungkan HTML, CSS, dan JavaScript. HTML membangun struktur halaman, CSS mengatur tampilan, sedangkan JavaScript menjalankan logika program.

Percabangan if-else digunakan untuk memeriksa input dan menentukan predikat nilai berdasarkan beberapa kondisi. Sementara itu, perulangan for digunakan untuk membaca data mahasiswa, menampilkan riwayat nilai, serta menghitung total dan rata-rata nilai.

Melalui program ini, pengguna dapat memahami bagaimana percabangan dan perulangan bekerja dalam menyelesaikan masalah sederhana secara terstruktur, praktis, dan mudah dipahami.
