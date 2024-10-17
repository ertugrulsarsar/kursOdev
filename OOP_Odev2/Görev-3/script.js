// CSS stillerini tanımlayan dizi
const stiller = [
    { stilAdi: "renk", stilDegeri: "blue" }, // Yazı rengi
    { stilAdi: "font-size", stilDegeri: "20px" }, // Yazı boyutu
    { stilAdi: "text-align", stilDegeri: "center" }, // Hizalama
    { stilAdi: "text-decoration", stilDegeri: "underline" } // Altı çizili
];

// Metni stil ile biçimlendiren fonksiyon
function stilUygula(metin) {
    const p = document.createElement("p"); // Yeni bir <p> elementi oluştur
    stiller.forEach(stil => {
        p.style[stil.stilAdi] = stil.stilDegeri; // Her stil için ilgili stil değerini uygula
    });
    p.textContent = metin; // Metni <p> elementine ekle
    document.body.appendChild(p); // <p> elementini belgeye ekle
}

// Örnek metin
const metin = "Bu metin CSS stilleri ile biçimlendirilmiştir.";
stilUygula(metin); // Fonksiyonu çağır ve metni stil ile biçimlendir