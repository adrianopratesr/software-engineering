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
    return Math.round(milliseconds / 1000 / 60 / 60 / 24);
  };

export const differenceDate = (date) => {
    const currentDate = new Date();
    const millisecondsDifference = currentDate - Date.parse(date);
    const ageInYears = millisecondsDifference / 1000 / 60 / 60 / 24 / 365;
    return Math.round(ageInYears);
  };
  