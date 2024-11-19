// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

feelingLoopy("Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232");
    function fizzbuzz(stop){
    for (let x = 1; x <= stop; x++){
        if(x % 3 == 0 && x % 5 != 0 ){console.log("Fizz");}
        else if(x % 5 == 0 && x % 3 != 0){console.log("Buzz");}
        else if(x % 5 == 0 && x % 3 == 0){console.log("Fizz Buzz");}
        else{
        console.log(" "+ x);
     }
    }
}
function primeTime(startingNum){
    let loopLock=true;
    for(let y =startingNum; loopLock; y++){
        let isPrime = y % 4 != 0 && y % 3 != 0 && y % 2 != 0;
        if(isPrime){
            console.log("I found it! it's:"+ y);
            loopLock = false;
        }
    }
}
//// THIS IS STRESSING MEE OUT IM DOING THIS THE HARD WAY
// handle the regular imput first then handle the escape indexs next
// I could have saved my self hours If i read what split does more carfully 
function feelingLoopy(csvString) {
    let arr = new Array();
  arr=csvString.split(",");
  console.log(arr);
}

