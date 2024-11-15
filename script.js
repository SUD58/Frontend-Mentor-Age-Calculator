let inputDate = new Date();
let day = 0;
let month = 0;
let year = 0;
let difference = 0;
let yearDifference = 0;
let monthDifference = 0;
let dayDifference = 0;

const currentDate = new Date();
const dayInput = document.querySelector("#day-input");
const monthInput = document.querySelector("#month-input");
const yearInput = document.querySelector("#year-input");
const submitButton = document.querySelector("button");

submitButton.addEventListener("click", () => {
  year = parseInt(yearInput.value);
  month = parseInt(monthInput.value);
  day = parseInt(dayInput.value);
  inputDate.setFullYear(year, month, day);
  console.log(currentDate.getTime());

  difference = currentDate.getTime() - inputDate.getTime();
  yearDifference = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
  difference -= yearDifference * (1000 * 60 * 60 * 24 * 365.25);
  console.log(difference);

  monthDifference = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.44));
  difference -= monthDifference * (1000 * 60 * 60 * 24 * 30.44);
  console.log(difference);

  dayDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
  difference -= dayDifference * (1000 * 60 * 60 * 24);
  console.log(difference);

  console.log({ yearDifference, monthDifference, dayDifference });
});
