const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
var originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
var min = 0,
  sec = 0,
  hun = 0,
  timer = 0;
var timerIsOn = false;


//Array of practice texts:
var sentences = ["The quick brown fox jumps over the lazy dog.",
  "Lorem ipsum dolor sit amet.",
  "consectetur adipiscing elit.",
  "sed do eiusmod tempor incididunt ut labore et dolore magna.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  "This is a typing test.",
  "Your goal is to duplicate the provided text, EXACTLY, in the field below.",
  "The timer starts when you start typing, and only stops when you match this text exactly.",
  "Good Luck!"
]

function generatePracticeText() {
 function generate() {
    var randomNum = (Math.floor(Math.random() * sentences.length));
    return sentences[randomNum];
  }
  originText = document.getElementById("practice-sentence").innerHTML = generate();
}
window.onload = generatePracticeText();

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingNum() {
  if (hun < 10)
    hun = '0' + hun;
  if (sec < 10)
    sec = '0' + sec;
  if (min < 10)
    min = '0' + min;
}

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

  theTimer.innerHTML = min + ':' + sec + ':' + hun;
}

function startTimer() {
  timerIsOn = true;
  timer = setInterval(add, 10);

}
// Match the text entered with the provided text on the page:
function isMatch() {
  var testText = originText.substring(0, testArea.value.length)
  if (testArea.value == testText) {
    return true;
  } else if (testArea.value != testText) {
    return false;
  } else
    return null;
}

function changeBorderColor() {
  if (isMatch())
    testWrapper.style.borderColor = "blue";
  else if (!isMatch())
    testWrapper.style.borderColor = "orange";
  else
    console.log("error");
}

// Start the timer:
testArea.addEventListener("keypress", (event) => {
  if (!timerIsOn)
    startTimer();
})

// Reset everything:
resetButton.onclick = function () {
  timerIsOn = false;
  theTimer.innerHTML = "00:00:00";
  min = 0,
    sec = 0,
    hun = 0,
    clearInterval(timer)
  testArea.value = "";
  testWrapper.style.borderColor = "";
  generatePracticeText();
  
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keyup", (event) => {
  changeBorderColor();
})