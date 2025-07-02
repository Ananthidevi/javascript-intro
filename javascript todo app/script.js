function addTask(){
    const taskValue = document.getElementById("taskInput").value;
    if(taskValue.trim() === ""){
        //trim-- find empty space
        alert("Please Enter a task");
        //topup box for error message

    }
    //new task creation
    const newTask = document.createElement("div");
    newTask.innerText = taskValue

    document.getElementById("taskList").appendChild(newTask);
   document.getElementById("taskInput").value = "";
}