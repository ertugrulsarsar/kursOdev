// Rastgele oyuncular ekleme fonksiyonu (önceki örnekten)
function addRandomPlayers(playerCount) {
    const fieldRect = field.getBoundingClientRect();
    const fieldWidth = fieldRect.width;
    const fieldHeight = fieldRect.height;

    for (let i = 0; i < playerCount; i++) {
        const player = document.createElement('div');
        player.classList.add('player'); // Oyuncu sınıfı
        player.dataset.id = i; // Her oyuncuya bir kimlik numarası atanır

        const randomX = Math.random() * (fieldWidth - 50);
        const randomY = Math.random() * (fieldHeight - 50);

        player.style.left = `${randomX}px`;
        player.style.top = `${randomY}px`;

        field.appendChild(player);
    }
}

// Çarpışma kontrol fonksiyonu
function checkCollisionWithPlayers() {
    const ballRect = ball.getBoundingClientRect();

    // Tüm oyuncuları alır ve her biriyle çarpışma kontrolü yapar
    document.querySelectorAll('.player').forEach(player => {
        const playerRect = player.getBoundingClientRect();

        // Çarpışma kontrolü
        if (
            ballRect.right > playerRect.left &&
            ballRect.left < playerRect.right &&
            ballRect.bottom > playerRect.top &&
            ballRect.top < playerRect.bottom
        ) {
            // Çarpışma tespit edilirse topu orta sahaya gönder
            resetBallPosition();
        }
    });
}

// Topu orta sahaya yerleştirme fonksiyonu
function resetBallPosition() {
    const fieldRect = field.getBoundingClientRect();
    const centerX = fieldRect.width / 2 - ball.offsetWidth / 2;
    const centerY = fieldRect.height / 2 - ball.offsetHeight / 2;

    ball.style.left = `${centerX}px`;
    ball.style.top = `${centerY}px`;
}

// Saha içinde tıklama olayını dinleyerek topu hareket ettirir
field.addEventListener('click', (event) => {
    const fieldRect = field.getBoundingClientRect();
    const fieldWidth = fieldRect.width;
    const fieldHeight = fieldRect.height;

    const clickX = event.clientX - fieldRect.left;
    const clickY = event.clientY - fieldRect.top;

    const ballCenterX = ball.offsetLeft + ball.offsetWidth / 2;
    const ballCenterY = ball.offsetTop + ball.offsetHeight / 2;

    const moveX = (ballCenterX - clickX) / 10;
    const moveY = (ballCenterY - clickY) / 10;

    let newBallX = ball.offsetLeft + moveX;
    let newBallY = ball.offsetTop + moveY;

    const maxX = fieldWidth - ball.offsetWidth;
    const maxY = fieldHeight - ball.offsetHeight;

    newBallX = Math.max(0, Math.min(newBallX, maxX));
    newBallY = Math.max(0, Math.min(newBallY, maxY));

    // Yeni pozisyonu ayarlar
    ball.style.left = `${newBallX}px`;
    ball.style.top = `${newBallY}px`;

    // Hareket sonrasında çarpışma kontrolü yapar
    checkCollisionWithPlayers();
});

// Sayfa yüklendiğinde rastgele oyuncuları sahaya ekler
addRandomPlayers(22);

// Yardım penceresi açan fonksiyon
function openHelpWindow() {
    const helpContent = `
        <h2>Proje Tanımı</h2>
        <p>Bu proje, bir futbol sahasında fare tıklamalarıyla hareket eden bir top ve rastgele konumlandırılmış oyunculardan oluşur.</p>
        <p>Top bir oyuncuya çarptığında, otomatik olarak sahanın tam ortasına geri döner.</p>
        <p>Oyuncuların konumları her yüklemede rastgele belirlenir.</p>
    `;

    const helpWindow = window.open("", "Help", "width=400,height=300");
    helpWindow.document.write(`
        <html>
            <head>
                <title>Yardım</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        padding: 10px;
                    }
                    h2 {
                        color: #007bff;
                    }
                    p {
                        font-size: 14px;
                        line-height: 1.5;
                    }
                </style>
            </head>
            <body>${helpContent}</body>
        </html>
    `);
}