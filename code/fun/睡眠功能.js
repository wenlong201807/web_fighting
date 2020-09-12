function sleep (delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delay);
  })
}

(async () => {
  for (var i = 0; i < 10; i++) {
    await sleep(1000);
    console.log(i);
  }
})();