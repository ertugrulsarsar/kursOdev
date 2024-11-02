const metinDiv = document.getElementById('metinDiv');
const metinAlani = document.getElementById('metinAlani');

// Sayfa yüklendiğinde div gösterilir, textarea gizlenir.
document.addEventListener('DOMContentLoaded', () => {
    metinAlani.value = metinDiv.innerText;
});

// Ctrl + E tuşlarına basıldığında metin alanını açar
document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'e') {
        event.preventDefault(); // Varsayılan eylemi engelle
        metinDiv.style.display = 'none'; // Div'i gizle
        metinAlani.style.display = 'block'; // Textarea'yı göster
        metinAlani.focus(); // Textarea'ya odaklan
    }

    // Ctrl + S tuşlarına basıldığında metni kaydeder ve div'i geri getirir
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault(); // Varsayılan kaydetme eylemini engelle
        metniKaydet(); // Metni kaydetme fonksiyonunu çağır
    }
});

function metniKaydet() {
    const metin = metinAlani.value;
    metinDiv.innerText = metin; // Metin div'ine kaydet
    metinDiv.style.display = 'block'; // Div'i tekrar göster
    metinAlani.style.display = 'none'; // Textarea'yı gizle
    alert('Metin kaydedildi:\n' + metin);
}