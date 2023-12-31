const time = document.querySelector('.watch .time');
const startBtun = document.getElementById('start');
const stopBtun = document.getElementById('stop');
const resetBtun = document.getElementById('reset');

let seconds = 0;
let interval = null;

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

function timer() {
    seconds++;

    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs*3600)) / 60);
    let secs = seconds % 60;

    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = '0' + mins;
    if (hrs < 10) hrs = '0' + hrs;
    
    time.innerHTML = `${hrs}:${mins}:${secs}`;
}

function start() {
    if (interval) {
        return;
    }
    interval = setInterval(timer, 1000);
}
function stop() {
    clearInterval(interval);
    interval = null;
}
function reset() {
    stop();
    seconds = 0;
    time.innerHTML = '00:00:00';
}
