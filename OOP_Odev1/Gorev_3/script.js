class Zaman {
  constructor(saat, dakika, saniye) {
    this.saat = saat;
    this.dakika = dakika;
    this.saniye = saniye;
    this.normalZaman(); // zaman içerisinde fazlalıkları çıkaran işlev
  }
  normalZaman() {
    // saniye 60dan fazla olunca dakikaya aktaracak
    if (this.saniye >= 60) {
      this.dakika += Math.floor(this.saniye / 60);
      this.saniye = this.saniye % 60;
    }
    // dakika 60dan fazla olunca saate aktaracak
    if (this.dakika >= 60) {
      this.saat += Math.floor(this.dakika / 60);
      this.dakika = this.dakika % 60;
    }
    this.saat = this.saat % 24; // saatin 24 saat formatında kalmasını sağlar. 24'e bölümünden kalanı veriyor.
  }

  //Zaman yazdırma işlevi
  zamanYazdir() {
    const saniyeFormatted = String(this.saniye).padStart(2, "0");
    const dakikaFormatted = String(this.dakika).padStart(2, "0");
    const saatFormatted = String(this.saat).padStart(2, "0");

    return `${saatFormatted}:${dakikaFormatted}:${saniyeFormatted}`;
  }

    // Zamanları ekleyen yöntem

    saniyeEkle(saniye) {
      this.saniye += saniye;
      this.normalZaman();
    }
    dakikaEkle(dakika) {
      this.dakika += dakika;
      this.normalZaman();
    }
    saatEkle(saat) {
      this.saat += saat;
      this.normalZaman;
    }
}

///Classla işim bitti şimdi ekrana yazdırma yöntemini yazıcam

const zaman = new Zaman(0, 0, 0);

document.getElementById("zamanYazdir").addEventListener('click', function () {
  const saatVal = parseInt(document.getElementById("saat").value) || 0;
  const dakikaVal = parseInt(document.getElementById("dakika").value) || 0;
  const saniyeVal = parseInt(document.getElementById("saniye").value) || 0;

  // yeni bir zaman nesnesi oluşturduk
  const yeniZaman = new Zaman(saatVal, dakikaVal, saniyeVal);
  document.getElementById("sonuc").innerText = yeniZaman.zamanYazdir();
});

// zaman değiştir butonuna tıklandığında
document.getElementById("zamanDegistir").addEventListener('click', function () {
  const saniyeEkleVal = parseInt(document.getElementById("ekleSaniye").value) || 0;
  const dakikaEkleVal = parseInt(document.getElementById("ekleDakika").value) || 0;
  const saatEkleVal = parseInt(document.getElementById("ekleSaat").value) || 0;

  zaman.saniyeEkle(saniyeEkleVal);
  zaman.dakikaEkle(dakikaEkleVal);
  zaman.saatEkle(saatEkleVal);

  document.getElementById("sonuc").innerText = zaman.zamanYazdir();
});

