let maxFreq = 0
let minFreq = 0
var rolls = 1
let mode = 0
let median = 0
let mean = 0
let freq = 1
let times = 0
var arr1 = []
let double = 0
let triple = 0

//console.log(numOfRolls)


function dices(num){
    const number = num
    if(number === 1) {
        maxFreq = 6;
        minFreq = 1;
    } else if(number === 2) {
        maxFreq = 12;
        minFreq = 2;
    } else if(number === 3){
        maxFreq = 18;
        minFreq = 3;
    }
}

function changeRolls(num) {
    rolls = num
}

function changeFreq(num) {
    freq = num
    times = 0
    for(let i = 0; i < arr1.length; i++) {
        if(freq == arr1[i]) {
            times++
        }
    }
    console.log(times)
    document.getElementById("frequencies").innerText = times
}

function doubles() {
    for(let i = 0; i < arr1.length - 1; i++) {
        freq = arr1[i]
        times = 0
        for(let j = i+1; j < arr1.length; j++) {
            if(freq == arr1[j]) {
                times++
            }
        }
        if(times == 3) {
            triple++
            console.log(triple)
        } else if(times == 2) {
            double++
            console.log(double)
        }
    }
  
}


function roll(rolls) {
    arr = []
    for(let i = 0; i < rolls; i++) {
         arr.push(Random())            
    }
    arr.sort()
    arr1 = arr
    console.log(arr1)
    document.getElementById("rolled").innerText = `Your rolled values are: ` + arr
    
    //mean
    const sum = arr.reduce((acc, curr) => acc + curr, 0); 
    const average = sum / arr.length; 
    mean = average; 

    //median
    let middle = Math.floor(rolls / 2)
    median = arr[middle]

    //mode src from https://stackoverflow.com/questions/52898456/simplest-way-of-finding-mode-in-javascript
    var mode = a => {
        a = arr.slice().sort((x, y) => x - y);
      
        var bestStreak = 1;
        var bestElem = arr[0];
        var currentStreak = 1;
        var currentElem = arr[0];
      
        for (let i = 1; i < arr.length; i++) {
          if (arr[i-1] !== arr[i]) {
            if (currentStreak > bestStreak) {
              bestStreak = currentStreak;
              bestElem = currentElem;
            }
      
            currentStreak = 0;
            currentElem = arr[i];
          }
      
          currentStreak++;
        }
      
        return currentStreak > bestStreak ? currentElem : bestElem
    };


    let arr2 = arr
    for(let k = 0; k < arr2.length - 1; k++) {
        if(arr2[k] === arr2[k+1]) {
            times++
        }
        if(times === 2) {
            console.log(double)
            double++
            if(arr[k+2] === null) {
                times = 0
            }
        } else if(times === 3) {
            triple++
            times = 0
            console.log(triple)
        }
    }
    double -= triple
    
    
    document.getElementById("mean").innerText = mean
    document.getElementById("median").innerText = median
    document.getElementById("mode").innerText = mode()
    
    document.getElementById('double').innerText = double
    document.getElementById('triple').innerText = triple
    //document.getElementById().innerText = mean
}


function Random() {
    return Math.floor(Math.random() * (maxFreq - minFreq + 1) + minFreq);
}
