
const timerMilliseconds = document.querySelector('.timer__milliseconds')
const timerSeconds = document.querySelector('.timer__seconds')
const timerMinutes = document.querySelector('.timer__minutes')

let cancelId;
let startTime

function startTimer(){
    startTime = Date.now()
    console.log(startTime)
    cancelId = requestAnimationFrame(updateTimer)
}

function stopTimer(){
    cancelAnimationFrame(cancelId)
}

function resetTimer(){
    
}


function updateTimer() {
    let millisElapsed = (Date.now() - startTime)
    let secondsElapsed = millisElapsed / 1000;
    let minutesElapsed = secondsElapsed / 60;

    timerMilliseconds.innerHTML = millisElapsed % 1000
    timerSeconds.innerHTML = Math.floor(secondsElapsed % 60)
    timerMinutes.innerHTML = Math.floor(minutesElapsed)
    cancelId = requestAnimationFrame(updateTimer)
}