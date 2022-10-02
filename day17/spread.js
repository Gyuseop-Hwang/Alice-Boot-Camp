let o = {
  name: "Daniel",
  age: 12,

  address: {
    state: "State 1",
    street: "Street 1",
  },
};

let {
  address,
  age,
  name,
  ...rest
} = o;


console.log(address);
console.log(age)
console.log(name)
console.log(rest);
