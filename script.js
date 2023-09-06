const getById = (id) => document.getElementById(id);

const clock = getById("clock");
const playBtn = getById("play-btn");
const pauseBtn = getById("pause-btn");
const stopBtn = getById("stop-btn");

const clockSting = clock.innerText;

const clockStringArray = clockSting.split(":");
let [hr, min, sec] = clockStringArray.map(a => parseInt(a));

let myInterval = "";


playBtn.addEventListener("click", () => {
    pauseBtn.removeAttribute("disabled");
    stopBtn.removeAttribute("disabled");

    myInterval = setInterval(() => {
        sec++;
        if (sec === 60) {
            sec = 0;
            min++;
        }
        if (min === 60) {
            min = 0;
            hr++;
        }
        getById("sec-text").innerText = sec < 10 ? "0" + sec : sec;
        getById("min-text").innerText = min < 10 ? "0" + min : min;
        getById("hr-text").innerText = hr < 10 ? "0" + hr : hr;
        // console.log(hr, min, sec);
    }, 1000);
})

pauseBtn.addEventListener("click", () => {
    clearInterval(myInterval);
})

stopBtn.addEventListener("click", () => {
    pauseBtn.setAttribute("disabled", "false");
    clearInterval(myInterval);
    [hr, min, sec] = [0, 0, 0];
})
