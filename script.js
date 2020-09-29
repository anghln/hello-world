let prevNumber = '';
let calculationOperator = '';
let currentNumber ='0';

const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (numberr) => {
  calculatorScreen.value = currentNumber;
};

const numbers = document.querySelectorAll(".number");
numbers.forEach((numberr) => {
  numberr.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(event.target.value);
  });
});

const inputNumber = (numberr) => {
  if (currentNumber === '0') {
    currentNumber = numberr;
  } else {
    currentNumber += numberr;
  };
};

const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

const inputOperator = (operator) => {
  if (calculationOperator === '') {
    prevNumber=currentNumber;
  };
  calculationOperator = operator;
  currentNumber='0';
};

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
  calculate();
  updateScreen(currentNumber);
});

const calculate = () => {
  let result = '';
  switch (calculationOperator) {
    case '+':
      result = Number(prevNumber) + Number(currentNumber);
      break;
    case '-':
      result = prevNumber - currentNumber;
      break;
    case '*':
      result = prevNumber * currentNumber;
      break;
    case '/':
      result = prevNumber / currentNumber;
      break;
    default:
      return;
  };
  currentNumber=result;
  calculationOperator='';
};


const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
  clearAll();
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevNumber='';
  calculationOperator='';
  currentNumber='0';
};

const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

inputDecimal = (dot) => {
  if (currentNumber.includes('.')) {
    return;
  };
  currentNumber += dot;
};

const persen = document.querySelector('.percentage');

persen.addEventListener('click', (event) => {
  result = currentNumber/100;
  currentNumber = result;
  updateScreen(currentNumber);
});

//const backspace = document.querySelector('.backspace');

//backspace.addEventListener('click', (event) => {
//  str = calculatorScreen.value;
//  str.slice(0,-1);
//  calculatorScreen.value=str;
//})
