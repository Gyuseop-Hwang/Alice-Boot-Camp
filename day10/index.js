const aTags = document.querySelectorAll('nav a')

for (let i = 0; i < aTags.length; i++) {
  aTags[i].onclick = function (evt) {
    evt.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    window.scrollTo({
      'behavior': 'smooth',
      'top': target.offsetTop,
    })
  }
}

const slides = document.querySelector('#slider .slides');
const slide = slides.querySelectorAll('.slide')

let currentSlide = 0;
setInterval(() => {
  const from = -(currentSlide * 1024);
  const to = from - 1024;
  slides.animate({
    marginLeft: [from + 'px', to + 'px']
  }, {
    duration: 500,
    iterations: 1,
    easing: "ease",
    fill: "forwards"
  })
  currentSlide++;
  if (currentSlide === slide.length) {
    currentSlide = 0;
  }
}, 3000)

// const links = document.querySelectorAll('.tabs-list li a')
// const items = document.querySelectorAll('.tabs-list li')


// for (let i = 0; i < links.length; i++) {
//   links[i].onclick = function (evt) {
//     evt.preventDefault();
//   }
// }

// for (let i = 0; i < items.length; i++) {
//   items[i].onclick = function () {
//     const tabId = this.querySelector('a').getAttribute('href');
//     document.querySelectorAll(".tabs-list li, .tabs div.tab").forEach(item => {
//       item.classList.remove('active')
//     })
//     document.querySelector(tabId).classList.add('active');
//     this.classList.add('active')
//   }
// }

const links = document.querySelectorAll('.tabs-list li a')
const items = document.querySelectorAll('.tabs-list li')

links.forEach(link => {
  link.onclick = (evt) => {
    evt.preventDefault();
  }
})

items.forEach(item => {
  item.onclick = function () {
    const tabId = this.querySelector('a').getAttribute('href')

    document.querySelectorAll('.tabs-list li, .tabs div.tab').forEach(El => {
      El.classList.remove('active')
    })

    document.querySelector(tabId).classList.add('active')
    this.classList.add('active')
  }
})


document.querySelector('.right-arrow').onclick = function () {
  let currentSlide = document.querySelector('#photo .slide.active')
  let nextSlide = currentSlide.nextElementSibling;
  if (nextSlide === null) {
    nextSlide = currentSlide.parentElement.firstElementChild;
  }

  currentSlide.animate({
    opacity: [1, 0]
  }, {
    duration: 1000,
    easing: 'ease',
    iterations: 1,
    fill: 'both'
  })
  currentSlide.classList.remove('active');
  nextSlide.classList.add('active')
  nextSlide.animate({
    opacity: [0, 1]
  }, {
    duration: 1000,
    easing: 'ease',
    iterations: 1,
    fill: 'both'
  })
}

document.querySelector('.left-arrow').onclick = function () {
  let currentSlide = document.querySelector('#photo .slide.active');
  let prevSlide = currentSlide.previousElementSibling;
  if (prevSlide === null) {
    prevSlide = currentSlide.parentElement.lastElementChild;
  }
  currentSlide.animate({
    opacity: [1, 0]
  }, {
    duration: 1000,
    easing: 'ease',
    iterations: 1,
    fill: "both"
  })
  currentSlide.classList.remove('active');
  prevSlide.classList.add('active');
  prevSlide.animate({
    opacity: [0, 1]
  }, {
    duration: 1000,
    easing: 'ease',
    iterations: 1,
    fill: "both"
  })

}
