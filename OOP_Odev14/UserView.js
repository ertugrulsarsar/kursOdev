class UserView {
  getUserInput() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    return { name, email };
  }
  clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
  }

  displayMessage(message, isError = false) {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = message;
    messageDiv.style.color = isError ? "red" : "green";
  }
}
