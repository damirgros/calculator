const input = document.querySelector(".input");
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");  
const deleted = document.querySelector(".delete");
const remainder = document.querySelector("#remainder");
const divided = document.querySelector("#divider");
const multiplied = document.querySelector("#multiply");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const equal = document.querySelector("#equal");
const decimal = document.querySelector("#decimal");


let firstNumber = "";
let operator = "";
let secondNumber = "";


function add(a, b){
    let sum = Math.round((a + b) * 100) / 100;
    return sum
}

function subtract(a, b){
    let sum = Math.round((a - b) * 100) / 100;    
    return sum
}

function multiply(a, b){
    let sum = Math.round((a * b) * 100) / 100;    
    return sum
}

function divide(a, b){
    if (a === 0 || b === 0){
      alert ("Cannot divide by 0 mate!")
      firstNumber = "";
      secondNumber = "";
      operator = "";
    }
    else {
      let sum = Math.round((a / b) * 100) / 100;    
      return sum
    }
}

function findRemainder(a, b){
    let sum = Math.round((a % b) * 100) / 100;    
    return sum
}

function operate(a, b, operator) {
    num1 = Number(a);
    num2 = Number(b);    
    switch (operator) {
      case "+":
        return add(num1, num2);
      case "-":
        return subtract(num1, num2);
      case "*":
        return multiply(num1, num2);
      case "/":
        return divide(num1, num2);
      case "%":
        return findRemainder(num1, num2);
    }
  };

deleted.addEventListener("click", ()=> {
  firstNumber = "";
  operator = "";
  secondNumber = "";
  input.textContent = "";
  })

equal.addEventListener("click", ()=> {
  if (firstNumber !== "" && secondNumber !== "" && operator !== ""){
    let sum = operate(firstNumber, secondNumber, operator)
    input.textContent = sum
  }
  else {
    return
  }})

zero.addEventListener("click", ()=> {
  if (operator === ""){
    firstNumber = firstNumber + "0";
    input.textContent = firstNumber;
  }
  if (operator !== ""){
    secondNumber = secondNumber + "0";
    input.textContent = secondNumber;
  }})


one.addEventListener("click", ()=> {
  if (operator === ""){
    firstNumber = firstNumber + "1";
    input.textContent = firstNumber;
  }
  if (operator !== ""){
    secondNumber = secondNumber + "1";
    input.textContent = secondNumber;
  }})


two.addEventListener("click", ()=> {
  if (operator === ""){
    firstNumber = firstNumber + "2";
    input.textContent = firstNumber;
  }
  if (operator !== ""){
    secondNumber = secondNumber + "2";
    input.textContent = secondNumber;
  }})


three.addEventListener("click", ()=> {
  if (operator === ""){
    firstNumber = firstNumber + "3";
    input.textContent = firstNumber;
  }
  if (operator !== ""){
    secondNumber = secondNumber + "3";
    input.textContent = secondNumber;
  }})


four.addEventListener("click", ()=> {
  if (operator === ""){
    firstNumber = firstNumber + "4";
    input.textContent = firstNumber;
  }
  if (operator !== ""){
    secondNumber = secondNumber + "4";
    input.textContent = secondNumber;
  }})


five.addEventListener("click", ()=> {
  if (operator === ""){
    firstNumber = firstNumber + "5";
    input.textContent = firstNumber;
  }
  if (operator !== ""){
    secondNumber = secondNumber + "5";
    input.textContent = secondNumber;
  }})


six.addEventListener("click", ()=> {
  if (operator === ""){
    firstNumber = firstNumber + "6";
    input.textContent = firstNumber;
  }
  if (operator !== ""){
    secondNumber = secondNumber + "6";
    input.textContent = secondNumber;
  }})


seven.addEventListener("click", ()=> {
  if (operator === ""){
    firstNumber = firstNumber + "7";
    input.textContent = firstNumber;
  }
  if (operator !== ""){
    secondNumber = secondNumber + "7";
    input.textContent = secondNumber;
  }})


