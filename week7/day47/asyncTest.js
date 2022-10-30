async function getNumber() {
  return 1
}

getNumber().then(console.log) // 숫자 1? 혹은 Promise?


const asyncFunc = async function () {
  const myNumber = await getNumber()
  console.log(myNumber) // 1 출력
}

asyncFunc();