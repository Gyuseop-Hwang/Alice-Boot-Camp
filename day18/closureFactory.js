// 팩토리 함수 -> 또다른 함수를 만들어내는(반환하는) 함수


function createTaxClaculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }

  return calculateTax;
}





// const vatAmount = calculateTax(100, 0.19);
const calculateVatAmount = createTaxClaculator(0.19);
// const incomeTax = calculateTax(100, 0.25);
const calculateIncomeTaxAmount = createTaxClaculator(0.25);

console.log(calculateVatAmount(100))
console.log(calculateVatAmount(200))

let username = 'Max'


function greetUser() {
  let name = username;
  console.log('Hi' + name)
}

username = 'Manuel'

greetUser();