class Student {
  #id;
  #name;
  constructor(id, name) {
    this.#id = id;
    this.#name = name;
    // this.info = '내가 우선순위니?'
    // this.info = `${this.id} : ${this.name}`;
  }
  // info() {
  //   return `${this.id} : ${this.name}`;
  // }

  // 접근자 프로퍼티는 함수를 변수처럼 사용 가능.
  get info() {
    return `${this.#id} : ${this.#name}`;
  }
  // set값은 파라미터로 하나만 가능하다.
  // set info(newId, newName){
  //   this.id = newId;
  //   this.name = newName;
  // }
  set info(newValue) {
    this.#name = newValue[0];
    this.#id = newValue[1];
  }
}

const student = new Student(20121234, '박연미');
console.log(student.info);
// student.name = '아이유';
console.log(student)
console.log(student.info);
student.info = ['유재석', 111111]
console.log(student.info)

//console.log(student.info());

// 은닉화 private getter and setter

// class Counter {
//   #value;
//   constructor(start) {
//     if (start < 0) {
//       this.#value = 0;
//     } else {
//       this.#value = start;
//     }
//   }

//   get value() {
//     return this.#value;
//   }
//   increase() {
//     this.#value++;
//   }

//   set value(setValue) {
//     this.#value = setValue < 0 ? 0 : setValue;
//   }
// }

// const counter = new Counter(5);
// console.log(counter);
// console.log(counter.value);
// counter.increase();
// counter.increase();
// counter.increase();

// counter.value = -100;
// console.log(counter.value);
