//data types//
//string numner boolean undefined,object
//array null big int

//sting gropu of characters//
var name = "jaswa";
console.log( typeof name);

//numbers//
var age = 18;
console.log(typeof age);

//boolean true or false//
var eligibility = true;
console.log(typeof eligibility);

//undefined//
var salary;
console.log( typeof salary);

//object//
var details = {
    //key value pair//
    name: "Ananthidevi",
    age: 28,
    role: "Developer"


};
console.log( typeof details);

//arrays//
var fruits = ['orange' , 'apple' , 'banana',25,true,false];

console.log( fruits);

//biginit//
var number = 12345678n; //n-->number of value//
console.log(typeof number);

//null//
var hike = null;
console.log(typeof hike);
//diff b/w null and undefined;
//undefine; its a create a variable memory in our systm, not a data in this memory//
//null; 0//

//Advance object cration -- products dara(ecoomerce)//

let products = {
    productImage: "watch.jpeg",
    productTitle:"Sports watch",
    productPrice: 5620,
    productDescription: "Sports Watch Men's Full Black Sports Watch g Shock Copy Watch High-Quality Premium Sports Watches",//string//
    review: //rating,count//  object
    {
        rating:4.1,
        count:549

    },
    productColors: ['orange', 'black' ,'white'],
    productStock: 359, //number
    cod: true,//boolean//
    orderTracking: undefined, //undefined means puerchasing time working visible//

}
console.log(products);
console.log(products.productTitle);//name.what you want to type//
console.log(products.productImage);

//iv based obje creation -- user details ,//
let user = {
    username:"Ananthi",
    email:"vananthi376@gmail.com",
    mobile: 454868794,
    qualifications: ['BE' , 'MCA'],
    role: "Developer",
    experience: {
        compan1: "njkbvjk",
        compan2: "nkjnkjn",
    },
    totalExperiece: 4,
    location: 'chennai',
    availableDate: {
        lastworkingday: "13th jun 2025",
        InterviewAvail: "20th jun 2025",
        doj: "25th jun 2025"

    },
    salary: {
        currentLpa: 100000,
        expectaionLpa: 500000,
    
    },
    }
    console.log(user);


