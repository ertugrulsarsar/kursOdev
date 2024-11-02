const links = document.querySelectorAll("a");

links.forEach((link) => {
  // https:// ile başlayanlara style ekleyeceğim.
  if (link.href.startsWith("https://")) {
    link.classList.add("dashed-line");
  }
});
