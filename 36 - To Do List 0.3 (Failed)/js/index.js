const input = document.querySelector('input');
const container = document.querySelector('.tasks-panel');

input.addEventListener('keydown', event => {
	if (event.keyCode == 13) {
		let text = input.value;
		container.innerHTML += '<div class="task">' +
									'<p>' + text + '</p>' +
										'<div class="buttons">' +
											'<button class="btn delete">' + 'Del' +'</button>' +
											'<button class="btn edit">' + 'Edit' +'</button>' +
											'<button class="btn done">' + 'Done' +'</button>' +
										'</div>' +
								'</div>';
		input.value = "";
	}
})