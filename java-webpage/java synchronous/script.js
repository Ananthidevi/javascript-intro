// console.log(1);

// setTimeout(() =>{
//     console.log(4);
//     // timing 3000 waiting  3sec after output releved it is synchronous js

// }, 3000);


// console.log(5);

async function fetchData(){
    //excepting hanfling synta try and catch
    try{
        const res = await fetch("https://fakestoreapi.com/products")
        if(!res.ok){
            throw new Error("API fetching error");
        }
        const products = await res.json()
        displayData(products)
        //function callback and products data shared through arguments
    }catch(err){
    
    console.error(err);
    }
    }
function displayData(products){
    //receive fun parameter here 
    //DOM elements
    const container = document.getElementById("products-container");
    //div id name here//
    //for each as well as for loop 
    products.forEach(data => {
        const div = document.createElement('div');
        //creating html tag in js 
        div.className = "product-card";
        //div class name
//inerhtml is html in javascrit
        div.innerHTML = `
        <h3> ${data.title}</h3>
        <p> ${data.price}</p>
        `
        container.appendChild(div);
    })
    
}
fetchData();