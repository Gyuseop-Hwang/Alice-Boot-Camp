// function sum(a, b, c, d) {
//   console.log(a, b, c, d)
//   return a + b + c;
// }
// let pre = [100, 200, 300];
// console.log('sum=', sum(...pre));

// function sum(...rest) {
//   console.log(rest)
//   return rest[0] + rest[1] + rest[2];
// }
// let pre = [100, 200, 300];
// console.log("sum=(잘못된 사례)", sum(pre))
// console.log("==========================")

// console.log('sum=', sum(...pre));

// console.log('위 아래 동일 사례')

// console.log("sum=", sum(100, 200, 300))




function test() {
  return new Promise((resolve, reject) => {
    resolve(2);
  })
}

test().then(square) // 축약형(오직 이 형태로만 가능하다.)

test().then(num => {
  square(num)
  // return undefined
})
//return이 없으므로 다음 then에 undefined로 들어간다.

test().then(num => square(num))
// 화살표함수임!!! return이 있으므로 다음 then에 4로 들어간다.
//test().then(num => { return square(num) })

function square(n) {
  console.log(n ** 2);
}










function add(a, b) {
  console.log(a);
  console.log(b);
  console.log(a + b)
}

