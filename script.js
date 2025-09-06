function zeigeInfo() {
  const info = document.getElementById("info");
  info.style.display = info.style.display === "none" ? "block" : "none";
}
function toggleVorteile() {
  const feld = document.getElementById("vorteile");
  feld.style.display = (feld.style.display === "none") ? "block" : "none";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}


document.getElementById("suche").addEventListener("input", function () {
  const suchbegriff = this.value.toLowerCase();
  const eintraege = document.querySelectorAll("#liste li");

  eintraege.forEach(function (eintrag) {
    const text = eintrag.textContent.toLowerCase();
    if (text.includes(suchbegriff)) {
      eintrag.style.display = "list-item";
    } else {
      eintrag.style.display = "none";
    }
  });
});
