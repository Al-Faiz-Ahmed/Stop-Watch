var hours = 00;
var minutes = 00;
var seconds = 00;
var miliSeconds = 00;
var getHours = document.getElementById("hours");
var getMinutes = document.getElementById("minutes");
var getSeconds = document.getElementById("seconds");
var get_MSeconds = document.getElementById("mSeconds");

var interval;

var btnStart = document.getElementById("btn-start")
var btnPause = document.getElementById("btn-pause")
var btnReset = document.getElementById("btn-reset")

function timer(){
    miliSeconds++
    get_MSeconds.innerHTML = miliSeconds;
    if (miliSeconds >= 100){
        seconds++
        getSeconds.innerHTML = seconds
        miliSeconds = 00

    }else if(seconds >= 59){
        minutes++
        seconds = 00
        getMinutes.innerHTML = minutes
    }else if(minutes >= 59){
         hours++
         getHours.innerHTML = hours
         minutes = 00 }

}


function start(){
interval = setInterval(timer,10);

btn1 = document.getElementById("btn-start");
btn1.setAttribute('disabled', 'disabled')

}



var vi;

function stop(){
    clearInterval(interval)
vi  = document.getElementById("btn-start")
vi.removeAttribute('disabled', 'disabled')
}



function reset(){
    minutes = 0+0
    seconds = 00
    hours = 00
    miliSeconds = 00
    getMinutes.innerHTML = minutes
    getSeconds.innerHTML = seconds
    getHours.innerHTML = hours
    get_MSeconds.innerHTML = miliSeconds
    clearInterval(interval)
    vi  = document.getElementById("btn-start")
    vi.removeAttribute('disabled', 'disabled')
}

