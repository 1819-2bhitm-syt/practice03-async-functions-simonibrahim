let counter = 10;
console.log(counter);

let logTick = true;

let timer = setInterval(() => {
    counter = counter - 1;
    console.log(counter);
}, 1000);

setTimeout(()  => {
    clearInterval(timer);
}, counter * 1000 + 100);