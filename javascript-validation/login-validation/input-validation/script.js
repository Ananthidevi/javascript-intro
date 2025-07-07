document.addEventListener("DOMContentLoaded",function(){
    const form = document.getElementById("paymentForm");

    form.addEventListener("submit", function(e){
        e.preventDefault();

         const card = document.getElementById("cardNumber").value.trim();
        const cvv = document.getElementById("cvv").value.trim();
         const expiry = document.getElementById("expiryDate").value.trim();
        //trim--deleted unwanted white space


        //regular expre pattern

        const cardPattern = /^\d{16}$/;
        //d-digit
        const cvvPattern = /^\d{3}$/;
        //12/24--//MM//YY
        const expiryPattern = /^(0[1-9]1[0-2])\/\d{2}$/;
        //index method

        //validation
        let valid  = true;
        if(!cardPattern.test(card)){
            document.getElementById("cardError").innerText = "card Number must be 16 digits";

        valid  = false;
        }else{
            document.getElementById("cardError").innerText= "";
        }
         if(!cvvPattern.test(cvv)){
            document.getElementById("cvvError").innerText = "cvv Number must be 3 digits";
valid = false;
        
        }else{
            document.getElementById("cvvError").innerText= "";
        }
         if(!expiryPattern.test(expiry)){
            document.getElementById("expiryError").innerText = "Enter the valid format  MM/YY";

        valid = false;
        }else{
            document.getElementById("expiryError").innerText= "";
        }
        if(valid){
            document.getElementById("success").innerText = "payment sucess";
            form.reset();
            console.log({card , cvv, expiry});
        }
    })
})