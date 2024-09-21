// 1-Kullanıcının adını isteme
let userName = prompt("Adınızı girin: ");
alert(`Merhaba, ${userName}`);

// 2-Kullanıcının yaşını bulma

let nowYear = 2024;
let userAge = prompt("Doğum yılınızı girin:");
resultAge = nowYear - userAge;
alert(`Kullanıcının yaşı: ${resultAge}`);

// 3-Kare çevresini bulma

let birKenar = prompt("Bir kenar uzunluğunu girin(cm): ");
let kareCevre = 4 * birKenar;
alert(`Karenin çevresi: ${kareCevre}cm`);

// 4-Dairenin alanını bulma

let piSayisi = 3.14; // pi sasyısı sabit olarak girildi.
let yaricap = prompt("Yarıçapı girin: ");
let daireAlan = piSayisi * yaricap ** 2;
alert(`Dairenin alanı: ${daireAlan}`);

// 5-Kullanıcının yapması gereken hızı hesaplama

let mesafe = prompt("İki şehir arasındaki mesafeyi km cinsinden yazınız: ");
let sure = prompt("Ulaşmak istediğiniz süreyi saat cinsinden yazınız: ");
resultlSpeed = mesafe / sure;
alert(`Gitmeniz gereken hız: ${resultlSpeed}`);

// 6-Döviz çevirici

let euro = 0.9;
let dolarSayisi = prompt("Elinizdeki dolar miktarını girin: ");
resultEuro = dolarSayisi * euro;
alert(`Elinizzdeki Euro Miktarı: ${resultEuro}`);

// 7-Flash Bellek Boyutu Hesaplama

let flashBellekGB = prompt("Bellek kapasitesini GB cinsinden girin: ");
let flashBellekMB = flashBellekGB * 1024; //burada gb cinsinden yazılan belleğin kaç mb olduğunu buluyoruz
const dosyaBoyutuMB = 820;
dosyaSayisi = flashBellekMB / dosyaBoyutuMB; //burada mb cinsinden öğrendiğimiz dosyayı belirttiğimiz dosya boyutuna bölüyoruz
alert(
  `${flashBellekGB} GB kapasiteli belleğe ${dosyaSayisi.toFixed(
    2
  )} adet ${dosyaBoyutuMB} boyutunda dosya sığabilir.`
); //burada toFixed ile bulduğumuz sonucuc 2 basamaklı olarak yazdırıyoruz

// 8-Kalan parayı hesaplama
let mevcutPara = prompt("Kaç paranız var?");
let chocolatePrice = prompt("Çikolata fiyatı?");
let chocolateAdet = mevcutPara / chocolatePrice; //burada kaç adet çikolata alabileceğimizi buluyoruz
let toplamFiyat = chocolateAdet * chocolatePrice;
let kalanPara = mevcutPara - toplamFiyat; //burada kalan parayı bulmak için mevcut parayı harcanan paradan çıkarıyoruz
alert(
  `${chocolateAdet} adet çikolatanın toplam fiyatı ${toplamFiyat}TL'dir. Kalan paranız ${kalanPara}TL'dir`
);

// 9-Sayıyı ters çevirerek gösterme (% mod alarak bulma yöntemi)
let girilenSayi = prompt("Üç basamaklı sayı girin");
//mod alarak bulmak için sayıyı basamaklarına ayırmamız gerekecek
a = Math.floor(girilenSayi / 100); //birler basamağını bulma
b = Math.floor(girilenSayi % 100) / 10; // onlar basamağını bulma
c = girilenSayi % 10; //yüzler basamağını bulma
//bulduğumuz basamakları ters çevirerek yazıcaz
tersSayi = (c * 100) + (b * 10) + a;
alert(`Girilen ${girilenSayi} sayısının ters olarak yazılmış hali ${tersSayi}`);
