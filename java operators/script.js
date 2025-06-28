//Arithmatic operaors//
//+,-,*,/,**//

const a = 10;
const b = 10;
console.log( "Addition" , a + b);
console.log( "Substraction" , a - b);
console.log("mul" , a * b);
console.log("division" , a / b);
console.log("Exponenetiation" , a ** b);

//Assignment opeators//
//= , +=, =+//
//+= Pre increment//
let X = 10;
console.log("Pre Assginment", X+=5);//op 15//

//=+ post incr or assgn//
X = 9;
console.log("post assignment" ,X=-13);  //op only same value of x updated new value//

//comparison operator//
//> greater ,< less,
//  >= greater than equal, 
// <= less than equal//
//== equal to, it checks only the value//
//=== check datatype and value//

let i = 10;
let j = '10';
console.log( "i is greaer than",i > j);
console.log("i is smaller than",i < j);
console.log("i is greater than or equal to j", i>=j);
console.log( "Double equal to",i==j);
console.log("Triple eqaul to ",i===j);


//ternary operator
//?  true block : - false blcak
let login = false;
login ? console.log("granted") : console.log("declined");

//expression - string concatenation
//, + ,``
let username = "Ananthi";
console.log("hello welcome", username);
console.log("hello welcome " +  username);
console.log(`hello welcome ${username}`);

//interview prob for ternary operators//
//prob 1 vote eligibility functionlity//
//prob 2 authorization for admin and user//

//problem 1//
let age = 19;
age >= 18 ?console.log("Eligible for vote") : console.log("Not Eligible for vote");

//prob 2//
//authentication and autherization//

//authentication  checing the credentials//
//autherization access//
let user = {
    username: "Ananthi",
    userrole: "user",
};
user.userrole === "admin"?
 console.log("granted") : 
console.log("declined");









