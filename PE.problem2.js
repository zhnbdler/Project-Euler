var firstNumber = 0;
var secondNumber = 1;
var tempNumber = 0;
var sumOfNumbers = 0;
var maxNumber = 4000000;
while (secondNumber < maxNumber) {
  tempNumber = firstNumber+secondNumber;
  if (tempNumber%2===0) {
    sumOfNumbers+=tempNumber;
    }
    firstNumber = secondNumber;
    secondNumber = tempNumber;
};
console.log(sumOfNumbers);