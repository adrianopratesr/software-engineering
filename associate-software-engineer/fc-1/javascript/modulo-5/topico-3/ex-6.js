fetch("https://randomuser.me/api/=5")
  .then((data) => data.json())
  .then((dataJson) => console.log(dataJson))
  .catch((err) => console.error("A busca falhou: " + err));
