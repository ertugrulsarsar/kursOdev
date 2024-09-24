// 1-Kullanıcının adını isteme
function sayHi() {
  const userName = document.getElementById("userName").value;
  alert(`Merhaba, ${userName}`);
}

// 2-Kullanıcının yaşını bulma
function findAge() {
  const nowYear = 2024;
  const userYear = document.getElementById("resultAge").value;
  resultAge = nowYear - userYear;
  alert(`Kullanıcının yaşı: ${resultAge}`);
}

// 3-Kare çevresini bulma
function findKareCevre() {
  let birKenar = document.getElementById("kareCevre").value;
  let kareCevre = 4 * birKenar;
  alert(`Karenin çevresi: ${kareCevre}cm`);
}

// 4-Dairenin alanını bulma
function findDaireAlan() {
  let piSayisi = 3.14; // pi sasyısı sabit olarak girildi.
  let yaricap = document.getElementById("daireAlan").value;
  let daireAlan = piSayisi * yaricap ** 2;
  alert(`Dairenin alanı: ${daireAlan}`);
}

// 5-Kullanıcının yapması gereken hızı hesaplama
function hesaplaHiz() {
  let mesafe = document.getElementById("mesafe").value;
  let sure = document.getElementById("sure").value;
  resultlSpeed = mesafe / sure;
  alert(`Gitmeniz gereken hız: ${resultlSpeed}km/Sa`);
}

// 6-Döviz çevirici
function dovizCevirici() {
  let euro = 0.9; // Doların Euro karşısındaki değeri
  let dolarSayisi = document.getElementById("dolarSayisi").value;
  resultEuro = dolarSayisi * euro;
  alert(`Elinizdeki Euro Miktarı: ${resultEuro}`);
}

// 7-Flash Bellek Boyutu Hesaplama
function bellekBoyutu() {
  let flashBellekGB = document.getElementById("flashBellekGB").value;
  let flashBellekMB = flashBellekGB * 1024; //burada gb cinsinden yazılan belleğin kaç mb olduğunu buluyoruz
  const dosyaBoyutuMB = 820;
  dosyaSayisi = Math.floor(flashBellekMB / dosyaBoyutuMB); //burada mb cinsinden öğrendiğimiz dosyayı belirttiğimiz dosya boyutuna bölüyoruz
  alert(
    `${flashBellekGB} GB kapasiteli belleğe ${dosyaSayisi.toFixed(
      1
    )} adet ${dosyaBoyutuMB} MB boyutunda dosya sığabilir.`
  ); //burada toFixed ile bulduğumuz sonucuc 2 basamaklı olarak yazdırıyoruz
}

// 8-Kalan parayı hesaplama
function kalanParaHesaplama() {
  let mevcutPara = document.getElementById("mevcutPara").value;
  let chocolatePrice = document.getElementById("chocolatePrice").value;
  let chocolateAdet = Math.floor(mevcutPara / chocolatePrice); //burada kaç adet çikolata alabileceğimizi buluyoruz
  let toplamFiyat = chocolateAdet * chocolatePrice;
  let kalanPara = mevcutPara - toplamFiyat; //burada kalan parayı bulmak için mevcut parayı harcanan paradan çıkarıyoruz
  alert(
    `${chocolateAdet} adet çikolatanın toplam fiyatı ${toplamFiyat}TL'dir. Kalan paranız ${kalanPara}TL'dir`
  );
}

function tersCevir() {
// 9-Sayıyı ters çevirerek gösterme (% mod alarak bulma yöntemi)
let girilenSayi = document.getElementById("girilenSayi").value;
//mod alarak bulmak için sayıyı basamaklarına ayırmamız gerekecek
const birler = girilenSayi % 10; //birler basamağını bulma
const onlar = Math.floor((girilenSayi / 10) % 10); // onlar basamağını bulma
const yuzler = Math.floor(girilenSayi / 100); //yüzler basamağını bulma
//bulduğumuz basamakları ters çevirerek yazıcaz
const tersSayi = birler * 100 + onlar * 10 + yuzler;
alert(`Girilen ${girilenSayi} sayısının ters olarak yazılmış hali ${tersSayi}`);
}

// 10-Girilen sayının çift ya da tek olduğunu bulma
function tekCift() {
const girilenSayi_2 = document.getElementById("girilenSayi_2").value;
const resultSayi = (girilenSayi_2 % 2 == 0 && "Çift") || "Tek";
alert(`Girilen sayı ${resultSayi} değerlidir.`);
}