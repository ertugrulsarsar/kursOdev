/*Rekürsif Durum (Recursive Case)
Bir işlevin "kendisini" çağırarak problemi çözmesidir.
*/

// 1

function usHesapla(sayi, us) {
  if (us === 0) {
    return 1;
  } else if (us < 0) {
    return 1 / usHesapla(sayi, -us); //Negatif üs için
  } else {
    return sayi * usHesapla(sayi, us - 1); //Rekürsif
  }
}

console.log(usHesapla(2, 3)); //Çıktı: 8
console.log(usHesapla(9, -4)); //Çıktı:0.00015241579027587258
console.log(usHesapla(7, 0)); //Çıktı: 1
console.log(usHesapla(0, 99)); //Çıktı: 0

// 2

function ebob(a, b) {
  if (b === 0) {
    return a;
  }
  return ebob(b, a % b);
}

console.log(ebob(48, 18)); //Çıktı: 6
console.log(ebob(56, 98)); //Çıktı: 14
console.log(ebob(101, 10)); //Çıktı: 1

// 3

function buyukRakam(sayi) {
  if (sayi === 0) {
    return 0;
  }

  const sonRakam = sayi % 10;

  const kalan = Math.floor(sayi / 10);

  const enBuyukKalan = buyukRakam(kalan);

  return Math.max(sonRakam, enBuyukKalan);
}

console.log(buyukRakam(56)); //Çıktı: 6
console.log(buyukRakam(769)); //Çıktı: 9
console.log(buyukRakam(4237)); //Çıktı: 7
console.log(buyukRakam(0)); //Çıktı: 0
console.log(buyukRakam(100009)); //Çıktı: 9

// 4

function asal(sayi, div = 2) {
  //en küçük asal sayı div

  //Temel durum
  if (sayi <= 1) {
    return "0 ve 1 asal sayı değildir.";
  }
  if (sayi === 2) {
    return true;
  }
  if (div ** 2 > sayi) {
    return true;
  }
  if (sayi % div === 0) {
    return false;
  }
  //Rekürsif durum
  return asal(sayi, div + 1);
}

console.log(asal(13))   //Çıktı: True
console.log(asal(4))    //Çıktı: False
console.log(asal(17))   //Çıktı: True
console.log(asal(1))    // 0 ve 1 asal sayı değildir


// 5

function carpanBul (sayi, divisor = 2, carpans = []) {
    // Temel durum : eğer sayı 1 ise, çarpanlar tamamlanır.
    if (sayi < 2) {
        return carpans  // boş dizi döndürür
    }

    //eğer sayı mevcut divisor ile tam bölünüyorsa 
    if (sayi % divisor === 0) {
        carpans.push(divisor) //çarpanı ekle
        return carpanBul(sayi / divisor, divisor, carpans) //Rekürsif çağrı
    }
    else {
        //eğer bölünmüyorsa, bir sonraki divisor ile devam et
        return carpanBul(sayi, divisor + 1, carpans)
    }
}

console.log(carpanBul(18))  //Çıktı: 2,3,3
console.log(carpanBul(45))  //Çıktı: 3,3,5
console.log(carpanBul(78))  //Çıktı: 2,3,13
console.log(carpanBul(1))   //Çıktı: []


// 6

function fibonacci (terimSayi) {
    //Temel durum
    if (terimSayi === 1 || terimSayi === 2) {
        return 1;
    }
    //Rekürsif Durum
    return fibonacci(terimSayi - 1) + fibonacci(terimSayi - 2)
}

console.log(fibonacci(3))   //Çıktı: 2
console.log(fibonacci(6))   //Çıktı: 8
console.log(fibonacci(15))  //Çıktı: 610