var miliseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
function timer() {
  setInterval(function() {
    if (miliseconds < 60) {
      miliseconds++;
    } else if (seconds < 60) {
      miliseconds = 0;
      seconds++;
    } else if (minutes < 60) {
      miliseconds = 0;
      seconds = 0;
      miliseconds++;
      minutes++;
    } else {
      miliseconds = 0;
      seconds = 0;
      minutes = 0;
      hours++;
    }
    document.body.innerHTML = `<span id="hours"> ${hours} : </span>
    <span id="minutes"> ${minutes} : </span>
    <span id="seconds"> ${seconds} : </span> <span id="miliseconds"> ${miliseconds}  </span>`;
    console.log(
      "Hours: " +
        hours +
        "Minutes: " +
        minutes +
        "Seconds: " +
        seconds +
        "Miliseconds" +
        miliseconds
    );
  }, 10);
}
