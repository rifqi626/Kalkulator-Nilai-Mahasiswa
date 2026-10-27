
const form = document.getElementById("formNilai");
const hasil = document.getElementById("hasil");
const daftarNilai = document.getElementById("daftarNilai");
const tombolUlang = document.getElementById("prosesUlang");

let dataMahasiswa = [];

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const nilai = Number(document.getElementById("nilai").value);

    if (nama === "") {
        hasil.textContent = "Nama tidak boleh kosong!";
        return;
    } else if (nilai < 0 || nilai > 100) {
        hasil.textContent = "Nilai harus antara 0 sampai 100!";
        return;
    } else if (!Number.isInteger(nilai)) {
        hasil.textContent = "Nilai harus berupa bilangan bulat!";
        return;
    }

    let predikat;
    let keterangan;

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

    dataMahasiswa.push({
        nama: nama,
        nilai: nilai,
        predikat: predikat,
        keterangan: keterangan
    });

    hasil.textContent =
        nama + " mendapatkan predikat " + predikat +
        " (" + keterangan + ")";

    tampilkanNilai();
    form.reset();
});

function tampilkanNilai() {
    daftarNilai.innerHTML = "";

    // Perulangan FOR untuk membaca semua data mahasiswa
    for (let i = 0; i < dataMahasiswa.length; i++) {
        const mahasiswa = dataMahasiswa[i];
        const baris = document.createElement("tr");

        [mahasiswa.nama, mahasiswa.nilai,
         mahasiswa.predikat + " - " + mahasiswa.keterangan]
        .forEach(function(teks) {
            const kolom = document.createElement("td");
            kolom.textContent = teks;
            baris.appendChild(kolom);
        });

        daftarNilai.appendChild(baris);
    }
}

tombolUlang.addEventListener("click", function() {
    if (dataMahasiswa.length === 0) {
        hasil.textContent = "Belum ada data untuk diproses ulang.";
    } else {
        let total = 0;

        // Perulangan FOR untuk menghitung total nilai
        for (let i = 0; i < dataMahasiswa.length; i++) {
            total += dataMahasiswa[i].nilai;
        }

        const rataRata = total / dataMahasiswa.length;

        hasil.textContent =
            "Jumlah mahasiswa: " + dataMahasiswa.length +
            " | Rata-rata nilai: " + rataRata.toFixed(2);
    }
});
