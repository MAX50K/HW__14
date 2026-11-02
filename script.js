function delayedPromise(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), delay);
  });
}

function randomDelay() {
  return Math.floor(Math.random() * 2500) + 500;
}

const promises = [
  delayedPromise("First", randomDelay()),
  delayedPromise("Second", randomDelay()),
  delayedPromise("Third", randomDelay()),
  delayedPromise("Fourth", randomDelay()),
  delayedPromise("Fifth", randomDelay()),
];

Promise.all(promises).then((res) => console.log(res)).catch((error) => console.log(error))

// завдання 2

function randomDelay(value) {
  const ms = Math.round(Math.random() * (5000 - 1000) + 1000);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value)
    }, ms)
  })
}

const promises2 = [
  randomDelay("promise 1"),
  randomDelay("promise 2"),
  randomDelay("promise 3"),
  randomDelay("promise 4"),
  randomDelay("promise 5"),
]

Promise.race(promises2).then((res) => console.log(res)).catch((error) => console.log(error))