// const obj = {
//   name: 'gyuseop',
//   sayName() {
//     console.log(this.name)
//   }
// }

// obj.sayName();

// function produceFunc(name) {
//   this.name = name;
// }

// const gyuseop = new produceFunc('gyuseop')

// console.log(gyuseop)

// function sayName() {
//   console.log(this);
// }

// sayName.bind({ name: 'gyuseop' })()

// sayName.call({ name: 'gyuseop' });


// const obj = {
//   name: 'gyuseop',
//   sayName: () => {
//     console.log(this.name)
//   }
// }

// obj.sayName();

// const obj = {
//   name: 'gyuseop',
//   sayName() {
//     console.log(this.name);
//     const inner = () => {
//       console.log(this.name)
//     }
//     inner();
//   }
// }
// const obj = {
//   name: 'gyuseop',
//   sayName() {
//     console.log(this.name);
//     function inner() {
//       console.log(this.name)
//     }
//     inner.call(obj);
//   }
// }


// obj.sayName();
// // inner -> sayName -> anonymouse
// // obj의 {}는 객체리터럴이므로 무시한다.
// // sayName이 화살표함수여도 위 scope chain은 동일하다

// const sayN = obj.sayName;

// sayN()

const obj = {
  addEventListener: function (eventName, callback) {
    callback() // this가 window -> 땡
    callback.call(this) // -> this가 그래서 HTML Node를 가리켰던 것이다.
  }
}

header.addEventListener('click', function () {
  console.log(this)
})