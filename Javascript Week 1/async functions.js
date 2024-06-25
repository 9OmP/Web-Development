// setTimeout(doThis,2000);
// console.log("this was after setTimeout");

// function doThis(){
//     console.log("waited 2 secs");
// }

// for(let i = 0; i <= 5000000000 ; i++){
//     if (i == 5000000000){
//         console.log("completed first loop now")
//     }
// }

// for(let i = 0; i <= 1000000000 ; i++){
//     if (i == 1000000000){
//         console.log("completed second loop now")
//     }
// } 

//////////////////////////////////////
// Creating an async by wrapping another async fn

function myOwnTimeout(fn, duration){
    setTimeout(fn, duration);
}

function callThis(){
    console.log("I was printed");
}

myOwnTimeout(callThis, 2000);