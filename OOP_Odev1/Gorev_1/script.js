//Araç adında sınıf tanımladım.
class Arac {
  constructor(marka, model, renk, kacKM, yil, motorGucu, yakitTipi) {
    this.marka = marka;
    this.model = model;
    this.renk = renk;
    this.kacKM = kacKM;
    this.yil = yil;
    this.motorGucu = motorGucu;
    this.yakitTipi = yakitTipi;
  }

  //Aracın bilgilerinin girildiği yer
  aracBilgi() {
    document.write("Araç Bilgi: ");
    document.write("<br>Marka: " + this.marka);
    document.write("<br>Model: " + this.model);
    document.write("<br>Renk: " + this.renk);
    document.write("<br>Kaç KM: " + this.kacKM);
    document.write("<br>Yıl: " + this.yil);
    document.write("<br>Motor Gücü: " + this.motorGucu);
    document.write("<br>Yakıt Tipi: " + this.yakitTipi);
  }
}

const myArac = new Arac(
  "Renault",
  "Symbol",
  "Metalik Gri",
  268000,
  2010,
  65 + "hp",
  "Dizel"
);

myArac.aracBilgi();

///////////////////////////////////////////////////////////////////////////////

class Yolculuk {
  constructor(mesafe, ortalamaHiz) {
    this.mesafe = mesafe;
    this.ortalamaHiz = ortalamaHiz;
  }

  //Gereken toplam zamanı hesaplayan yöntem
  zamanHesapla() {
    let toplamSure = this.mesafe / this.ortalamaHiz //mesafeyi hıza bölerek süreyi hesapladım

    const molaSayi = Math.floor(toplamSure / 4) //her 4 saatte bir kaç tane mola yaptığını bulmak için

    toplamSure += molaSayi // topla süreye mola sayısını ekledim

    //Toplam süreyi saat ve dakika cinsine çevirdim
    const saat = Math.floor(toplamSure)
    const dakika = Math.round(toplamSure - saat) * 60


    return {
        saat: saat,
        dakika: dakika,
        molaSayi: molaSayi
    }
  }
}
//Hesapla butonuna tıklandığında

document.getElementById('hesapla').addEventListener('click', function() {

    const mesafe = parseFloat(document.getElementById('mesafe').value)
    const ortalamaHiz = parseFloat(document.getElementById('ortalamaHiz').value)


    const yolculuk = new Yolculuk(mesafe,ortalamaHiz)
    const sonuc = yolculuk.zamanHesapla()


    //sonucu ekrana yazdır

    document.getElementById('sonuc').innerText = `${sonuc.saat} saat ${sonuc.dakika} dakika ${sonuc.molaSayi} adet molaya çıkıldı.`
    // document.getElementById('molaSayi').innerText = `${sonuc.molaSayi} adet molaya çıkıldı.`
}) 
