var time = document.querySelector('#timer');
var open = document.querySelector('#opener');
var quest = document.querySelector('#questions');
var result = document.querySelector('#results');
var highscores = document.querySelector('#highscores');
var theScore = document.querySelector('#score');
var scores = document.querySelector('#scoresList');
var viewHS = document.querySelector('#viewHS');
var textArea = document.querySelector('#textarea');
var cq = document.querySelector('#currentQuestion');
var q1 = document.querySelector('#q1');
var q2 = document.querySelector('#q2');
var q3 = document.querySelector('#q3');
var q4 = document.querySelector('#q4');
var correct = document.querySelector('#correct');
var secondsLeft = 75;
var currentSlide = 0;
var answers = {
    q1: ['1. Strings', '2. Booleans', '3. Alerts', '4. Numbers'],
    q2: ['1. Quotes', '2. Curly Brackets', '3. Parenthesis', '4. Square Brackets'],
    q3: ['1. Numbers and strings', '2. Other arrays', '3. Booleans', '4. All of the above'],
    q4: ['1. Commas', '2. Curly brackets', '3. Quotes', '4. Parenthesis'],
    q5: ['1. Javascript', '2. Terminal/bash', '3. For loops', '4. Console.log']
}
var questions = ['Commonly used Data Types do not include:',
    'The condition in an if/else statement is enclosed within _______.',
    'Arrays in JavaScript can be used to store _____.',
    'String values must be enclosed within _______ when being assigned to variables.',
    'A very useful tool used during development and debugging for printing content to the debugger is:']
var startEl = document.querySelector('#start');
var startEl2 = document.querySelector('#start2');
var clear = document.querySelector('#clear');
var currentAnswer;

startEl.addEventListener('click', start)
startEl2.addEventListener('click', start)
q1.addEventListener("click", function () {
  testAnswr(currentSlide, 1)
  if (currentAnswer) {
    displayCorrect()
  } else {
    displayWrong()
  }
  currentSlide += 1;
  changeSlide();
  console.log(currentSlide)
});
q2.addEventListener("click", function () {
  testAnswr(currentSlide, 2)
  if (currentAnswer) {
    displayCorrect()
  } else {
    displayWrong()
  }
  currentSlide += 1;
  changeSlide();
  console.log(currentSlide)
});
q3.addEventListener("click", function () {
  testAnswr(currentSlide, 3)
  if (currentAnswer) {
    displayCorrect()
  } else {
    displayWrong()
  }
  currentSlide += 1;
  changeSlide();
  console.log(currentSlide)
});
q4.addEventListener("click", function () {
  testAnswr(currentSlide, 4)
  if (currentAnswer) {
    displayCorrect()
  } else {
    displayWrong()
  }
  currentSlide += 1;
  changeSlide();
  console.log(currentSlide)
});
viewHS.addEventListener("click", function () {
  currentSlide = 7;
  changeSlide();
  console.log(currentSlide)
});
submit.addEventListener("click", function () {
  if (testSubmit(textArea.value)) {
    addHighScores(textArea.value)
    currentSlide += 1;
    changeSlide();
    textArea.value = '';
  } else {
    alert('Please enter initials to submit a score! PLEASE!')
  }
});
clear.addEventListener("click", function () {
  localStorage.clear();
  changeSlide();
});





function start() {
  beginCountdown();
  currentSlide = 1;
  changeSlide();
}


function changeSlide(){
  if (currentSlide == 0) {
    quest.style.display = "none";
    result.style.display = "none";
    highscores.style.display = "none";
  } else if (currentSlide > 0 && currentSlide < 6) {
    open.style.display = "none";
    result.style.display = "none";
    highscores.style.display = "none";
    quest.style.display = "block";
    currentAnswer = false;
    questionDisplay();
  } else if (currentSlide == 6) {
    open.style.display = "none";
    result.style.display = "block";
    highscores.style.display = "none";
    quest.style.display = "none";
    theScore.textContent = 'Your score is:  ' + secondsLeft;
  } else if (currentSlide == 7) {
    open.style.display = "none";
    result.style.display = "none";
    quest.style.display = "none";
    populateHighScores();
    highscores.style.display = "block";
  }
}

function questionDisplay(){
  if (currentSlide == 1) {
    cq.textContent = questions[0];
    q1.textContent = answers.q1[0]
    q2.textContent = answers.q1[1]
    q3.textContent = answers.q1[2]
    q4.textContent = answers.q1[3]
  }
  else if (currentSlide == 2) {
    cq.textContent = questions[1];
    q1.textContent = answers.q2[0]
    q2.textContent = answers.q2[1]
    q3.textContent = answers.q2[2]
    q4.textContent = answers.q2[3]
  }  else if (currentSlide == 3) {
    cq.textContent = questions[2];
    q1.textContent = answers.q3[0]
    q2.textContent = answers.q3[1]
    q3.textContent = answers.q3[2]
    q4.textContent = answers.q3[3]
  }else if (currentSlide == 4) {
    cq.textContent = questions[3];
    q1.textContent = answers.q4[0]
    q2.textContent = answers.q4[1]
    q3.textContent = answers.q4[2]
    q4.textContent = answers.q4[3]
  }else if (currentSlide == 5) {
    cq.textContent = questions[4];
    q1.textContent = answers.q5[0]
    q2.textContent = answers.q5[1]
    q3.textContent = answers.q5[2]
    q4.textContent = answers.q5[3]
  }
  
}

function testAnswr (question, answer) {
  if (question == 1) {
    if (answer == 3) {
      currentAnswer = true;
    }
  }
  if (question == 2) {
    if (answer == 3) {
      currentAnswer = true;
    }
  }
  if (question == 3) {
    if (answer == 4) {
      currentAnswer = true;
    }
  }
  if (question == 4) {
    if (answer == 3) {
      currentAnswer = true;
    }
  }
  if (question == 5) {
    if (answer == 4) {
      currentAnswer = true;
    }
  }
}

function displayCorrect (){
  correct.style.display = "block";
  correct.textContent = 'Correct!'
  setTimeout(function(){
    correct.style.display = "none";
    },1000);
}
function displayWrong() {
  correct.style.display = "block";
  correct.textContent = 'Wrong!'
  secondsLeft -= 10;
  setTimeout(function(){
    correct.style.display = "none";
    },1000);
}

function addHighScores(userName){
  var existingScores = JSON.parse(localStorage.getItem("allScores"));
  if(existingScores == null) {existingScores = [];}
  var entry = {
      "name": userName,
      "score": secondsLeft
  };
  // Save allEntries back to local storage
  existingScores.push(entry);
  localStorage.setItem("allScores", JSON.stringify(existingScores));
}

function populateHighScores(){
  while(scores.firstChild) {
    scores.removeChild(scores.firstChild)
  }
  var existingScores = JSON.parse(localStorage.getItem("allScores"));
  if(existingScores == null) {existingScores = [];}

  var sortedScores = existingScores.sort(function(a, b){
    return b.score - a.score
  });

  for (i=0;i < sortedScores.length;i++) {
    var score = sortedScores[i];
    var li = document.createElement("li");
    li.textContent = score.name + ':   ' + score.score;
    scores.appendChild(li);
  }

}


function testSubmit(a) {
  if (a == null || a == '') {
    return false;
  } else {
    return true;
  }
}

function beginCountdown() {
    secondsLeft = 75;
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      time.textContent = 'Time:   ' + secondsLeft ;
      if(secondsLeft === 0 && currentSlide != 6) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        currentSlide = 6;
        changeSlide();
      } else if(secondsLeft === 0 || currentSlide > 5 || currentSlide == 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }    
    }, 1000);
  }