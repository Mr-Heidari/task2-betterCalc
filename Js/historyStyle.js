//Change our buttons style on historymodal Div
document.addEventListener(
  "keydown",
  (event) => {
    let name = event.key;
    if (name === "ArrowUp") {
      document.getElementById("up").classList.add("updownactive");
    } else if (name === "ArrowDown") {
      document.getElementById("down").classList.add("updownactive");
    } else if (name === "Enter") {
      document
        .getElementById("selectHistoryValue")
        .classList.add("selectHistoryValueactive");
    } else if (name === "ArrowDown") {
      document.getElementById("down").classList.add("updownactive");
    } else if (name === "Escape") {
      document.getElementById("exitModal").classList.add("updownactive");
    }
  },
  true
);
//Reset our buttons to default
document.addEventListener(
  "keyup",
  (event) => {
    let name = event.key;
    if (name === "ArrowUp") {
      document.getElementById("up").classList.remove("updownactive");
    } else if (name === "ArrowDown") {
      document.getElementById("down").classList.remove("updownactive");
    } else if (name === "Enter") {
      document
        .getElementById("selectHistoryValue")
        .classList.remove("selectHistoryValueactive");
    } else if (name === "ArrowDown") {
      document.getElementById("down").classList.remove("updownactive");
    } else if (name === "Escape") {
      document.getElementById("exitModal").classList.remove("updownactive");
    }
  },
  true
);