eight.addEventListener("click", ()=> {
  if (operator === ""){
    firstNumber = firstNumber + "8";
    input.textContent = firstNumber;
  }
  if (operator !== ""){
    secondNumber = secondNumber + "8";
    input.textContent = secondNumber;
  }})


nine.addEventListener("click", ()=> {
  if (operator === ""){
    firstNumber = firstNumber + "9";
    input.textContent = firstNumber;
  }
  if (operator !== ""){
    secondNumber = secondNumber + "9";
    input.textContent = secondNumber;
  }})

decimal.addEventListener("click", ()=> {
  if (operator === ""){
      if (firstNumber.includes(".")){
        return
      }
      else {
        firstNumber = firstNumber + ".";
        input.textContent = firstNumber;
      }
  }
  if (operator !== ""){
      if (secondNumber.includes(".")){
        return
      }
      else {
        secondNumber = secondNumber + ".";
        input.textContent = secondNumber;
      }
  }
})
     
remainder.addEventListener("click", ()=> {
  if (firstNumber !== "" && secondNumber !== ""){
    input.textContent = operate(firstNumber, secondNumber, operator);
    firstNumber = operate(firstNumber, secondNumber, operator);
    operator = "";
    secondNumber = "";
    operator = "%";
  }
  else {
    operator = "";
    operator = "%";
    input.textContent = "";
  }
})

divided.addEventListener("click", ()=> {
  if (firstNumber !== "" && secondNumber !== ""){
    input.textContent = operate(firstNumber, secondNumber, operator);
    firstNumber = operate(firstNumber, secondNumber, operator);
    operator = "";
    secondNumber = "";
    operator = "/";
  }
  else {
    operator = "";
    operator = "/";
    input.textContent = "";
  }
})

multiplied.addEventListener("click", ()=> {
  if (firstNumber !== "" && secondNumber !== ""){
    input.textContent = operate(firstNumber, secondNumber, operator);
    firstNumber = operate(firstNumber, secondNumber, operator);
    operator = "";
    secondNumber = "";
    operator = "*";
  }
  else {
    operator = "";
    operator = "*";
    input.textContent = "";
    }
})

minus.addEventListener("click", ()=> {
  if (firstNumber !== "" && secondNumber !== ""){
    input.textContent = operate(firstNumber, secondNumber, operator);
    firstNumber = operate(firstNumber, secondNumber, operator);
    operator = "";
    secondNumber = "";
    operator = "-";
  }
  else {
    operator = "";
    operator = "-";
    input.textContent = "";
    }
})

plus.addEventListener("click", ()=> {
  if (firstNumber !== "" && secondNumber !== ""){
    input.textContent = operate(firstNumber, secondNumber, operator);
    firstNumber = operate(firstNumber, secondNumber, operator);
    operator = "";
    secondNumber = "";
    operator = "+";
  }
  else {
    operator = "";
    operator = "+";
    input.textContent = "";
    }
})

