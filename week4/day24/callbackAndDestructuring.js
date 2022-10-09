import API from './api';


function transformUser(user) {
  const email = user.email;

  const { first, last } = user.name;
  const name = `${first} ${last}`;

  const pictureUrl = user.picture.large;

  const username = user.login.username;

  const { country, state, city } = user.location;
  const location = `${country}, ${state}, ${city}`;

  const age = user.dob.age;

  return { email, name, pictureUrl, username, location, age };
}

function filterByAge(user) {
  return user.age > 40;
}

const requestUsers = () => {
  return API.fetchUsers().then(users => {
    // 유저 정보를 변화하고, 필터링하는 코드를 작성해보세요.

    return users
      .map(user => {
        return {
          email: user.email,
          name: `${user.name.first} ${user.name.last}`,
          pictureUrl: user.picture.large,
          username: user.login.username,
          location: `${user.location.country}, ${user.location.state}, ${user.location.city}`,
          age: user.dob.age,
        };
      })
      .filter(user => user.age >= 40);
    return users.map(transformUser).filter(filterByAge)
  });
};

export default requestUsers;

// // 유저 정보가 다음과 같을 경우
// {
//   gender: "female",
//   name: {
//     title: "Miss",
//     first: "Sara",
//     last: "Petersen",
//   },
//   location: {
//     street: {
//       number: 1383,
//       name: "Vægterparken",
//     },
//     city: "Sommersted",
//     state: "Nordjylland",
//     country: "Denmark",
//     postcode: 30790,
//     coordinates: {
//       latitude: "24.7161",
//       longitude: "11.7793",
//     },
//     timezone: {
//       offset: "-11:00",
//       description: "Midway Island, Samoa",
//     },
//   },
//   email: "sara.petersen@example.com",
//   dob: {
//     date: "1994-10-26T10:14:18.009Z",
//     age: 27,
//   },
//   registered: {
//     date: "2009-12-05T16:15:56.322Z",
//     age: 12,
//   },
//   id: {
//     name: "CPR",
//     value: "261094-1270",
//   },
//   picture: {
//     large: "https://randomuser.me/api/portraits/women/63.jpg",
//     medium: "https://randomuser.me/api/portraits/med/women/63.jpg",
//     thumbnail: "https://randomuser.me/api/portraits/thumb/women/63.jpg",
//   },
//   // ...
// },

// // 이렇게 변환됩니다.
// {
//   email: 'sara.petersen@example.com',
//   name: 'Sara Petersen',
//   pictureUrl: 'https://randomuser.me/api/portraits/women/63.jpg',
//   username: 'happybear329',
//   location: 'Denmark, Nordjylland, Sommersted',
//   age: 27
// }