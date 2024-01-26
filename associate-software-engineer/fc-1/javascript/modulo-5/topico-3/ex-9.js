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

const main = async () => {
  try {
    const timeOut = await promiseTimeOut();
    console.log(timeOut);
  } catch (err) {
    console.error(err);
  }
};
main();
