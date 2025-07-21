function addTask(){
    const taskValue = document.getElementById("taskInput").value;
    const taskMax = document.getElementById("taskOnput").value;
     const taskPlace = document.getElementById("taskName").value;
    if(taskValue.trim() === ""){
        //trim-- find empty space
        alert("Please Enter a Name");
        //topup box for error message

    }
   else if(taskMax.trim() === ""){
        //trim-- find empty space
        alert("Please Enter a Number");
        //topup box for error message

    }
     if(taskPlace.trim() === ""){
        //trim-- find empty space
        alert("Please Enter a Number");
        //topup box for error message

    }
    //new task creation
    const newTask = document.createElement("div");
    newTask.innerText = taskValue
    const newMask = document.createElement("div");
    newMask.innerText = taskMax
    const newName = document.createElement("div");
    newName.innerText = taskName


    document.getElementById("taskList").appendChild(newTask);
   document.getElementById("taskInput").value = "";
    document.getElementById("taskList").appendChild(newMask);
    document.getElementById("taskOnput").value = "";
    document.getElementById("taskList").appendChild(newName);
    document.getElementById("taskName").value = "";
}
