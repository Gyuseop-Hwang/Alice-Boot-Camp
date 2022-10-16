// type
// type PeopleType = {
//     name: string;
//     age: number;
// };

// type StudentType = PeopleType & {
//     school: string;
// };

// // 선언적 확장 불가능
// type OS = {
//     title: string;
// };

// type OS = {
//     version: number;
// };
// Error남 이름 중복
// // interface
// interface PeopleInterface {
//     name: string;
//     age: number;
// }

// interface StudentInterface extends PeopleInterface {
//     school: string;
// }

// // 선언적 확장 가능 (Type은 안됨)
interface OS {
  title: string;
}

interface OS {
  version: number;
}

const windoVersion: OS = {
  title: "윈도우",
  version: 10,
};
