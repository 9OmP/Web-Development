function add(n1, n2){
    return n1 + n2;
}

function add_square(n1, n2){
    return n1**2 + n2**2;
}

function add_cube(n1, n2){
    return n1**3 + n2**3;
}


function doThis(n1, n2, fn){
    return fn(n1, n2);
}

console.log(doThis(6, 8, add));
console.log(doThis(6, 8, add_square));
console.log(doThis(6, 8, add_cube));