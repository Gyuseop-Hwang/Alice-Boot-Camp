// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.
const input = document.querySelector("#selectEmployeeCode");
const btn = document.querySelector("#buttonSubmit");
const emial = document.querySelector("#employeeEmail");

let fetchData;

fetch("./employees.json")
    .then((response) => response.json())
    .then((data) => {
        fetchData = data.Employees;
    });

function employeesData(e) {
    e.preventDefault();

    const filterData = fetchData.filter((data) => data.employeeCode === input.value);
    emial.innerHTML = filterData[0].emailAddress;
}

btn.addEventListener("click", employeesData);
