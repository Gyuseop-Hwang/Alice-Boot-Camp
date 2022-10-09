//Symbol -> 유일한 식별자

//library land
const uid = Symbol('uid')
console.log(uid);

const user = {
  // id: 'p1',
  [uid]: 'p1',
  name: 'max',
  age: 30,
  [Symbol.toStringTag]: 'User'
}

user[uid] = 'p3'

// app land

user.id = 'p2' // don't want


console.log(user[Symbol('uid')]); // 동일한 문자열의 Symbol이여도 전혀 다른 객체이다

console.log(Symbol('uid') === Symbol('uid'))

console.log(user)
console.log(user.toString())

// iterator(반복자)는 next 메서드를 가진 객체이다.

const company = {
  curEmployee: 0,
  employees: ['Max', 'Manu', 'Anna'],
  next() {
    if (this.curEmployee >= this.employees.length) {
      return { value: this.curEmployee, done: true };
    }
    const returnValue = { value: this.employees[this.curEmployee], done: false };
    this.curEmployee++;
    return returnValue;
  },
  [Symbol.iterator]: function* employeeGenerator() {
    // 나만의 루핑 로직
    // console.log(employee.value);
    let currentEmployee = 0;
    while (currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee];
      currentEmployee++;
    }
  }
}

// console.log(company.next())
// console.log(company.next())
// console.log(company.next())
// console.log(company.next())
// console.log(company.next())

// let employee = company.next();

// while (!employee.done) {
//   console.log(employee.value);
//   employee = company.next();
// }

// 제네레이터, 위에서 직접 만든 next() 메소드를 가진 객체를 생성하는 특별한 함수

// const it = company.getEmployee();

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

for (let employee of company) {
  console.log(employee)
}

console.log([...company])

const course = {
  title: 'Javascript - The Complete Guide',
  test: 'dummy'
}

Reflect.setPrototypeOf(course, { toString() { return this.title } })

console.log(course.toString())

console.log(Reflect.deleteProperty(course, 'title'))

console.log(course)

console.log(delete course.test);

console.log(course)

// Reflect.defineProperty(course, )

console.log(course)