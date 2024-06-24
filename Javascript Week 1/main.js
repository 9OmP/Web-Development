async function TerminalClock(){
    if (secs == 60){
        mins++;
        secs = 0;
    }
    if (mins == 60){
        hours++;
        mins = 0;
    }
    console.log(hours+" : "+mins+" : "+secs);
    secs++;
    setTimeout(TerminalClock, 1000)
}
let secs= 0, mins = 0, hours = 0;
TerminalClock()