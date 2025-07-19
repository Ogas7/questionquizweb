const quizData = [{
    question: "Which prgraming laguage is considered to be used for the functioning of the webpage?",
    a: "Javascript",
    b: "Python",
    c: "CSS",
    d: "HTML",
    correct: "a",
},
{
    question: "What does HTML refer to?",
    a: "Hypertrue Marked UP Langugage",
    b: "Helping Terminal Made up Language",
    c: "Hybrid Maked up Language",
    d: "HyperText Markup Language",
    correct: "d",
},
{
    question: "In HTML which tag is used to start a sencentence in a lines?",
    a: " BR TAG",
    b: "clearTimer",
    c: "intervalOver",
    d: "None of the above",
    correct: "a",
},
{
    question: "Which type of JavaScript language is?",
    a: "Object oriented",
    b: "Object based",
    c: "Functional",
    d: "None of the above",
    correct: "b",

},
];

const quiz = document.getElementById("quiz");
const countQuestion = document.getElementById("count-question");
const tottleNumberOfQuestion = document.getElementById("tol-num-que");
const questionNumber = document.getElementById("question-number");
const questionTitle = document.getElementById("question");
const answerlable = document.querySelectorAll(".answer-lable");
const nextQuestionbtn = document.getElementById("next-question-btn");
const allInputs = document.querySelectorAll("input[type='radio']");
const submitequiz = document.getElementById("submite");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
let currentQtn = 0;
let answerd = 0;


const loadQuiz = () => {
    countQuestion.innerHTML = `${currentQtn + 1}`;
    tottleNumberOfQuestion.innerHTML = quizData.length;
    questionNumber.innerHTML = `${currentQtn + 1}`;
    questionTitle.innerHTML = quizData[currentQtn].question;
    answerlable[0].innerHTML = quizData[currentQtn].a;
    answerlable[1].innerHTML = quizData[currentQtn].b;
    answerlable[2].innerHTML = quizData[currentQtn].c;
    answerlable[3].innerHTML = quizData[currentQtn].d
    reset();

    if (currentQtn == quizData.length - 1) {
        nextQuestionbtn.style.display = "none";
        submitequiz.style.display = "block";
    }

}
const reset = () => {
    allInputs.forEach((allInputs) => {
        allInputs.checked = false;
    })
}

nextQuestionbtn.addEventListener("click", () => {
    let answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQtn].correct) {
            console.log(`Correct answer recorded ${quizData[currentQtn].correct}, as ${answer}`)
            answerd++; 
        }
        currentQtn++;
        if (currentQtn < quizData.length) {
            loadQuiz();
        }
    }
});
submitequiz.addEventListener("click", () => {
    let answer = getSelected();
    if (answer === quizData[currentQtn].correct) {
        console.log(`On Submit, Correct answer recorded ${quizData[currentQtn].correct}, as ${answer}`)
        answerd++;
    };
    currentQtn++;
    if (getSelected()) {
        quiz.style.display = "none";
        resultEl.style.display = "block";
        scoreEl.innerHTML = `Question Answered Correctly  ${answerd} / ${quizData.length}`;
    }

});




const getSelected = () => {
    let answer;
    allInputs.forEach((allInputs) => {
        if (allInputs.checked) {
            answer = allInputs.value;
        }
    });
    return answer;
}
loadQuiz();



