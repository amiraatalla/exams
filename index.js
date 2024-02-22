//take msg from user
//convert msg to uppercase
//check length of msg <40
//counter for holes
//loop msg
//check holes in msg 
//increase counter
//"A" "B" "C" "D" "E" "F" "G" "H" "I" "J" "K" "L" "M" "N" 
// "O" "P" "Q"
// "R" "S" "T""U" "V" "W" "X" "Y" "Z"
let msg = prompt("enter your msg");
let convertedMsg = msg.toUpperCase();

if (convertedMsg.length < 40) {
    let counter = 0;
    
    for (let x in convertedMsg) {
        if(convertedMsg[x] =="A" || convertedMsg[x] =="D" ||
        convertedMsg[x] =="O" || convertedMsg[x] =="P" ||
        convertedMsg[x] =="Q" || convertedMsg[x] =="R")
        counter +=1;
        else if(convertedMsg[x] =="B")
        counter +=2;
    }
        console.log(counter);

}



// const person = [3,5,6];
//     for(let i = person.length-1; i >= 0 ;i--){
//         console.log(person[i])
//     }