/* eslint-disable quotes */
import "./style.css";

const InnerTodo = document.querySelector(".todo-body");

const ToDoProperties = [
  {
    description: "Will Vist the Gym",
    completed: true,
    i: 1,
  },
  {
    description: "Will Be Reading",
    completed: true,
    i: 2,
  },
  {
    description: "Wash",
    completed: true,
    i: 3,
  },
  {
    description: "Go to club",
    completed: true,
    i: 4,
  },
];

let display = "";
const loadTasks = (item) => {
  item.forEach((elem) => {
    display += `
    <div class="todo-check flex">
    <div class="checkbox">
      <input
        type="checkbox"
        id="to-do-check"
        name="To-Do"
        value="Add"
      />
      <label for="todo">${elem.description}</label><br />
    </div>
    <i class="fa-solid fa-ellipsis-vertical"></i>
  </div>
  <hr />`;
  });
  InnerTodo.innerHTML = display;
};
loadTasks(ToDoProperties);
