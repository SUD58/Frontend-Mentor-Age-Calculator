const dayInput = document.querySelector("#day-input");
const monthInput = document.querySelector("#month-input");
const yearInput = document.querySelector("#year-input");
const inputForm = document.querySelector("#input-form");
const submitButton = document.querySelector("button");
const dayError = document.querySelector("#day-error");
const monthError = document.querySelector("#month-error");
const yearError = document.querySelector("#year-error");
const dayOutput = document.querySelector("#day-output");
const monthOutput = document.querySelector("#month-output");
const yearOutput = document.querySelector("#year-output");

const currentDate = new Date();
let inputDate = new Date();
let day = 0;
let month = 0;
let year = 0;
let dayDifference = 0;
let monthDifference = 0;
let yearDifference = 0;

yearInput.setAttribute("max", currentDate.getFullYear());

inputForm.addEventListener("submit", (e) => {
  year = parseInt(yearInput.value);
  month = parseInt(monthInput.value) - 1;
  day = parseInt(dayInput.value);
  inputDate.setFullYear(year, month, day);

  const inputMonthLength = new Date(year, month + 1, 0);

  if (day > inputMonthLength.getDate() || day < 1) {
    dayError.textContent = "Must be a valid day";
    e.preventDefault();
    return;
  }

  if (month > 11 || month < 0) {
    monthError.textContent = "Must be a valid month";
    e.preventDefault();
    return;
  }

  if (inputDate > currentDate) {
    yearError.textContent = "Must be in the past";
    e.preventDefault();
    return;
  }

  dayDifference = currentDate.getDate() - day;
  monthDifference = currentDate.getMonth() - month;
  yearDifference = currentDate.getFullYear() - year;

  if (dayDifference < 0) {
    monthDifference--;
    const previousMonth = new Date(
      inputDate.getFullYear(),
      inputDate.getMonth(),
      0,
    );
    dayDifference += previousMonth.getDate();
  }

  if (monthDifference < 0) {
    yearDifference--;
    monthDifference += 12;
  }

  dayOutput.textContent = dayDifference;
  monthOutput.textContent = monthDifference;
  yearOutput.textContent = yearDifference;
  e.preventDefault();
});
