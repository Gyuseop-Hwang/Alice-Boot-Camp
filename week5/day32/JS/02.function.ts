{

  // function addNum1(num1, num2) {
  //   return num1 + num2;
  // }

  function addNum2(num1: number, num2: number): number {
    return num1 + num2;
  }

  // function fetchId1(id) {
  //   return new Promise((resolve, reject) => {
  //     resolve(1234);
  //   });
  // }

  function fetchId2(id: string): Promise<number> {
    return new Promise((resolve, reject) => {
      resolve(1234);
    });
  }

  function printName1(firstName: string, lastName: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName1('yeonmi', 'park');
  //printName1('박연미');

  function printName2(firstName: string, lastName = "default") {
    // lastName:string = "default"로 안 해줘도 typescript가 type 추론을 한다. lastName에 default가 아닌 걸로 들어오는 값은 type이
    // 문자열이여야 함.
    console.log(firstName);
    console.log(lastName);
  }
  printName2('yeonmi', 'park');
  printName2('박연미');
  // printName2('박연미', 3);
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();


  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 6));




}

