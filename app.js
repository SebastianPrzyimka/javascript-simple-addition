//generate random numbers
const firstNumber = parseInt(Math.random()*10);
const secondNumber = parseInt(Math.random()*10);

const total = firstNumber + secondNumber;

const primary = document.getElementById('primary-number');
    primary.innerHTML = `<p>${firstNumber}</p>`;

const  secondary = document.getElementById('secondary-number');
    secondary.innerHTML = `<p>${secondNumber}</p>`



const button = document.getElementById('btn')

button.addEventListener('click', function(){

const guess = document.getElementById('guess').value;
    guess = Number(guess);
if (guess === total){
    alert('Correct');
    window.location.reload()
} else {
    alert('Sorry. Incorrect. The correct answer was ' + total + '.')
    window.location.reload()

}
    });