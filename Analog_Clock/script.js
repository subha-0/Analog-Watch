const SecondHand=document.getElementById("second-hand");
const HourHand=document.getElementById("hour-hand");
const MinuteHand=document.getElementById("minute-hand");

function clockTick(){
    const date=new Date();
    const seconds=date.getSeconds()/60;
    const minutes=(seconds + date.getMinutes())/60;
    const hours=(minutes+date.getHours())/12;


    rotateClockHand(SecondHand,seconds);
    rotateClockHand(MinuteHand,minutes);
    rotateClockHand(HourHand,hours);



}

function rotateClockHand(element,rotation){
    element.style.setProperty('--rotate',rotation*360);

}
setInterval(clockTick,1000);