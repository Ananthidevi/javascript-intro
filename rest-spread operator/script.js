//remaonnging array methods
//1 slice- process our given array byt shallow copy first
const products = ['ananthi', 'jaswa','tamil','nila'];
console.log("original given array",products);
const removedProducts = products.slice(0,3);
console.log("shallow copy of our array with removed products",removedProducts);
//rem0ving the array after the first value 
//shallow copy result 

//splice method 
//opp to slice method
//adding new data in specific index
//applications in threee
//super admin 
//admin 
//user
const users = ['admin','user'];
users.splice(0,1,'super-admin');
//0 always default method
console.log(users);

//spread operrator
//... ...
const a = [1,2];
const n = [4,5];
console.log([...a, ...n]);
//merrging two values in one place

//merging 2 obj
const userDetails = {
    name: "ananthi",
    role: "developer",
    email: "ananthidevi.com",
}
const updatedUser = {
    email: "ananthidevi96@gmail.com"
    //updating new email and old deleted
    //Location: "arani"

}
console.log({...userDetails, ...updatedUser});


//rest operatoor
//...
function createProblem(username, role, problem){
    console.log(`Employee name ${username}`);
    console.log(`Role ${role}`);
    console.log(`problems derails:- ${problem}`);

}
createProblem("ananthi", "mentor", "network problem");
//all varia converted to array

//rerao rime  ex for rest operator
function bill(customerName, customerMobile, ...products){
    console.log("Customer name", customerName);
    console.log("Customer mobile", customerMobile);
    console.log("Purchased products", products);

}
bill("ananthi", "9790296190" , "veggies", "fruits","notebook")
// all parametes arrachge to array in rest operator
console.log("interview problem");

//data structure problem backbone for data algorithm
//vip for mnc level question in interview
//common structure for all languages 
//array 1 =[1,2,3]
//array 2 = [1,2,3] ans 8 merging two arry then process with arrray methods 
//to add all the array values

const array1 =[1,2,3];
const array2 = [1,2,3];
function addArray(array1, array2){
    //stru 1
    let mergedArray = [...array1, ...array2];//spread ope
    console.log(mergedArray);

    //stru 2
    let addedValues = mergedArray.reduce((a,b) =>{
    return a + b;
});

//str 3
return addedValues;

}
addArray(array1, array2);
//fun call back

console.log(addArray(array1, array2));


