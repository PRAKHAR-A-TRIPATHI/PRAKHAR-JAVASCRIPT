let milisecond = 1000;
let seconds = 0;
let minutes = 10;
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
    milisecond -= 5;
    if (milisecond === 0) {
      seconds--;
      milisecond = 1000;
    }
    if (seconds === 0) {
      minutes--;
      seconds = 60;
    }
    if (minutes == 0) {
      hours--;
      minutes = 60;
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
  mili.innerText = "0";
  milisecond=1000;
  sec.innerText = "0";
  seconds=0;
  min.innerText = "0";
  minutes=10;
  hou.innerText = "0";
  hours=0;
  start.disabled=false;
}
start.addEventListener("click", timer);

const stop = document.querySelector("#stop");
stop.addEventListener("click", stopTimer);

const reset = document.querySelector("#reset");
reset.addEventListener("click", resettime);
