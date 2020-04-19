const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
var min = 0, sec = 0, hun = 0,timer = 0;
// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:

function add() {
    hun++;
    if (hun == 100) {
      hun = 0;
      sec++;        
      if (sec == 60) {
        sec = 0;
        min++;
      }
    }  
    // if (hun < 10)
    //     hun = '0'+hun;
    // if (sec < 10)
    //     sec = '0'+sec;
    // if (min < 10)
    //     min ='0'+min;      
    theTimer.innerHTML=min+':'+sec+':'+hun;
}
function startTimer(){  
    timer = setInterval(add,10);
}
// Match the text entered with the provided text on the page:


// Start the timer:
testArea.addEventListener("keypress", (event)=>{
    startTimer();
})

// Reset everything:


// Event listeners for keyboard input and the reset button:
