class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잔다');
  }
}

class Teacher extends Person {
  constructor(name, age, teacherNo) {
    super(name, age);
    this.teacherNo = teacherNo;
  }
  teach() {
    console.log('가르친다');
  }
}

class Student extends Person {
  constructor(name, age, stuNo, grade) {
    super(name, age); // 자식 클래스는 부모 클래스 이전에 만들어 질 수 없다. super 키워드 -> 부모 객체를 먼저 생성 -> 부모 생성자 호출
    this.stuNo = stuNo;
    this.grade = grade;
  }
  eat() {
    console.log('급식 먹자');
  }
  study() {
    console.log('공부한다');
  }
}

const kim = new Person('김씨', 20);
const park = new Teacher('박씨', 30, 12341234);
const lee = new Student('이씨', 15, 20201111, 5);
console.log(kim);
kim.eat();
//kim.teach();
console.log(park);
park.eat();
console.log(lee);
lee.eat();
