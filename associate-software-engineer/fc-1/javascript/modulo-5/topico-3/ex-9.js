function promiseTimeOut() {
  return new Promise((resolve, reject) => {
    const resolveThreeSeconds = new Promise((resolve) => {
      setTimeout(() => resolve("A promise foi resolvida"), 5000);
    });
    const timeOutMoreThreeSeconds = setTimeout(
      () => reject("A promisse não foi resolvida antes de 3 segundos"),
      3000
    );
    resolveThreeSeconds
      .then((message) => {
        clearTimeout(timeOutMoreThreeSeconds);
        resolve(message);
      })
      .catch((err) => console.error(err));
  });
}

promiseTimeOut()
  .then((resolve) => console.log(resolve))
  .catch((err) => console.error(err));
