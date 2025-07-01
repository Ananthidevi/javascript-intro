//functions

function welcome(){
    console.log("jaswa");
}
welcome();//fun call back

//function keyword
//function name
//()-parameter
//consoloe.log-fun body
//welcome() -fun callback

//fun parameter with argument
let name ="Jaswa";
function greet(username){  //optional
    console.log(`welcome back ${username}`);

}
greet(name); //callback only let arguments

//Adding two numbers
let n1 = 5;
let n2 = 10;
function addNumbers(num1 , num2){
console.log(num1 + num2);

}
addNumbers(n1 ,n2);

//fun reusability
let n3 = 40;//arguments
let n4 = 10;
addNumbers(n3, n4);//call back for performing fun reusability

//function body with return statement
function greetuser(){
    return "HI Jaswa";
}
console.log(greetuser()); // need output call the fun in the console

//multiple fun - one fun depends on another fun
function parent(){
    console.log("parent");
    child();
}
function child(){
    console.log("child");
}
 parent();//need execute for both fun are call back

 //Nested functions

 function main(){
    console.log("main function");
    function inner(){
        console.log("inner function");
        
    }
    return inner(); //callbck a another fun in main function
 }
 main();

 //important interview fun problem
 //fun currying is a process of a fun returns new fum
 function multiplyNumbers(n1){
    return function(n2){ //new function
        return n1 * n2;
    }
 }
 console.log(multiplyNumbers(10)(20));//callback in console
