import { log } from "console"

let x: number = 101
console.log(x)

function hello(firstname: string){
    console.log("Hello " + firstname)
}

function sum(a: number, b: number): number{
    return a + b
}

function fn(a: number, b: number): number{
    return a + b
}

function fn1(fn: (a: number, b: number)=> number, a: number, b: number) {
    console.log(fn(a, b))
}

interface User{
    name: string
    age: number
    email?: string
}

function isLegal(user: User): boolean{
    return user.age >= 18
}


hello("Om")
const value = sum(5,2)
console.log(value)
const bool1 = isLegal({
    name: "Om",
    age: 20,
})
console.log(bool1)
fn1(fn, 123, 142)