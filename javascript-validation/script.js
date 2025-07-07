document.addEventListener("DOMContentLoaded" , function(){
    const form = document.getElementById("loginForm");
    form.addEventListener("submit",function(e){
        e.preventDefault();
        const email =document.getElementById("email").value.trim();
        const password =document.getElementById("password").value.trim();
        //trim--deleted unwanted white space

        //regular express pattern
        //email pattern  ananthidevi-96 - @ - mail - . -com
        //5 places in email pattern
        const emailPattern = /^[a-z0-9_-]+@[a-z]+\.[a-z]{2,}$/;
        //[] optinal yet or not  .-->\ when input field is present or not
        const passwordPattern = /^[a-zA-Z0-9!@#$*]{6,}$/;
        
        let valid =  true;

         if(!emailPattern.test(email)){
            document.getElementById("emailError").innerText = "invalid email format";
            valid = false;
         }else{
            document.getElementById("emailError").innerText ="";


         }
         if(!passwordPattern.test(password)){
            document.getElementById("passwordError").innerText = "Password must be a 6 charcter with letters,numbers,special characters";
         }else{
            document.getElementById("passwordError").innerText = "";
         }
         if(valid){
            document.getElementById("loginOutput").innerHTML = `Login successful, Welcome ${email}`;
         }
        


    })
})