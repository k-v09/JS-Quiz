
let timeLeft = 100;
const timerEL = document.getElementById('timer');
const startButton = document.getElementById('butt');
const question = document.getElementById('question');
const answers = document.getElementById('answers');
let countdown;

const quest = [
    "What is the correct syntax to create a new object in JavaScript?",
    "Which of the following is used to declare a variable in JavaScript?",
    "How do you write \"Hello World\" in an alert box?",
    "Which of the following is the correct way to write a comment in JavaScript?",
    "How do you create a function in JavaScript?",
    "What is the difference between == and === in JavaScript?",
    "What does the following code output? console.log([] + {});",
    "How can you create a class in JavaScript?",
    "What does Array.prototype.reduce do in JavaScript?",
    "What will the following code output? console.log(\"Hello\" instanceof String);"
];
const ans = {
    1: [
        "A) var obj = {};",
        "B) var obj = [];",
        "C) var obj = Object.create();",
        "D) var obj = new Object[];",
        0
    ],
    2: [
        "A) var",
        "B) let",
        "C) const",
        "D) All of the above",
        3
    ],
    3: [
        "A) alertBox(\"Hello World\");",
        "B) msg(\"Hello World\");",
        "C) alert(\"Hello World\");",
        "D) msgBox(\"Hello World\");",
        2
    ],
    4: [
        "A) <!-- This is a comment -->",
        "B) // This is a comment",
        "C) /* This is a comment */",
        "D) Both B and C",
        3
    ],
    5: [
        "A) function myFunction()",
        "B) function: myFunction()",
        "C) function = myFunction()",
        "D) function => myFunction()",
        0
    ],
    6: [
        "A) == checks for equality of values, while === checks for both equality of values and types.",
        "B) == checks for equality of values and types, while === checks for equality of values only.",
        "C) == is used for comparison in arrays, while === is used for comparison in objects.",
        "D) There is no difference.",
        0
    ],
    7: [
        "A) 0",
        "B) {}",
        "C) \"[object Object]\"",
        "D) []",
        2
    ],
    8: [
        "A) class MyClass { constructor() {} }",
        "B) function MyClass() {}",
        "C) var MyClass = class { constructor() {} }",
        "D) All of the above",
        3
    ],
    9: [
        "A) It iterates over an array and returns a new array with the same length.",
        "B) It applies a function against an accumulator and each element in the array to reduce it to a single value.",
        "C) It filters the array based on a condition.",
        "D) It sorts the array in ascending order.",
        1
    ],
    10: [
        "A) true",
        "B) false",
        "C) undefined",
        "D) Error",
        1
    ]
};

function quizSeq() {
    qnum = 1;
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