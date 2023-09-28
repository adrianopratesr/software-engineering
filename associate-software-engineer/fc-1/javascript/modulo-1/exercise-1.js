pedroSales = 2;
mariaSales = 0;
carlosSales = 5;

if (pedroSales > mariaSales && pedroSales > carlosSales) {
  return console.log("Pedro vendeu mais");
} else if (mariaSales > carlosSales && mariaSales > pedroSales) {
  return console.log("Maria vendeu mais");
} else {
  return console.log("Carlos vendeu mais");
}
