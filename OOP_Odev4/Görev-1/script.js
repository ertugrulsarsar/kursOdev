// Basit Kalem Sınıfı
class Pen {
  constructor(inkColor, inkAmount) {
    this.inkColor = inkColor; // Kalemin rengi
    this.inkAmount = inkAmount; // Mürekkep miktarı (% cinsinden)
  }

  // Metin yazma fonksiyonu
  write(text) {
    if (this.inkAmount <= 0) {
      return "Kalemde mürekkep kalmamıştır.";
    }

    let inkUsed = 0; // Kullanılan mürekkep miktarı
    for (let char of text) {
      if (char !== " ") {
        // Boşluk değilse
        inkUsed += 0.5; // %0.5 mürekkep kullan
      }
    }

    // Eğer yeterli mürekkep yoksa
    if (inkUsed > this.inkAmount) {
      return "Kalemde yeterli mürekkep yok.";
    }

    this.inkAmount -= inkUsed; // Mürekkep miktarını azalt
    return text; // Metni döndür
  }
}

// Dolanılabilir Kalem Sınıfı
class RefillPen extends Pen {
  // Kalemi doldurma fonksiyonu
  refill(amount) {
    this.inkAmount += amount; // Mürekkep ekle
    if (this.inkAmount > 100) {
      this.inkAmount = 100; // %100'ü geçmesin
    }
    return `Kalem dolduruldu. Mevcut mürekkep: %${this.inkAmount}`;
  }
}

let myPen; // Kalem nesnesini tutacak değişken

function writeText() {
    const inkColor = document.getElementById("inkColor").value;
    const inkAmount = parseInt(document.getElementById("inkAmount").value); // Sayıya dönüştür
    const textToWrite = document.getElementById("textToWrite").value;

    // Kalemi oluştur
    if (!myPen) {
        if (!inkColor || isNaN(inkAmount) || inkAmount < 0 || inkAmount > 100) {
            alert("Lütfen geçerli bir renk ve mürekkep miktarı girin.");
            return; // Geçerli bir kalem yaratmadan devam etme
        }
        myPen = new RefillPen(inkColor, inkAmount);
    }

    const result = myPen.write(textToWrite); // Metni yaz
    document.getElementById("result").innerHTML = `<span style="color: ${myPen.inkColor};">${result}</span>`;
    document.getElementById("inkAmount").value = myPen.inkAmount; // Mevcut mürekkep miktarını güncelle
}

// Kalemi doldurma fonksiyonu
function refillPen() {
  const refillAmount = 20; // Doldurma miktarı
  const result = myPen.refill(refillAmount); // Kalemi doldur
  document.getElementById("result").innerHTML += `<br>${result}`; // Sonucu göster
}
