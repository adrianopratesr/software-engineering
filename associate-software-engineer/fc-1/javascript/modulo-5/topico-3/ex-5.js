fetch("https://randomuser.me/api/")
  .then((data) => data.json())
  .then((dataJson) => console.log(dataJson));
