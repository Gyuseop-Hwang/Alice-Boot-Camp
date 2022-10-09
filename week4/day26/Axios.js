async function axiosPost() {

  const login = { email: "eve.holt@reqres.in", password: "cityslicka" };

  const data1 = axios.post("https://reqres.in/api/login", login).then((response) => {
    console.log(response)
    return response.data.token
  });

  const data2 = fetch("https://reqres.in/api/login", {
    method: 'post',
    headers: { 'content-Type': 'application/json' },
    body: JSON.stringify(login)
  }).then(res => {
    console.log(res)
    return res.json()
  }).then(data => data.token)

  // Promise.all([data1, data2])
  //   .then(all => {
  //     console.log(all[0], all[1])
  //   })

  console.log(data1, data2)
  console.log('위에꺼 다 비동기다')

  // const data1 = await axios.post("https://reqres.in/api/login", login)
  //   .then((response) => {
  //     console.log(response)
  //     // return response.data.token
  //     return response.data.token
  //   });
  // const data2 = await fetch("https://reqres.in/api/login", {
  //   method: 'post',
  //   headers: { 'content-Type': 'application/json' },
  //   body: JSON.stringify(login)
  // }).then(res => {
  //   console.log(res)
  //   return res.json()
  // }).then(data => {
  //   console.log(data)
  //   return data.token
  // })
  // console.log(data1, data2)
  // console.log('위에꺼 다 비동기다')

  // axios.post를 호출하고 반환되는 토큰 값을 token의 innerHTML에 저장하세요.
  // axios.post를 호출하고 반환되는 토큰 값을 token의 innerHTML에 저장하세요.
}

export default axiosPost;