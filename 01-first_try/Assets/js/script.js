
let timeLeft = 100;
const timerEL = document.getElementById('timer');
const startButton = document.getElementById('butt');
let countdown;

const quest = [
    

    
    
    
    


    
    
];
const ans = [
    {
        question: "What is the correct syntax to create a new object in JavaScript?",
        answers: [
        "A) var obj = {};",
        "B) var obj = [];",
        "C) var obj = Object.create();",
        "D) var obj = new Object[];"
        ],
        correct: 0
    },
    {
        question: "Which of the following is used to declare a variable in JavaScript?",
        answers: [
        "A) var",
        "B) let",
        "C) const",
        "D) All of the above",
        ],
        correct: 3
    },
    {
        question: "How do you write \"Hello World\" in an alert box?",
        answers: [
        "A) alertBox(\"Hello World\");",
        "B) msg(\"Hello World\");",
        "C) alert(\"Hello World\");",
        "D) msgBox(\"Hello World\");",
        ],
        correct: 2
    },
    {
        question: "Which of the following is the correct way to write a comment in JavaScript?",
        answers: [
        "A) <!-- This is a comment -->",
        "B) // This is a comment",
        "C) /* This is a comment */",
        "D) Both B and C",
        ],
        correct: 3
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: [
        "A) function myFunction()",
        "B) function: myFunction()",
        "C) function = myFunction()",
        "D) function => myFunction()",
        ],
        correct: 0
    },
    {
        question: "What is the difference between == and === in JavaScript?",
        answers: [
        "A) == checks for equality of values, while === checks for both equality of values and types.",
        "B) == checks for equality of values and types, while === checks for equality of values only.",
        "C) == is used for comparison in arrays, while === is used for comparison in objects.",
        "D) There is no difference.",
        ],
        correct: 0
    },
    {
        question: "What does the following code output? console.log([] + {});",
        answers: [
        "A) 0",
        "B) {}",
        "C) \"[object Object]\"",
        "D) []",
        ],
        correct: 2
    },
    {
        question: "How can you create a class in JavaScript?",
        answers: [
        "A) class MyClass { constructor() {} }",
        "B) function MyClass() {}",
        "C) var MyClass = class { constructor() {} }",
        "D) All of the above",
        ],
        correct: 3
    },
    {
        question: "What does Array.prototype.reduce do in JavaScript?",
        answers: [
        "A) It iterates over an array and returns a new array with the same length.",
        "B) It applies a function against an accumulator and each element in the array to reduce it to a single value.",
        "C) It filters the array based on a condition.",
        "D) It sorts the array in ascending order.",
        ],
        correct: 1
    },
    {
        question: "What will the following code output? console.log(\"Hello\" instanceof String);",
        answers: [
        "A) true",
        "B) false",
        "C) undefined",
        "D) Error",
        ],
        correct: 1
    }
];

function quizSeq(q, a) {
    qnum = 1;
    for (let cq in q) {

    }
}

startButton.addEventListener('click', () => {
    timerEL.style.display = "flex";
    question.style.display = "flex";
    answers.style.display = "flex";
    if (countdown) {
        clearInterval(countdown);
    }
    countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            timerEL.innerHTML = "Time's up!";
        } else {
            timerEL.innerHTML = "Time: " + timeLeft;
        }
        timeLeft -= 1;
    }, 1000);
});

