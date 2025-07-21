//control statemnts//
// 1 conditions
// 2 loopings

//conditions- if-else switch case

let age = 18;
//age >= 18 ? console.log() : console.log();
//if(age >= 18){
   // console.log("eligible");

//}else{
    //console.log("not eligible");

//}//
if(age > 18){
    console.log("eligible");
}
else if (age === 18){
    console.log("eligible for vote");
}
else{
    console.log("not elgible");
    
}
//interview pbm
//student grading system

//if(total > 490){
   // console.log("A Grade");

//}
//else if(total > 480){
  //  console.log("B Grade");
//}
//else if (total > 450){
  //  console.log("C Grade");
//}

//else if(total > 400){
  //  console.log("D Grade");
//}
//else{
  //  console.log("Fail");
    
//}
let total = 499;
if (total > 350 && total > 501) {//&&-AND operator
    if (total > 480) {
        console.log("A Grade");
    }
    else if (total > 450) {
        console.log("B Grade");
    }
    else if (total > 400) {
        console.log("C Grade");
    }

    else {
        console.log("D Grade");
    }
} else {
    console.log("Fail");
}
//AND OPERATOR
//Both conditions are true checking
//OR OPERATOR
// Checking only one conditon


//switch case
//Day finder
//let day = 4;
//switch(day){
  //  case 1:
    //    console.log("Monday");
      //  break;
//
  //      case 2:
    //    console.log("Tuesday");
      //  break;
        ///case 3:
       // console.log("Wednesday");
        //break;

    //case 4:
      //  console.log("Thursday");
        //break;
        
       // default://else
          //  console.log("Invalid day format");


//}
//Looping Statements
//for loop, while loop, do-while loop

//for loop 3 parameters
//1 - inital value
//2 - condition
//3 - increment
//for(let i = 0; i <= 500; i++){
  //  console.log(i, "Love you");
//}
//while loop
//let j = 0;
//while(j <= 5){
  //  console.log(j, "while loop execute");
    //j++;
//}
//do-while loop
let k = 0;
do{
    console.log(k, "Times executed");
    k++;

}while(k <= 5);

//inter proble
//pattern program
//right angle triangle
let row = 5;
for(let i = 1; i <= row; i++){
    let star = "";
    for(let j = 1; j <= i; j++){
        star += "*";
    }
    console.log(star);
}
