const currencyElOne = document.getElementById("currency-one");
const amountElOne = document.getElementById("amount-one");
const currencyElTwo = document.getElementById("currency-two");
const amountElTwo = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

function calculate() {
  const currencyOne = currencyElOne.value;
  const currencyTwoe = currencyElTwo.value;

  fetch(`https://api.exchangerate-api.com/v4/latest${currencyOne}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

currencyElOne.addEventListener("change", calculate);
amountElOne.addEventListener("input", calculate);
currencyElTwo.addEventListener("change", calculate);
amountElTwo.addEventListener("input", calculate);

calculate();
