let newWindow;

function openWindow() {
  newWindow = window.open("", "Yeni Pencere", "width=500,height=500");

  newWindow.document.write(`<html>
    <head>
    <title>Yeni Pencere</title>
    <style>
    body{
    background-color: azure}
    </style>
    </head>
    <body>
    <h1>Merhaba, bu yeni bir pencere</h1>
    <button onclick="window.close()">Pencereyi Kapat</button>
    </body>
    </html>`);
  newWindow.document.close();
}

