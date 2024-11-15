let inputDate = new Date();
const currentDate = new Date();
const dayInput = document.querySelector("#day-input");
const monthInput = document.querySelector("#month-input");
const yearInput = document.querySelector("#year-input");
const submitButton = document.querySelector("button");
let day = 0;
let month = 0;
let year = 0;
let dayDifference = 0;
let monthDifference = 0;
let yearDifference = 0;

submitButton.addEventListener("click", () => {
  year = parseInt(yearInput.value);
  month = parseInt(monthInput.value);
  day = parseInt(dayInput.value);

  monthDifference = getMonthDifference(
    currentDate.getMonth(),
    month,
    currentDate.getDate(),
    day,
  );

  yearDifference = getYearDifference(
    currentDate.getFullYear(),
    year,
    currentDate.getMonth(),
    month,
  );

  console.log(monthDifference);
  console.log(`Years: ${yearDifference}`);
});

function getMonthDifference(currentMonth, inputMonth, currentDay, inputDay) {
  if (currentDay < inputDay) {
    return currentMonth - inputMonth;
  } else {
    return currentMonth - inputMonth + 1;
  }
}

function getYearDifference(currentYear, inputYear, currentMonth, inputMonth) {
  if (currentMonth < inputMonth) {
    return currentYear - inputYear - 1;
  } else {
    return currentYear - inputYear;
  }
}
