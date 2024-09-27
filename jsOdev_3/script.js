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
