function getMonthNumber(monthName) {
    if (!monthNames.includes(monthName)) {
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
    return monthNames.indexOf(monthName) + 1;
  }

  try {
    getMonthNumber("jun");
  } catch (error) {
    console.error(error.message);
  }
