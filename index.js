let allBtns = document.querySelectorAll(".btns");
let inputField = document.querySelector(".input-field");

let guestList = [];

allBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    let guestName = inputField.value;
    switch (e.target.name) {
      case "guestEnd": {
        if (inputField.value) {
          guestList.push(guestName);
          break;
        }
      }
      case "guestStart": {
        if (inputField.value) {
          guestList.unshift(guestName);
          break;
        }
      }
      case "removeFirst": {
        guestList.shift(guestName);
        break;
      }
      case "removeLast": {
        guestList.pop(guestName);
        break;
      }
      case "reverse": {
        guestList.reverse();
        break;
      }
    }
  })
);
