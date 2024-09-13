// map, filter and arrow fns

const a = 1, b = 2;

function sum(a, b){
    return a + b;
}

// almost same as 

const sum1 = (a, b) => {
    return a + b;
} 

const ans = sum(a, b);

const arr = [1,2,3,4,5]

function transform(i){
    return i * 2;
}

const ans1 = arr.map(x => x * 2);
const ans2 = arr.map(transform)

console.log(ans2)

function filtering_logic(n){
    if (n % 2 == 0){
        return true;
    } else return false;
}

ans3 = arr.filter(filtering_logic);
// console.log(ans3);

ans4 = arr.filter(function(n){
    return n % 2 == 0;
})
console.log(ans4)
