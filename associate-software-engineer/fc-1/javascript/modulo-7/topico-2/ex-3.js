function RGBcolor() {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);
  return "rgb(" + R + "," + G + "," + B + ")";  
}

const randomColorBody = () => {
    const bodyPage = document.body;
        bodyPage.style.backgroundColor = RGBcolor();
}
document.getElementById("alterBodyColor").addEventListener("click", randomColorBody);
