const events = [...Array(50)].map((_, i) => ({
  name: `Evento${i + 1}`,
  date: new Date(2022 + i, 1, 1),
}));

const eventsPerYear = events.reduce((accumulator, currentValue) => {
  const year = currentValue.date.getFullYear();
  accumulator[year] = (accumulator[year] || 0) + 1;
  return accumulator;
}, {});

console.log(eventsPerYear);
