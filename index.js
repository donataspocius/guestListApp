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
        let range = inputTo.value ? inputTo.value - inputFrom.value : 0;
        guestList.splice(inputFrom.value - 1, range + 1);
        break;
      }
      case "addName": {
        let index = document.querySelector("#addNameIndex");
        guestList.splice(index.value - 1, 0, inputField.value);
        break;
      }

      case "last": {
        let lastElement = guestList.pop();
        console.log(lastElement);
        guestList.unshift(lastElement);
        break;
      }
      case "first": {
        let firstElement = guestList.shift();
        guestList.push(firstElement);
        break;
      }
      case "sortAZ": {
        guestList.sort((a, z) => {
          return a.localeCompare(z);
        });
        break;
      }
      case "sortZA": {
        guestList.sort((a, z) => {
          return z.localeCompare(a);
        });
        break;
      }
      default:
        break;
    }
    renderGuestList(guestList);
    window.localStorage.setItem("guestList", JSON.stringify(guestList));
    console.log(guestList);
    // inputField.value = "";
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
