document.addEventListener("DOMContentLoaded",function(){
    const password = document.getElementById("password");
    const checkbox = document.getElementById("togglePassweord");

    checkbox.addEventListener("change",function(){
        if(checkbox.checked){
            password.type = "text";
        }else{
            password.type = "password";
        }
    })

})