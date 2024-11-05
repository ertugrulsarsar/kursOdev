document.getElementById("signUp").addEventListener("click", function userRegister(){
    const email = document.getElementById("email").value
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const confirmPassword = document.getElementById("confirmPassword").value

    if(password === confirmPassword){
        document.getElementById("message").innerText = `${email} adresine bir onay e-postası gönderildi.`
    }
    else{
        document.getElementById("message").innerText = "Şifreler Uyuşmuyor. Lütfen Tekrar Deneyiniz."
    }
})
