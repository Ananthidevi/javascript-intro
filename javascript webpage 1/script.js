let productA = 0;
let productB = 0;
let productC = 0;
let productD = 0;

let total = 0
let Product = 0;
//seting initial variable

function addToCart(product){
    if(product === 'schoolBag'){
        productA += 1;
        total += 600;
       
         document.getElementById("productA").innerText = "schoolBag: " + productA;

    }else if(product === 'noteBook'){
        productB += 1;
        total += 200;
        document.getElementById("productB").innerText = "NoteBook: " + productB;

    }
    else if(product === 'pen'){
        productC += 1;
        total += 100;
        document.getElementById("productC").innerText = "pen: " +productC;
    }
   else if(product === 'pencilBox'){
        productD += 1;
        total += 250;
        document.getElementById("productD").innerText = "PencilBox: " + productD;
    }

     document.getElementById("totalPrice").innerText = total;
    //   document.getElementById("totalProduct").innerText = Product;
    

}