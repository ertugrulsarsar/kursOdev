// Zaman nesnesi
const time = {
    hours: 0,
    minutes: 0,
    seconds: 0,

    // Zamanı ekrana yazdırma işlevi
    displayTime() {
        const formatTime = (num) => (num < 10 ? `0${num}` : num); // 2 haneli format
        return `${formatTime(this.hours)}:${formatTime(this.minutes)}:${formatTime(this.seconds)}`;
    },

    // Verilen saniye miktarına göre zamanı değiştirme işlevi
    addSeconds(secondsToAdd) {
        this.seconds += secondsToAdd;
        this.minutes += Math.floor(this.seconds / 60);
        this.seconds %= 60;
        this.hours += Math.floor(this.minutes / 60);
        this.minutes %= 60;
        this.hours %= 24; // 24 saati aşarsa sıfırdan başlar
    },

    // Verilen dakika miktarına göre zamanı değiştirme işlevi
    addMinutes(minutesToAdd) {
        this.minutes += minutesToAdd;
        this.hours += Math.floor(this.minutes / 60);
        this.minutes %= 60;
        this.hours %= 24;
    },

    // Verilen saat miktarına göre zamanı değiştirme işlevi
    addHours(hoursToAdd) {
        this.hours = (this.hours + hoursToAdd) % 24;
    }
};

// HTML üzerinde güncelleme
function updateDisplay() {
    document.getElementById("timeDisplay").innerText = time.displayTime();
}

// Kullanıcıdan alınan değerle zamanı değiştirme
function modifyTime(unit) {
    const value = parseInt(document.getElementById(unit).value);
    if (isNaN(value)) return;

    if (unit === "seconds") time.addSeconds(value);
    else if (unit === "minutes") time.addMinutes(value);
    else if (unit === "hours") time.addHours(value);

    updateDisplay();
}
