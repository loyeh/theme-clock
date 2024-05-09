const daysFiled = document.querySelector(".day");
const mode = document.querySelector(".mode");
const main = document.querySelector(".main");
const dateFiled = document.querySelector(".date");
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");
const digital = document.querySelector(".digital");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

mode.addEventListener("click", () => {
  digital.classList.toggle("active");
  main.classList.toggle("active");
  hourHand.classList.toggle("active");
  minuteHand.classList.toggle("active");
  daysFiled.classList.toggle("active");
  mode.classList.toggle("active");
  if (mode.classList.contains("active")) {
    mode.textContent = "Light Mode";
  } else {
    mode.textContent = "Dark Mode";
  }
});

function dayInvertor(day) {
  let dayText;
  switch (day) {
    case 0:
      dayText = "";
  }
}

function update() {
  const d = new Date();
  let day = weekDays[d.getDay()];
  let month = months[d.getMonth()];
  let second = d.getSeconds();
  let minute = d.getMinutes();
  let hour = d.getHours();
  let ampm = "AM";
  if (hour > 12) {
    hour = hour - 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }
  hourHand.style.transform = `rotate(${
    (hour + 3) * 15 + (minute - 15) * 0.6
  }deg)`;
  minuteHand.style.transform = `rotate(${(minute - 15) * 6}deg)`;
  secondHand.style.transform = `rotate(${(second - 15) * 6}deg)`;

  if (second < 10) {
    second = "0" + second;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }

  dateFiled.textContent = `${day}, ${month}`;
  digital.textContent = `${hour}:${minute}  ${ampm}`;
  daysFiled.textContent = `${d.getDate()}`;
  console.log(second, minute);
}
update();

setInterval(update, 1000);
