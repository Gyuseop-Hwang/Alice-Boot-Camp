

window.addEventListener('scroll', (evt) => {
  console.log(evt)
})

const button = document.querySelector('button')

const div = document.querySelector('div');

div.addEventListener('click', (evt) => {
  console.log('clicked div')
  console.log(evt)
})

button.addEventListener('click', (evt) => {
  evt.stopPropagation();
  console.log('clicked button')
  console.log(evt)
})

// const lists = document.querySelectorAll('ul li')

// lists.forEach(list => {
//   list.addEventListener('click', (evt) => {
//     evt.target.classList.toggle('highlight')
//   })
// })

const list = document.querySelector('ul');
list.addEventListener('click', (evt) => {
  evt.target.closest('li').classList.toggle('highlight')
})