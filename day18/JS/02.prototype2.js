// function Person(name) {
//   this.name = name;
// }

// let foo = new Person('Lee');

// console.log(Person.prototype === foo.__proto__);
// console.log(Person.prototype.constructor === Person);
// console.log(foo.constructor === Person);
// console.log(Person.constructor === Function);

let lee = {
  name: 'Lee',
  score: 90,
};
console.log(lee);
console.log(lee.hasOwnProperty('name'));
console.log(lee.__proto__ === Object.prototype);
console.log(Object.prototype.hasOwnProperty('hasOwnProperty'));

const dog = { name: '바둑이', age: 3 };

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));
// keys, values, entries는 Object의 static 메서드이다.
console.log('name' in dog);
console.log(dog.hasOwnProperty('name'));

console.log(Object.hasOwnProperty('age'))
console.log(Object.prototype.hasOwnProperty('name'))
// 실제로 객체로(instance)로 내려주는 instance.__proto__ 했을 때 확인할 수 있는 상속받는 prototype의 내용들을 구체화하는 
// 키워드가 생성자함수.prototype이다

const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);

const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(desc);

Object.defineProperty(dog, 'name', {
  value: '멍멍',
  writable: false,
  enumerable: false,
  configurable: false,
});
dog.name = '왈왈';
console.log(dog.name);
console.log(Object.keys(dog));

delete dog.name;
console.log(dog.name);

const teacher = {};

Object.defineProperties(teacher, {
  firstName: {
    value: '연미',
    writable: true, // 외부에서 수정 가능한가
    enumerable: true, // keys 등으로 출력되는가
    configurable: true, // 삭제 가능한가
  },
  lastName: {
    value: '박',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${this.lastName} ${this.firstName}`;
    },
    set(name) {
      this.lastName = name[0];
      this.firstName = name.slice(1);
    },
    configurable: true,
    //enumerable: true,
  },
});
console.log('--------------');
console.log(teacher);

console.log(teacher.fullName);
teacher.fullName = '오은영';
console.log(teacher);
