let timer = document.getElementById("timer")
let day = document.getElementById("day")

let notified = false
let tookBreak = false
let totalSecs = 2100000
let currDay = "Mon"

function notify(){
    let takeBreake = confirm("Hey, you have been doing the same thing for several days straight,\nYou probably should take a short break now and do something fun for a bit.\nDo you want to take the break?");
    notified = true;
    if (takeBreake){
        alert("Great choice! Do something fun, maybe drink water, use instagram, or a funny video!\nWe have a video if you want to watch: https://www.youtube.com/watch?v=28xjtYY3V3Q&ab_channel=InternetCute");
        tookBreak = true
    }
}

setTimeout(notify, 1260000);

setInterval(()=>{
    if(notified && !tookBreak){
        notify();
    }
}, 420000)

setInterval(()=>{
    totalSecs-=1000;
    let timeStr = getTimeString(totalSecs);
    timer.innerHTML = timeStr;
    day.innerHTML = getDay()
}, 1000)

function getTimeString(secs){
    let mins = Math.floor(secs/60000);
    let sec = Math.floor((secs%60000)/1000);
    return `Time ${mins}: ${sec}`
}

function getDay(){
    let mins = Math.floor(totalSecs/60000);
    if(mins>=28){
        return "Monday"
    }
    else if(mins>=21){
        return "Tuesday"
    }
    else if(mins>=14){
        return "Wednesday"
    }
    else if(mins>=7){
        return "Thursday"
    }
    else if(mins>=0){
        return "Friday"
    }
}
