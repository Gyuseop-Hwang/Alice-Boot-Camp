const getProperty = <T extends object, U extends keyof T>(obj: T, key: U) => {
  return obj[key];
}



getProperty({ a: 1, b: 2, c: 3 }, "a");



getProperty({ a: 2, b: 4, c: 6 }, "z");