//General Constants

// Input and output values
const inputValues = document.querySelectorAll("input");
let birthDay;
let birthMonth;
let birthYear;

const outputValues = document.querySelectorAll("span.purple");
let yearOutput = outputValues[0];
let monthOutput = outputValues[1];
let dayOutput = outputValues[2];

// Form
const form = document.querySelector("form");
const labels = document.querySelectorAll("label");
const validError = document.querySelectorAll(".valid");
const pastError = document.querySelectorAll(".past");

const btnForm = document.querySelector("#btn-form");

// Date
const today = new Date();
const day = today.getDay();
const month = today.getMonth();
const year = today.getFullYear();

let myDate;
let len;
let diff;

const msYear = 31557600000;
const msMonth = 2630016000;
const msDay = 86399000;

// Clear my form input values on reload
form.reset();

// Form events
form.addEventListener("keyup", function (e) {
  e.preventDefault();
  btnForm.classList.add("animate-btn");

  birthDay = Number(inputValues[0].value);
  birthMonth = Number(inputValues[1].value);
  birthYear = Number(inputValues[2].value);

  len = inputValues[2].value.length;

  myDate = getBirthdate();
  checkValid(myDate);
  checkNotPast(myDate);

  yearOutput.innerText = "--";
  monthOutput.innerText = "--";
  dayOutput.innerText = "--";
});

// Results are only displayed on submit
form.addEventListener("submit", function (e) {
  e.preventDefault();
  displayAge();
});

// My Functions
function getBirthdate() {
  let check = [birthYear, birthMonth, birthDay];
  let birthDate = check.join("-");
  birthDate = new Date(birthDate);
  return birthDate;
}

function checkValid(myDate) {
  if (isNaN(myDate) || len < 4) {
    if (birthDay < 1 || birthDay > 31) {
      labels[0].classList.add("red");
      validError[0].classList.remove("hide");
    } else {
      labels[0].classList.remove("red");
      validError[0].classList.add("hide");
    }

    if (birthMonth < 1 || birthMonth > 12) {
      labels[1].classList.add("red");
      validError[1].classList.remove("hide");
    } else {
      labels[1].classList.remove("red");
      validError[1].classList.add("hide");
    }

    if (birthYear < 1 || birthYear > year || len < 4) {
      labels[2].classList.add("red");
      validError[2].classList.remove("hide");
    } else {
      labels[2].classList.remove("red");
      validError[2].classList.add("hide");
    }
  } else {
    labels.forEach((label) => {
      label.classList.remove("red");
    });

    validError.forEach((valid) => {
      valid.classList.add("hide");
    });

    return true;
  }
  return false;
}

function checkNotPast(myDate) {
  if (myDate > today) {
    if (birthDay > day) {
      labels[0].classList.add("red");
      pastError[0].classList.remove("hide");
    } else {
      labels[0].classList.remove("red");
      pastError[0].classList.add("hide");
    }

    if (birthMonth > month) {
      labels[1].classList.add("red");
      pastError[1].classList.remove("hide");
    } else {
      labels[1].classList.remove("red");
      pastError[1].classList.add("hide");
    }

    if (birthYear > year) {
      labels[2].classList.add("red");
      pastError[2].classList.remove("hide");
    } else {
      labels[2].classList.remove("red");
      pastError[2].classList.add("hide");
    }
  } else {
    labels.forEach((label) => {
      label.classList.remove("red");
    });

    pastError.forEach((past) => {
      past.classList.add("hide");
    });
    return true;
  }
  return false;
}

function displayAge() {
  if (checkNotPast(myDate) && checkValid(myDate)) {
    btnForm.classList.remove("animate-btn");
    diff = today - myDate;
    yearOutput.innerText = Math.floor(diff / msYear);
    monthOutput.innerText = Math.floor((diff % msYear) / msMonth);
    dayOutput.innerText = Math.floor(((diff % msYear) % msMonth) / msDay);
  }
}
