/*
Deliverables

// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear 
in the DOM after the submit button has been activated.
*/

/* HTML
<body>
  <div id="main-content">
    <h1>Task Lister Lite™️</h1>

    <form id="create-task-form" action="" method="POST">
      <label for="new-task-description">Task description:</label>
      <input type="text" id="new-task-description" name="new-task-description" placeholder="description">
      <input type="submit" value="Create New Task">
    </form>

    <div id="list">
      <h2>My Todos</h2>
      <ul id="tasks">
      </ul>
    </div>
*/

// As a user, I should be able to type a task into the input field.
// create show the element's value in the description box
let form = document.querySelector('form');
document.addEventListener('DOMContentLoaded', () => {
  let inputTextBox = document.getElementById('new-task-description');
  //set the new id because the old id syntax doesn't work for dot notation
  inputTextBox.id = 'new_task_description';
  // add sumbit event to the form
  form.addEventListener('submit', e => {
    //for every event, prevent the default
    e.preventDefault();
    // the event's target's (the form) new task value should each time be the newToDd
    let newToDo = e.target.new_task_description.value;
    // this newToDO should be passed in as the newToDoItem to build the todolist with
    buildToDoList(newToDo);
    form.reset();
  })
})

function buildToDoList(newToDoItem) {
  let tasksParentUl = document.querySelector('#tasks'); // grab the ul parent of li
  let tasksChildren = document.createElement('li'); //create li for the ul parent
  tasksChildren.textContent = `${newToDoItem}`; // each li textContent should be the newToDoItem
  let deleteButton = document.createElement('button'); //create a new button element
  deleteButton.textContent = 'x'; // the button's text should look like an X
  tasksChildren.appendChild(deleteButton); // add the button element to each li child
  deleteButton.addEventListener('click', e => e.target.parentNode.remove()) // for each delete button click, we should delete its parent (the entire todo li)
  tasksParentUl.appendChild(tasksChildren); // add the li to the ul parent
}