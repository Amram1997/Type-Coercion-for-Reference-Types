// binary + operator

console.log(null + undefined);
// NaN
console.log(null + true)
// 1
console.log(null + false)
// 0
console.log(null + 3)
// 3
console.log(null + NaN)
// NaN
// console.log(null + a + b + c + d + e + f)
// Reference Error a is not defined
console.log(undefined + true)
// NaN
console.log(undefined + false)
// NaN
console.log(undefined + "hello")
// undefinedhello
// console.log(undefined + a + b + c + d + e + f)
// Reference Error a is not defined
console.log(true + false)
// 1
console.log(true + 2)
// 3
console.log(true + NaN)
// NaN
console.log(true + "hello")
// truehello
// console.log(true + a + b + c + d + e + f)
// Reference Error a is not defined
console.log(false + 4)
// 4
console.log(false + NaN)
// NaN
console.log(false + "hello")
// falsehello
console.log(5+3)
// 8
console.log(5 + NaN);
// NaN
console.log(5 + "hello")
// 5hello
console.log("hello" + NaN)
// helloNaN
console.log(-null)