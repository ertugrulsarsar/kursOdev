 // Doğru cevapları saklayan nesne
 const correctAnswers = {
    q1: "7",
    q2: "3"
};

// İlk sorudan ikinci soruya geçişi sağlayan fonksiyon
function showNextQuestion() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "block";
}

// Sonuçları gösteren fonksiyon
function showResult() {
    let correctCount = 0;
    
    // Tüm soruların doğru cevaplarını kontrol et
    for (const [question, answer] of Object.entries(correctAnswers)) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (userAnswer && userAnswer.value === answer) {
            correctCount++;
        }
    }

    // Doğru cevap sayısını sonuç ekranında göster
    document.getElementById("correctCount").textContent = correctCount;
    document.getElementById("result").style.display = "block";
    document.getElementById("question2").style.display = "none";
}