function submitOrder() {
  const name = document.getElementById("name").value;
  const book = document.getElementById("book").value;
  const deliveryDate = document.getElementById("deliveryDate").value;
  const address = document.getElementById("address").value;

  const message = `${name}, siparişiniz için teşekkür ederiz. ${book} adlı ürün ${deliveryDate} tarihinde ${address} adresine teslim edilecektir.`;

  document.getElementById("thankYouMessage").innerText = message;
  document.getElementById("thankYouMessage").style.display = "block";
}
