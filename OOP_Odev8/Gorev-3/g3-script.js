document.getElementById("save").addEventListener("click", function () {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const birthDay = document.getElementById("birthDay").value;
  const gender = document.getElementById("gender").value;

  const skills = [];
  if (document.getElementById("html").checked) skills.push("HTML");
  if (document.getElementById("css").checked) skills.push("CSS");
  if (document.getElementById("javaScript").checked) skills.push("JavaScript");
  if (document.getElementById("php").checked) skills.push("PHP");
  if (document.getElementById("c++").checked) skills.push("C++");
  if (document.getElementById("java").checked) skills.push("JAVA");
  if (document.getElementById("c#").checked) skills.push("C#");

  const output = `
  <h3>Girilen Bilgiler</h3>
  <table>
    <tr>
        <th>Bilgi</th>    
        <th>Değer</th>    
    </tr>
    <tr>
        <td>İsim</td>    
        <td>${firstName}</td>    
    </tr>
    <tr>
        <td>Soyisim</td>    
        <td>${lastName}</td>    
    </tr>
    <tr>
        <td>Doğum Tarihi</td>    
        <td>${birthDay}</td>    
    </tr>
    <tr>
        <td>Cinsiyet</td>    
        <td>${gender === "female" ? "Kadın" : "Erkek"}</td>    
    </tr>
    <tr>
        <td>Yetenekler</td>    
        <td>${skills.join(", ") || "Yok"}</td>    
    </tr>
  </table>`;
  document.getElementById("output").innerHTML = output;
});
