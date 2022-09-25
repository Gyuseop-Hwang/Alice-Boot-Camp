const boxes = document.querySelectorAll('.favorites-icon')

// boxes.forEach(box => {
//   box.addEventListener('click', function () {
//     boxes.forEach(x => {
//       x.classList.remove('on')
//     })
//     this.classList.add('on')
//   })
// })

// boxes.forEach(box => {
//   box.addEventListener('click', function (evt) {
//     const checkBox = document.querySelector('.on');

//     // *** 제일 처음에는 checkBox가 null이다.
//     if (checkBox !== null) {
//       checkBox.classList.remove('on')
//     }
//     // if문 없이 checkBox.classList.remove('on')을 하게 되면
//     // 초기에 null로 classList에 접근하여 reference에러 발생한다.

//     this.classList.add('on')
//   })
// })



function clickBox() {
  boxes.forEach(box => {
    box.classList.remove('on');
  })
  this.classList.toggle('on')
}


function checkBox() {
  boxes.forEach(box => {
    box.addEventListener('click', clickBox);
  })
  // for (let i = 0; i < boxes.length; i++) {
  //   boxes[i].addEventListener('click', clickBox);
  // }
}

checkBox();