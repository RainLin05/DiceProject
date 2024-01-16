let maxFreq = 0
let minFreq = 0
var rolls = document.getElementById("dice")
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
    } else if(number === 3){
        maxFreq = 18;
        minFreq = 3;
    }
}

function roll(rolls) {
    let arr = []
    for(let i = 0; i < rolls; i++) {
         arr.push(Random())            
    }
    arr.sort()
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


    //frequencies
    for(let i = 1; i < 19; i++) {
        for(let j = 0; j < rolls; j++) {
            count = 0
            if(arr[j] === i) {
                count++
            }
        }
        let freq = count / arr.length
        console.log(freq)
    }

    document.getElementById("mean").innerText = mean
    document.getElementById("median").innerText = median
    document.getElementById("mode").innerText = mode()
    //document.getElementById("frequency").innerText = 
    //document.getElementById().innerText = mean
    //document.getElementById().innerText = median
    //document.getElementById().innerText = mean
}


function Random() {
    return Math.floor(Math.random() * (maxFreq - minFreq + 1) + minFreq);
}
