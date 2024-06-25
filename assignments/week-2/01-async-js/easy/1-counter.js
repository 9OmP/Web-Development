function putTime(){
    let d1 = new Date();
    let secs = d1.getSeconds();
    let mins = d1.getMinutes();
    let hours = d1.getHours();
    console.log(hours + ":" + mins + ":" + secs);
}

setInterval(putTime, 1000);
