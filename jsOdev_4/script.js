/*Hangi görev için hangi döngü yapısının daha uygun olduğuna siz karar
vermelisiniz: WHILE, DO WHILE veya FOR.*/

/*
1. WHILE Döngüsü
Kullanım Durumu: Döngü koşulu baştan kontrol edilir. Koşul sağlanmadığı sürece döngü çalışmaz.
Uygun Görevler:
Belirsiz sayıda tekrarlamalarda, koşulun başlangıçta doğruluğu bilinmediğinde.
Kullanıcıdan belirli bir giriş alınana kadar devam eden işlemlerde.
*/

/*
2. DO WHILE Döngüsü
Kullanım Durumu: Döngü en az bir kez çalışır, çünkü koşul döngünün sonunda kontrol edilir.
Uygun Görevler:
Kullanıcının en az bir kez işlem yapmasını zorunlu kılmak gerektiğinde.
Bir işlemin sonucu veya çıktısının hemen kontrol edilmesi gerektiğinde.
*/

/*
3. FOR Döngüsü
Kullanım Durumu: Belirli bir sayıda tekrarlama gerektiğinde kullanılır. Genellikle bir sayacı takip eder.
Uygun Görevler:
Bilinçli olarak belirli bir aralıkta (örn. 0'dan 10'a kadar) döngü kurmak.
Dizi veya koleksiyon üzerinde iterasyon yapmak.
*/

// 1

document.getElementById("hesaplaBtn").addEventListener("click", function () {
  //Kullanıcıdan başlangıç ve bitiş sayıları al

  let baslangıc = parseInt(prompt("Başlangıç Sayısını Girin:"));
  let bitis = parseInt(prompt("Bitiş Sayısını Girin:"));

  //Toplam Değişkeni Tanımla

  let toplam = 0;
  let sayi = baslangıc;

  //While Döngüsü, başlangıç koşulunu kontrol edecek ve devam edecek

  while (sayi <= bitis) {
    toplam += sayi;
    sayi++;
  }

  // Ekrana yazdır

  document.getElementById(
    "sonuc"
  ).innerText = `${baslangıc} ile ${bitis} arasındaki sayıların toplamı ${toplam}`;
});

// 2

document.getElementById("hesaplaBtn_2").addEventListener("click", function () {
  //Kullanıcıdan iki sayı alacağız

  let sayi_1 = parseInt(prompt("Birinci Sayıyı Girin:"));
  let sayi_2 = parseInt(prompt("İkinci Sayıyı Girin:"));

  //En büyük ortak bölen (EBOB)

  let ebob = 1; //EBOB en düşük değeri 1 olabilir
  let i = 1; //Döngü için sayaç

  // While Döngüsü kullanarak en küçük sayıdan itibaren kontrol edicez

  while (i < Math.min(sayi_1, sayi_2)) {
    if (sayi_1 % i === 0 && sayi_2 % i === 0) {
      ebob = i; //Demek istediğim eğer "i", her iki sayıya da tam bölünüyorsa EBOB'u güncelle
    }
    i++; // Sayacı da arttır
  }
  // Sonucu ekrana yazdıralım

  document.getElementById(
    "sonuc_2"
  ).innerText = `${sayi_1} ve ${sayi_2} sayılarının EBOB'u: ${ebob}`;
});

// 3

document.getElementById("hesaplaBtn_3").addEventListener("click", function () {
  //Kullancııdan sayi alıcaz
  let sayi_3 = parseInt(prompt("Bir sayı girin:"));

  //Sonucları tutmak için boş bir dizi lazım
  let arraySonuc = [];

  // For döngüsü ile 1'den sayıya kadar olan bölenleri kontrol edicez
  for (let i = 1; i <= sayi_3; i++) {
    if (sayi_3 % i === 0) {
      arraySonuc.push(i); //Eğer i sayısı tam bölünüyorsa bolenler dizisine ekle
    }
  }

  //Ekrana yazdır
  document.getElementById(
    "sonuc_3"
  ).innerText = `${sayi_3} sayısının bölenleri: ${arraySonuc.join(", ")}`;
});

// 4

document.getElementById("sayacBtn").addEventListener("click", function () {
  // Kullanıcıdan bir sayı al
  let sayi = prompt("Bir sayı girin:");

  // Rakam sayısını tutmak için değişken
  let rakamSayisi = 0;

  // FOR döngüsü ile sayının her bir rakamını say
  for (let i = 0; i < sayi.length; i++) {
    if (!isNaN(sayi[i]) && sayi[i] !== " ") {
      rakamSayisi++; // Eğer karakter bir rakam ise sayıyı artır
    }
  }

  // Sonucu ekrana yazdır
  document.getElementById(
    "sonuc_4"
  ).innerText = `Girilen sayıdaki rakam sayısı: ${rakamSayisi}`;
});


