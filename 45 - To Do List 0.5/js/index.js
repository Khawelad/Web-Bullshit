const inputTask = document.querySelector('.taskinput');
const addBtn = document.querySelector('.addBtn');
const tasksList = document.querySelector('.list');
const error = document.querySelector('.error');

addBtn.addEventListener('click', () => {

	if(inputTask.value) {

		tasksList.innerHTML += '<li class="listitem">' + inputTask.value + '</li>';
		inputTask.value = '';

		for (let i = 0; i < tasksList.childElementCount; i++) {
				document.querySelectorAll('.listitem')[i].addEventListener('dblclick', (event) => {
				event.target.remove();
				console.log(event.target);
			})
		}

		error.style.display = 'none';

	} else {

		error.style.display = 'block';

	}
})