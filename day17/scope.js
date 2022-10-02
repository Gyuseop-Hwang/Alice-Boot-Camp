

const x = 'x';

function c() {
  const y = 'y';
  console.log('c');
  // 함수 c의 블록 내의 b 함수
  function b() {
    const z = 'z';
    console.log('b');
    a();
  }

  b();
  // 함수 c의 블록 내의 b 함수
}
function a() {
  // const x = 'y'

  console.log(x)
  const x = 'y';
  // b();
}

// c();
// b();


function a() {
  console.log(z)
}

// a();
const z = 'z1';

a();