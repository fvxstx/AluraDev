// --- Efeito de curtir o botão
const buttonFavorite = document.querySelectorAll(".btn-favorite");

buttonFavorite.forEach((button) => {
  button.addEventListener("click", () => {
    const path = button.childNodes[1].childNodes[1];
    if (path.style.fill === "red") {
      path.style.fill = "white";
    } else {
      path.style.fill = "red";
    }
  });
});
