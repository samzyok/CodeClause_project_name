function addTask() {
    const newTask = document.getElementById("new-task").value.trim();
    const taskCategory = document.getElementById("task-category").value;

    if (newTask !== "") {
        const taskList = document.getElementById("task-list");
        const li = document.createElement("li");

        const taskText = document.createElement("span");
        taskText.textContent = newTask;
        li.appendChild(taskText);

        const categoryElement = document.createElement("span");
        categoryElement.textContent = `[${taskCategory}]`;

        categoryElement.classList.add("task-category");
        li.appendChild(categoryElement);


        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", function() {
            li.remove();
        });
        li.appendChild(deleteButton);

        li.classList.add("slide-in");
        //adding the slide in to apply the animation
        taskList.appendChild(li);

        document.getElementById("new-task").value = "";
    }

}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

// Check if dark mode preference is set and apply it
if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
}

// Event listener for dark mode button
document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    toggleDarkMode();
    // Save the user's dark mode preference to localStorage
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("dark-mode", isDarkMode);
});