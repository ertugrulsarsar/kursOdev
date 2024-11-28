// Sol bölüm öğeleri
const leftSection = document.getElementById('leftSection');
const toggleLeft = document.getElementById('toggleLeft');
const resizeHandleLeft = document.getElementById('resizeHandleLeft');
const topLeft = document.getElementById('topLeft');
const bottomLeft = document.getElementById('bottomLeft');

// Sağ bölüm öğeleri
const resizeHandleRight = document.getElementById('resizeHandleRight');
const topRight = document.getElementById('topRight');
const bottomRight = document.getElementById('bottomRight');

let isDraggingLeft = false;
let isDraggingRight = false;

// Sol bölümü gizle/göster
toggleLeft.addEventListener('click', () => {
  if (leftSection.classList.contains('hidden')) {
    leftSection.classList.remove('hidden');
    toggleLeft.textContent = '<';
  } else {
    leftSection.classList.add('hidden');
    toggleLeft.textContent = '>';
  }
});

// Sol bölüm dikey ayar
resizeHandleLeft.addEventListener('mousedown', () => {
  isDraggingLeft = true;
});

document.addEventListener('mousemove', (e) => {
  if (isDraggingLeft) {
    const containerHeight = leftSection.clientHeight;
    const topHeight = e.clientY - leftSection.getBoundingClientRect().top;
    const bottomHeight = containerHeight - topHeight;

    if (topHeight > 50 && bottomHeight > 50) {
      topLeft.style.flex = `0 0 ${topHeight}px`;
      bottomLeft.style.flex = `0 0 ${bottomHeight}px`;
    }
  }
});

document.addEventListener('mouseup', () => {
  isDraggingLeft = false;
});

// Sağ bölüm dikey ayar
resizeHandleRight.addEventListener('mousedown', () => {
  isDraggingRight = true;
});

document.addEventListener('mousemove', (e) => {
  if (isDraggingRight) {
    const containerHeight = document.querySelector('.right-section').clientHeight;
    const topHeight = e.clientY - topRight.getBoundingClientRect().top;
    const bottomHeight = containerHeight - topHeight;

    if (topHeight > 50 && bottomHeight > 50) {
      topRight.style.flex = `0 0 ${topHeight}px`;
      bottomRight.style.flex = `0 0 ${bottomHeight}px`;
    }
  }
});

document.addEventListener('mouseup', () => {
  isDraggingRight = false;
});
