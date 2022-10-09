

// function execute() {
//   console.log('1');

//   setTimeout(() => {
//     console.log('2');
//   }, 2000)

//   console.log('3');
// }

// execute();

function runInDelay(cb, seconds) {
  console.log(seconds)
  if (!(cb instanceof Function)) {
    throw new Error('callback 함수가 아니다.')
  }
  if (!((seconds || seconds == 0) && seconds >= 0)) {
    throw new Error('0 이상의 큰 초 단위가 들어와야 한다')
  }

  setTimeout(cb, seconds * 1000);
}

try {
  runInDelay(() => {
    console.log('타이머 종료')
  }, 2)
  // runInDelay(function() {
  //   console.log('타이머 종료')
  // })
}
catch (err) {
  console.log(err)
}