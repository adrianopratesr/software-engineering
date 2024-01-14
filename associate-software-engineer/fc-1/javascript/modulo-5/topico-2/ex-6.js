fetch("https://randomuser.me/api/=5")
  .then((result) => result.json())
  .then((reusltJson) => console.log(reusltJson))
  .catch((err) => console.error("A busca falhou: " + err));
