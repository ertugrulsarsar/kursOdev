// 1. Model (model.js)
// Model, verilerin işlenmesinden ve temel iş mantığının uygulanmasından sorumludur.

// İşlemleri gerçekleştiren metotları içerir (örneğin: toplama ve çıkarma).
// Bu projede add ve subtract metotları tanımlanmıştır.

class CalculatorModel{
    add(a,b){
        return a + b
    }
    subtract(a,b){
        return a - b
    }
    //Çarpmayı sonradan ekledim, kolaylıkla bölme işlemi de eklenebilir.
    multiplication(a,b){
        return a * b
    }
}