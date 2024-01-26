const main = async () => {
  try {
    const randomDataGenerator = await fetch("https://randomuser.me/api/");
    const tranformInJson = await randomDataGenerator.json();
    console.log(tranformInJson);
  } catch (err) {
    console.error("A busca falhou: " + err);
  }
};

main();
