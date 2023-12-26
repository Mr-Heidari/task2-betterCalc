//In this file we want control our display with numbers and our operators do some math

//At first select some elements 
const display = document.getElementById("display");
const prevDisplay = document.getElementById("prevDisplay");
const selectedOperator = document.getElementById("selectedOperator");
const delBtn = document.getElementById("del");

//then we need set our valid inputs 
const EnterInputs = "Enter";
const numbers = "1234567890.";
const operations = "+-*/p";

//after that need some flag for our displays value
let isInt = false;
let displayHasValue = false;
let prevDisplayHasValue = false;

//just a temp variable to move our valid inputs
let y = 0;

//this is our operators containers all operator are inside this variable
const operators = {
/*in here we have 6 operator do some math and change our flags for better control our display
 and no bugs
at least change our displaysvalue when computation ended 
*/
  "+": function plus() {
    prevDisplayHasValue = true;
    inputs = "+";
    selectedOperator.innerText = inputs;
    if (displayHasValue === true) {
      histroySave.saveOperation();
      prevDisplay.value = Number(prevDisplay.value) + Number(display.value);
      histroySave.saveValue();
      display.value = null;
      displayHasValue = false;
      isInt = false;
    }
  },
  "-": function mines() {
    prevDisplayHasValue = true;
    inputs = "-";
    selectedOperator.innerText = inputs;
    if (displayHasValue === true) {
      histroySave.saveOperation();
      prevDisplay.value = Number(prevDisplay.value) - Number(display.value);
      histroySave.saveValue();
      display.value = null;
      displayHasValue = false;
      isInt = false;
    }
  },
  "*": function multiply() {
    inputs = "*";
    selectedOperator.innerText = inputs;
    if (displayHasValue === true && prevDisplayHasValue === true) {
      histroySave.saveOperation();
      prevDisplay.value = Number(prevDisplay.value) * Number(display.value);
      histroySave.saveValue();
      display.value = null;
      isInt = false;
      displayHasValue = false;
    } else if (displayHasValue === true) {
      prevDisplayHasValue = true;
      histroySave.saveOperation();
      prevDisplay.value = display.value;
      histroySave.saveValue();
      display.value = null;
      isInt = false;
      displayHasValue = false;
    }
  },
  "/": function divide() {
    inputs = "/";
    selectedOperator.innerText = inputs;
    if (displayHasValue === true && prevDisplayHasValue === true) {
      histroySave.saveOperation();
      prevDisplay.value = Number(prevDisplay.value) / Number(display.value);
      histroySave.saveValue();
      display.value = null;
      isInt = false;
      displayHasValue = false;
    } else if (displayHasValue === true) {
      prevDisplayHasValue = true;
      histroySave.saveOperation();
      prevDisplay.value = display.value;
      histroySave.saveValue();
      display.value = null;
      isInt = false;
      displayHasValue = false;
    }
  },
  p: function pow() {
    inputs = "p";
    selectedOperator.innerText = inputs;
    if (displayHasValue === true && prevDisplayHasValue === true) {
      histroySave.saveOperation();
      prevDisplay.value = Number(prevDisplay.value) ** Number(display.value);
      histroySave.saveValue();
      display.value = null;
      isInt = false;
      displayHasValue = false;
    } else if (displayHasValue === true) {
      prevDisplayHasValue = true;
      histroySave.saveOperation();
      prevDisplay.value = display.value;
      histroySave.saveValue();
      display.value = null;
      isInt = false;
      displayHasValue = false;
    }
  },
  Enter: function equal() {
    if(selectedOperator.innerText!==""){
    operators[`${selectedOperator.innerText}`]();}
  },
};

