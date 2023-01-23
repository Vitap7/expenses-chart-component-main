import data from "./data.json" assert { type: "json" };

const myDivs = document.querySelectorAll("li > div");

const date = new Date();
const todayIndex = (date.getDay() + 6) % 7;

myDivs.forEach((div, number) => {
  if (number === todayIndex) {
    div.classList.add("today");
  }
  div.setAttribute("style", `--amount: ${data[number].amount}`);
});
