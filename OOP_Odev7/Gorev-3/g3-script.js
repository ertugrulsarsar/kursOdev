const palette = document.getElementById('palette');
const textElement = document.getElementById('text');
const addColorButton = document.getElementById('addColorButton');

// Rastgele renk üreten fonksiyon
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Yeni renk ekleme fonksiyonu
function addColor() {
    const color = getRandomColor();
    const colorCell = document.createElement('div');
    colorCell.className = 'color-cell';
    colorCell.style.backgroundColor = color;
    colorCell.setAttribute('data-color', color);
    colorCell.setAttribute('draggable', 'true');
    colorCell.addEventListener('dragstart', drag);
    palette.appendChild(colorCell);
}

// Sürükleme işlemini başlatma
function drag(event) {
    event.dataTransfer.setData('color', event.target.getAttribute('data-color'));
}

// Sürüklenen nesnenin bırakılmasına izin verme
function allowDrop(event) {
    event.preventDefault();
}

// Sürüklenen rengi bırakma
function drop(event) {
    event.preventDefault();
    const color = event.dataTransfer.getData('color');
    textElement.style.color = color;
}

// İlk renk ekleme
addColorButton.addEventListener('click', addColor);