/* eslint-disable quotes */
import "./style.css";
import display from "./to-do.js";
import { clearCompleted } from "./validate.js";

const enterBtn = document.querySelector(".enter-btn");
const clearCheck = document.querySelector(".clear");
const noOutline = document.querySelector(".type-task");
const syncBtn = document.querySelector(".sync-btn");

clearCheck.addEventListener("click", () => {
  const task = display.getTodo();
  const todo = clearCompleted(task);
  localStorage.setItem("todo", JSON.stringify(todo));
  display.loadTodo(todo);
});

window.addEventListener("DOMContentLoaded", () => {
  const task = display.getTodo();
  display.loadTodo(task);
});

enterBtn.addEventListener("click", () => {
  display.addTodo();
});

noOutline.onchange = (e) => {
  display.addTodo(e);
};

syncBtn.onclick = () => {
  window.location.reload();
};
