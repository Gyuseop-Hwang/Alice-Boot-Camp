// console.log(function () { }.hasOwnProperty('prototype'));
// console.log(function () { }.prototype)
// console.log({}.hasOwnProperty('prototype'));

// let arrow = (a, b) => a + b;
// console.log(arrow.hasOwnProperty('prototype'));

// class Animal {
//   constructor(name, sound) {
//     this.name = name;
//     this.sound = sound;
//     // ES5 버전 메서드 -> 함수 키워드 등장 -> prototype 가지고 있음.
//     this.sayHello = function () {
//       console.log(`안녕`);
//     };
//   }
//   // 메서드로 하면 함수 function 키워드 X -> prototype 안 가지고 있음.
//   makeSounds() {
//     console.log(`${this.sound} 소리를 내다`);
//   }
// }

// const cat = new Animal('나비', '미아옹');
// console.log(cat.hasOwnProperty('prototype'));
// console.log(cat.makeSounds.hasOwnProperty('prototype'));
// console.log(cat.sayHello.hasOwnProperty('prototype'));

const obj = {};

// obj 객체 안에 __proto__ 메소드가 없다.
console.log(obj.hasOwnProperty('__proto__'));
console.log(obj.__proto__.hasOwnProperty('__proto__'))
// obj의 부모 프로토타입 Object가 __proto__메소드를 가지고 있다.
console.log(Object.__proto__);

console.log(Object.hasOwnProperty('__proto__'))
console.log(Object.prototype.hasOwnProperty('__proto__'))


// 추상적인 생성자 객체
console.log(Object);
// 구체화된 생성자 객체 -> 구체화할 인스턴스의 프로토타입을 할당
console.log(Object.prototype)



console.log(Object.prototype.__proto__)

// function Person(name) {
//   this.name = name;
// }
// const me = new Person('박연미');
// console.log(me.constructor === Person);
// console.log(Person.prototype.constructor == me.constructor)
// console.log(Person.prototype);
// console.log(Person.prototype.constructor)