let currentLight = 0;
const lightDurations = [60000, 3000, 20000]; // Kırmızı, sarı, yeşil ışık süreleri
let intervalId;
let counter = document.getElementById('counter');
let timeRemaining;

function changeLight() {
  const lights = document.querySelectorAll('.light');
  
  // Tüm ışıkları kapat
  lights.forEach(light => light.classList.remove('active'));
  
  // Geçerli ışığı aç
  lights[currentLight].classList.add('active');
  
  // Sıradaki ışığı seç
  currentLight = (currentLight + 1) % lights.length;

  // Yeni süreye göre zamanlayıcıyı ayarla
  clearInterval(intervalId);
  timeRemaining = lightDurations[currentLight === 0 ? 0 : currentLight - 1] / 1000; // saniye cinsinden
  updateCounter();
  startTimer(lightDurations[currentLight === 0 ? 0 : currentLight - 1]);
}

function startTimer(duration) {
  // Sayaç güncelleyici
  intervalId = setInterval(() => {
    timeRemaining--;
    updateCounter();

    if (timeRemaining <= 0) {
      clearInterval(intervalId);
      changeLight(); // Süre dolduğunda ışığı değiştir
    }
  }, 1000);
}

function updateCounter() {
  counter.textContent = timeRemaining;
}

// İlk ışığı etkinleştir ve zamanlayıcıyı başlat
changeLight();
startTimer(lightDurations[0]);