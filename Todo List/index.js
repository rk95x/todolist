const taskInput = document.getElementById("new-task-imput");
const taskCreator = document.querySelector(".task-creator");
const addBtn = document.getElementById("add-task-btn");
const delBtn = document.getElementById("delete-btn");

addBtn.addEventListener("click", function(event) {
  event.preventDefault();

  let textInput = document.createElement("ul");
  textInput.textContent = taskInput.value;
  taskCreator.appendChild(textInput);
  taskInput.value = "";

  textInput.addEventListener("click", function(){
   textInput.style.textDecoration = "line-through";
  });

  delBtn.addEventListener("click",function(){
    taskCreator.removeChild(textInput);
  });
});
