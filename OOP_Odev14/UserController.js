class UsserController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  handleRegistiration() {
    const { name, email } = this.view.getUserInput();

    if (!name || !email) {
      this.view.displayMessage("İsim ve Email Gerekli", true);
      return;
    }
    if (!this.validateEmail(email)) {
      this.view.displayMessage("Geçersiz E-Mail Formatı", true);
      return;
    }

    const user = this.model.addUser(name, email);
    this.view.displayMessage(
      `${user.name} isimli kullanıcı başarıyla kayıt oldu!`
    );
    this.view.clearForm();
  }

  validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}
