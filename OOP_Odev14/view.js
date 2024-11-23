// 2. View (view.js)
// View, kullanıcı arayüzünü temsil eder ve kullanıcıdan gelen girdileri işler:

// Kullanıcıdan aldığı verileri döndürür (getInputs).
// Sonuçları veya hata mesajlarını ekranda gösterir (displayResult ve displayError).
// Kullanıcı eylemlerini dinleyerek, belirli olaylarda kontrolöre bilgi iletir (bindCalculate).


class CalculatorView{
    getInputs(){
        const num1 = parseFloat(document.getElementById("num1").value)
        const num2 = parseFloat(document.getElementById("num2").value)
        const operation = document.getElementById("operation").value
        return {num1, num2, operation}
    }

    displayResult(result){
        document.getElementById("result").textContent = `Sonuç: ${result}`
    }
    displayError(message){
        document.getElementById("result").textContent = `Error: ${message}`
    }
    bindCalculate(handler){
        document.getElementById("calculate").addEventListener("click", handler)
    }
}