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
  console.log('제일 먼저') // 이 내부 자체는 동기코드이다.
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


// p.then((result) => {
//   console.log('result', result)
//   return Promise.resolve(1);
// }).then((result) => {
//   console.log(result) // Promise.resolve(1) 자체가 아니라 Promise.resolve(1)이 resolve된 상태 '1'을 받는다.
//   return 1
// }).then((result) => {
//   console.log(result) // 위에랑 똑같다. 위에서 promise를 반환하지 않아도 then에서 받는다. 꼭 promise만 받는 것은 아니다.
//   // return undefined
// }).then((result) => {
//   console.log(result) // 위에서 아무것도 반환 안 했는데 그러면 함수는 자동적으로 return undefined이다.
// }).catch((err) => {
//   console.log(err)
// })

async function asyncFunc() {
  console.log('2'); // async함수도 await 등장 전까지는 동기코드이다.
  const a = await 1; // 여기서부터 비동기...
  console.log('4'); // 그리고 이 이후로는 한번 비동기는 영원히 비동기이므로 쭈욱 비동기다.
  console.log('a', a);
  console.log('hmm');
  await null;
  const b = await Promise.resolve(1);
  console.log('b', b);
  return a + b;
}


console.log('1');
asyncFunc().then(result => {
  console.log(result);
}).then(result2 => {
  console.log(result2)
})

console.log('3')


// await 연달아 쓰기 지양!!


async function createPost() {
  const post = await db.getPost();
  if (post) {
    resizeBy.status(403).send('이미 게시글이 존재합니다.')
  } else {
    await db.createPost(); // 게시글 작성
    await db.userIncrementPostCount(); // 사용자에 작성글 카운트 1 올림
    await db.createNoti(); // 새로운 게시글 알림 등록.
    // 생각보다 순차적으로 안 해도 되고 동시에 해도 되는 것들도 있다.

  }
}
async function createPost() {
  const post = await db.getPost();
  if (post) {
    resizeBy.status(403).send('이미 게시글이 존재합니다.')
  } else {
    await db.createPost(); // 게시글 작성

    // 프로미스의 장점을 이용하자. 실행은 지금. 결과값은 받아오는 중. 그리고 그 값을 나중에 원할 때 사용
    const p1 = db.userIncrementPostCount(); // 실행 지금. 값을 받아오는 중(Background에서 대기)
    const p2 = db.createNoti(); // 실행 지금. 값을 받아오는 중(Background에서 대기)

    await Promise.allSettled([p1, p2]) // 그 값을 지금 사용(한번에)

  }
}