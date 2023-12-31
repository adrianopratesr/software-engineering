function getMonthNumber(monthName) {
    if (!month || !monthNames.includes(monthName)) {
        throw new Error("Insira o nome de um mes valido");
    }
    const monthNames = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ];
    return monthNames.indexOf(monthName.toLowerCase());
  }

  try {
    getMonthNumber("jun");
  } catch (error) {
    console.error(error.message);
  }
