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