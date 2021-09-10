let addBtn = document.querySelector('.add-btn');
const delBtn = document.getElementsByClassName('del-btn');
let editBtn = document.querySelector('.edit-btn');
let task = document.querySelector('.task-input');
let span = document.querySelector('span');

addBtn.addEventListener('click' , () => {

	span.innerHTML +=	"<div class='task'>" +
							"<h2>" + task.value + "</h2>" +
							"<button class='del-btn'>" + "Del" + "</button>" +
							"<button class='edit-btn'>" + "Edit" + "</button>" +
						"</div>";

	task.value = null;

	// delBtn.addEventListener('click', () => {
	// console.log('You Pressed Delete Button.');
	// // delBtn.parentElement.innerHTML = null;
	// delBtn.parentElement.remove();
	// });

});

delBtn[0].addEventListener('click', () => {
	console.log('You Pressed Delete Button.');
	// delBtn.parentElement.innerHTML = null;
	delBtn[0].parentElement.remove();
});