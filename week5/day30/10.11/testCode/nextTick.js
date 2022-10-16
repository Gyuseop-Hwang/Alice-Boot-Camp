setTimeout(() => {
  // 3등
  console.log("timeout");
}, 0);


Promise.resolve().then(() => console.log("promise"));

process.nextTick(() => {
  // 1등
  console.log("nextTick");
});