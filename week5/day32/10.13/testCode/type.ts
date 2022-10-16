// Boolean
let isDone: boolean = false;
console.log(isDone);

// Number : 16진수, 10진수, 2진수, 8진수
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);

// String
let color: string = "blue";
color = "red";
console.log(color);

// 템플릿 문자열 사용
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month.`;
console.log(sentence);

// Array
let list1: number[] = [1, 2, 3]; // 타입 뒤에 []
let list2: Array<number> = [1, 2, 3]; // 제네릭 배열 타입
console.log(list1);
console.log(list2);

// Tuple : 요소의 타입과 개수가 고정된 배열
let x: [string, number];
x = ["hello", 10]; // 성공
console.log(x[0].substring(1)); // 성공
// console.log(x[1].substring(1)); // 오류, 'number'에는 'substring' 이 없습니다.

// Enum
enum Color1 { // enum은 0부터 시작
    Red,
    Green,
    Blue,
}
let c1: Color1 = Color1.Green;
console.log(c1);

enum Color2 { // 모든 값을 수동으로 설정가능
    Red = 1,
    Green = 3,
    Blue,
}
let c2: Color2 = Color2.Red;
let c3: Color2 = Color2.Green;
let c4: Color2 = Color2.Blue;
console.log(c2);
console.log(c3);
console.log(c4);

// Any : 타입 검사를 하지 않고, 그 값들이 컴파일 시간에 검사를 통과
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

// Void :  어떤 타입도 존재할 수 없음 any 반대
function warnUser(): void {
    console.log("This is my warning message");
}
warnUser();

let unusable: void = undefined;
console.log(unusable);

// Null / Undefined : Null / undefined 이와 다른 값 안됨
let u: undefined = undefined;
let n: null = null;

// Never : 절대 발생할 수 없는 타입 any도 안됨
function infiniteLoop(): never {
    while (true) {}
}

// Object : 원시타입(number, string, boolean, bigint, symbol, null,undefined) 가 아닌 나머지
let userA: { name: string; age: number } = {
    name: "juyoung",
    age: 27,
};

// Type assertions (형변환)
// angle-bracket 방법
let someValue1: any = "this is a string";

let strLength1: number = (<string>someValue1).length;

// as 방법
let someValue2: any = "this is a string";

let strLength2: number = (someValue1 as string).length;
