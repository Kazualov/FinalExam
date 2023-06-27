var add_btn = document.querySelector('.add__btn');
var added_task = document.getElementById("tasks");

const task_list = document.querySelectorAll('.task__container');

add_btn.addEventListener("click", () =>{
	var text__content = document.getElementById("tasks").value;
	let task = document.createElement('div');
	task.className = "task";
	task.textContent = text__content;
	document.querySelector('.task__container').append(task);
	document.getElementById("tasks").value = "";

	task.addEventListener("click", () => {
		task.className = "deleted";
	});
});



