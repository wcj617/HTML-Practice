const clockTitle = document.querySelector(".js-clock");

function ChrisMas() {
  var _second = 1000;

  var _minute = _second * 60;

  var _hour = _minute * 60;

  var _day = _hour * 24;
  const currentDate = new Date().getTime();
  const christmasDate = new Date("December 24, 2021 00:00:00").getTime();
  const timeDiff = christmasDate - currentDate;
  const days = Math.floor(timeDiff / _day);
  const hours = Math.floor((timeDiff % _day) / _hour);
  const minutes = Math.floor((timeDiff % _hour) / _minute);
  const seconds = Math.floor((timeDiff % _minute) / _second);

  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

ChrisMas();
setInterval(ChrisMas, 1000);
