function logIn() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const remember = document.getElementById("remember").checked;

  if (username) {
    const message = remember
      ? `Merhaba, ${username}!. Seni hatırladım.`
      : `Merhaba, ${username}! Seni hatırlamadım.`;
      document.getElementById("message").innerText = message
  }
  else{
    document.getElementById("mesaage").innerText = "Lütfen gerekli yerleri doldurun."
  }
}
