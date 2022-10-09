class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "seul" && password === "123") ||
          (id === "kim" && password === "456")
        ) {
          resolve(id);
        } else {
          reject(new Error("에러1"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "seul") {
          resolve({ name: "seul", role: "admin" });
        } else {
          reject(new Error("에러2"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("아이디를 입력해 주세요!");
const password = prompt("비밀번호를 입력해 주세요!!");

userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  // .then(user => userStorage.getRoles(user)); 인자가 똑같으니 생략 가능하다.
  .then((user) => alert(`hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);


    // getRoles(user(id), undefined)