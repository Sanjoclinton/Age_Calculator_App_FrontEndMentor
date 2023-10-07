// Constants
const form = document.querySelector('form');
const btn = document.querySelector('#btn');

const dayInput = document.querySelector('#day-input');
const monthInput = document.querySelector('#month-input');
const yearInput = document.querySelector('#year-input');

let dayResult = document.querySelector('.day-result');
let monthResult = document.querySelector('.month-result');
let yearResult = document.querySelector('.year-result');

const error = document.querySelectorAll('.error');

const label = document.querySelectorAll('label')

const date = new Date();
let dayMonthYear = date.toLocaleDateString().split('/');
let month =   Number(dayMonthYear[0]);
let day = Number(dayMonthYear[1]);
let year =  Number(dayMonthYear[2]);



form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if((dayInput.value < 1 || dayInput.value > 31) || (monthInput.value < 1 || monthInput.value > 12) || (yearInput.value < 1 || yearInput.value > year)){
        if(dayInput.value < 1 || dayInput.value > 31) {
            error[0].classList.remove('hide');
            label[0].classList.add('red');
            console.log("i'm here")
        }

        if(monthInput.value < 1 || monthInput.value > 12) {
            error[1].classList.remove('hide');
            label[1].classList.add('red');
        }

        if(yearInput.value < 1 || yearInput > year ) {
            error[2].classList.remove('hide');
            label[2].classList.add('red');
        }

        console.log("I'm here")

    } else {
        label.forEach(label => {
            label.classList.remove('red');
        });

        error.forEach(error => {
            error.classList.add('hide');
        });

       
        let checkYear = year - yearInput.value;
        let checkMonth = month - monthInput.value;
        let checkDay = day - dayInput.value;

        if(checkDay < 0) {

            if(dayInput.value == 2) {
                checkDay = (28 - dayInput.value + day);
            } else if(dayInput.value == 4 || dayInput.value == 6 || dayInput.value == 9 || dayInput.value == 11) {
                checkDay = (30 - dayInput.value + day);
            } else {
                checkDay = (31 - dayInput.value + day);
            }
            console.log("i'm HERE now")
            checkMonth--;
            
        }

        if(checkMonth < 0 ) {
            checkMonth = (12 - monthInput.value + month);
            checkYear--;
        }

        dayResult.innerText = checkDay;
        monthResult.innerText = checkMonth;
        yearResult.innerText = checkYear;


        console.log('done');
    }

});
