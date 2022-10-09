class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === "seul" && password === "123") ||
                (id === "kim" && password === "456")
            ) {
                onSuccess(id);
            } else {
                onError(new Error("error"));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === "seul") {
                onSuccess({ name: "seul", role: "admin" });
            } else {
                onError(new Error("error"));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt("아이디를 입력해 주세요!");
const password = prompt("비밀번호를 입력해 주세요!!");

userStorage.loginUser(id, password, onSuccess(user), onError(error));

function onSuccess(user) {
    userStorage.getRoles(
        user,
        (userWithRole) => {
            alert(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
        },
        (error) => {
            console.log("에러2");
        }
    );
}

function onError(error) {
    console.log("에러1");
}

// 여러차례 반복된다면?

// step1(function (value1) {
//     step2(function (value2) {
//         step3(function (value3) {
//             step4(function (value4) {
//                 step5(function (value5) {
//                     step6(function (value6) {
//                         // Do something with value6
//                     });
//                 });
//             });
//         });
//     });
// });
