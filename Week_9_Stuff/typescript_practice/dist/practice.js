"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 101;
console.log(x);
function hello(firstname) {
    console.log("Hello " + firstname);
}
function sum(a, b) {
    return a + b;
}
function fn(a, b) {
    return a + b;
}
function fn1(fn, a, b) {
    console.log(fn(a, b));
}
function isLegal(user) {
    return user.age >= 18;
}
hello("Om");
const value = sum(5, 2);
console.log(value);
const bool1 = isLegal({
    name: "Om",
    age: 20,
});
console.log(bool1);
fn1(fn, 123, 142);
