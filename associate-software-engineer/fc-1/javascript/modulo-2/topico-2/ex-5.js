const book = {
  title: "O programador pragmatico",
  author: "Andrew Hunt",
  year: 1999,
};

console.log(book);

for (let properties in book) {
  console.log(`${properties} -> ${book[properties]}`);
}
