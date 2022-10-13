const taskForm = document.getElementById('create-task-form')
const taskDescription = document.getElementById('create_item')
const taskList = document.getElementById('tasks')

document.addEventListener('DOMContentLoaded', () => {
  console.log('Dom loaded successfully')
  function taskSubmit(event) {
    event.preventDefault()
    console.log(event.target.create_item.value)
    const li = document.createElement('li')
    if (taskDescription.value === '') {
      alert("Task empty!");
      return;
    } else {
      li.innerText = taskDescription.value
      console.log(taskDescription.textContent)
    }
    taskList.append(li)
  }
  taskForm.addEventListener('submit', taskSubmit)
})
