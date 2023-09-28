const scoreStudent = 100;

if (scoreStudent >= 90) {
  return console.log("Exelente");
} else if (scoreStudent >= 75 && scoreStudent < 90) {
  return console.log("Bom");
} else if (scoreStudent >= 50 && scoreStudent < 75) {
  return console.log("Regular");
} else {
  return console.log("Precisa melhorar");
}
