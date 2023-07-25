let milisecond = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let sec = document.getElementById("sec");
let min = document.getElementById("min");
let mili = document.getElementById("mili");
let hou = document.getElementById("hou");
let running = false;
let start = document.querySelector("#start");

const timer = () => {
    start.disabled=true;
    stopWatch = setTimeout(() => {
    milisecond += 5;
    if (milisecond === 1000) {
      seconds++;
      milisecond = 0;
    }
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes == 60) {
      hours++;
      minutes = 0;
    }
    // console.log(`Minute: ${minutes}, Seconds : ${seconds}`);
    mili.innerText = milisecond;
    sec.innerText = seconds;
    min.innerText = minutes;
    hou.innerText = hours;
    timer();
  }, 1);
};
function stopTimer() {
  clearTimeout(stopWatch);
  start.disabled=false;
}
function resettime() {
  stopTimer();
  mili.innerText = "00";
  milisecond=0;
  sec.innerText = "00";
  seconds=0;
  min.innerText = "00";
  minutes=0;
  hou.innerText = "00";
  hours=0;
  start.disabled=false;
}
start.addEventListener("click", timer);

const stop = document.querySelector("#stop");
stop.addEventListener("click", stopTimer);

const reset = document.querySelector("#reset");
reset.addEventListener("click", resettime);
