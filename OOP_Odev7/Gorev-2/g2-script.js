 /* Rastgele renk üretmek için fonksiyon */
 function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/* Yeni bir blok ekleme fonksiyonu */
function addBlock() {
    const block = document.createElement('div');
    block.classList.add('block');
    block.style.backgroundColor = getRandomColor(); // Bloğa rastgele renk ata

    // Bloka tıklandığında kendisini silmesi
    block.onclick = function() {
        block.remove();
    };

    document.getElementById('container').appendChild(block);
}