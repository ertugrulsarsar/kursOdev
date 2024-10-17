//Alışveriş Listesi
let alisverisListesi = []; //boş bir dizi oluşturuldu

//Listeyi güncellemek ve görüntülemek için yazılacak fonksiyon
function listeyiYazdir() {
  const satinAlinmayanlar = alisverisListesi.filter(
    (urun) => !urun.satinAlindi
  ); //satın alınmamış ürünleri filtreler
  const satinAlinanlar = alisverisListesi.filter((urun) => urun.satinAlindi); //satın alınan ürünleri filtreler

  const satinAlinmayanlarUL = document.getElementById("satinAlinmayanlar"); //Satın alınmayanlar listesini DOM'dan alır
  const satinAlinanlarUL = document.getElementById("satinAlinanlar"); //satın alınanlar listesini DOM'dan alır

  satinAlinmayanlarUL.innerHTML = ""; //satın alınmayanlar listesini temizler
  satinAlinanlarUL.innerHTML = ""; //satın alınanlar listesini temizler

  //satın alınmayan her bir ürün için döngü başlat. Ürün adını ve miktarını listeye ekle
  satinAlinmayanlar.forEach((urun) => {
    satinAlinmayanlarUL.innerHTML += `<li>${urun.ad} - Miktar:${urun.miktar}</li>`;
  });

  //satın alınan her bir ürün için döngü başlat. Ürün adını ve miktarını listeye ekle
  satinAlinanlar.forEach((urun) => {
    satinAlinanlarUL.innerHTML += `<li>${urun.ad} - Miktar:${urun.miktar}</li>`;
  });
}

//Yeni ürün eklemek için fonksiyon oluşturuldu
function satinAlmaEkle() {
  const ad = document.getElementById("urunAd").value; //ürün adını al
  const miktar = parseInt(document.getElementById("urunMiktar").value); //miktarı al ve tam sayıya çevir

  if (ad && miktar > 0) {
    //ürün adı ve miktar geçerliyse
    const mevcutUrun = alisverisListesi.find((urun) => urun.ad === ad); //mevcut ürün kontrolü yapılır

    if (mevcutUrun) {
      //eğer ürün zaten varsa
      mevcutUrun.miktar += miktar; //miktarı arttır
    } else {
      alisverisListesi.push({ ad, miktar, satinAlindi: false }); //eğer ürün yoksa yeni ürün ekle
    }
    document.getElementById("urunAd").value = ""; //ürün adını temizle
    document.getElementById("urunMiktar").value = ""; //ürün miktarını temizle
    listeyiYazdir(); //listeyi güncelle
  } else {
    alert("Lütfen geçerli bir ürün adı ve miktar girin!"); //geçersiz giriş durumunda kullanıcıyı uyar
  }
}

//Ürünü satın almak için fonksiyon oluşturuldu
function urunSatinAl() {
  const ad = document.getElementById("satinalAd").value; //satın alınacak ürün adını alır

  if (ad) {
    //ürün adı geçerliyse
    const urun = alisverisListesi.find((urun) => urun.ad === ad); //ürünü kontrol eder

    if (urun) {
      //eğer ürün bulunursa
      urun.satinAlindi = true; //ürünü satın alındı olarak işaretler
      document.getElementById("satinalAd").value = ""; //satın alınacak ürün adını temizler
      listeyiYazdir(); //listeyi güncelle
    } else {
      alert(`${ad} ürünü bulunamadı!`); //ürünü bulamazsa kullanıcıyı uyar
    }
  } else {
    alert("Lütfen satın alınacak ürün adını girin!"); //geçersiz giriş durumunda kullanıcıyı uyar
  }
}
