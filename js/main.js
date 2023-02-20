// timer

const deadline = new Date("May 31 2023 00:00:00").getTime();

const timeValue = setInterval(function () {
  const now = new Date().getTime();
  const timeRemainder = deadline - now;

  const days = Math.floor(timeRemainder / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemainder % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemainder % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemainder % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);
