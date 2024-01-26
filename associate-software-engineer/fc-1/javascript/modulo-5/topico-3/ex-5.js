const main = async () => {
  const randomDataGenerator = await fetch("https://randomuser.me/api/");
  const tranformInJson = await randomDataGenerator.json();
  console.log(tranformInJson);
};

main();
