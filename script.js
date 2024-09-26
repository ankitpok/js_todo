todoTasks = []
function addTask() {
    let todoInput = document.getElementById('textInput')
    todoValue = todoInput.value
    if (todoValue !== "") {
        todoTasks.push({
            task: todoValue,
            completed: false
        })
    }
    todoInput.value = ""
    updateTodoList()
}
function updateTodoList() {
    let todoList = document.getElementById("todolist")
    todoList.innerHTML = "";
    todoTasks.forEach((task) => {
        let todoItem = document.createElement('li')
        todoItem.textContent = task.task
        todoItem.className = task.completed ? "completed" : ""
        todoItem.onclick = function () {
            toggleCompleted(task)
        }
        todoList.appendChild(todoItem)
    })
    //function to calculate total tasks, completed
    updateAggregrate();
}
function toggleCompleted(task) {
    task.completed = !task.completed
    updateTodoList();
    todoTasks.reduce((task) => {
        return task.completed
    })
}
function updateAggregrate() {
    let totalTasks = document.getElementById('bold-total')
    let completedTasks = document.getElementById('bold-completed')
    let total = todoTasks.length
    let totalCompleted = todoTasks.filter(task => task.completed).length
    totalTasks.textContent = total
    completedTasks.textContent = totalCompleted
}

function searchTasks() {
    let searchInput = document.getElementById('todoInput')
    let searchValue = searchInput.value.toLowerCase()
    let filteredTasks = todoTasks.filter((task) => {
        return task.task.toLowerCase().includes(searchValue)
    })
    updateTodoListWithFilteredTasks(filteredTasks)
}
function updateTodoListWithFilteredTasks(filteredTasks) {
    let todoList = document.getElementById("todolist")
    todoList.innerHTML = "";
    filteredTasks.forEach((task) => {
        let todoItem = document.createElement('li')
        todoItem.textContent = task.task
        todoItem.className = task.completed ? "completed" : ""
        todoItem.onclick = function () {
            toggleCompleted(task)
        }
        todoList.appendChild(todoItem)
    })

}