//we have 2 type of selecting our valid inputs this is one of them with mouse click
const wichButtonsClicked = {
  one: (document.getElementById("one").onclick = (event) => {
    y = document.getElementById("one").innerText;
  }),
  two: (document.getElementById("two").onclick = (event) => {
    y = document.getElementById("two").innerText;
  }),
  three: (document.getElementById("three").onclick = (event) => {
    y = document.getElementById("three").innerText;
  }),
  four: (document.getElementById("four").onclick = (event) => {
    y = document.getElementById("four").innerText;
  }),
  five: (document.getElementById("five").onclick = (event) => {
    y = document.getElementById("five").innerText;
  }),
  six: (document.getElementById("six").onclick = (event) => {
    y = document.getElementById("six").innerText;
  }),
  seven: (document.getElementById("seven").onclick = (event) => {
    y = document.getElementById("seven").innerText;
  }),
  eight: (document.getElementById("eight").onclick = (event) => {
    y = document.getElementById("eight").innerText;
  }),
  nine: (document.getElementById("nine").onclick = (event) => {
    y = document.getElementById("nine").innerText;
  }),
  zero: (document.getElementById("zero").onclick = (event) => {
    y = document.getElementById("zero").innerText;
  }),
  plus: (document.getElementById("operatorPlus").onclick = (event) => {
    y = document.getElementById("operatorPlus").innerText;
  }),
  mines: (document.getElementById("operatorMines").onclick = (event) => {
    y = document.getElementById("operatorMines").innerText;
  }),
  multiply: (document.getElementById("operatorMultiply").onclick = (event) => {
    y = document.getElementById("operatorMultiply").innerText;
  }),
  divide: (document.getElementById("operatorDivide").onclick = (event) => {
    y = document.getElementById("operatorDivide").innerText;
  }),
  pow: (document.getElementById("operatorPow").onclick = (event) => {
    y = "p";
  }),
  point: (document.getElementById("point").onclick = (event) => {
    y = document.getElementById("point").innerText;
  }),
  equal: (document.getElementById("operatorEqual").onclick = (event) => {
    y = "Enter";
  }),
  int: (document.getElementById("int").onclick = (event) => {
    y = "a";
  }),
  int: (document.getElementById("-int").onclick = (event) => {
    y = "s";
  }),
};

//for better control our displays we need remove some char when we did wrong
const removeCharOnDisplay = {
  //we can acces this property with 2 type of selection 1-click 2-keypress
  clicked: (delBtn.onclick = (event) => {
    let temp = "";
    temp = String(display.value);
    if (temp !== "") {
      temp = temp.slice(0, -1);
    }
    if(temp==="") {
      isInt=false;
    }
    display.value = temp;
  }),
  keyDown: document.addEventListener("keydown", (event) => {
    if (event.key === "Delete") {
      let temp = "";
      temp = String(display.value);
      if (temp !=="") {
        temp = temp.slice(0, -1);
      }
      if(temp===""){
        isInt=false
      }
      display.value = temp;
    }
  }),
};

//this is filter or a rule for our displays to get valid inputs and set them on theirself 
const inputsValidation = (inputs) => {
  for (let i = 0; i < 16; i++) {
    if ((inputs === "a" || inputs === "s") && isInt === false) {
      if (inputs === "a") {
        display.value += "+";
      } else if (inputs === "s") {
        display.value += "-";
      }
      isInt = true;
      y = "notvalid";
    } else if (inputs === numbers[i]) {
      display.value += inputs;
      displayHasValue = true;
      y = "notvalid";
      isInt = true;
    } else if (inputs === operations[i] || inputs === EnterInputs) {
      operators[`${inputs}`]();
      y = "notvalid";
      break;
    }
  }
};

/*atlast we should acces to our display when buttons clicked our press 
this container will enable when modal is not actived
*/
const displayControls = {
  whenValidBtnCliked: (document.onclick = (event) => {
    let inputs = y;
    inputsValidation(inputs);
  }),
  whenValidBtnKeydown: (document.addEventListener("keydown",event=>{
    let inputs = event.key;
    if (modalIsEnable === false) {
      inputsValidation(inputs);
    }
  }))
};
