const btn = document.getElementById("btn");
const mes = document.getElementById("message");

async function triathlon() {
  let swimEnd = await exercise(0, "swim");
  let bicycleEnd = await exercise(swimEnd, "bicycle");
  let runEnd = await exercise(bicycleEnd, "run");

  return runEnd;
}

// const delay1 = (ms) => new Promise((resolve) => setTimeout(resolve(ms), ms));

// async function exercise(startTime, name) {
//   const exerciseInput = document.getElementById(name);
//   // 1. 완주에 걸리는 시간을 구하세요.
//   // const endTime = startTime + parseInt(exerciseInput.value);
//   // // 2. setTimeout 대신 delay 함수를 사용해 비동기처리를 하세요.
//   // await delay1(exerciseInput.value);
//   const time = await delay1(Number(exerciseInput.value))
//   const endTime = time + startTime;
//   mes.innerText += `${name} finished at ${endTime}\n`;
//   // 3. 완주한 후의 시간을 반환하세요.
//   return endTime;
// }

const delay = ms =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(ms);
    }, ms)
  );

async function exercise(startTime, name) {
  const exerciseInput = document.getElementById(name);

  let time = await delay(parseInt(exerciseInput.value));
  const endTime = time + startTime;

  mes.innerText += `${name} finished at ${endTime}\n`;

  return endTime;
}

btn.addEventListener("click", () => {
  triathlon().then((param) => {
    mes.innerText += `total time : ${param}`;
  });
});
