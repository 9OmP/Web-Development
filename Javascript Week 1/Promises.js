function myOwnTimeout(duration){
    let p = new Promise(function (resolve){
        setTimeout(resolve, duration);  
    });
    return p;
}

m = myOwnTimeout(2500);
console.log(m);
m.then(doThis);
    

function doThis(){
    console.log("Hello World");
}