// setTimeout(() => {
//   console.log('a')
// }, 0)
// setTimeout(() => {
//   console.log('b')
// }, 1000)
// setTimeout(() => {
//   console.log('c')
// }, 2000)
// Promise.resolve().then(() => {
//   console.log('p')
// })



// 비동기란?

// '동시'의 개념 X ->  순서대로 실행되지 않는다. O

// 한번 비동기는 영원한 비동기
let a = 2;
const p = new Promise((resolve, reject) => {
  console.log('제일 먼저')
  setTimeout(() => {
    a = 5;
    console.log(a)
    resolve(a)
  }, 0)
})


console.log('딴 짓')

// p.then(data => {
//   console.log('data', data)
// })



