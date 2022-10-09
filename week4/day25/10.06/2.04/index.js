// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.

const clickBox = document.querySelector("#buttonSubmit");
const imgBox = document.querySelector("#dogImage");

function fetchImg() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => {
            let imgURL = data.message;
            console.log(imgURL);
            imgBox.setAttribute("src", `${imgURL}`);
        });
}
clickBox.addEventListener("click", fetchImg);
