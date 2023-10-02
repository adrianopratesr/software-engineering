const pedroSales = 2;
const mariaSales = 0;
const carlosSales = 5;

if (pedroSales > mariaSales && pedroSales > carlosSales) {
  console.log("Pedro vendeu mais");
} else if (mariaSales > carlosSales && mariaSales > pedroSales) {
  console.log("Maria vendeu mais");
} else {
  console.log("Carlos vendeu mais");
}
