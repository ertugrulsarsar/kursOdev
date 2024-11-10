//metin hizalama "ortala" çalışmıyor nedenini anlayamadım 

function displayText() {
    const userText = document.getElementById("userText").value;
    const isBold = document.getElementById("bold").checked;
    const isUnderline = document.getElementById("underline").checked;
    const isItalic = document.getElementById("italic").checked;

    // align değerini güvenle almak için null kontrolü ekleyin
    const alignElement = document.querySelector('input[name="align"]:checked');
    const align = alignElement ? alignElement.value : "left"; // Varsayılan olarak "left" ayarlandı

    // Stil sınıfını oluştur
    let style = '';
    if (isBold) style += 'font-weight: bold; ';
    if (isUnderline) style += 'text-decoration: underline; ';
    if (isItalic) style += 'font-style: italic; ';
    
    // Metin hizalama stilini doğrudan #styledText p'ye uygula
    const styledText = document.getElementById("styledText");
    styledText.style = style;
    styledText.style.textAlign = align; // Metin hizalama buraya uygulanıyor
    styledText.textContent = userText;
}
