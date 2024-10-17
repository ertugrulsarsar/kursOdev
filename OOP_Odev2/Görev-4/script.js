// Auditorium nesnesini tanımlayan dizi
const auditoriums = [
  { ad: "Auditorium A", koltukSayisi: 15, fakultesi: "Mühendislik" },
  { ad: "Auditorium B", koltukSayisi: 20, fakultesi: "Edebiyat" },
  { ad: "Auditorium C", koltukSayisi: 12, fakultesi: "Mühendislik" },
  { ad: "Auditorium D", koltukSayisi: 18, fakultesi: "İşletme" },
  { ad: "Auditorium E", koltukSayisi: 10, fakultesi: "Edebiyat" },
];

// Sonuçları yazdırmak için fonksiyon
function yazdir(metin) {
  const ciktiDiv = document.getElementById("cikti");
  ciktiDiv.innerHTML += `<p>${metin}</p>`; // Metni <p> içinde ekle
}

// 1. Tüm auditoriumların ekrana çıktısı
function tumAuditoriumlariYazdir() {
  yazdir("Tüm Auditoriumlar:");
  auditoriums.forEach((auditorium) => {
    yazdir(
      `Ad: ${auditorium.ad}, Koltuk Sayısı: ${auditorium.koltukSayisi}, Fakülte: ${auditorium.fakultesi}`
    );
  });
}

// 2. Belirtilen fakülte için hedef kitleleri ekrana yazdır
function hedefKitleleriYazdir(fakulte) {
  yazdir(`${fakulte} Fakültesi için Hedef Kitleler:`);
  auditoriums.forEach((auditorium) => {
    if (auditorium.fakultesi === fakulte) {
      yazdir(`Ad: ${auditorium.ad}, Koltuk Sayısı: ${auditorium.koltukSayisi}`);
    }
  });
}

// 3. Ekran üzerine sadece verilen gruba uygun olan auditoriumların listelenmesi
function grupUygunAuditoriumlariYazdir(grup) {
  yazdir(`${grup.ad} Grubu için Uygun Auditoriumlar:`);
  auditoriums.forEach((auditorium) => {
    if (auditorium.fakultesi === grup.fakulte) {
      yazdir(`Ad: ${auditorium.ad}, Koltuk Sayısı: ${auditorium.koltukSayisi}`);
    }
  });
}

// 4. Auditoriumları koltuk sayısına göre sıralama işlevi
function koltukSayisinaGoreSirala() {
  const siraliAuditoriums = [...auditoriums].sort(
    (a, b) => a.koltukSayisi - b.koltukSayisi
  );
  yazdir("Koltuk Sayısına Göre Sıralanmış Auditoriumlar:");
  siraliAuditoriums.forEach((auditorium) => {
    yazdir(`Ad: ${auditorium.ad}, Koltuk Sayısı: ${auditorium.koltukSayisi}`);
  });
}

// 5. Auditoriumların adlarına göre (alfabetik olarak) sıralama işlevi
function adinaGoreSirala() {
  const siraliAuditoriums = [...auditoriums].sort((a, b) =>
    a.ad.localeCompare(b.ad)
  );
  yazdir("Adına Göre Sıralanmış Auditoriumlar:");
  siraliAuditoriums.forEach((auditorium) => {
    yazdir(`Ad: ${auditorium.ad}, Koltuk Sayısı: ${auditorium.koltukSayisi}`);
  });
}

// Örnek grup nesnesi
const grup = {
  ad: "Bilgisayar Mühendisliği",
  ogrenciSayisi: 50,
  fakulte: "Mühendislik",
};

// Fonksiyonları çağırma örnekleri
tumAuditoriumlariYazdir(); // Tüm auditoriumları yazdır
yazdir(""); // Boş bir satır ekle
hedefKitleleriYazdir("Mühendislik"); // Mühendislik fakültesi için hedef kitleleri yazdır
yazdir(""); // Boş bir satır ekle
grupUygunAuditoriumlariYazdir(grup); // Belirtilen gruba uygun auditoriumları yazdır
yazdir(""); // Boş bir satır ekle
koltukSayisinaGoreSirala(); // Koltuk sayısına göre sıralama
yazdir(""); // Boş bir satır ekle
adinaGoreSirala(); // Adına göre sıralama
