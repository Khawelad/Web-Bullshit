let tasks = [];
const ipt = document.querySelector('input');
const addBtn = document.querySelector('.addBtn');
const tasksContainer = document.querySelector('.tasks');

addBtn.addEventListener('click', () => {
	tasksContainer.innerHTML +=
			"<div class='task'>" +
				"<p class='task-text'>" + ipt.value + "</p>" +
				"<div class='btnsContainer'>" +
					"<button class='btn delBtn'>Del</button>" +
					"<button class='btn editBtn'>Edit</button>" +
				"</div>" +
			"</div>";
	tasks += {
		task : ipt.value,
		// why is the object task undefined?
	}
});