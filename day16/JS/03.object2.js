// 객체를 동적으로 접근하기

let cat = {
  name: '나비',
  age: 2,
  // key가 없으므로. 없는 값은 key : undefined 형태로 없으므로 undefined값이다.
};

let dog = {
  dogName: '멍멍이',
  age: 2,
};

function getValue(obj, key) {
  // return obj[key]; // 객체 내에 key 변수의 값을 찾는다.
  return obj.key // 순수하게 객체 내에 'key'값을 찾는다. obj["key"]와 같은 상태.
}
console.log(getValue(cat, 'name'));
console.log(getValue(dog, 'dogName'));

// function addKey(obj, key, value) {
//   // obj[key] = value;
//   obj.key = value
// }
// addKey(cat, 'owner', { name: '박연미' });
// //console.log(cat);

// function deleteKey(obj, key) {
//   // delete obj[key]; // key 파라미터에 전달되는 값인 key 프로퍼티를 찾아 삭제한다.
//   delete obj.key //'key'라는 프로퍼티를 찾아 삭제하려 한다.
// }

// const person = {
//   name: '박연미',

//   sayHello() {
//     console.log('---------hello ------');
//     console.log(this);
//     console.log(`this 값은 : ${this}`);
//     console.log(` 안녕하세요 ${this.name} 입니다 `);
//   },
// };

// function sayHello() {
//   console.log('---------hi ------');
//   console.log(`this 값은 : ${this}`);
//   console.log(` 안녕하세요 ${this.name} 입니다 `);
// }

// console.log(person);
// console.log(this);

// person.sayHello();
// sayHello();
