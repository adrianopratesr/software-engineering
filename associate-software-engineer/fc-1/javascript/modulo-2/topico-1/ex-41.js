const events = [...Array(50)].map((_, i) => ({
  name: `Evento${i + 1}`,
  date: new Date(2022 + i, 1, 1),
}));

const filteredEvents = events.filter((value) => {
  return (
    value.date >= new Date("2030-01-01") && value.date <= new Date("2040-01-01")
  );
});

console.log(filteredEvents);
