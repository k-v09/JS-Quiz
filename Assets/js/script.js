
let timeLeft = 100;
const timerEL = document.getElementById('timer');
const countdown = setInterval(() => {
    if (timeLeft <= 0) {
        clearInterval(countdown);
        timerEL.innerHTML = "Time's up!";
    } else {
        timerEL.innerHTML = timeLeft;
    }
    timeLeft -= 1;
}, 1000);