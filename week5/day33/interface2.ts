interface obj {
  name: string,
  // age: number,
}


function printName2(nameObj: obj) {
  return nameObj.name
}

let myObj2 = { size: 10, name: "Elice Kim" };
console.log(printName2(myObj2));