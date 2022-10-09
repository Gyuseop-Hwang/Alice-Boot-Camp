// Promise.resolve
const resolvedPromise = Promise.resolve([1, 2, 3]);
resolvedPromise.then(console.log); // [ 1, 2, 3 ]

// Promise.reject
// const rejectedPromise = Promise.reject(new Error("Error!"));
// rejectedPromise.catch(console.log); // Error: Error!

// Promise.all
Promise.all([
    new Promise((resolve) => setTimeout(() => resolve(1), 1000)), // 1
    new Promise((resolve) => setTimeout(() => resolve(2), 1000)), // 2
    new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
])
    .then(console.log) // [ 1, 2, 3 ]
    .catch(console.log);

// Promise.race
Promise.race([
    new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
    new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
    new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
])
    .then(console.log) // 3
    .catch(console.log);
