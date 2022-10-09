




function a() {
  throw new Error('에러 발생!! ');
}

function b() {
  try {
    a();
  }
  catch (err) {
    console.log('b에서 에러 처리 못 해서 전달')
    throw err;
  }
}

function c() {

  b();
}

try {
  c();
} catch (error) {
  console.log('전역에서 에러 잡았다!! ');
}
console.log('프로그램 종료 ');
