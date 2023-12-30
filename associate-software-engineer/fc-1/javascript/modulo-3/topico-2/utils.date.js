export const isMonthTheSame = (date, monthNumber) => {

    return new Date(date).getMonth() === monthNumber;
    };

export function getMonthNumber(monthName) {
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
    return monthNames.indexOf(monthName) ;
  }

export const convertingMilliSecondInDays = (milliseconds) => {
    return Math.floor(milliseconds / 1000 / 60 / 60 / 24);
  };

export const differenceDate = (date) => {
    const currentDate = new Date();
    const millisecondsDifference = currentDate - Date.parse(date);
    millisecondsDifference / 1000 / 60 / 60 / 24 / 365;
    return Math.floor(millisecondsDifference / 1000 / 60 / 60 / 24 / 365);
  };
