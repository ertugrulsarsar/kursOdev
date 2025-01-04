class Arac {
    constructor(marka, model, ortalamaHiz) {
        this.marka = marka;
        this.model = model;
        this.ortalamaHiz = ortalamaHiz;
    }

    bilgiYazdir() {
        return `Araç Markası: ${this.marka}<br>Araç Modeli: ${this.model}<br>Ortalama Hız: ${this.ortalamaHiz} km/saat`;
    }

    zamanHesapla(mesafe) {
        if (this.ortalamaHiz <= 0) {
            return "Geçersiz hız bilgisi!";
        }

        const seyahatSuresiSaat = mesafe / this.ortalamaHiz;
        const molaSayisi = Math.floor(seyahatSuresiSaat / 4);
        const toplamZaman = seyahatSuresiSaat + molaSayisi;
        return `${mesafe} km mesafeyi katetmek için toplam süre: ${toplamZaman.toFixed(2)} saat`;
    }
}

document.getElementById("aracForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const marka = document.getElementById("marka").value;
    const model = document.getElementById("model").value;
    const ortalamaHiz = parseFloat(document.getElementById("ortalamaHiz").value);
    const mesafe = parseFloat(document.getElementById("mesafe").value);

    const arac = new Arac(marka, model, ortalamaHiz);
    const output = document.getElementById("output");

    const aracBilgisi = arac.bilgiYazdir();
    const zamanBilgisi = arac.zamanHesapla(mesafe);

    output.innerHTML = `<h3>Araç Bilgileri:</h3>${aracBilgisi}<br><br><h3>Hesaplama Sonucu:</h3>${zamanBilgisi}`;
});