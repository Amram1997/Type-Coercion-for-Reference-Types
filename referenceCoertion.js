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
// unary - operator
console.log(-null)
// -0
console.log(-undefined)
// NaN
console.log(-true)
// -1
console.log(-false)
// -0
console.log(-5)
// -5
console.log(-"hello")
// NaN
console.log(-"234")
// -234
console.log(-"234.32e3")
// -234320
console.log( -new Number(NaN))
// NaN
console.log(-new String('hello'))
// NaN
console.log(-(/google.com/))
// NaN
console.log(-([]))
// -0
console.log(-[])
// -0
console.log(+[])
// 0
console.log(-[2])
// -2
console.log(-([2,3]))
// NaN
console.log(-(function(){}))
// NaN
// instanceof operator

console.log(null instanceof Object)
console.log(true instanceof Boolean)
console.log(false instanceof Boolean)
console.log(1 instanceof Number)
console.log(NaN instanceof Number)
console.log('hello' instanceof String)
// false
console.log((function () { }) instanceof Function)
console.log((function () { }) instanceof Object)
// console.log(a instanceof Object) // try the same also for b, c, d, e and f
console.log(new Number(1) instanceof Number)
console.log(new Number(NaN) instanceof Object)
console.log(/hello/img instanceof RegExp)
console.log(/hello/img instanceof Function)
console.log(/hello/img instanceof Object)
