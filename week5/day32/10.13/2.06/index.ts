function add<T extends number | string | boolean>(a: T, b: T): number | string | boolean {
    if (typeof a === "number" && typeof b === "number") return a + b;
    else if (typeof a === "string" && typeof b === "string") return a + b;
    else return a || b;
}

console.log(add<number>(13, 15));
console.log(add<string>("hell", "o"));
console.log(add<boolean>(false, true));

// error
// console.log(add<number>(3, "5"));
