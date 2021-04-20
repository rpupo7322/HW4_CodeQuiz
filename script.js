var time = document.querySelector('#timer');
var secondsLeft = 75;
var currentSlide = 0;
var answers = {
    q1: ['Strings', 'Booleans', 'Alerts', 'Numbers'],
    q2: ['Quotes', 'Curly Brackets', 'Parenthesis', 'Square Brackets'],
    q3: ['Numbers and strings', 'Other arrays', 'Booleans', 'All of the above'],
    q4: ['Commas', 'Curly brackets', 'Quotes', 'Parenthesis'],
    q5: ['Javascript', 'Terminal/bash', 'For loops', 'Console.log']

}
var questions = ['Commonly used Data Types do not include:',
    'The condition in an if/else statement is enclosed within _______.',
    'Arrays in JavaScript can be used to store _____.',
    'String values must be enclosed within _______ when being assigned to variables.',
    'A very useful tool used during development and debugging for printing content to the debugger is:']
var startEl = document.querySelector('#start');
var timeForDelay;




startEl.addEventListener('click', start)

function start() {
  console.log("test")
  beginCountdown();
//   if (secondsLeft > 0){
//     playGame();
//   }
}

function beginCountdown() {
    secondsLeft = 75;
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      time.textContent = 'Time:   ' + secondsLeft ;
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        gameState = false;
        // console.log("gamestate: "+ gameState)
        
      }    
    }, 1000);
  }