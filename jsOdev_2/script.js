// 1
let maxDataTransferSpeed; // Mbps cinsinden

// 2

let currentDayOfWeek; // Örneğin, "Pazartesi"

// 3
function degerHesapla() {
  let hesapla = 2 + 6 / (2 + 1); // result 2 olacak
  document.getElementById("sonuc").innerHTML = Math.floor(hesapla);
}

// 4
function aralikSorgula() {
  let x = document.getElementById("x").value;

  let isInRange = x >= 0 && x <= 9; // 0 ile 9 arasında doğru (true), diğer değerler için yanlış (false)
  alert(`${isInRange}`);
}

// 5
function isEven() {
  let y = document.getElementById("y").value;
  let tekCift = y % 2 == 0;
  alert(`${tekCift}`);
}
