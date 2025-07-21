//Array methods

//1  forEach is a advance process of for loop

const names = ['ananthi','jaswa', 'tamil'];

//for loop syntax for procesing array
// for (let i=0; i<producrts.length; i++){
//console.log(products[i]);
//}

//forEach syntax
names.forEach(vari => { //vari parameter
    console.log(vari);
})

//2 map function  important for react developer main process for react deelopment
// map function takes an original and process our conditions
// and return the output in new array
const price = [100, 90, 900];
const totalPrice = price.map(gst => gst * 2);
//100*1.20
//90*1.20
//900*1.20
//[]
//100 *2 same for all numbers
//map function is the 
//[]
console.log(totalPrice);

//filter func  important for both react and node development
//filter fun filter the overall data based on our requirements

const namess = [
    {id:1, names: 'ananthi',age:28},
      {id:1, names: 'jaswanth',age:5},
        {id:1, names: 'tamil',age:35}
];
const familynames = namess.filter(data =>{
    return data.age > 10
});
console.log(familynames);


//find fumction serach functionality
//it is implements the search functionality into our original array
const serachProducts = namess .find(product  => {
    return product.age === "35";
});
console.log(serachProducts);


//reduce fum important for interview
//adding the array elements by reduce fun, it carries 
//2 parameter variables, currentvalue , nextvalue
//reduce function interview imp
const cart = [500,900,800];
//a - 500
// 500+900=1400  a-1400
//1400+800=2200
const total =cart.reduce((a,b) =>{
    return a+b;

});
console.log(total);

//includes function  node development secu purpose 
//node development for security
//it checks the data is presented in the array or not, if its present
//it will return as true or else false

const adminPerson = ['anu','jas','tamil'];
console.log(adminPerson.includes('jas'));
//if its names availe ans true]
 //else false

 //sort fun interview imp 
 //convert our un-ordered array in sequence order
 const numbers = [2,0,9,7,4,3,5];
 numbers.sort((a,b) => {
    return a-b;
 })
console.log(numbers);
//a = 2 b=0-->

//push and pop and shift and unshift
const numberes = [1,2,3];
numberes.push(0);//adding element in last place of the array
console.log("push method", numberes);
numberes.unshift(20);//adding element in starting place of the array
console.log("unshift method" ,numberes);
numberes.pop();// removing element in last place of the array
console.log("pop method", numberes);
numberes.shift();//removing element in first place of array
console.log("shift method" ,numberes);

//real-time implementation for filter method in api.
fetch("https://fakestoresapi.com/products").then(res => {
    if(!res.ok){
        throw new Error("API fetching error");
    }
        return res.json();
    }).then(data => {
        console.log("Original API Data", data);
        const serachProducts = data.filter(product => {
            //return product.category === "womens clothing";
            //return product.price>500;

        })
        console.log("FIltered data", serachProduts);
    }).catch(err => {
        console.error(err);
    })
    


