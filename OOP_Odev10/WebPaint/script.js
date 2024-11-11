const canvas = document.getElementById("canvas"); // Çizim tuvalini seç
const ctx = canvas.getContext("2d"); // 2D çizim bağlamını al
let selectedShape = 'square'; // Varsayılan şekil olarak kare seç
let selectedColor = '#000000'; // Varsayılan renk olarak siyah seç
let isDrawing = false; // Çizim durumunu kontrol için değişken
let startX, startY, endX, endY; // Başlangıç ve bitiş noktaları için değişkenler
let canvasSnapshot; // Tuvalin geçici halini saklamak için

function selectShape(shape) {
    selectedShape = shape; // Seçilen şekli kaydet
}

function selectColor(color) {
    selectedColor = color; // Seçilen rengi kaydet
}

canvas.addEventListener("mousedown", (event) => {
    isDrawing = true; // Çizime başlandığını işaretle
    startX = event.offsetX; // Başlangıç X koordinatını al
    startY = event.offsetY; // Başlangıç Y koordinatını al
    canvasSnapshot = ctx.getImageData(0, 0, canvas.width, canvas.height); // Çizim başlamadan önce tuvalin mevcut halini kaydet
});

canvas.addEventListener("mousemove", (event) => {
    if (!isDrawing) return; // Eğer çizim yapılmıyorsa çık
    endX = event.offsetX; // Güncel X koordinatını al
    endY = event.offsetY; // Güncel Y koordinatını al
    drawTemporaryShape(); // Geçici şekli çiz
});

canvas.addEventListener("mouseup", () => {
    isDrawing = false; // Çizim işlemini sonlandır
    drawFinalShape(); // Son şekli çiz
});

function drawTemporaryShape() {
    ctx.putImageData(canvasSnapshot, 0, 0); // Tuvalin önceki halini geri yükle
    ctx.fillStyle = selectedColor; // Seçili rengi ayarla

    const width = endX - startX; // Şeklin genişliği
    const height = endY - startY; // Şeklin yüksekliği

    // Seçilen şekle göre geçici şekil çiz
    if (selectedShape === "square") {
        ctx.fillRect(startX, startY, width, height); // Kare çiz
    } else if (selectedShape === "circle") {
        const radius = Math.sqrt(width * width + height * height) / 2; // Çap
        ctx.beginPath();
        ctx.arc(startX + width / 2, startY + height / 2, radius, 0, Math.PI * 2); // Daire çiz
        ctx.fill();
    } else if (selectedShape === "diamond") {
        ctx.beginPath();
        ctx.moveTo(startX + width / 2, startY); // Üst nokta
        ctx.lineTo(startX + width, startY + height / 2); // Sağ nokta
        ctx.lineTo(startX + width / 2, startY + height); // Alt nokta
        ctx.lineTo(startX, startY + height / 2); // Sol nokta
        ctx.closePath();
        ctx.fill();
    } else if (selectedShape === "triangle") {
        ctx.beginPath();
        ctx.moveTo(startX + width / 2, startY); // Üst nokta
        ctx.lineTo(startX, startY + height); // Sol alt
        ctx.lineTo(startX + width, startY + height); // Sağ alt
        ctx.closePath();
        ctx.fill();
    }
}

function drawFinalShape() {
    ctx.fillStyle = selectedColor; // Seçili rengi ayarla

    const width = endX - startX; // Şeklin genişliği
    const height = endY - startY; // Şeklin yüksekliği

    // Seçilen şekle göre kalıcı şekil çiz
    if (selectedShape === "square") {
        ctx.fillRect(startX, startY, width, height); // Kare çiz
    } else if (selectedShape === "circle") {
        const radius = Math.sqrt(width * width + height * height) / 2; // Çap
        ctx.beginPath();
        ctx.arc(startX + width / 2, startY + height / 2, radius, 0, Math.PI * 2); // Daire çiz
        ctx.fill();
    } else if (selectedShape === "diamond") {
        ctx.beginPath();
        ctx.moveTo(startX + width / 2, startY); // Üst nokta
        ctx.lineTo(startX + width, startY + height / 2); // Sağ nokta
        ctx.lineTo(startX + width / 2, startY + height); // Alt nokta
        ctx.lineTo(startX, startY + height / 2); // Sol nokta
        ctx.closePath();
        ctx.fill();
    } else if (selectedShape === "triangle") {
        ctx.beginPath();
        ctx.moveTo(startX + width / 2, startY); // Üst nokta
        ctx.lineTo(startX, startY + height); // Sol alt
        ctx.lineTo(startX + width, startY + height); // Sağ alt
        ctx.closePath();
        ctx.fill();
    }
}
