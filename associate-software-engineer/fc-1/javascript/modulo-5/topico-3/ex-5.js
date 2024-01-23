const main = async () => {
  const findData = await fetch("https://randomuser.me/api/");
  const tranformInJson = await findData.json();
  console.log(tranformInJson);
};

main();
