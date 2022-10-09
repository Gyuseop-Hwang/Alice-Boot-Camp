// const expression = "100-200*300-500+20";

// const reg1 = /\D/g;


// const reg2 = /\d{1,3}|[*+-]/g

// const reg3 = /\d{1,3}|\D/g
// console.log(expression.match(reg1))
// console.log(expression.match(reg2))
// console.log(expression.match(reg3))

// console.log(expression.split(/(\D)/g))
// console.log(expression.split(/\D/g))


let str = "D#CC#B#CC#BCC#BCC#BA#F#";



str = str.replace(/[A-F]#/g, x => x[0].toLowerCase())

console.log(str)


// str = str
//   .replace(/A#/g, 'a')
//   .replace(/B#/g, 'b')
//   .replace(/C#/g, 'c')
//   .replace(/D#/g, 'd')
//   .replace(/F#/g, 'f')

// console.log(str)