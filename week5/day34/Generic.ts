function getFirstElement1(elements: any[]): any {
  return elements[0];
}

// console.log(getFirstElement([1, 2, 3]));
// console.log(getFirstElement(["one", "two", "three"]).substring(0, 1));
console.log(getFirstElement1([1, 2, 3]).substring(0, 1)); // any 사용 시 런타임 단계에서 에러 발생

function getFirstElement2<T>(elements: T[]): T {
  return elements[0];
}

console.log(getFirstElement2([1, 2, 3]));
console.log(getFirstElement2(["one", "two", "three"]).substring(0, 1));
console.log(getFirstElement2([1, 2, 3]).substring(0, 1)); // Generic 사용 시 컴파일 단계에서 에러 발생