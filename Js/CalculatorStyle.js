//(Change Style) Control Our Buttons Style When Buttons Downed On Document
document.addEventListener(
  "keydown",
  (event) => {
    var name = event.key;

    //Style will Dont Change When HistoryModal Is Visible

    if (modalIsEnable === false) {
      if (name === "1") {
        document.getElementById("one").classList.add("active");
      } else if (name === "2") {
        document.getElementById("two").classList.add("active");
      } else if (name === "3") {
        document.getElementById("three").classList.add("active");
      } else if (name === "4") {
        document.getElementById("four").classList.add("active");
      } else if (name === "5") {
        document.getElementById("five").classList.add("active");
      } else if (name === "6") {
        document.getElementById("six").classList.add("active");
      } else if (name === "7") {
        document.getElementById("seven").classList.add("active");
      } else if (name === "8") {
        document.getElementById("eight").classList.add("active");
      } else if (name === "9") {
        document.getElementById("nine").classList.add("active");
      } else if (name === "0") {
        document.getElementById("zero").classList.add("active");
      } else if (name === "p") {
        document.getElementById("operatorPow").classList.add("active");
      } else if (name === "+") {
        document.getElementById("operatorPlus").classList.add("active");
      } else if (name === "-") {
        document.getElementById("operatorMines").classList.add("active");
      } else if (name === "/") {
        document.getElementById("operatorDivide").classList.add("active");
      } else if (name === "*") {
        document.getElementById("operatorMultiply").classList.add("active");
      } else if (name === ".") {
        document.getElementById("point").classList.add("active");
      } else if (name === "Enter") {
        document.getElementById("operatorEqual").classList.add("equalactive");
      } else if (name === "h") {
        document.getElementById("history").classList.add("historyactive");
      } else if (name === "Delete") {
        document.getElementById("del").classList.add("delactive");
      } else if (name === "a") {
        document.getElementById("int").classList.add("active");
      } else if (name === "s") {
        document.getElementById("-int").classList.add("active");
      }
    }
  },
  true
);

//Reset our style when buttons UP to default
document.addEventListener(
  "keyup",
  (event) => {
    let name = event.key;
    if (name === "1") {
      document.getElementById("one").classList.remove("active");
    } else if (name === "2") {
      document.getElementById("two").classList.remove("active");
    } else if (name === "3") {
      document.getElementById("three").classList.remove("active");
    } else if (name === "4") {
      document.getElementById("four").classList.remove("active");
    } else if (name === "5") {
      document.getElementById("five").classList.remove("active");
    } else if (name === "6") {
      document.getElementById("six").classList.remove("active");
    } else if (name === "7") {
      document.getElementById("seven").classList.remove("active");
    } else if (name === "8") {
      document.getElementById("eight").classList.remove("active");
    } else if (name === "9") {
      document.getElementById("nine").classList.remove("active");
    } else if (name === "0") {
      document.getElementById("zero").classList.remove("active");
    } else if (name === "p") {
      document.getElementById("operatorPow").classList.remove("active");
    } else if (name === "+") {
      document.getElementById("operatorPlus").classList.remove("active");
    } else if (name === "-") {
      document.getElementById("operatorMines").classList.remove("active");
    } else if (name === "/") {
      document.getElementById("operatorDivide").classList.remove("active");
    } else if (name === "*") {
      document.getElementById("operatorMultiply").classList.remove("active");
    } else if (name === ".") {
      document.getElementById("point").classList.remove("active");
    } else if (name === "Enter") {
      document.getElementById("operatorEqual").classList.remove("equalactive");
    } else if (name === "h") {
      document.getElementById("history").classList.remove("historyactive");
    } else if (name === "ArrowUp") {
      document.getElementById("up").classList.remove("updownactive");
    } else if (name === "ArrowDown") {
      document.getElementById("down").classList.remove("updownactive");
    } else if (name === "Delete") {
      document.getElementById("del").classList.remove("delactive");
    } else if (name === "a") {
      document.getElementById("int").classList.remove("active");
    } else if (name === "s") {
      document.getElementById("-int").classList.remove("active");
    }
  },
  true
);
