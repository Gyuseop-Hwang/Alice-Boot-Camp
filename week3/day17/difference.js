const printAdd = (a, b) => {
  console.log(a + b)
  // return undefined
};

const wrapper = (evt) => () => {
  console.log(1);
  console.log(evt)
}

document.querySelector('#id').addEventListener('click', wrapper());

// 이것도 함수를 실행하고 있는데. 이거는 말이 된다. 고차함수는 eventHandler에 실행할 수 있다.
// 위의 핸들러가 다음과 같은 상황이다. 내부의 함수를 반환한다.

const wrapper2 = () => {
  return (evt) => {
    console.log(1)
    console.log(evt)
  }
}

document.querySelector('#id').addEventListener('click', wrapper2());

// wrapper2의 return값이 함수
document.querySelector('#id').addEventListener('click', (evt) => {
  console.log(1);
  console.log(evt)
})






document.querySelector('#id').addEventListener('click', printAdd());
// 실행할 함수를 전달해주는 것이 아니라, 함수를 호출해서 그 return값을 전달해주고 있다. 
// 다음과 똑같은 상황이다.
document.querySelector('#id').addEventListener('click', undefined);