// 5 

document.getElementById("istatistikBtn").addEventListener("click", function() {
    // Sayı istatistiklerini tutmak için değişkenler
    let pozitifSayisi = 0;
    let negatifSayisi = 0;
    let sifirSayisi = 0;
    let tekSayisi = 0;
    let ciftSayisi = 0;

    // 10 sayı girişi yapacak döngü
    for (let i = 0; i < 1; i++) {
        let sayi = parseFloat(prompt(`Lütfen ${i + 1}. sayıyı girin:`));

        // Geçerli sayı kontrolü
        if (isNaN(sayi)) {
            alert("Lütfen geçerli bir sayı girin.");
            i--; // Geçersiz giriş için sayacı geri al
            continue; // Döngünün başına dön
        }

        // Pozitif, negatif veya sıfır kontrolü
        if (sayi > 0) {
            pozitifSayisi++;
        } else if (sayi < 0) {
            negatifSayisi++;
        } else {
            sifirSayisi++;
        }

        // Çift veya tek kontrolü
        if (sayi % 2 === 0) {
            ciftSayisi++;
        } else {
            tekSayisi++;
        }
    }

    // Sonuçları ekrana yazdır
    document.getElementById("sonuc_5").innerText = `
        Pozitif Sayılar: ${pozitifSayisi} \n
        Negatif Sayılar: ${negatifSayisi} \n
        Sıfır Sayıları: ${sifirSayisi} \n
        Çift Sayılar: ${ciftSayisi} \n
        Tek Sayılar: ${tekSayisi}
    `;
});


// 6

document.getElementById("hesapMakinesiBtn").addEventListener("click", function() {
    let devam = true; // Döngü kontrolü için değişken

    while (devam) {
        // Kullanıcıdan iki sayı ve bir işlem işareti al
        let sayi1 = parseFloat(prompt("Birinci sayıyı girin:"));
        let sayi2 = parseFloat(prompt("İkinci sayıyı girin:"));
        let islem = prompt("Yapmak istediğiniz işlemi girin (+, -, *, /):");

        let sonuc;

        // İşlem kontrolü ve sonucu hesaplama
        switch (islem) {
            case '+':
                sonuc = sayi1 + sayi2;
                break;
            case '-':
                sonuc = sayi1 - sayi2;
                break;
            case '*':
                sonuc = sayi1 * sayi2;
                break;
            case '/':
                if (sayi2 !== 0) {
                    sonuc = sayi1 / sayi2;
                } else {
                    sonuc = "Bir sayıyı sıfıra bölemezsiniz!";
                }
                break;
            default:
                sonuc = "Geçersiz işlem işareti!";
        }

        // Sonucu ekrana yazdır
        document.getElementById("sonuc_6").innerText = `Sonuç: ${sonuc}`;

        // Kullanıcıya başka bir işlem yapmak isteyip istemediğini sor
        let cevap = prompt("Başka bir işlem yapmak ister misiniz? (evet/hayır):");
        if (cevap.toLowerCase() === 'hayır') {
            devam = false; // Döngüyü sonlandır
        }
    }
});

// 8 

const gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
        
document.getElementById("gosterBtn").addEventListener("click", function() {
    // Sistemin gününü al
    let bugununTarihi = new Date();
    let index = bugununTarihi.getDay(); // Bugünün gününü al (0: Pazar, 1: Pazartesi, ...)
    
    // Kullanıcıdan yanıt almak için döngü
    while (true) {
        // Gün bilgisini göster
        alert(`Haftanın günü: ${gunler[index]}.`);

        // Kullanıcıya sorma
        let devam = confirm("Bir sonraki günü görmek ister misiniz?");

        if (!devam) {
            break; // Kullanıcı "Hayır" derse döngüden çık
        }

        // Sonraki güne geç
        index = (index + 1) % gunler.length; // İndeksi döngüsel olarak güncelle
    }
});

// 9

const tabloDiv = document.getElementById("carpimTablosu");

for (let i = 2; i <= 9; i++) {
    let tablo = `<h2>${i} Sayısının Çarpım Tablosu</h2>`;
    tablo += `<table><tr><th>${i} x</th>`;
    
    // 1'den 10'a kadar olan sayıları başlık olarak ekle
    for (let j = 1; j <= 10; j++) {
        tablo += `<th>${j}</th>`;
    }
    tablo += `</tr><tr><td>${i}</td>`;
    
    // Çarpım sonuçlarını hesapla ve tabloya ekle
    for (let j = 1; j <= 10; j++) {
        tablo += `<td>${i * j}</td>`;
    }
    tablo += `</tr></table>`;
    tabloDiv.innerHTML += tablo; // Tabloyu div'e ekle
}

