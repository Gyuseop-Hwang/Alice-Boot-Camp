// 당신의 픽은? h1의 배경색을 토끼가 클릭되면 핑크색으로
// 고양이가 클릭되면 보라색으로
// 홍학이 클릭되면 주황색으로 바꾸도록 이벤트를 작성하세요.

const btnRabbit = document.getElementById('btnRabbit');

const btnCat = document.getElementById('btnCat');

const btnBird = document.getElementById('btnBird');

const text = document.getElementById('animal')

function wrapper() { }

// function colorChangeHandler(evt) {
//   // text.style.backgroundColor = color;
//   console.log(evt)
//   console.log(this)
// }

function colorChangeHandler(color) {
  text.style.backgroundColor = color;
  console.log(evt)
  console.log(this)
}

function wrapper(color) {
  // console.log(evt)
  return (function () {
    // console.log(evt);
    // if (evt.target.id === 'btnRabbit') {
    text.style.backgroundColor = color;
    // }
    console.log(this)
  })
}

// btnRabbit.addEventListener('click', colorChangeHandler);
// btnCat.addEventListener('click', colorChangeHandler);
// btnBird.addEventListener('click', colorChangeHandler);

// btnRabbit.addEventListener('click', colorChangeHandler.bind(this, 1));
// btnCat.addEventListener('click', colorChangeHandler.bind(this, 1));
// btnBird.addEventListener('click', colorChangeHandler.bind(this, 1));


// btnRabbit.addEventListener('click', colorChangeHandler('pink'));
// btnCat.addEventListener('click', colorChangeHandler('purple'));
// btnBird.addEventListener('click', colorChangeHandler('orange'));

// btnRabbit.addEventListener('click', colorChangeHandler.bind(btnRabbit, 'pink'));
btnRabbit.addEventListener('click', wrapper('pink'));
btnCat.addEventListener('click', colorChangeHandler.bind(btnCat, 'purple'));
btnBird.addEventListener('click', colorChangeHandler.bind(btnBird, 'orange'));

const buttons = document.querySelector('div');

// buttons.addEventListener('click', (evt) => {
//   // const id = evt.target.parentElement.id;
//   const id = evt.target.closest('button').id;
//   if (id === 'btnRabbit') colorChangeHandler('pink')
//   if (id === 'btnCat') colorChangeHandler('purple')
//   if (id === 'btnBird') colorChangeHandler('orange')
// })