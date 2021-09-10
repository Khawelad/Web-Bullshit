function addtask() {
	var task = document.querySelector('input');
	var section = document.querySelector('section');
	var text =
	"<div class='task'>" +
		"<h3>" + task.value + "</h3>" +
		"<ul>" +
			"<li>" + "<i class='far fa-times-circle' onclick='addtask()'>" + "</i>" + "</li>" +
			"<li>" + "<i class='far fa-minus-square'>" + "</i>" + "</li>" +
			"<li>" + "<i class='far fa-check-circle'>" + "</i>" + "</li>" +
		"</ul>" +
	"</div>";
	section.innerHTML += text;
	task.value = "";
}