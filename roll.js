let maxFreq = 0
let minFreq = 0
var rolls = 0
let mode = 0
let median = 0
let mean = 0
//console.log(numOfRolls)


function dices(num){
    const number = num
    
    if(number === 1) {
        maxFreq = 6;
        minFreq = 1;
    } else if(number === 2) {
        maxFreq = 12;
        minFreq = 2;
    } else{
        maxFreq = 18;
        minFreq = 3;
    }
    console.log(minFreq)
    console.log(maxFreq)
}


function roll(rolls) {
    let arr = []
    for(let i = 0; i < rolls; i++) {
        arr.push(Random())            
    }
    arr.sort()

    const sum = arr.reduce((acc, curr) => acc + curr, 0); 
    const average = sum / arr.length; 
    mean = average; 

    let middle = Math.floor(rolls / 2)
    median = arr[Math.floor(arr.length/middle)]
    console.log(median)
    console.log(mean)

    //document.getElementById().innerText = mode
    //document.getElementById().innerText = median
    //document.getElementById().innerText = mean
}


function Random() {
    return Math.floor(Math.random() * 6 + 1);
}
