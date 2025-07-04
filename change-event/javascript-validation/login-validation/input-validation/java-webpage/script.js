let productA = 0;
let productB = 0;
let productC = 0;
let Total = 0;

function addToCart(product){
    if(product === 'A'){
        productA += 1;
        Total += 1399
        document.getElementById("productA").innerText = "Watch: " + productA;

    }else if(product === 'B'){
        productB += 1;
        Total += 19999;
        document.getElementById("productB").innerText = "Phone: " + productB;

    }
    if(product === 'C'){
        productC += 1;
        Total += 19999;
        document.getElementById("productC").innerText = "Headset: " + productC;
    }
document.getElementById("totalPrice").innerText = "Total: " + Total;

}
