//dom
function changeTitle(){
    //getElementById  syntex  selec individual element it will take the id name and search the html tag element
    //withn same having id, then it will select the tag and assign it to this js variable
    //documet is our html file
    const heding = document.getElementById("title");
    heding.innerText = "Welcome to Fullstack Web development";
    //innertext override the exisiting text and update this new text value
    heding.style.color = "red";
}

//2 getElementsByClassname  - selecting a group of elemts
function changeColor(){
    const paragraphs = document.getElementsByClassName("text");

    for(let i = 0; i < paragraphs.length; i++){
        //selecting all para our html so we need to looping process
    paragraphs[i].style.color = "green";
    paragraphs[i].style.fontWeight = "bold";
    }
}

//3 querySelector
// accepts id and class 
function createBox(){
    const box = document.querySelector(".box");
    box.style.backgroundColor = "lightgreen";
    box.style.border = "2px solid yellow";

}

