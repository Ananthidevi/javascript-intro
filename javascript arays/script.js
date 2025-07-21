//Array methods

//1  forEach

const names = ['ananthi','jaswa', 'tamil'];

//for loop syntax for procesing array
// for (let i=0; i<producrts.length; i++){
//console.log(products[i]);
//}

//forEach syntax
names.forEach(vari => { //vari parameter
    console.log(vari);
})

//2 map function  important for react developer main process for react
const price = [100, 90, 900];
const totalPrice = price.map(gst => gst * 2);
//100 *2 same for all numbers
//map function is the 
//[]
console.log(totalPrice);

//filter func  importain for both reac and frontend

const namess = [
    {id:1, names: 'ananthi',age:28},
      {id:1, names: 'jaswanth',age:5},
        {id:1, names: 'tamil',age:35}
];
const familynames = namess.filter(data =>{
    return data.age > 10
});
console.log(familynames);


//find fumction 
const serachProducts = namess .find(product  => {
    return product.age === "35";
});
console.log(serachProducts);

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

const adminPerson = ['anu','jas','tamil'];
console.log(adminPerson.includes('jas'));
//if its names availe ans true]
 //else false

 //sort fun interview imp 
 const numbers = [2,0,9,7,4,3,5];
 numbers.sort((a,b) => {
    return a-b;
 })
console.log(numbers);

//push and pop and shift and unshift
const numberes = [1,2,3];
numberes.push(0);
console.log("push method", numberes);
numberes.unshift(20);
console.log("unshift method" ,numberes);
numberes.pop();
console.log("pop method", numberes);
numberes.shift();
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
    


