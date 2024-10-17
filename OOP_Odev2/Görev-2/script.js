//Fişi tanımlayan dizi
let fis = [
  { ad: "Elma", miktar: 3, birimFiyat: 5 },
  { ad: "Armut", miktar: 10, birimFiyat: 3 },
  { ad: "Portakal", miktar: 7, birimFiyat: 15 },
  { ad: "Muz", miktar: 3, birimFiyat: 30 },
];

//Ekran üzerinde fiş yazdırmak
function fisYazdir() {
  const fisDiv = document.getElementById("fis"); //fişin yazdırılacağı div
  fisDiv.innerHTML = "<h2>Fiş:</h2>"; //başlık ekler
  fis.forEach((urun) => {
    //her ürün için döngü başlat
    fisDiv.innerHTML += `<p>${urun.ad} - Miktar: ${urun.miktar}, Birim fiyatı: ${urun.birimFiyat}TL</p>`; //ürüün bilgilerini yazdır
  });
}

//satın alma toplam tutarının hesaplanması
// Satın alma toplam tutarının hesaplanması
function toplamTutarHesaplama() {
  // `fis` dizisindeki her ürünü döngüyle gezerek toplam tutarı hesaplar
  return fis.reduce(
    (toplam, urun) => {
      // `toplam`: Önceki toplam değeri (ilk başta 0'dan başlar)
      // `urun`: Şu anki döngüdeki ürün nesnesi

      // Ürünün toplam fiyatını hesaplar (miktar * birim fiyat)
      return toplam + urun.miktar * urun.birimFiyat;
    },
    0 // Başlangıç değeri, toplamın ilk değeri 0
  );
  // reduce metodu, dizideki tüm ürünlerin toplam fiyatını döndürür
}

//çekteki en pahalı satın alım
// Çekteki en pahalı satın alım
function enPahaliUrun() {
  return fis.reduce(
    (enPahali, urun) => {
      // `enPahali`: Şu ana kadar bulunan en pahalı ürün (başlangıçta toplamı 0 olan bir nesne)
      // `urun`: Şu anki döngüdeki ürün nesnesi

      // Mevcut ürünün toplam fiyatını hesaplar (miktar * birim fiyat)
      const toplamFiyat = urun.miktar * urun.birimFiyat;

      // Eğer mevcut ürünün toplam fiyatı, daha önce bulunan en pahalı üründen fazlaysa
      return toplamFiyat > enPahali.toplam
        ? { ad: urun.ad, toplam: toplamFiyat } // Yeni en pahalı ürünü döndür
        : enPahali; // Aksi halde, mevcut en pahalı ürünü döndür
    },
    { toplam: 0 } // Başlangıç değeri, en pahalı ürünün toplam fiyatı 0
  );
  // reduce metodu, en pahalı ürünü bulur ve döndürür
}

//fişteki bir ürünün ortalama maliyeti
function ortalamaMaliyetHesapla(urunAdi) {
  const urun = fis.find((urun) => urun.ad === urunAdi);
  if (urun) {
    return urun.birimFiyat;
  }
  return null;
}

//fonksiyonları kullanmayı ve yazdırma

fisYazdir();
document.getElementById(
  "toplamTutar"
).innerHTML = `Toplam Tutar: ${toplamTutarHesaplama()}TL`;
const pahaliUrun = enPahaliUrun();
document.getElementById(
  "enPahaliUrun"
).innerHTML = `En Pahalı Ürün: ${pahaliUrun.ad}, Tutar: ${pahaliUrun.toplam}TL`;
const ortalamaMaliyet = ortalamaMaliyetHesapla("Elma");
document.getElementById(
  "ortalamaMaliyet"
).innerHTML = `Elma Ortalama Maliyet: ${ortalamaMaliyet}TL`;
