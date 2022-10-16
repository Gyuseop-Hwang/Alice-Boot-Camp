// 타입으로 사용
// 함수 인터페이스의 정의
interface SquareFunc {
    (num: number): number;
}

// 함수 인테페이스를 구현하는 함수는 인터페이스를 준수하여야 한다.
const squareFunc: SquareFunc = function (num: number) {
    return num * num;
};

console.log(squareFunc(10)); // 100

//Class에 사용
// 인터페이스의 정의
interface IPerson {
    name: string;
    sayHello(): void;
}

/*
  인터페이스를 구현하는 클래스는 인터페이스에서 정의한 프로퍼티와 추상 메소드를 반드시 구현하여야 한다.
  */
class Person implements IPerson {
    // 인터페이스에서 정의한 프로퍼티의 구현
    constructor(public name: string) {}

    // 인터페이스에서 정의한 추상 메소드의 구현
    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}

function greeter(person: IPerson): void {
    person.sayHello();
}

const me = new Person("Lee");
greeter(me); // Hello Lee
