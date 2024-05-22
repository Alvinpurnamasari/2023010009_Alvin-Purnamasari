document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('nilaiForm');
    form.addEventListener('reset', function() {
        document.getElementById('hasil').innerHTML = '';
    });
});

function tampil() {
    const nim = document.getElementById('nim').value;
    const nama = document.getElementById('nama').value;
    const matkul = document.getElementById('matkul').value;
    const nilaiAkhir = parseInt(document.getElementById('nilai').value);
    
    let nilaiHuruf = '';
    let indeksNilai = '';
    let keterangan = '';

    if (nilaiAkhir >= 85 && nilaiAkhir <= 100) {
        nilaiHuruf = 'A';
        indeksNilai = '4.00';
        keterangan = 'Pujian';
    } else if (nilaiAkhir >= 79) {
        nilaiHuruf = 'A-';
        indeksNilai = '3.67';
        keterangan = 'Sangat Memuaskan';
    } else if (nilaiAkhir >= 74) {
        nilaiHuruf = 'B+';
        indeksNilai = '3.33';
        keterangan = 'Sangat Memuaskan';
    } else if (nilaiAkhir >= 69) {
        nilaiHuruf = 'B';
        indeksNilai = '3.00';
        keterangan = 'Memuaskan';
    } else if (nilaiAkhir >= 64) {
        nilaiHuruf = 'B-';
        indeksNilai = '2.67';
        keterangan = 'Memuaskan';
    } else if (nilaiAkhir >= 59) {
        nilaiHuruf = 'C+';
        indeksNilai = '2.33';
    } else if (nilaiAkhir >= 54) {
        nilaiHuruf = 'C';
        indeksNilai = '2.00';
    } else if (nilaiAkhir >= 41) {
        nilaiHuruf = 'D';
        indeksNilai = '1.00';
    } else if (nilaiAkhir >= 0 && nilaiAkhir <= 40) {
        nilaiHuruf = 'E';
        indeksNilai = '0.00';
    } else {
        alert('Nilai tidak valid!');
        return;
    }

    const hasil = `
        <h2>Hasil Input Nilai Mahasiswa</h2>
        <p><strong>NIM:</strong> ${nim}</p>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Mata Kuliah:</strong> ${matkul}</p>
        <p><strong>Nilai Akhir:</strong> ${nilaiAkhir}</p>
        <p><strong>Nilai Huruf:</strong> ${nilaiHuruf}</p>
        <p><strong>Indeks Nilai:</strong> ${indeksNilai}</p>
        <p><strong>Keterangan:</strong> ${keterangan}</p>
    `;

    document.getElementById('hasil').innerHTML = hasil;
}
