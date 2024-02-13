const title = document.getElementById("tituloPrincipal");
title.textContent = "Aooba";

const paragraphs = document.getElementsByTagName("p");
for (const p of paragraphs) {
  p.style.color = "#3346FF";
}

const highlightedElements = document.getElementsByClassName("destaque");
for (const highlightedElement of highlightedElements) {
  highlightedElement.style.backgroundColor = "#ffff00";
}
for (const highlightedElement of highlightedElements) {
  highlightedElement.textContent = "Texto alterado";
}

const itemsElements = document.querySelector(".item");
itemsElements.textContent = "Item Alterado";

const links = document.querySelectorAll("a.link");
for (const link of links) {
  link.setAttribute("target", "_blank");
}

const clickButtonElement = document.getElementById("botaoClique");
clickButtonElement.textContent = "Não clique";

const listItemElements = document.querySelectorAll("li.item");
for (const colorLi of listItemElements) {
  colorLi.style.backgroundColor = "#00ff00";
}

const firstSpanElement = document.getElementsByTagName("span")[0];
firstSpanElement.style.fontStyle = "italic";
