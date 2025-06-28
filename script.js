//control state
//simple grade caluculation using condition 

let total = 440; 
if (total > 200) { 
    if (total <= 500) {
        if (total > 480) {
            console.log("A Grade");
        }
        else if (total > 450) {
            console.log("B Grade");
        }
        else if (total > 400) {
            console.log("C Grade");
        } else {
            console.log("D Grade");
        }
    } else {
        console.log("Invalid total");
    }
} else {
    console.log("Fail");
}
