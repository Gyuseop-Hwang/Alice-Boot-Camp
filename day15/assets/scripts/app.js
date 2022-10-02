const startAddMovieButton = document.querySelector('header button');
const addMovieModal = document.getElementById('add-modal')

const backdrop = document.getElementById('backdrop');

const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');

const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;

const userInputs = addMovieModal.querySelectorAll('input')

const entryTextSection = document.getElementById('entry-text');

const deleteMovieModal = document.getElementById('delete-modal')


const movies = [];

// addBtn.onclick = function (evt) {
//   addModal.classList.add('visible');
// }
const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block'
  } else {
    entryTextSection.style.display = 'none';
  }
}

const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove('visible')

}

const deleteMovieHandler = (movieId) => {
  const movieIndex = movies.findIndex(x => x.id === movieId)
  movies.splice(movieIndex, 1)
  const listRoot = document.getElementById('movie-list')
  listRoot.children[movieIndex].remove();
  closeMovieDeletionModal();
  updateUI();
}

// const deleteMovieHandler = (evt) => {
//   evt.currentTarget.remove();
// }

const startDeleteMovieHandler = (movieId) => {

  deleteMovieModal.classList.add('visible');
  toggleBackdrop();
  const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive')
  let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger')

  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
  // 실제 렌더링된 모달 상의 confirm button이 아니라, 내용은 동일하지만 껍데기인 그냥 순수 엘레멘트 노드일뿐이다.
  // replaceWith되면서 기존의 confirmButton 요소 객체가 변경되었고, 그 전에 걸려있던 이벤트가 초기화된다.(가비지 콜렉터가 정리함)

  confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');
  // 껍데기 순수 엘레멘트 노드를 DOM 요소 객체로 다시 잡아줘야 한다.

  cancelDeletionButton.removeEventListener('click', closeMovieDeletionModal)
  // confirmDeletionButton.removeEventListener('click', deleteMovieHandler.bind(null, movieId))
  cancelDeletionButton.addEventListener('click', closeMovieDeletionModal)
  confirmDeletionButton.addEventListener('click', deleteMovieHandler.bind(null, movieId))
}

const renderNewMovieElement = ({ id, title, imageURL, rating }) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageURL}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 starts</p>
    </div>
  `
  newMovieElement.addEventListener('click', startDeleteMovieHandler.bind(null, id))
  const listRoot = document.getElementById('movie-list')
  listRoot.append(newMovieElement)
}

const toggleBackdrop = (evt) => {
  backdrop.classList.toggle('visible')
  clearMovieInput();
}

const closeMovieModal = () => {
  addMovieModal.classList.remove('visible');
}

const showMovieModal = (evt) => {
  // addMovieModal.classList.add('visible')
  addMovieModal.classList.add('visible')
  toggleBackdrop();
}

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
}

const cancelAddMovieHandler = (evt) => {
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
}

const addMovieHandler = (evt) => {
  let [title, imageURL, ratingValue] = userInputs
  if (title.value.trim() === '' ||
    imageURL.value.trim() === '' ||
    ratingValue.value === '' ||
    ratingValue.value < 1 ||
    ratingValue.value > 5) {
    alert('please enter valid values (rating between 1 and 5)')
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: title.value,
    imageURL: imageURL.value,
    rating: ratingValue.value,
  }


  movies.push(newMovie);
  console.log(movies)
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
  updateUI();
  renderNewMovieElement(newMovie);
}

const backDropClickHandler = (evt) => {
  closeMovieModal();
  closeMovieDeletionModal();
}

// startAddMovieButton.addEventListener('click', () => {
//   addMovieModal.classList.add('visible');
// })

startAddMovieButton.addEventListener('click', showMovieModal)

backdrop.addEventListener('click', backDropClickHandler)

cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler)

confirmAddMovieButton.addEventListener('click', addMovieHandler)