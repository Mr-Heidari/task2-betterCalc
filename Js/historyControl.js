//in this file we want save our displayvalue and use them when we need

//at first select our elemnts . elemnts on historymodal  and one button to open our modal
const btnHistory = document.getElementById("history");
const showHistoryDiv = document.getElementById("historyShow");
const showHistoryInput = document.getElementById("historyShowInput");
const btnClear = document.getElementById("C");
const upBtn = document.getElementById("up");
const downBtn = document.getElementById("down");
const closeBtn = document.getElementById("exitModal");
const enterBtn = document.getElementById("selectHistoryValue");

//some variable for saving our display values 
let prevDisplayControl = 0;
let histroyTank = [];
let histroyTankOperation = [];
let modalIsEnable = false;

//just a counter for our arrayindex
let i = 0;

//clear our values from our arrays with 2 type of call 1-click 2-keypress(historybutton on calc body)
const clearHistory = {
  clicked: (btnClear.onclick = (event) => {
    histroyTank = [];
    histroyTankOperation = [];
    prevDisplay.value=null;
    display.value=null;
    displayHasValue=false;
    prevDisplayHasValue=false
    isInt=false
    selectedOperator.innerText=""
  }),
  Keydown: document.addEventListener("keydown", (event) => {
    let input = event.key;
    if (input === "c") {
      histroyTank = [];
      histroyTankOperation = [];
      display.value=null;
      prevDisplay.value=null;
      selectedOperator.innerText=""
      displayHasValue=false;
      prevDisplayHasValue=false
      isInt=false
    }
  }),
};

//in this container we save values on our tanks call this container on our operationbuttons
const histroySave = {
  saveValue: function () {
    histroyTank.push(prevDisplay.value);
  },
  saveOperation: function () {
    histroyTankOperation.push(
      Number(prevDisplay.value) +
        `${selectedOperator.innerText}` +
        Number(display.value)
    );
  },
};

//we set up 2 type of acces to our buttons with clicked our key press
const btnClicked = {
  //set property for every button on history modal
  history: (btnHistory.onclick = (event) => {
    document.getElementById("modalHistory").style.visibility = "visible";
    showHistoryDiv.style.opacity = "100";
    modalIsEnable = true;
    i = histroyTank.length - 1;
    prevDisplayControl = histroyTank[i];
    showHistoryInput.value = histroyTankOperation[i] + "=" + histroyTank[i];
  }),
  up: (upBtn.onclick = (event) => {
    if (i > 0) {
      i--;
      prevDisplayControl = histroyTank[i];
      showHistoryInput.value = histroyTankOperation[i] + "=" + histroyTank[i];
    }
  }),
  down: (downBtn.onclick = (event) => {
    if (i <= histroyTank.length - 2) {
      i++;
      prevDisplayControl = histroyTank[i];
      showHistoryInput.value = histroyTankOperation[i] + "=" + histroyTank[i];
    }
  }),
  close: (closeBtn.onclick = (event) => {
    document.getElementById("modalHistory").style.visibility = "hidden";
    showHistoryDiv.style.opacity = "0";
    modalIsEnable = false;
  }),
  enter: (enterBtn.onclick = (event) => {
    prevDisplay.value = prevDisplayControl;
  }),
};

//just like befor we will accessing our button when vlaid key pressed 
const btnsKeyDown = {  
  btnsInModalKeyDown: document.addEventListener("keydown", (event) => {
    let input = event.key;
    if (input === "h") {
      document.getElementById("modalHistory").style.visibility = "visible";
      showHistoryDiv.style.opacity = "100";
      i = histroyTank.length - 1;
      prevDisplayControl = histroyTank[i];
      showHistoryInput.value = histroyTankOperation[i] + "=" + histroyTank[i];
      modalIsEnable = true;
    } else if (input === "Escape") {
      document.getElementById("modalHistory").style.visibility = "hidden";
      showHistoryDiv.style.opacity = "0";
      modalIsEnable = false;
    } else if (input === "ArrowUp") {
      if (i > 0) {
        i--;
        prevDisplayControl = histroyTank[i];
        showHistoryInput.value = histroyTankOperation[i] + "=" + histroyTank[i];
      }
    } else if (input === "ArrowDown") {
      if (i <= histroyTank.length - 2) {
        i++;
        prevDisplayControl = histroyTank[i];
        showHistoryInput.value = histroyTankOperation[i] + "=" + histroyTank[i];
      }
    } else if (input === "Enter" && modalIsEnable === true) {
      prevDisplay.value = prevDisplayControl;
    }
  }),
};
