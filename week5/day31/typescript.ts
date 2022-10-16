// interface Todo {
//   title: string,
//   description: string,
// }


// function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
//   return { ...todo, ...fieldsToUpdate };
// }

// const todo1 = {
//   title: 'organize desk',
//   description: 'clear clutter',

// }

// const todo2 = updateTodo(todo1, {
//   description: 'throwouttrash'
// })

// interface Todo {
//   title: string,
// }


// const todo: Readonly<Todo> = {
//   title: 'Delete inactive users'
// }



// todo.title = 'Hello'

// interface Todo {
//   title: string
//   description: string
//   completed: boolean
// }

// type TodoPreview = Omit<Todo, "description">

// const todo: TodoPreview = {
//   title: "Clean room",
//   completed: false,
// }

// function add1(x: number, y: number): number {
//   return x + y;
// }

// const add2 = (x: number, y: number) => (x + y);
// function makeWord(firstChar: string, ...restOfChar: string[]) {
//   return firstChar + restOfChar.join("")
// }

// let word = makeWord("타", "입", "스", "크", "립", "트")

// console.log(word) 

// let p1: { name: string, age: number } = {
//   name: 'Hwang',
//   age: 28,
// }

// type Person = {
//   name: string,
//   age: number,
// }

// let p2: Person = {
//   name: 'hwang',
//   age: 28,
// }

// class Animal {
//   private name : string;
//   constructor(name:string){
//     this.name = name;
//   }

// }

// new Animal('Cat').name

class Person {
  protected name: string;
  constructor(name: string) {
    // console.log('super가 부모 construcotr 호출')
    this.name = name;
  }
}
class Employees extends Person {
  private department: string;

  constructor(name: string, department: string) {
    // console.log('new가 자기 자신 constructor 호출')
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}`
  }
}
const howard = new Employees('Howard', 'Sales');




// console.log(howard.name)
console.log(howard.getElevatorPitch());

