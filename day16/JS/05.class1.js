

function oldPet(kind, name, age) {
  // this = {} (new 연산자로 인해 내부에서 실행)
  this.kind = kind;
  this.name = name;
  this.age = age;
  this.info = () => {
    console.log(`-- ${this.kind} -- `);
    console.log(`이름 : ${this.name}`);
    console.log(`나이 : ${this.age}`);
  };

  return kind; //(new 연산자로 내부에서 실행)
}

const test = new oldPet('test', 'testing', 12)

console.log(test)

// 2. 클래스

class Pet {
  // new를 할 때 contructor 생성자함수가 호출된다
  constructor(kind, name, age) {
    this.kind = kind;
    this.name = name;
    this.age = age;
    // this.info : ()=>{}
  }
  info = () => {
    console.log(`-- ${this.kind} -- `);
    console.log(`이름 : ${this.name}`);
    console.log(`나이 : ${this.age}`);
  };
}



// cat, rabbit은 Pet의 instance이다.
const cat = new Pet('고양이', '나비', 2);
const rabbit = new Pet('토끼', '토순이', 1);


// console.log(cat instanceof Pet)
// console.log(cat);
// console.log(rabbit);
// cat.info();
// rabbit.info();


// 객체 리터럴 생성의 경우 const person = new Object({name : '박연미})이므로 다음이 참이다.
const person = { name: '박연미' };
console.log(person instanceof Object)
// // Pet.info()
// console.log(Pet.name);
