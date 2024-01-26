function promiseTimeOut() {
  return new Promise((resolve, reject) => {
    const resolveThreeSeconds = new Promise((resolve) => {
      setTimeout(() => resolve("A promise foi resolvida"), 5000);
    });
    const timeOutMoreThreeSeconds = setTimeout(
      () => reject("A promisse não foi resolvida antes de 3 segundos"),
      3000
    );
    const mainPromisse = async () => {
      try {
        const message = await resolveThreeSeconds;
        clearTimeout(timeOutMoreThreeSeconds);
        resolve(message);
      } catch (err) {
        (err) => console.error(err);
      }
    };
    mainPromisse();
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
