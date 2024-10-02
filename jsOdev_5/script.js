// JavaScript Ödev 5

// 1

function compare(number1, number2) {
  if (number1 < number2) {
    return -1;
  } else if (number1 > number2) {
    return 1;
  } else {
    return 0;
  }
}
console.log(compare(1, 5)); //Eğer birinci sayi küçükse,
console.log(compare(10, 5)); //Eğer birinci sayi büyükse,
console.log(compare(10, 10)); // Eğer iki sayıda eşitse

// 2

function faktoriyel(number) {
  if (number < 0) {
    return "Sayı negatif olamaz";
  }
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i; // Result = result * 1
  }
  return result;
}

console.log(faktoriyel(-1));
console.log(faktoriyel(5));
console.log(faktoriyel(0));

// 3

function rakamdanSayi(figure1, figure2, figure3) {
  if (
    figure1 < 0 ||
    figure1 > 9 ||
    figure2 < 0 ||
    figure2 > 9 ||
    figure3 < 0 ||
    figure3 > 9
  ) {
    return "Geçersiz Giriş";
  }
  const number = figure1 * 100 + figure2 * 10 + figure3;

  return number;
}

console.log(rakamdanSayi(5, 9, 3)); // Çıktı: 593
console.log(rakamdanSayi(12, 6, 3)); // Çıktı: Geçersiz giriş
console.log(rakamdanSayi(0, 0, 0)); // Çıktı: 0

// 4

function alanHesapla(width, lenght) {
  // eğer sadece bir parametre varsa karanin alanını hesaplayacak
  if (lenght === undefined) {
    return width * width;
  } else {
    return width * lenght;
  }
}

console.log(alanHesapla(5)); // Çıktı: 25 Kare Alan Hesapla
console.log(alanHesapla(4, 5)); // Çıktı: 20 Dikdörtgen Alan Hesapla

// 5

function mukemmelSayi(number) {
  if (number < 0) {
    return "Mükemmel Sayılar Yalnızca Pozitif Tam Sayılardır";
  }

  let toplam = 0;

  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      toplam += i;
    }
  }

  return toplam === number;
}

console.log(mukemmelSayi(6)); // Çıktı: True
console.log(mukemmelSayi(28)); // Çıktı: True
console.log(mukemmelSayi(-6)); // Çıktı: Mükemmel sayılar yalnızca...
console.log(mukemmelSayi(15)); // Çıktı: False

// 6

function mukemmelSayiKontrol(number) {
  if (number < 0) {
    return "Mükemmel Sayılar Yalnızca Pozitif Tam Sayılardır";
  }

  let toplam = 0;

  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      toplam += i;
    }
  }

  return toplam === number;
}

function mukemmelSayiDizi(minNumber, maxNumber) {
  const mukemmelSayilar = [];

  for (let i = minNumber; i <= maxNumber; i++) {
    if (mukemmelSayiKontrol(i)) {
      mukemmelSayilar.push(i);
    }
  }
  return mukemmelSayilar;
}
console.log(mukemmelSayiDizi(1, 999)); // Çıktı: [6,28,496] Toplamda 3 adet mükemmel sayı varmış.


// 7

function saatGoster (saat, dakika = 0, saniye = 0) {
    const saatFormatted = String(saat).padStart(2, '0')
    const dakikaFormatted = String(dakika).padStart(2, '0')
    const saniyeFormatted = String(saniye).padStart(2, '0')


    const time = `${saatFormatted}:${dakikaFormatted}:${saniyeFormatted}`


    console.log(time)
}

saatGoster(5)           //Çıktı: 05:00:00
saatGoster(10,58,45)    //Çıktı: 10:58:45
saatGoster(23,"",15)    //Çıktı: 23:00:15                 


// 8

function zamanToSaniye (saat, dakika, saniye) {
    const saatToSaniye = saat * 3600  // 1 saat 3600 saniye
    const dakikaToSaniye = dakika * 60  // 1 dakika 60 saniye
    const toplamSaniye = saatToSaniye + dakikaToSaniye + saniye // Toplam saniye

    return(toplamSaniye)
}

console.log(zamanToSaniye(5,45,15))     //Çıktı: 20715 saniye
console.log(zamanToSaniye(0,1,60))      //Çıktı: 120 Saniye
console.log(zamanToSaniye(23,59,59))    //Çıktı: 86399 Saniye


// 9

function saniyeToZaman (saniye) {
    const saniyeToSaat = Math.floor(saniye / 3600) //saniyeyi saate çevir
    saniye %= 3600  // kalan saniyeyi güncelle
    const saniyeToDakika = Math.floor(saniye / 60)  //saniyeyi dakikaye çevir
    saniye %= 60 // kalan saniyeyi güncelle


    const saatFormatted = String(saniyeToSaat).padStart(2, '0')
    const dakikaFormatted = String(saniyeToDakika).padStart(2, '0')
    const saniyeFormatted = String(saniye).padStart(2, '0')

    return `${saatFormatted}:${dakikaFormatted}:${saniyeFormatted}`

}

console.log(saniyeToZaman(12548))       //Çıktı: 03:29:48
console.log(saniyeToZaman(5483))        //Çıktı: 01:31:23
console.log(saniyeToZaman(548))         //Çıktı: 00:09:08
console.log(saniyeToZaman(12))          //Çıktı: 00:00:12
console.log(saniyeToZaman(9))           //Çıktı: 00:00:09


// 10

function zamanToSaniye (saat, dakika, saniye) {
    const saatToSaniye = saat * 3600  // 1 saat 3600 saniye
    const dakikaToSaniye = dakika * 60  // 1 dakika 60 saniye
    const toplamSaniye = saatToSaniye + dakikaToSaniye + saniye // Toplam saniye

    return(toplamSaniye)
}

function saniyeToZaman (saniye) {
    const saniyeToSaat = Math.floor(saniye / 3600) //saniyeyi saate çevir
    saniye %= 3600  // kalan saniyeyi güncelle
    const saniyeToDakika = Math.floor(saniye / 60)  //saniyeyi dakikaye çevir
    saniye %= 60 // kalan saniyeyi güncelle


    const saatFormatted = String(saniyeToSaat).padStart(2, '0')
    const dakikaFormatted = String(saniyeToDakika).padStart(2, '0')
    const saniyeFormatted = String(saniye).padStart(2, '0')

    return `${saatFormatted}:${dakikaFormatted}:${saniyeFormatted}`

}

function zamanFark (birinciSaat,birinciDakika,birinciSaniye,ikinciSaat,ikinciDakika,ikinciSaniye) {
    const birinciTarihToSaniye = zamanToSaniye(birinciSaat,birinciDakika,birinciSaniye)

    const ikinciTarihToSaniye = zamanToSaniye(ikinciSaat,ikinciDakika,ikinciSaniye)

    const farkSaniye = Math.abs(ikinciTarihToSaniye - birinciTarihToSaniye)


    return saniyeToZaman(farkSaniye)
}

console.log(zamanFark(12,15,54,3,21,17))    //Çıktı: 08:54:37