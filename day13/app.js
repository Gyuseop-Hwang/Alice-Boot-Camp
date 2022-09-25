const addButton = document.getElementById('add')
const getButton = document.getElementById('get')
const listButton = document.getElementById('list')
const updateButton = document.getElementById('update')
const deleteButton = document.getElementById('delete')



let db;

const dbReq = indexedDB.open('sample_db', 5);

dbReq.addEventListener('success', function (evt) {
  console.log('success')
  db = dbReq.result;
})

dbReq.addEventListener('error', function (evt) {
  alert(dbReq.error.name);
})

dbReq.addEventListener('upgradeneeded', function (evt) {
  console.log('upgraded')
  db = dbReq.result;
  // let oldVersion = evt.oldVersion;
  // if (oldVersion < 1) {
  //   db.createObjectStore('topics_test', { keyPath: 'id', autoIncrement: true })
  // }
  // if (oldVersion < 5) {
  //   db.createObjectStore('topics2', { keyPath: 'id', autoIncrement: true })
  // }
  db.createObjectStore('topics_test', { keyPath: 'id', autoIncrement: true });
})

addButton.addEventListener('click', (evt) => {
  let store = db.transaction('topics', 'readwrite').objectStore('topics');
  let addReq = store.add({
    title: prompt('title?'),
    body: prompt('body ?'),
  })

  addReq.addEventListener('success', (evt) => {
    console.log(evt.target.result)
  })
})

getButton.addEventListener('click', (evt) => {
  let id = Number(prompt('id?'))
  const store = db.transaction('topics').objectStore('topics');
  const getReq = store.get(id);
  getReq.addEventListener('success', function (evt) {
    console.log(this.result)
  })
})

listButton.addEventListener('click', (evt) => {
  const store = db.transaction('topics').objectStore('topics');
  const getAllReq = store.getAll();

  getAllReq.addEventListener('success', (evt) => {
    console.log(evt.target.result);
  })
})


updateButton.addEventListener('click', (evt) => {
  const store = db.transaction('topics', 'readwrite').objectStore('topics');
  const updateReq = store.put({
    id: Number(prompt('id?')),
    title: prompt('title?'),
    body: prompt('body?')
  })

  updateReq.addEventListener('success', (evt) => {
    console.log(evt);
  })
})

deleteButton.addEventListener('click', (evt) => {
  const store = db.transaction('topics', 'readwrite').objectStore('topics');
  const deleteReq = store.delete(Number(prompt('id?')));

  deleteReq.addEventListener('success', function (evt) {
    console.log(evt);
  })
})