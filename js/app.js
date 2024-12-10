// Ambil elemen tombol Submit
const submitButton = document.getElementById('submit');

// Tambahkan event listener pada tombol Submit
submitButton.addEventListener('click', () => {
    const selectedGejala = [
        document.getElementById('gejala1').checked,
        document.getElementById('gejala2').checked,
        document.getElementById('gejala3').checked,
        document.getElementById('gejala4').checked,
        document.getElementById('gejala5').checked,
        document.getElementById('gejala6').checked,
        document.getElementById('gejala7').checked,
        document.getElementById('gejala8').checked,
        document.getElementById('gejala9').checked,
        document.getElementById('gejala10').checked,
        document.getElementById('gejala11').checked,
        document.getElementById('gejala12').checked,
        document.getElementById('gejala13').checked,
        document.getElementById('gejala14').checked,
        document.getElementById('gejala15').checked,
        document.getElementById('gejala16').checked,
        document.getElementById('gejala17').checked,
        document.getElementById('gejala18').checked,
        document.getElementById('gejala19').checked
    ];

    // Hitung skor seperti sebelumnya
    let manikScore = 0, depresiScore = 0, bipolarScore = 0;
    const probabilities = {
        manik: { gejala1: 0.63, gejala2: 0.63, gejala3: 0.38, gejala4: 0.25, gejala5: 0.50, gejala6: 0.63, gejala7: 0.63, gejala8: 0.38 },
        depresi: { gejala9: 0.50, gejala10: 0.42, gejala11: 0.50, gejala12: 0.42, gejala13: 0.33, gejala14: 0.42, gejala15: 0.50, gejala16: 0.42, gejala17: 0.50, gejala18: 0.42, gejala19: 0.50, gejala2: 0.50 },
        bipolar: { gejala1: 0.32, gejala2: 0.42, gejala3: 0.37, gejala4: 0.32, gejala5: 0.32, gejala6: 0.42, gejala7: 0.16 }
    };

    selectedGejala.forEach((isChecked, index) => {
        const gejalaKey = `gejala${index + 1}`;
        if (isChecked) {
            manikScore += probabilities.manik[gejalaKey] || 0;
            depresiScore += probabilities.depresi[gejalaKey] || 0;
            bipolarScore += probabilities.bipolar[gejalaKey] || 0;
        }
    });

    // Hitung persentase
    const totalScore = manikScore + depresiScore + bipolarScore;
    const manikPercent = ((manikScore / totalScore) * 100).toFixed(2);
    const depresiPercent = ((depresiScore / totalScore) * 100).toFixed(2);
    const bipolarPercent = ((bipolarScore / totalScore) * 100).toFixed(2);

    // Redirect ke halaman hasil dengan query string
    const queryParams = new URLSearchParams({
        manik: manikPercent,
        depresi: depresiPercent,
        bipolar: bipolarPercent
    }).toString();

    window.location.href = `hasil.html?${queryParams}`;
});
