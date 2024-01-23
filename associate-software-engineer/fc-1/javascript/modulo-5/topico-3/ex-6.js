const main = async () => {
  try {
    const findData = await fetch("https://randomuser.me/api/");
    const tranformInJson = await findData.json();
    console.log(tranformInJson);
  } catch (err) {
    console.error("A busca falhou: " + err);
  }
};

main();
