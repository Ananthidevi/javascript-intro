//array methods

//forEach
const families = ['Tamil' , 'Ananthi', 'Jaswa' , 'thangam'];
families.forEach(familyName => {
    console.log(familyName);
});

//map method
const productPrice = [100, 350 , 600, 700, 600];
const totalPrice = productPrice.map(productPrice => {
    return productPrice * 1.50;
})
console.log(totalPrice);

//reduce method
const total = productPrice.reduce((a,b)=>{
    return a+b;
})
console.log("final price" ,total)
//100+350=450--a
//450+600=1050--a
//1050+700=1750--a
//1750+600=2350--ans


//filter
const students = [
  {
    "name": "Rahul Kumar",
    "rank": 1,
    "grade": "A+",
    "marks": 95
  },
  {
    "name": "Priya Singh",
    "rank": 2,                    //ai code for example
    "grade": "A",
    "marks": 90
  },
  {
    "name": "Amit Sharma",
    "rank": 3,
    "grade": "A-",
    "marks": 88
  },
  {
    "name": "Sneha Gupta",
    "rank": 4,
    "grade": "B+",
    "marks": 85
  },
  {
    "name": "Rohan Verma",
    "rank": 5,
    "grade": "B",
    "marks": 80
  }
]

//console.log(students);
const filStudents = students.filter(filStudents =>{
    return filStudents.marks >='90';
})
console.log(filStudents);

//find 
const searchStudents = students.find(searchStudents =>{
return searchStudents.name === "Rohan Verma"
})
console.log(searchStudents);

//sort 
const numbers = [1,8,0,4,3,6];
//0,1,3,4,6,8 ans
numbers.sort((a,b)=>{
    return a-b;
})

console.log(numbers);
numbers.sort((a,b) => {
    return b+a;
})
console.log(numbers);

//push and pop shift and unshift
//push adding element at last
//pop removing element at last
//unshift adding elemt ar first
//shift removing elem aat first

const num = [1,2,3,4];
num.push(5);
console.log(num);

const num1 = [1,2,3,4];
num.pop(5);
console.log(num1);

const num2 = [1,2,3,4];
num2.unshift(5);
console.log(num2);
num2.shift();
console.log(num2);

document.addEventListener("DOMContentLoaded",function(){
    const button =document.getElementById("paynow");
    const message = document.getElementById("hi");

    button.addEventListener("click",function(){
        message.innerText = "welcome";
    })
})