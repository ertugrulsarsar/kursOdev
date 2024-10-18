//!Görev-1

//Metin istatistiklerini hesaplayan fonksiyon
function metinIstatistikleri(metin) {
  let harfSayisi = 0;
  let rakamSayisi = 0;
  let kelimeSayisi = 0;
  let digerKarakter = 0;

  kelimeSayisi = metin.trim().split(/\s+/).filter(Boolean).length; //Boşluklara göre kelimeleri ayır ve say

  //Metindeki her karakter için döngü yap
  for (let i = 0; i < metin.length; i++) {
    const karakter = metin[i]; //Mevcut karakteri al
    //Eğer karakter bir harf ise,
    if (/[a-zA-zğüşöçİĞÜŞÖÇ]/.test(karakter)) {
      harfSayisi++; //harf sayısını arttır
    }
    //eğer karakter bir rakam ise,
    else if (/\d/.test(karakter)) {
      rakamSayisi++;
    }
    //Diğer karakterler
    else {
      digerKarakter++; //diğer karakter sayısını arttır
    }
  }

  //sonuçları bir nesne olarak döndür
  return {
    "Harf Sayısı": harfSayisi,
    "Rakam Sayısı": rakamSayisi,
    "Kelime Sayısı": kelimeSayisi,
    "Diğer Karakterlerin Sayısı": digerKarakter,
  };
}

//Butona tıkladığında çalışacak fonksiyon
function metinGiris() {
  const metin = prompt("Metin girin:");
  if (metin) {
    const istatistikler = metinIstatistikleri(metin); //metin istatistiklerini hesapla
    const sonucDiv = document.getElementById("sonuc"); //sonuçların gösterileceği alan

    //hesaplanan sonuçları html formatında göster
    sonucDiv.innerHTML = `<h2>Metin İstatistikleri</h2>
        <p>Harf Sayısı: ${istatistikler["Harf Sayısı"]}</p>
        <p>Rakam Sayısı: ${istatistikler["Rakam Sayısı"]}</p>
        <p>Kelime Sayısı: ${istatistikler["Kelime Sayısı"]}</p>
        <p>Diğer Karakterlerin Sayısı: ${istatistikler["Diğer Karakterlerin Sayısı"]}</p>`;
  } else {
    alert("Metin girmediniz!"); //uyarı mesajı gösster
  }
}

//! Görev-2
//İki basamaklı sayıyı metin olarak döndüren fonksiyon
function numberToText(number) {
  //sayının iki basamaklı olup olmadığını kontrol et
  if (number < 10 || number > 99) {
    alert("Lütfen iki basamaklı sayı girin!");
  }

  const units = [
    "sıfır",
    "bir",
    "iki",
    "üç",
    "dört",
    "beş",
    "altı",
    "yedi",
    "sekiz",
    "dokuz",
  ];
  const tens = [
    "on",
    "yirmi",
    "otuz",
    "kırk",
    "elli",
    "altmış",
    "yetmiş",
    "seksen",
    "doksan",
  ];

  //Sayının birler ve onlar basamağını ayır
  const unitDigit = number % 10;
  const tenDigit = Math.floor(number / 10);

  //Metin olarak sonucu oluştur
  let result = tens[tenDigit - 1];
  if (unitDigit > 0) {
    result += `${units[unitDigit]}`;
  }
  return result.trim(); //sonucu döndür
}

//Kullanıcıdan alınacak veriler
function getNumberInput() {
  const number = parseInt(prompt("Lütfen iki basamaklı sayı girin"));

  if (!isNaN(number)) {
    const textResult = numberToText(number); //sayıyı metin olarak döndür
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>Sonuç: </h2><p>${textResult}</p>`;
  } else {
    alert("Lütfen geçerli bir sayı girin!");
  }
}

//! Görev-3
//Dizideki büyük harfleri küçük, harfleri büyük ve rakamları "_" olarak gösteren fonksiyon
function transformString(inputString) {
  let transformedString = "";
  //Dİzideki her karakter için döngü yap
  for (let char of inputString) {
    if (char >= "A" && char <= "Z") {
      //Büyük harf ise küçük harfe dönüştür
      transformedString += char.toLowerCase();
    } else if (char >= "a" && char <= "z") {
      //küçük harf ise büyük harfe dönüştür
      transformedString += char.toUpperCase();
    } else if (char >= "0" && char <= "9") {
      //Rakam ise alt çizgi ekle
      transformedString += "_";
    } else {
      //Diğer karakterler  olduğu gibi ekle
      transformedString += char;
    }
  }
  return transformedString; //dönüştürülmüş dizi
}

//Kullanıcıdan alınacak girdi
function getInputTransform() {
  const inputString = prompt("Bir dize girin");
  if (inputString !== null) {
    const transformedResult = transformString(inputString);
    const resultDiv = document.getElementById("result_2");
    resultDiv.innerHTML = `<h2>Sonuç:</2><p>${transformedResult}</p>`;
  } else {
    alert("Girdi iptal edildi.");
  }
}


//!Görev-7
// Hesap makinesi fonksiyonu
function calculate(expression) {
  // Regex ile sayıları ve işlemi ayır
  const regex = /(\d+(\.\d+)?|\+|\-|\*|\/)/g;
  const tokens = expression.match(regex);

  // Eğer geçerli bir ifade yoksa
  if (!tokens || tokens.length < 3) {
    return "Geçersiz ifade.";
  }

  // İlk sayıyı al
  let result = parseFloat(tokens[0]);

  // İşlemleri uygula
  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const nextNumber = parseFloat(tokens[i + 1]);

    switch (operator) {
      case "+":
        result += nextNumber;
        break;
      case "-":
        result -= nextNumber;
        break;
      case "*":
        result *= nextNumber;
        break;
      case "/":
        if (nextNumber === 0) {
          return "Bölme hatası: Sıfıra bölünemez.";
        }
        result /= nextNumber;
        break;
      default:
        return "Geçersiz işlem.";
    }
  }

  return result; // Sonucu döndür
}

// Kullanıcıdan girdi alacak fonksiyon
function getInputAndCalculate() {
  const expression = prompt("Bir matematik ifadesi girin (örn: 5 + 10 * 2):"); // Kullanıcıdan ifade al
  if (expression !== null) {
    const result = calculate(expression); // İfadeyi hesapla
    const resultDiv = document.getElementById("result_3"); // Sonuçların gösterileceği alan
    resultDiv.innerHTML = `<h2>Sonuç</h2><p>${result}</p>`; // Sonucu HTML formatında göster
  } else {
    alert("Girdi iptal edildi."); // Kullanıcı girişi iptal edilirse uyarı
  }
}
