const storeBtn = document.getElementById('store-btn');

const retrBtn = document.getElementById('retrieve-btn');


const dbReq = indexedDB.open('StorageDummy');
let db;


dbReq.onsuccess = function (evt) {
  db = evt.target.result;
}

dbReq.onupgradeneeded = function (evt) {
  db = evt.target.result;

  const objStore = db.createObjectStore('products', { keyPath: 'id' }) // autoIncrement : true(id를 index로 자동으로 지정)  
  // objStore는 객체저장소가 생성됬음을 참조


  // objStore.transaction.oncomplete -> 객체저장소 생성 완료 되면 다음 callback 실행
  objStore.transaction.oncomplete = function (evt) {
    const productStore = db.transaction('products', 'readwrite').objectStore('products')
    // db의 transaction은 트랜잭션은 db의 상태를 변화시키기 위해 수행하는 작업 단위를 말한다.
    // 트랜잭션은 데이터베이스 객체 단위로 작동하며, 그렇기 때문에 사용할 객체 저장소를 지정해줘야 한다.
    // productStore는 products 객체 저장소를 이용할 수 있는 객체가 된다.
    productStore.add({
      id: 'p1',
      title: 'A First Product',
      price: 12.99,
      tags: ['Expensive', 'Luxuy']
    })
  }
}

dbReq.onerror = function (evt) {
  console.log('error', this.error.name)
  const error = evt.target.error
  // console.log('error', error.name)
}

storeBtn.addEventListener('click', (evt) => {

  if (!db) {
    return;
  }
  // const objStore = db.createObjectStore('products', { keyPath: 'id' }) // autoIncrement : true(id를 index로 자동으로 지정)  
  // objStore.transaction.oncomplete = function (evt) {
  const productStore = db.transaction('products', 'readwrite').objectStore('products')
  productStore.add({
    id: 'p2',
    title: 'A Second Product',
    price: 15.80,
    tags: ['Expensive', 'Luxuy']
  })
  // }
})

retrBtn.addEventListener('click', (evt) => {
  const productStore = db.transaction('products').objectStore('products');
  const request = productStore.get('p2')
  console.log(request.result)
  // request.onsuccess = function (evt) {
  //   console.log(request.result)
  // }

})