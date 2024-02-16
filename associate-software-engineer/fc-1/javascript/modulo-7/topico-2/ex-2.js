function buttonDiv() {
  let toggleDivDisplay = toggleDiv.style.display;
  if (toggleDivDisplay === 'block') {
    toggleDiv.style.display = 'none';
  } else {
    toggleDiv.style.display = 'block';
  }
}

document.getElementById("buttonDiv").addEventListener("click", buttonDiv);
