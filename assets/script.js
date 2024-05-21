const startBtn = document.getElementById('start');
const questionContainer = document.getElementById('qs-container');
const questionEl = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('result-container');
const scoreEl = document.getElementById('score');
const initialsInput = document.getElementById('initials');
const submitScoreBtn = document.getElementById('submit-score-btn');
const highscoresContainer = document.getElementById('highscores-container');
const highscoresList = document.getElementById('highscores-list');
const timerEl = document.getElementById('time');


let randQs, cqIndex;
let score = 0;
let time = 100;
let timerInterval;

const qs = [
    {
        question: 'What does HTML stand for?',
        answers: [
            { text: 'Hyper Trainer Marking Language', correct: false },
            { text: 'Hyper Text Marketing Language', correct: false },
            { text: 'Hyper Text Markup Language', correct: true },
            { text: 'Hyper Text Markup Leveler', correct: false }
        ]
    },
    {
        question: 'What does CSS stand for?',
        answers: [
            { text: 'Creative Style Sheets', correct: false },
            { text: 'Cascading Style Sheets', correct: true },
            { text: 'Computer Style Sheets', correct: false },
            { text: 'Colorful Style Sheets', correct: false }
        ]
    },
    {
        question: 'What is the correct syntax to create a new object in JavaScript?',
        answers: [
            { text: 'var obj = {};', correct: true },
            { text: 'var obj = [];', correct: false },
            { text: 'var obj = Object.create();', correct: false },
            { text: 'var obj = new Object[];', correct: false }
        ]
    },
    {
        question: 'Which of the following is used to declare a variable in JavaScript?',
        answers: [
            { text: 'var', correct: false },
            { text: 'let', correct: false },
            { text: 'const', correct: false },
            { text: 'All of the above', correct: true }
        ]
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        answers: [
            { text: 'alertBox("Hello World");', correct: false },
            { text: 'msg("Hello World");', correct: false },
            { text: 'alert("Hello World");', correct: true },
            { text: 'msgBox("Hello World");', correct: false }
        ]
    },
    {
        question: 'Which of the following is the correct way to write a comment in JavaScript?',
        answers: [
            { text: '<!-- This is a comment -->', correct: false },
            { text: '// This is a comment', correct: false },
            { text: '/* This is a comment */', correct: false },
            { text: 'Both B and C', correct: true }
        ]
    },
    {
        question: 'How do you create a function in JavaScript?',
        answers: [
            { text: 'function myFunction()', correct: true },
            { text: 'function: myFunction()', correct: false },
            { text: 'function = myFunction()', correct: false },
            { text: 'function => myFunction()', correct: false }
        ]
    },
    {
        question: 'What is the output of console.log(2 + "2");?',
        answers: [
            { text: '22', correct: true },
            { text: '4', correct: false },
            { text: 'NaN', correct: false },
            { text: 'Error', correct: false }
        ]
    },
    {
        question: 'Which of the following methods is used to parse a string to an integer in JavaScript?',
        answers: [
            { text: 'parseInt()', correct: true },
            { text: 'parseInteger()', correct: false },
            { text: 'parse()', correct: false },
            { text: 'intParse()', correct: false }
        ]
    },
    {
        question: 'What will the following code output? console.log(typeof NaN);',
        answers: [
            { text: 'number', correct: true },
            { text: 'string', correct: false },
            { text: 'undefined', correct: false },
            { text: 'object', correct: false }
        ]
    },
    {
        question: 'Which of the following is a way to handle asynchronous operations in JavaScript?',
        answers: [
            { text: 'Callbacks', correct: false },
            { text: 'Promises', correct: false },
            { text: 'Async/Await', correct: false },
            { text: 'All of the above', correct: true }
        ]
    },
    {
        question: 'What is the purpose of the bind method in JavaScript?',
        answers: [
            { text: 'To create a new function that, when called, has its this keyword set to the provided value.', correct: true },
            { text: 'To immediately invoke a function.', correct: false },
            { text: 'To create a prototype chain.', correct: false },
            { text: 'To concatenate strings.', correct: false }
        ]
    },
    {
        question: 'What is the difference between == and === in JavaScript?',
        answers: [
            { text: '== checks for equality of values, while === checks for both equality of values and types.', correct: true },
            { text: '== checks for equality of values and types, while === checks for equality of values only.', correct: false },
            { text: '== is used for comparison in arrays, while === is used for comparison in objects.', correct: false },
            { text: 'There is no difference.', correct: false }
        ]
    },
    {
        question: 'What does the following code output? console.log([] + {});',
        answers: [
            { text: '0', correct: false },
            { text: '{}', correct: false },
            { text: '"[object Object]"', correct: true },
            { text: '[]', correct: false }
        ]
    },
    {
        question: 'How can you create a class in JavaScript?',
        answers: [
            { text: 'class MyClass { constructor() {} }', correct: true },
            { text: 'function MyClass() {}', correct: false },
            { text: 'var MyClass = class { constructor() {} }', correct: false },
            { text: 'All of the above', correct: true }
        ]
    },
    {
        question: 'What does Array.prototype.reduce do in JavaScript?',
        answers: [
            { text: 'It iterates over an array and returns a new array with the same length.', correct: false },
            { text: 'It applies a function against an accumulator and each element in the array to reduce it to a single value.', correct: true },
            { text: 'It filters the array based on a condition.', correct: false },
            { text: 'It sorts the array in ascending order.', correct: false }
        ]
    },
    {
        question: 'What will the following code output? console.log("Hello" instanceof String);',
        answers: [
            { text: 'true', correct: false },
            { text: 'false', correct: true },
            { text: 'undefined', correct: false },
            { text: 'Error', correct: false }
        ]
    }
];

startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    startBtn.classList.add('hide');
    randQs = qs.sort(() => Math.random() - 0.5);
    cqIndex = 0;
    questionContainer.classList.remove('hide');
    setNextQuestion();
    startTimer();
}

function setNextQuestion() {
    resetState();
    showQuestion(randQs[cqIndex]);
}

function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        score++;
    } else {
        time -= 5;
    }
    cqIndex++;
    if (cqIndex < randQs.length && time > 0) {
        setNextQuestion();
    } else {
        endQuiz();
    }
}

function startTimer() {
    timerEl.innerText = time;
    timerInterval = setInterval(() => {
        time--;
        timerEl.innerText = time;
        if (time <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timerInterval);
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    scoreEl.innerText = score;
}

submitScoreBtn.addEventListener('click', saveScore);

function saveScore() {
    const initials = initialsInput.value;
    const highscores = JSON.parse(localStorage.getItem('highscores')) || [];
    const newScore = { score, initials };
    highscores.push(newScore);
    localStorage.setItem('highscores', JSON.stringify(highscores));
    showHighScores();
}

function showHighScores() {
    resultContainer.classList.add('hide');
    highscoresContainer.classList.remove('hide');
    highscoresList.innerHTML = '';
    const highscores = JSON.parse(localStorage.getItem('highscores')) || [];
    highscores.forEach(score => {
        const li = document.createElement('li');
        li.innerText = `${score.initials} - ${score.score}`;
        highscoresList.appendChild(li);
    });
}