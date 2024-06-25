function putTime(){
    let d1 = new Date();
    let secs = d1.getSeconds();
    let mins = d1.getMinutes();
    let hours = d1.getHours();
    console.log(hours + ":" + mins + ":" + secs);
    setTimeout(putTime, 1000);
}


setTimeout(putTime, 1000);
