const palette = document.getElementById('palette');
const colorForm = document.getElementById('colorForm');
const rInput = document.getElementById('r');
const gInput = document.getElementById('g');
const bInput = document.getElementById('b');

colorForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const r = parseInt(rInput.value);
    const g = parseInt(gInput.value);
    const b = parseInt(bInput.value);

    // Renk kutusu oluştur
    const colorBox = document.createElement('div');
    colorBox.className = 'color-box';
    colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    colorBox.textContent = `RGB (${r}, ${g}, ${b})`;
    
    palette.appendChild(colorBox);
    
    // Formu temizle
    rInput.value = '';
    gInput.value = '';
    bInput.value = '';
});