const textParagraph = document.getElementById("paragraph");
const buttonAlterText = document.getElementById("alterTextButton");
buttonAlterText.addEventListener("click", function () {
  textParagraph.textContent = "Texto alterado";
});
