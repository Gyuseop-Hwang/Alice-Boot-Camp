const button = document.getElementById('btn')
const h1 = document.querySelector('#game')

button.addEventListener('click', function (evt) {
  // button.parentElement.removeChild(h1)
  // evt.target.nextElementSibling.remove();
  // evt.currentTarget.nextElementSibling.remove();
  // this.nextElementSibling.remove();
  // this.nextElementSibling.style.display = 'none';
  this.nextElementSibling.style.display = 'block'
})