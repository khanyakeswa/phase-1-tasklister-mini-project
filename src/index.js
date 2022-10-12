const taskForm = document.getElementById('create-task-form')
const taskDescription = document.getElementById('new-task-description')
const taskList = document.getElementById('tasks')
​
document.addEventListener('DOMContentLoaded', () => {
	goGetAndLoadExistingTasks()
	taskForm.addEventListener( 'submit', taskSubmit )
})
​
function parseJSON( respObj ) {
	return respObj.json()
}
​
function goGetAndLoadExistingTasks() {
	fetch( 'http://localhost:3000/tasks' )
		.then( parseJSON )
		.then( renderTasks )
}
​
function renderTasks( tasksArray ) {
	tasksArray.forEach( ({ content }) => renderTask( content ) )
}
​
function taskSubmit(event) {
	event.preventDefault()
	taskDescription.value === '' ? alert("Task empty!") : sendTask()
}
​
function sendTask() {
	fetch( 'http://localhost:3000/tasks', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify( { content: taskDescription.value } )
	} ).then( parseJSON ).then( ({ content }) => renderTask( content ) )
}
​
function renderTask( taskString ) {
	const li = document.createElement('li')
	li.innerText = taskString
	taskList.append(li)
}