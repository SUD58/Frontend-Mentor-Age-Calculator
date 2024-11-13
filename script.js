let inputDate = new Date();
const currentDate = new Date();
const dayInput = document.querySelector("#day-input");
const monthInput = document.querySelector("#month-input");
const yearInput = document.querySelector("#year-input");
const submitButton = document.querySelector("button");

submitButton.addEventListener("click", () => {
  inputDate.setFullYear(
    parseInt(yearInput.value),
    parseInt(monthInput.value) - 1,
    parseInt(dayInput.value),
  );
  console.log(inputDate);
});
