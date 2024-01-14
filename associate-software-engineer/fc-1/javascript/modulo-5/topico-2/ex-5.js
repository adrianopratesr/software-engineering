fetch("https://randomuser.me/api/")
  .then((result) => result.json())
  .then((reusltJson) => console.log(reusltJson));
