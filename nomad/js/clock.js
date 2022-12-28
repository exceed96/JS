const Clock = document.querySelector("#Clock");

function GetClock() {
    const date = new Date();
    const Hours = String(date.getHours()).padStart(2, "0");
    const Minutes = String(date.getMinutes()).padStart(2, "0");
    const Seconds = String(date.getSeconds()).padStart(2, "0");
    Clock.innerHTML = `${Hours}:${Minutes}:${Seconds}`;
}
GetClock();
setInterval(GetClock, 1000);