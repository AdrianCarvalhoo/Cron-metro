let timerInterval;
let isRunning = false;
let seconds = 0;

function startStop() {
  if (isRunning) {
    clearInterval(timerInterval);
  } else {
    timerInterval = setInterval(updateTime, 1000);
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(timerInterval);
  isRunning = false;
  seconds = 0;
  updateClockDisplay();
}

function updateTime() {
  seconds++;
  updateClockDisplay();
}

function updateClockDisplay() {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(remainingSeconds)}`;
  document.getElementById('clock').textContent = formattedTime;
}

function padNumber(number) {
  return number.toString().padStart(2, '0');
}

startStop();
