import data from "./data.json" assert { type: "json" };

const myBars = document.querySelectorAll(".bar");

const todayIndex = (new Date().getDay() + 6) % 7;

myBars.forEach((bar, number) => {
  if (number === todayIndex) {
    bar.classList.add("today");
  }
  bar.dataset.id = number;
  bar.dataset.amount = data[number].amount;
  bar.setAttribute("style", `--amount: ${data[number].amount}`);
});

const showAmount = (e) => {
  const dataset = e.target.dataset;
  myBars[dataset.id].insertAdjacentHTML(
    "beforebegin",
    `<div class="amount">$${dataset.amount}</div>`
  );
};

const hideAmount = (e) => {
  e.target.previousSibling.remove();
};

myBars.forEach((myBar) => {
  myBar.addEventListener("mouseover", showAmount);
});
myBars.forEach((myBar) => {
  myBar.addEventListener("mouseleave", hideAmount);
});
