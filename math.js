alert("Hi, Let's do some math!");

const yourFirstNumber = prompt("Give me a number please.");
const yourSecondNumber = prompt("Give me a second number please.");


const additionTotal = parseInt(yourFirstNumber) + parseInt(yourSecondNumber);
const multiplicationTotal = parseInt(yourFirstNumber) * parseInt(yourSecondNumber);
const divisionTotal = parseInt(yourFirstNumber) / parseInt(yourSecondNumber);
const minusTotal = parseInt(yourFirstNumber) - parseInt(yourSecondNumber);

const main = document.querySelector('main');

main.innerHTML = `<h1>You have chosen numbers ${yourFirstNumber} and ${yourSecondNumber}.</h1>
<h2> Addition: ${yourFirstNumber} + ${yourSecondNumber} = ${additionTotal}</h2>
<h2>Multiplication: ${yourFirstNumber} * ${yourSecondNumber} = ${multiplicationTotal}</h2>
<h2>Division: ${yourFirstNumber} / ${yourSecondNumber} = ${divisionTotal}</h2>
<h2>Minus: ${yourFirstNumber} - ${yourSecondNumber} = ${minusTotal}</h2>`;