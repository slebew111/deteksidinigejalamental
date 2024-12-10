// Ambil query string dari URL
const params = new URLSearchParams(window.location.search);

// Ambil nilai persentase dari query string
const manikPercent = params.get('manik');
const depresiPercent = params.get('depresi');
const bipolarPercent = params.get('bipolar');

// Tampilkan hasil di tabel
document.getElementById('result-manik').textContent = `${manikPercent}%`;
document.getElementById('result-depresi').textContent = `${depresiPercent}%`;
document.getElementById('result-bipolar').textContent = `${bipolarPercent}%`;

// Tampilkan solusi
let solutionText = "<h3>Saran untuk Anda:</h3>";
if (manikPercent > depresiPercent && manikPercent > bipolarPercent) {
    solutionText += "<p>Kecenderungan Anda adalah gangguan manik. Cobalah untuk menjaga rutinitas harian, hindari aktivitas impulsif, dan konsultasikan dengan profesional jika gejala berlanjut.</p>";
} else if (depresiPercent > manikPercent && depresiPercent > bipolarPercent) {
    solutionText += "<p>Kecenderungan Anda adalah depresi. Cobalah menjaga pola tidur, berbicara dengan orang terdekat, dan pertimbangkan untuk menemui konselor atau psikiater.</p>";
} else {
    solutionText += "<p>Kecenderungan Anda adalah bipolar. Edukasi diri tentang bipolar, pastikan konsistensi dalam rutinitas Anda, dan konsultasikan dengan psikiater untuk manajemen lebih baik.</p>";
}

document.getElementById('solution').innerHTML = solutionText;
