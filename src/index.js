document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  let newtask = document.getElementById('new-task-description');
  newtask.id = 'new_task_description';
  // As a user, I should be able to click some form of a submit button
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    // As a user, I should be able to type a task into the input field
    buildToDo(e.target.new_task_description.value); // e.target = form.thing with id='new_task_description'.value (typed words) will become the element of the buildToDo fn (and therefore the text content of the p)
    form.reset();
  })
});

function buildToDo(todo) {
  // As a user, I expect to see the task string that I 
  // provided appear in the DOM after the submit button has been activated.
  let p = document.createElement('p')
  p.textContent = ` ${todo}`
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent = 'x';
  p.appendChild(btn);
  let list = document.querySelector('#list')
  list.appendChild(p)
}

function handleDelete(e) {
  e.target.parentNode.remove() //e.target = btn
}