document.addEventListener("keydown", event => {

    if(event.key == "0") { 
      if (operator === ""){
      firstNumber = firstNumber + "0";
      input.textContent = firstNumber;
      }
      if (operator !== ""){
        secondNumber = secondNumber + "0";
        input.textContent = secondNumber;
      }};

    if(event.key == "1") { 
      if (operator === ""){
      firstNumber = firstNumber + "1";
      input.textContent = firstNumber;
      }
      if (operator !== ""){
        secondNumber = secondNumber + "1";
        input.textContent = secondNumber;
      }};

    if(event.key == "2") {
      if (operator === ""){
        firstNumber = firstNumber + "2";
        input.textContent = firstNumber;
      }
      if (operator !== ""){
        secondNumber = secondNumber + "2";
        input.textContent = secondNumber;
      }};

    if(event.key == "3") {
      if (operator === ""){
        firstNumber = firstNumber + "3";
        input.textContent = firstNumber;
      }
      if (operator !== ""){
        secondNumber = secondNumber + "3";
        input.textContent = secondNumber;
      }};

    if(event.key == "4") {
      if (operator === ""){
        firstNumber = firstNumber + "4";
        input.textContent = firstNumber;
      }
      if (operator !== ""){
        secondNumber = secondNumber + "4";
        input.textContent = secondNumber;
      }};

    if(event.key == "5") {
      if (operator === ""){
        firstNumber = firstNumber + "5";
        input.textContent = firstNumber;
      }
      if (operator !== ""){
        secondNumber = secondNumber + "5";
        input.textContent = secondNumber;
      }};

    if(event.key == "6") {
      if (operator === ""){
        firstNumber = firstNumber + "6";
        input.textContent = firstNumber;
      }
      if (operator !== ""){
        secondNumber = secondNumber + "6";
        input.textContent = secondNumber;
      }};

    if(event.key == "7") {
      if (operator === ""){
        firstNumber = firstNumber + "7";
        input.textContent = firstNumber;
      }
      if (operator !== ""){
        secondNumber = secondNumber + "7";
        input.textContent = secondNumber;
      }};

    if(event.key == "8") {
      if (operator === ""){
        firstNumber = firstNumber + "8";
        input.textContent = firstNumber;
      }
      if (operator !== ""){
        secondNumber = secondNumber + "8";
        input.textContent = secondNumber;
      }};

    if(event.key == "9") {
      if (operator === ""){
        firstNumber = firstNumber + "9";
        input.textContent = firstNumber;
      }
      if (operator !== ""){
        secondNumber = secondNumber + "9";
        input.textContent = secondNumber;
      }};

    if(event.key == "Backspace") {
      firstNumber = "";
      operator = "";
      secondNumber = "";
      input.textContent = "";
    };

    if(event.key == "Enter") {
      if (firstNumber !== "" && secondNumber !== "" && operator !== ""){
        let sum = operate(firstNumber, secondNumber, operator)
        input.textContent = sum
      }
      else {
        return
      }};
    
    if(event.key == "+") {
      if (firstNumber !== "" && secondNumber !== ""){
        input.textContent = operate(firstNumber, secondNumber, operator);
        firstNumber = operate(firstNumber, secondNumber, operator);
        operator = "";
        secondNumber = "";
        operator = "+";
      }
      else {
        operator = "";
        operator = "+";
        input.textContent = "";
        }};

    if(event.key == "-") {
      if (firstNumber !== "" && secondNumber !== ""){
        input.textContent = operate(firstNumber, secondNumber, operator);
        firstNumber = operate(firstNumber, secondNumber, operator);
        operator = "";
        secondNumber = "";
        operator = "-";
      }
      else {
        operator = "";
        operator = "-";
        input.textContent = "";
        }};

    if(event.key == "/") {
      if (firstNumber !== "" && secondNumber !== ""){
        input.textContent = operate(firstNumber, secondNumber, operator);
        firstNumber = operate(firstNumber, secondNumber, operator);
        operator = "";
        secondNumber = "";
        operator = "/";
      }
      else {
        operator = "";
        operator = "/";
        input.textContent = "";
        }};

    if(event.key == "*") {
      if (firstNumber !== "" && secondNumber !== ""){
        input.textContent = operate(firstNumber, secondNumber, operator);
        firstNumber = operate(firstNumber, secondNumber, operator);
        operator = "";
        secondNumber = "";
        operator = "*";
      }
      else {
        operator = "";
        operator = "*";
        input.textContent = "";
        }};

    if(event.key == "%") {
      if (firstNumber !== "" && secondNumber !== ""){
        input.textContent = operate(firstNumber, secondNumber, operator);
        firstNumber = operate(firstNumber, secondNumber, operator);
        operator = "";
        secondNumber = "";
        operator = "%";
      }
      else {
        operator = "";
        operator = "%";
        input.textContent = "";
        }};

    if(event.key == ".") {
      if (operator === ""){
        if (firstNumber.includes(".")){
          return
        }
        else {
          firstNumber = firstNumber + ".";
          input.textContent = firstNumber;
        }
    }
    if (operator !== ""){
        if (secondNumber.includes(".")){
          return
        }
        else {
          secondNumber = secondNumber + ".";
          input.textContent = secondNumber;
        }};
}})