function AsyncState(initialState) {
  let state = initialState;

  function updateState(name, age) {
    return new Promise((resolve) => {
      // 0 ~ 999 사이의 수
      const timeout = Math.floor(Math.random() * 1000);

      setTimeout(() => {
        state = { name, age };
        resolve();
      }, timeout);

      // setTimeout(function () {
      //   state = { name, age };
      //   resolve(this)
      // }, timeout)
    });
  }

  function getState() {
    return state;
  }

  return { updateState, getState };
}

const asyncState = AsyncState({ name: "Kim", age: 30 });
// AsyncState는 {updateState, getState} 객체를 반환.
// asyncState는 {updateState : function..., getState : function...}라는 객체이다.
// setTimeout 안의 this는 화살표함수이므로, setTimeout 함수의 부모 updateState의 this를 받는다.

// (a)
Promise.all([
  asyncState.updateState("Song", 40), // updateState는 앞에 객체를 갖고 있다. 즉 this는 { updateState, getState }이다.
  asyncState.updateState("Shim", 50)
]).then(() => {
  console.log("state : ", asyncState.getState());
});

// //(b)
// asyncState
//   .updateState("Song", 40)
//   .then((state) => {
//     console.log(state)
//     return state.updateState("Shim", 50)
//   })
//   .then(state => {
//     console.log(state.getState())
//   })