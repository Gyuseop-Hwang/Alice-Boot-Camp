const printMessage1 = (message: string | number) => {
  return message;
}


const message1 = printMessage1(1234);
const message2 = printMessage1('hello');

message1.length


const printMessage2 = <T>(message: T) => {
  return message
}

const message3 = printMessage2<String>('hello');
message3.length;