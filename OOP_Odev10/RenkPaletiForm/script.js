// Renklerin benzersizliğini kontrol etmek için mevcut renk adlarını saklayacağımız bir dizi
let colorNames = [];

// Sayfa yüklendiğinde çerezden verileri yükle
window.onload = function() {
    loadColorsFromCookie();
}

// Renkleri çerezden yükleme fonksiyonu
function loadColorsFromCookie() {
    // Çerezi oku ve varsa JSON formatındaki renk koleksiyonunu diziye çevir
    const colorsCookie = getCookie("colorCollection");
    if (colorsCookie) {
        const colors = JSON.parse(colorsCookie);
        colors.forEach(color => {
            // Çerezden gelen her renk için koleksiyona ekle
            colorNames.push(color.name.toLowerCase());
            addColorToPalette(color.name, color.type, color.value, false);
        });
    }
}

// Yeni renk ekleme fonksiyonu
function addColor() {
    // Hata mesajlarını temizle
    clearErrors();

    // Form alanlarındaki bilgileri al
    const name = document.getElementById("colorName").value.trim();
    const type = document.getElementById("colorType").value;
    const value = document.getElementById("colorValue").value;

    // Hata tespiti için bir değişken
    let hasError = false;

    // Zorunlu alan kontrolü ve yalnızca alfabetik karakter kontrolü
    if (!name) {
        showError("nameError", "Renk adı zorunludur.");
        hasError = true;
    } else if (!/^[a-zA-Z]+$/.test(name)) {
        showError("nameError", "Başlık yalnızca alfabetik karakterler içermelidir!");
        hasError = true;
    } else if (colorNames.includes(name.toLowerCase())) {
        showError("nameError", "Bu isimde bir renk zaten mevcut! Lütfen farklı bir isim girin.");
        hasError = true;
    }

    // Renk tipi kontrolü
    if (!type) {
        showError("typeError", "Renk tipi seçilmelidir.");
        hasError = true;
    }

    // Renk değeri kontrolü ve geçerlilik kontrolü
    if (!value) {
        showError("valueError", "Renk değeri zorunludur.");
        hasError = true;
    } else if (!isValidColor(type, value)) {
        showError("valueError", "Geçerli bir renk değeri girin! Örn: rgb(255,0,0), rgba(255,0,0,0.5) veya #ff0000");
        hasError = true;
    }

    // Hata varsa işlemi durdur
    if (hasError) return;

    // Renk adı koleksiyonuna ekle
    colorNames.push(name.toLowerCase());
    // Renk paletine ekle ve çerezde güncelle
    addColorToPalette(name, type, value);

    // Çereze kaydet
    saveColorsToCookie();

    // Formu sıfırla
    document.getElementById("colorForm").reset();
}

// Renkleri çereze kaydetme fonksiyonu
function saveColorsToCookie() {
    // Koleksiyondaki renkleri JSON formatına çevirip çerez olarak kaydeder
    const colors = colorNames.map(name => {
        const type = document.getElementById("colorType").value;
        const value = document.getElementById("colorValue").value;
        return { name, type, value };
    });
    setCookie("colorCollection", JSON.stringify(colors), 3); // Çerezi 3 saat için ayarla
}

// Palete yeni renk ekleme fonksiyonu
function addColorToPalette(name, type, value, updateCookie = true) {
    // Yeni renk kutusu oluştur ve stilini ayarla
    const colorBox = document.createElement("div");
    colorBox.classList.add("color-box");
    colorBox.style.backgroundColor = value; // Arka plan rengini kullanıcı tarafından belirtilen değer yap
    colorBox.textContent = name;

    // Renk tipi ve değerini göstermek için metin ekle
    const colorName = document.createElement("div");
    colorName.classList.add("color-name");
    colorName.textContent = `${type.toUpperCase()}: ${value}`;

    // Kutuyu palete ekle
    const colorContainer = document.createElement("div");
    colorContainer.appendChild(colorBox);
    colorContainer.appendChild(colorName);
    document.getElementById("colorPalette").appendChild(colorContainer);

    // Çerezi güncelle, eğer updateCookie true ise
    if (updateCookie) {
        saveColorsToCookie();
    }
}

// Hata mesajlarını göstermek için yardımcı fonksiyon
function showError(elementId, message) {
    // Belirli bir alana hata mesajı ekle
    document.getElementById(elementId).textContent = message;
}

// Hata mesajlarını temizlemek için yardımcı fonksiyon
function clearErrors() {
    // Tüm hata mesajlarını temizle
    document.getElementById("nameError").textContent = "";
    document.getElementById("typeError").textContent = "";
    document.getElementById("valueError").textContent = "";
}

// Çerez ayarlama fonksiyonu
function setCookie(name, value, hours) {
    // Çerezin süresini ayarla ve çerezi kaydet
    const date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

// Çerez okuma fonksiyonu
function getCookie(name) {
    // Çerezi anahtar-değer formatında ayrıştır ve eşleşen değeri döndür
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) return value;
    }
    return "";
}

// Geçerli renk değerini kontrol eden fonksiyon
function isValidColor(type, value) {
    // RGB, RGBA ve HEX formatlarının doğru olup olmadığını kontrol eder
    if (type === "rgb") {
        return /^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/.test(value);
    } else if (type === "rgba") {
        return /^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),([01]?(\.\d+)?)\)$/.test(value);
    } else if (type === "hex") {
        return /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/.test(value);
    }
    return false;
}