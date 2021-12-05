var clock = document.querySelector(".clock_row");
var age = document.querySelector(".age_row");
var birthday = new Date("05 September 2002 00:00");

function updateClock() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let days = now.getDate();
    let months = now.getMonth() + 1;
    let years = now.getFullYear();

    hours = (Number(hours) < 10 ? "0" + hours : hours);
    minutes = (Number(minutes) < 10 ? "0" + minutes : minutes);
    seconds = (Number(seconds) < 10 ? "0" + seconds : seconds);

    days = (Number(days) < 10 ? "0" + days : days);
    months = (Number(months) < 10 ? "0" + months : months);
    years = (Number(years) < 10 ? "0" + years : years);

    clock.textContent = hours + ":" + minutes + ":" + seconds + " " + days + "." + months + "." + years;

    let old = Math.round((now - birthday) / (1000 * 60 * 60 * 24 * 365));

    age.textContent = old;
}

updateClock();
setInterval(updateClock, 250);