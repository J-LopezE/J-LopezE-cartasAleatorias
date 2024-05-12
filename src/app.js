/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function aleatoriNumber() {
  let arraynumber = ["1", "2", "3", "4", "5", "6", "7", "8", "J", "Q", "K"];
  let randomnumber = Math.floor(Math.random() * arraynumber.length);
  return `${arraynumber[randomnumber]}`;
}
function aleatoriIcon() {
  let arrayIcon = ["♦", "♥", "♠", "♣"];
  let randomIcon = Math.floor(Math.random() * arrayIcon.length);
  return `${arrayIcon[randomIcon]}`;
}
window.onload = function() {
  //write your code here
  const iconUp = document.getElementById("iconUp");
  const number = (document.getElementById(
    "number"
  ).innerHTML = aleatoriNumber());
  const iconDown = document.getElementById("iconDown");
  const pinta = aleatoriIcon();
  let color = "black";
  if (pinta == "♦" || pinta == "♥") {
    color = "red";
  }
  iconUp.innerHTML = pinta;
  iconDown.innerHTML = pinta;
  iconUp.style.color = color;
  iconDown.style.color = color;
};
