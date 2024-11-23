// 3. Controller (controller.js)
// Controller, Model ve View arasında bir köprü görevi görür:

// Kullanıcıdan gelen girdileri alır ve Model'e uygun işlemi yapmasını söyler.
// Model'den dönen sonucu View'a ileterek kullanıcıya gösterilmesini sağlar.
// İşlemlerde hata varsa View'da hata mesajını gösterir.


class CalculatorController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindCalculate(this.handleCalculation.bind(this));
  }

  handleCalculation() {
    const { num1, num2, operation } = this.view.getInputs();

    if (isNaN(num1) || isNaN(num2)) {
      this.view.displayError("Geçersiz sayı girişi!");
      return;
    }

    let result;
    switch (operation) {
      case "+":
        result = this.model.add(num1, num2);
        break;
      case "-":
        result = this.model.subtract(num1, num2);
        break;
      case "*":
        result = this.model.multiplication(num1, num2);
        break;
      default:
        this.view.displayError("Geçersiz İşlem!");
        return;
    }
    this.view.displayResult(result);
  }
}
