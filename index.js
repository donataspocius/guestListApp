let allBtns = document.querySelectorAll(".btns");
let inputField = document.querySelector(".input-field");
let guestsContainer = document.querySelector(".guests");

let guestList = [];

allBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target.name);
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
    renderGuestList(guestList);
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
