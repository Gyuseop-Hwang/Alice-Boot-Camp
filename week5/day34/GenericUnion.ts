
type myType = number | string | boolean;

function add1<T extends myType>(a: T, b: T): myType {
  if (typeof a === 'boolean' && typeof b === 'boolean') return a || b;
  // else return a + b;
  else return (a as any) + (b as any);
  // if (typeof a === "number" && typeof b === "number") return a + b;
  // else if (typeof a === "string" && typeof b === "string") return a + b;
  // else return a || b;
}

console.log(add1<number>(13, 15));
console.log(add1<string>("hell", "o"));
console.log(add1<boolean>(false, true));
// console.log()

type Parent = number | string | boolean;

// function add<T extends Parent>(a: T, b: T): Parent {...}; -> 경우의 수가 훨씬 줄어든다.
// generic은 a가 number | string | boolean 중에 하나가 되면 b는 number, string, boolean 중 그것을 명시적으로 따른다.
// return도 number, string, boolean 중에 하나를 명시적으로 따른다.

// function add<Parent>(a: Parent, b: Parent): Parent {...}; -> 경우의 수가 훨씬 많다.
// union은 a가 number | string | boolean이면서 b도 number | string | boolean이다. return도 number | string | boolean이다...


// error
// console.log(add<number>(3, "5"));

// function add2(input1: number | string, input2: number | string) {
//   // if(typeof input1 === 'string' || typeof input2 === 'string') return input1 + input2;
//   if (typeof input1 === 'string' || typeof input2 === 'string') return input1.toString() + input2.toString();
//   return input1 + input2;
// }