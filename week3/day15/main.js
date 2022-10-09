import close from './assets/close_icon.svg';
import media from './assets/media_icon.svg';
import arrow from './assets/arrow_back_icon.svg';


function modalTemplate() {
  return `<div class="modal__close">
                <img
                width="22px"
                height="22px"
                src=${close}
                alt="close_icon_logo"
                />
            </div>
            <div class="modal__card">
                <div class="modal__header">
                <div class="modal__back">
                    <img width="32px" height="24px" src=${arrow} alt="arrow_back_icon" />
                </div>
                <h2>새 게시물 만들기</h2>
                <p>공유하기</p>
                </div>
                <div class="modal__main">
                <img src=${media} alt="media_icon" />
                <h3>사진과 동영상을 업로드 해보세요.</h3>
                <label for="file">
                    <p>컴퓨터에서 선택</p>
                </label>
                <input type="file" name="file" id="file" />
                </div>
            </div>`;
}


function postTemplate(img) {
  return `
          <div class="modal__post">
            <img width="478px" height="478px" src=${img} alt="image" />
            <div class="modal__write">
              <textarea placeholder="문구 입력..." autofocus></textarea>
            </div>
          </div>
        `;
}

// 지시사항에 맞춰 readFile 매개변수를 작성하고, readAsDataURL에 인자를 전달하세요.
function readFile(file, cb) {
  let reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = function () {
    // 지시사항에 맞춰 코드를 작성하세요.
    cb(reader.result)
  };

  reader.onerror = function (error) {
    // 지시사항에 맞춰 코드를 작성하세요.
    cb(error)
  };
}

function createModal() {
  const modalEl = document.createElement('div');
  modalEl.setAttribute('class', 'modal__layout');
  modalEl.innerHTML = modalTemplate();
  document.querySelector('body').prepend(modalEl);

  const modalCloseEl = document.querySelector('.modal__close');

  modalCloseEl.addEventListener('click', function () {
    document.querySelector('body').removeChild(modalEl);
  });

  const fileEl = document.querySelector('#file');
  fileEl.addEventListener('input', function () {
    readFile(fileEl.files[0], function (response) {

      if (response instanceof Error) {
        alert('Error:', response);
        document.querySelector('body').removeChild(modalEl);
      }

      const imageBase64 = response;
      document
        .querySelector('.modal__card')
        .setAttribute('class', 'modal__card write--post');
      document
        .querySelector('.modal__main')
        .setAttribute('class', 'modal__main write--post');

      const backBtn = document.querySelector('.modal__back > img');
      const shareBtn = document.querySelector('.modal__header > p ');

      backBtn.style.visibility = 'visible';
      shareBtn.style.visibility = 'visible';

      document.querySelector('.modal__main').innerHTML =
        postTemplate(imageBase64);

      backBtn.addEventListener('click', function () {
        document.querySelector('body').removeChild(modalEl);
        createModal();
      });

      shareBtn.addEventListener('click', function () {
        const databaseName = 'instagram';
        const version = 1;
        const data = {
          content: document.querySelector('.modal__write > textarea').value,
          image: imageBase64,
        };
        if (window.indexedDB) {
          const request = indexedDB.open(databaseName, version);

          request.onsuccess = function () {
            const store = request.result
              .transaction('posts', 'readwrite')
              .objectStore('posts');
            store.add(data).onsuccess = function () {
              store.getAll().onsuccess = function (e) {
                const response = e.target.result;
                const mainPostsEl = document.querySelector('.main__posts');
                mainPostsEl.setAttribute('class', 'main__posts');
                document.querySelector('body').removeChild(modalEl);
                mainPostsEl.innerHTML = '';
                for (let i = 0; i < response.length; i++) {
                  const postListEl = document.createElement('img');
                  postListEl.setAttribute('src', response[i].image);

                  document
                    .querySelector('.main__posts')
                    .appendChild(postListEl);
                }
              };
            };
          };
        }
      });

    });
  });
}

function main() {
  document.querySelector('#add-post').addEventListener('click', createModal);

  const databaseName = 'instagram';
  const version = 1;

  if (window.indexedDB) {
    const request = indexedDB.open(databaseName, version);

    request.onupgradeneeded = function () {
      request.result.createObjectStore('posts', { autoIncrement: true });
    };

    request.onsuccess = function () {
      const store = request.result
        .transaction('posts', 'readwrite')
        .objectStore('posts');
      store.getAll().onsuccess = function (e) {
        const response = e.target.result;
        const mainPostsEl = document.querySelector('.main__posts');
        if (response.length !== 0) {
          mainPostsEl.innerHTML = '';
          for (let i = 0; i < response.length; i++) {
            const postListEl = document.createElement('img');
            postListEl.setAttribute('src', response[i].image);

            document.querySelector('.main__posts').appendChild(postListEl);
          }
        } else {
          mainPostsEl.setAttribute('class', 'main__posts not-posts');
        }
      };
    };
  }
}

main();