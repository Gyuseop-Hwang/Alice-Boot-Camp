const { area, perimeter } = require("./exports.js");
console.log(area(5));
console.log(perimeter(5));

console.log("=".repeat(60));

const { area, perimeter } = require("./module_exports");
console.log(area(3));
console.log(perimeter(3));
