const people = [...Array(50)].map((_, i) => ({
  name: `Pessoa${i + 1}`,
  dateOfBirth: new Date(1950 + i, 1, 1),
}));

const events = [...Array(50)].map((_, i) => ({
  name: `Evento${i + 1}`,
  date: new Date(2022 + i, 1, 1),
}));

const ohMyGod = people.map((person) => {
  const filterEvents = events.filter(
    (value) => value.date > person.dateOfBirth
  );
  const nextEvent = filterEvents.reduce((previous, current) => {
    return previous.date < current.date ? previous : current;
  });
  return `Nome: ${person.name}, Data de nascimento: ${person.dateOfBirth}, Nome do evento: ${nextEvent.name}, Data do evento: ${nextEvent.date}`;
});

console.log(ohMyGod);
