// 1

document.getElementById("kontrol").addEventListener("click", function () {
  //kullanıcı ne yaptığında bu fonksiyon çalışsın anlamına gelen kod satırı

  const yas = Number(document.getElementById("yas").value); //Input alanından değeri alacak ve sayıya çevirecek
  let mesaj; //Sonucu tutacak

  if (yas >= 0 && yas <= 2) {
    mesaj = "Bebek"; //yas 0 büyük eşit ve 2 küçük eşit ise bebektir.
  } else if (yas >= 3 && yas <= 11) {
    mesaj = "Çocuk"; //yas 3 büyük eşit ve 11 küçük eşit ise çocuktur.
  } else if (yas >= 12 && yas <= 18) {
    mesaj = "Ergen"; //yas 12 büyük eşit ve 18 küçük eşit ise ergendir.
  } else if (yas >= 19 && yas <= 60) {
    mesaj = "Yetişkin"; //yas 19 büyük keşit ve 60 küçük eşit ise yetişkindir.
  } else if (yas >= 60) {
    mesaj = "Emekli";
  } else {
    mesaj = "Geçersiz Yaş";
  }

  //if - else if - else yapısı ile belirli bir aralıktaki yaşların hangi mesajı vereceğini gösteriyoruz.

  document.getElementById("sonuc").innerText = mesaj; //mesaj değişkenlerini gerekli aralıkta olunca sonuc paragrafında yazdırır.
});

// 2

document.getElementById("goster").addEventListener("click", function () {
  const sayi = Number(document.getElementById("sayi").value);
  let karakter;

  switch (sayi) {
    case 0:
      karakter = ")";
      break;
    case 1:
      karakter = "!";
      break;
    case 2:
      karakter = "é";
      break;
    case 3:
      karakter = "++";
      break;
    case 4:
      karakter = "/";
      break;
    case 5:
      karakter = "||";
      break;
    case 6:
      karakter = "[";
      break;
    case 7:
      karakter = "]";
      break;
    case 8:
      karakter = "?";
      break;
    case 9:
      karakter = "(";
      break;
    default:
      karakter = "Geçersiz Giriş.";
      break;
  }
  // switch-case yapısı ile yapıldı çünkü her sayının belirli bir karakteri ifade etmesi bekleniyordu.

  document.getElementById(
    "sonuc_2"
  ).innerText = `Girdiğiniz sayı: ${sayi}, özel karakteri ${karakter}`;
});

// 3

document.getElementById("kontrol_2").addEventListener("click", function () {
  // üç basamaklı olup olmadığını kontrol ettik.
  if (sayi_2.length === 3) {
    // rakamları kontrol et
    const rakamlar = new Set(sayi_2); // set kullanarak benzersiz rakamları tespit et
    if (rakamlar.size < 3) {
      document.getElementById("sonuc_3").innerText = "Aynı rakamlar var";
    } else {
      document.getElementById("sonuc_3").innerText = "Aynı rakamlar yok";
    }
  } else {
    document.getElementById("sonuc_3").innerText =
      "Lütfen 3 Basamaklı sayı girin";
  }
});


// 4

document.getElementById("kontrol_3").addEventListener("click", function(){
    const yil = Number(document.getElementById("yil").value)

    let artikYil =  (yil % 400 === 0) || (yil % 4 === 0 && yil % 100 !== 0)
    // belirlenen bir hesaplama olduğu için önce hesaplamaları gerçekleştiren mantık önermelerini yazdım

    if (artikYil) {
        document.getElementById("sonuc_4").innerText = `${yil} bir artık yıldır`
    }
    else {
        document.getElementById("sonuc_4").innerText = `${yil} bir artık yıl değildir`
    }

    //sonrada sonucun ya olumlu ya da olumsuz çıkacağını göstermek için if-else kullandım
})


// 5

document.getElementById("kontrol_4").addEventListener("click", function () {
    const sayi_3 = document.getElementById("sayi_3").value

    //Beş basamaklı olup olmadıığını kontrol ediyoruz 

    if (sayi_3.length === 5) {
        //Palindrom kontrol
        const palindromMu = sayi_3 === sayi_3.split('').reverse().join('')

        if (palindromMu) {
            document.getElementById("sonuc_5").innerText = `${sayi_3} bir palindrom sayıdır`
        }
        else {
            document.getElementById("sonuc_5").innerText = `${sayi_3} bir palindrom sayı değildir`
        }
    }
    else {
        document.getElementById("sonuc_5").innerText = "Lütfen beş basamaklı bir sayı girin"
    }
})



// 6 

//önce dönüşüm oranlarını yazalım

const donusumOranlari = {
    EUR: 0.026,   //1 TL'nin karşılığı
    USD: 0.029,
    RUS: 2.71
}

document.getElementById("donusum").addEventListener("click", function(){
    const tlMiktar = parseFloat(document.getElementById("tl").value) //kullanıcının girdiği TL miktarı
    const secilenParaBirimi = document.getElementById("paraBirimi").value //secilen para birimi

    //Geçerli bir miktar girildi mi?

    if(isNaN(tlMiktar) || tlMiktar <= 0) {
        document.getElementById("sonuc_6").innerText = `Lütfen geçerli bir TL miktarı girin`

        return
    }

    //Donuştürme işlemi

    const donusturulenMiktar = (tlMiktar * donusumOranlari[secilenParaBirimi]).toFixed(2)

    document.getElementById("sonuc_6").innerText = `${tlMiktar} TL = ${donusturulenMiktar} ${secilenParaBirimi}`
})


// 7



