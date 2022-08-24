const input = document.querySelector("[name='guest-name']");
const guests = [];
function render() {
  const outputId = "guests-list";
  if (document.getElementById(outputId)) {
    document.getElementById(outputId).remove();
  }
  const outputContainer = document.createElement("ul");
  outputContainer.id = outputId;
  guests.forEach((singleGuest) => {
    const guestsListItem = document.createElement("li");
    guestsListItem.textContent = singleGuest;
    outputContainer.append(guestsListItem);
  });
  document.querySelector("#app").append(outputContainer);
}
document.querySelector("#list-actions").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    switch (e.target.name) {
      case "to-start":
        guests.unshift(input.value);
        break;
      case "to-end":
        guests.push(input.value);
        break;
      case "remove-start":
        guests.shift();
        break;
      case "remove-end":
        guests.pop();
        break;
      case "reverse":
        guests.reverse();
        break;
      default:
        break;
    }
    render();
  }
});
// Basic Sample for Buttons// document.querySelector("[name='to-start']").addEventListener("click", () => {//   guests.unshift(input.value);//   render();// });// document.querySelector("[name='to-end']").addEventListener("click", () => {//   guests.push(input.value);//   render();// });// document.querySelector("[name='remove-start']").addEventListener("click", () => {//   guests.shift();//   render();// });// document.querySelector("[name='remove-end']").addEventListener("click", () => {//   guests.pop();//   render();// });// document.querySelector("[name='reverse']").addEventListener("click", () => {//   guests.reverse();//   render();// });
