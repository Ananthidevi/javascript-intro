//Arrow functions

//regular function
let name = "Jaswa"
function welcome(){
    console.log(`Hellow ${name}`);
}
welcome(name);//arguments

//Arrow fun()=>
    const welcomeUSer = () => {
        console.log(`HI, welcome ${name} arrow`);

    }
    welcomeUSer(name);

    //simplicity
    //more flexible
    let offer = "congratulations! you got exciting offer price";
    function showOutput(offer){
        return `Jawsa ${offer}`
    
    }
    console.log(showOutput(offer));//need output using console

    //Arrow function
    const displayOffer = offer => `you got ${offer}`;
    console.log(displayOffer(offer));

    //call backs a fun gets callback from another function with the help of paramers and arguments
    //keyword callback
    function sayHello(name){
        console.log(`hellow,${name}`);
        
    }
    function displayMessage(callback){
        let username = "ANANTHI";
        callback(username);
    }
    displayMessage(sayHello);

    //interview pbm - arrow fun with password validatity
    //function cuurying
    const loginUser = (username) => { //arrow fun
        return (password) =>{         //return new fun is called fun currying
            if(password === "Ananthi@123"){
                return `welcome ${username}, you are loggedin`
                


            }else{
                return `password mismatch`;
            }

        }
    }
    console.log(loginUser("Ananthi")("An@123")); 