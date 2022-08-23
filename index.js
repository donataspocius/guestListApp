let allBtns = document.querySelectorAll(".btns");
let inputField = document.querySelector(".input-field");
let guestsContainer = document.querySelector(".guests");

let guestList = [];

allBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target.name);
    switch (e.target.name) {
      case "guestEnd": {
        if (inputField.value) {
          guestList.push(inputField.value);
        }
        break;
      }
      case "guestStart": {
        if (inputField.value) {
          guestList.unshift(inputField.value);
        }
        break;
      }
      case "removeFirst": {
        guestList.shift(inputField.value);
        break;
      }
      case "removeLast": {
        guestList.pop(inputField.value);
        break;
      }
      case "reverse": {
        guestList.reverse();
        break;
      }
      case "removeRange": {
        let inputFrom = document.querySelector("#from");
        let inputTo = document.querySelector("#to");
        let range = inputTo.value - inputFrom.value + 1;
        guestList.splice(inputFrom.value, range);
      }
    }
    renderGuestList(guestList);
    window.localStorage.setItem("guestList", JSON.stringify(guestList));
    inputField.value = "";
  })
);

function renderGuestList(list) {
  if (document.querySelector(".guests ol")) {
    document.querySelector(".guests ol").remove();
  }

  let createList = document.createElement("ol");

  list.forEach((el) => {
    let guest = document.createElement("li");
    guest.textContent = el;
    createList.appendChild(guest);
  });

  guestsContainer.append(createList);
}

document.addEventListener("DOMContentLoaded", function () {
  if (window.localStorage.getItem("guestList")) {
    guestData = JSON.parse(window.localStorage.getItem("guestList"));
    guestList = guestData;
    renderGuestList(guestList);
  }
});
