function promiseTimeOut() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("cinco segundos"), 5000);
    setTimeout(
      () => reject("A promisse não foi resolvida antes de 3 segundos"),
      3000
    );
  });
}

promiseTimeOut()
  .then((resolve) => console.log(resolve))
  .catch((err) => console.error(err));
