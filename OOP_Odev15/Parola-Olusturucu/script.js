function generatePassword(length, options) {
  const numberChars = "0123456789";
  const upperChars = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
  const lowerChars = upperChars.toLowerCase();
  const symbolChars = "é!'^+%&/()=_;:<>£#$½{[]}|`";

  let allChars = "";
  if (options.numbers) allChars += numberChars;
  if (options.uppercase) allChars += upperChars;
  if (options.lowercase) allChars += lowerChars;
  if (options.symbols) allChars += symbolChars;

  if (!allChars) return "En az bir seçenek belirlemelisiniz.";

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }
  return password;
}

$(document).ready(function () {
  $("#generate").click(function () {
    const length = parseInt($("#length").val());
    const options = {
      numbers: $("#numbers").is(":checked"),
      uppercase: $("#uppercase").is(":checked"),
      lowercase: $("#lowercase").is(":checked"),
      symbols: $("#symbols").is(":checked"),
    };

    const password = generatePassword(length, options);
    $("#result").text(password);
  });
});
