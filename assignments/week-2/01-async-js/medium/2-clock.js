function putTime(){
    let d1 = new Date();
    let secs = d1.getSeconds();
    let mins = d1.getMinutes();
    let hours = fixTime(d1.getHours());
    let isAM = false;
    if(~isAM){
        console.log(hours + ":" + mins + ":" + secs + " am");
    } else{
        console.log(hours + ":" + mins + ":" + secs + " pm");
    }
}

function fixTime(time){
    if(time > 12){
        isAM = false;
        return time - 12;
    } else{
        isAM = true;
        return time;
    }
}

setInterval(putTime, 1000);
