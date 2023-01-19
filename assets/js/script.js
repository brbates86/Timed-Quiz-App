const questions = [
    {
        question: "Commonly used data types to NOT include:",
        answers: [
            { text: "Strings", correct: false },
            { text: "Booleans", correct: false },
            { text: "Alerts", correct: true },
            { text: "Numbers", correct: false }
        ]
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: [
            { text: "Quotes", correct: false },
            { text: "Curly Brackets", correct: false },
            { text: "Parentheses", correct: true },
            { text: "Square Brackets", correct: false }
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        answers: [
            { text: "Numbers and Strings", correct: false },
            { text: "Other Arrays", correct: false },
            { text: "Booleans", correct: true },
            { text: "All of the Above", correct: false }
        ]
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: [
            { text: "Commas", correct: false },
            { text: "Curly Brackets", correct: false },
            { text: "Quotes", correct: true },
            { text: "Parentheses", correct: false }
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            { text: "JavaScript", correct: false },
            { text: "terminal / bash", correct: false },
            { text: "for loops", correct: true },
            { text: "console.log", correct: false }
        ]
    }
]

var startButton = document.getElementById('start-btn');
var startScreen = document.getElementById('start-screen');
var questionsContainer = document.getElementById('question-container');
var questionEl = document.getElementById('question');
var answerButton = document.getElementById('answer-button');
var endScreen = document.getElementById('end-screen');
var scoreBonus = 10;

var score = 0
var randomQuestions
var setquestions = 0

startButton.addEventListener('click', startQuiz)

// start timer
var count = document.querySelector("#time");

var secondsLeft = 60;
var timer;
function timer() {
    count.textContent = secondsLeft;
    timer = setInterval(function() {
        secondsLeft--;

        if (secondsLeft === 0) {
            clearInterval(timer);
            alert("You ran out of time!");
        }
    }, 1000)
}

// start quiz 
function startQuiz() {
    console.log("started")
    startButton.remove()
    startScreen.remove()
    //randomQuestions = questions.sort(() => Math.random() -.5)
    questionsContainer.classList.remove('hide');
    generateQuestion();
    timer();
}

// // Mini lesson on for loops for arrays
// let arr = [1, 2, 3, 4, 5, 6, 7];

// for (var i = 0; i < arr.length; i++) {
//     // If I want the console.log to return 1 from the arr, how?
//     console.log(arr[0]);
//     // If I want to console.log 1 and then 2 and then 3, how?
//     console.log(arr[i])
// }

function generateQuestion() {
    if (setQuestions < 5) {
        nextQuestion(questions[setQuestions]);
        localStorage.setItem('mostRecentScore',score)
    } else {
        endQuiz()
    }
    // then you click on a button
    // then next question
}

function nextQuestion(question) {

    //random index but 0,1,2,3 only these 4 numbers are genrated
    /* while (array.length < 4){
        let randoNumber = Math.floor(Math.random() * 4)
        // push
        if (array.includes(randoNumber) == false) {
            console.log(!(randoNumber in array),randoNumber)
            array.push(randoNumber)
        }
    } */

    console.log(question);

    document.querySelector("#question").textContent = question.question;

    // text for buttons
    document.querySelector("#btn1").textContent = "1. " + question.answers[0].text
    document.querySelector("#btn2").textContent = "2. " + question.answers[1].text
    document.querySelector("#btn3").textContent = "3. " + question.answers[2].text
    document.querySelector("#btn4").textContent = "4. " + question.answers[3].text
    