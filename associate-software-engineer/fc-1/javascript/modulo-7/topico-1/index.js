const title = document.getElementById("tituloPrincipal");
title.textContent = "Aooba";

const paragraph = document.getElementsByTagName("p");
for (const p of paragraph) {
  p.style.color = "#3346FF";
}

const alterClass = document.getElementsByClassName("destaque");
for (const alterBackground of alterClass) {
  alterBackground.style.backgroundColor = "#ffff00";
}

const elementClass = document.querySelector(".item");
elementClass.textContent = "Item Alterado";

const links = document.querySelectorAll("a.link");
for (const link of links) {
  link.setAttribute("target", "_blank");
}

const buttonText = document.getElementById("botaoClique");
buttonText.textContent = "Não clique";

const alterColorList = document.querySelectorAll("li.item");
for (const colorLi of alterColorList) {
  colorLi.style.backgroundColor = "#00ff00";
}

const alterClassContent = document.getElementsByClassName("destaque");
for (const alterContent of alterClassContent) {
  alterContent.textContent = "Texto alterado";
}

const alterFontText = document.getElementsByTagName("span")[0];
alterFontText.style.fontStyle = "italic";
