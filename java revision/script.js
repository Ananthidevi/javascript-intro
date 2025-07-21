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