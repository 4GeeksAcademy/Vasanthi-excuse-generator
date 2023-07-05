/* eslint-disable */
import "bootstrap";
import "./style.css";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function codeGenerator() {
  const randomWho = Math.floor(Math.random() * who.length);
  const randomAction = Math.floor(Math.random() * action.length);
  const randomWhat = Math.floor(Math.random() * what.length);
  const randomWhen = Math.floor(Math.random() * when.length);
  const formatHtml =
    who[randomWho] +
    " " +
    action[randomAction] +
    " " +
    what[randomWhat] +
    " " +
    when[randomWhen] +
    ".";
  return formatHtml;
}

window.onload = function() {
  //write your code here
  const excuse = codeGenerator();
  const excuseEl = document.getElementById("excuse");
  excuseEl.innerHTML = excuse;
};
