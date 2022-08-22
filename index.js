"use strict";

let guestInput = document.querySelector(".input-data");
let inputField = document.querySelector(".input-field");
let allBtns = document.querySelectorAll(".btns");
let output = document.querySelector(".output");
let guestName = null;
let guestList = [];

guestInput.addEventListener("input", function (e) {
  guestName = e.target.value;
});

let pEl = document.createElement("p");
output.append(pEl);

allBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    console.log(e.target.name);
    switch (e.target.name) {
      case "guestEnd": {
        guestList.push(guestName);
        inputField.value = "";
        break;
      }
      case "guestStart": {
        guestList.unshift(guestName);
        inputField.value = "";
        break;
      }
      case "removeFirst": {
        guestList.shift(guestName);
        inputField.value = "";
        break;
      }
      case "removeLast": {
        guestList.pop(guestName);
        inputField.value = "";
        break;
      }
      case "reverse": {
        guestList.reverse();
        inputField.value = "";
        break;
      }
    }
    pEl.textContent = guestList;
  })
);
