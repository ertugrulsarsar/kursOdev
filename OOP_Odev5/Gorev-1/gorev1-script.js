// Kullanıcının girdiği her karakteri kontrol eden fonksiyon
function textControl(event) {
  // Girilen karakteri al
  var char = event.key;

  // Eğer karakter bir rakam (0-9) veya özel bir karakterse, engelle
  if (!/^[a-zA-Z]+$/.test(char)) {
    event.preventDefault(); // Rakam veya özel karakterse input'a ekleme
  }
}

// Kontrol butonuna tıklandığında çalışacak fonksiyon
function textCheck() {
  var textInput = document.getElementById("textControl").value;
  var textResult = /^[a-zA-Z]+$/.test(textInput)
    ? "Geçerli İsim!"
    : "İsimde Rakam ya da Geçersiz Karakter Var.";
  document.getElementById("result").textContent = textResult;
}

// Sayfa tamamen yüklendikten sonra butonun tıklanma olayını dinle
window.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("textControl-btn")
    .addEventListener("click", textCheck);
});
