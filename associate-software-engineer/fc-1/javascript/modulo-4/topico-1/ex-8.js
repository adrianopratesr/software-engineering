function getMonthNumber(monthName) {
    if (!month || !monthNames.includes(monthName)) {
        throw new Error("Insira o nome de um mes valido");
    }
    const monthNames = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    return monthNames.indexOf(monthName);
  }

  try {
    getMonthNumber("jun");
  } catch (error) {
    console.error(error.message);
  }
