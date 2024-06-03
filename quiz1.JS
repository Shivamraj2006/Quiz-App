const question = [
    {
        question: "Which is the largest country in the world?",
        answers: [
            { text: "India",correct: false},
            { text: "China",correct: false},
            { text: "Russia",correct: true},
            { text: "USA",correct: false},
        ],
        subject: "generalKnowledge" ,
        difficulty: 1
    },
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Elephant",correct: false},
            { text: "Shark",correct: false},
            { text: "Blue Whale",correct: true},
            { text: "Giraffe",correct: false},
        ],
        subject: "generalKnowledge" ,
        difficulty: 1
    },
    {
        question: "Which is the largest river in the world?",
        answers: [
            { text: "Ganga",correct: false},
            { text: "Nile",correct: false},
            { text: "Amazon",correct: true},
            { text: "Green River",correct: false},
        ],
        subject: "generalKnowledge" ,
        difficulty: 2
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia",correct: false},
            { text: "Europe",correct: false},
            { text: "Australia",correct: true},
            { text: "Africa",correct: false},
        ],
        subject: "generalKnowledge" ,
        difficulty: 2
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Bangladesh",correct: false},
            { text: "Vatican City",correct: true},
            { text: "Monaco",correct: false},
            { text: "England",correct: false},
        ],
        subject: "generalKnowledge" ,
        difficulty: 3
    },
    {
        question: "Which is the shortest river in the world?",
        answers: [
            { text: "Roe River",correct: true},
            { text: "Reprua",correct: false},
            { text: "Jordan River",correct: false},
            { text: "The Congo",correct: false},
        ],
        subject: "generalKnowledge" ,
        difficulty: 3
    },
    {
        question: "Which is the area of a circle of radius 7cm ?",
        answers: [
            { text: "154 cm",correct: true},
            { text: "112 cm",correct: false},
            { text: "49 cm",correct: false},
            { text: "14 cm",correct: false},
        ],
        subject: "Maths" ,
        difficulty: 1
    },
    {
        question: "Which is the area of a square of side 6cm ?",
        answers: [
            { text: "54 cm",correct: false},
            { text: "12 cm",correct: false},
            { text: "36 cm",correct: true},
            { text: "42 cm",correct: false},
        ],
        subject: "Maths" ,
        difficulty: 1
    },
    {
        question: "Which is the surface area of a hemi-sphere of radius 7cm ?",
        answers: [
            { text: "308 cm",correct: true},
            { text: "298 cm",correct: false},
            { text: "480 cm",correct: false},
            { text: "214 cm",correct: false},
        ],
        subject: "Maths" ,
        difficulty: 2
    },
    {
        question: "Which is the surface area of a cube of side 8cm ?",
        answers: [
            { text: "308 cm",correct: false},
            { text: "504 cm",correct: true},
            { text: "480 cm",correct: false},
            { text: "240 cm",correct: false},
        ],
        subject: "Maths" ,
        difficulty: 2
    },
    {
        question: "Which is the surface area of a cone of base-radius 7cm and height 12cm ?",
        answers: [
            { text: "308 cm",correct: false},
            { text: "246 cm",correct: false},
            { text: "480 cm",correct: false},
            { text: "298 cm",correct: true},
        ],
        subject: "Maths" ,
        difficulty: 3
    },
    {
        question: "Which is the volume of a cone of base-radius 7cm and height 12cm ?",
        answers: [
            { text: "508 cm",correct: false},
            { text: "616 cm",correct: true},
            { text: "480 cm",correct: false},
            { text: "598 cm",correct: false},
        ],
        subject: "Maths" ,
        difficulty: 3
    },
    {
        question: "Which is the most ductile metal ?",
        answers: [
            { text: "Gold",correct: true},
            { text: "Copper",correct: false},
            { text: "Iron",correct: false},
            { text: "Zinc",correct: false},
        ],
        subject: "Science" ,
        difficulty: 1
    },
    {
        question: "Which is the most conductive metal ?",
        answers: [
            { text: "Gold",correct: false},
            { text: "Copper",correct: false},
            { text: "Iron",correct: false},
            { text: "Silver",correct: true},
        ],
        subject: "Science" ,
        difficulty: 1
    },
    {
        question: "Which is the most electronegative element ?",
        answers: [
            { text: "Chlorine",correct: false},
            { text: "Hydrogen",correct: false},
            { text: "Flourine",correct: true},
            { text: "Nitrogen",correct: false},
        ],
        subject: "Science" ,
        difficulty: 2
    },
    {
        question: "Which of these is a metaloid ?",
        answers: [
            { text: "Galium",correct: true},
            { text: "Iron",correct: false},
            { text: "Aluminium",correct: false},
            { text: "Iridium",correct: false},
        ],
        subject: "Science" ,
        difficulty: 2
    },
    {
        question: "Which of these is the most inert ?",
        answers: [
            { text: "Oxygen",correct: false},
            { text: "Nitrogen",correct: false},
            { text: "Flourine",correct: false},
            { text: "Neon",correct: true},
        ],
        subject: "Science" ,
        difficulty: 3
    },
    {
        question: "Which metal exists in liquid state at room temperature ?",
        answers: [
            { text: "Cesium",correct: false},
            { text: "Copper",correct: false},
            { text: "Mercury",correct: true},
            { text: "Bromine",correct: false},
        ],
        subject: "Science" ,
        difficulty: 3
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const container = document.getElementById("container");
const random = document.getElementById("random");
const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");
const math = document.getElementById("maths")
const science = document.getElementById("science")
const gk = document.getElementById("gk")
const quizSelection = document.getElementById("quiz-selection");
const searchInput = document.getElementById("searchInput");
const quizType = document.getElementById("quizType");


let currentQuestionIndex = 0;
let score = 0;
let timer = 0;

let question1 = [];

function changeDisplay() {
    container.style.display = "flex";
    document.getElementById("start").style.display = "none";
    document.getElementById("status").style.display = "flex";
    startQuiz();
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    resetTimer();
    startTimer();
    let currentQuestion = question1[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    resetTimer();
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect"); 
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    let percent = Math.floor((score / question1.length) * 100);
    questionElement.innerHTML = `You scored ${score} out of ${question1.length}!   Percentage of questions solved : ${percent}%`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextbutton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question1.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < question1.length) {
        handleNextbutton();
    }else{
        startQuiz();
    }
})

var ele = document.getElementById('timer');
function startTimer(){
    var sec=0;
    var min=0;
    timer = setInterval(()=>{
        if(sec===60){
            min++; 
            sec=0;
        }
        ele.innerHTML = min+':'+sec;
        sec++;
    },1000)
}

function resetTimer(){
    clearInterval(timer);
}


random.addEventListener("click", ()=> {
    question1 = question.map(item => item);
    shuffleArray(question1);
    quizType.innerHTML = "Random Quiz";
    changeDisplay();
})

easy.addEventListener("click", ()=> {
    question1 = question.filter(item => item.difficulty === 1);
    shuffleArray(question1);
    quizType.innerHTML = "EASY Quiz";
    changeDisplay();
})

medium.addEventListener("click", ()=> {
    question1 = question.filter(item => item.difficulty === 2);
    shuffleArray(question1);
    quizType.innerHTML = "MEDIUM Quiz";
    changeDisplay();
})

hard.addEventListener("click", ()=> {
    question1 = question.filter(item => item.difficulty === 3);
    shuffleArray(question1);
    quizType.innerHTML = "HARD Quiz";
    changeDisplay();
})

math.addEventListener("click", ()=> {
    question1 = question.filter(item => item.subject === "Maths");
    quizType.innerHTML = "MATHEMATICS Quiz";
    if(confirm("Join MATHS Quiz"))
    changeDisplay();
})

gk.addEventListener("click", ()=> {
    question1 = question.filter(item => item.subject === "generalKnowledge");
    quizType.innerHTML = "GENERAL KNOWLEDGE Quiz";
    if(confirm("Join General Knowledge Quiz"))
    changeDisplay();
})

science.addEventListener("click", ()=> {
    question1 = question.filter(item => item.subject === "Science");
    quizType.innerHTML = "SCIENCE Quiz";
    if(confirm("Join Science Quiz"))
        changeDisplay();
})

function reloadPage() {
    window.location.reload();
    resetTimer();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const textSearch = searchInput.value.trim().toLowerCase();
      if (textSearch) {
        handleSearch(textSearch);
      }
    }
  });
  
function handleSearch(textSearch) {
    const availableQuizzes = ["maths", "general knowledge","science"];
    if (availableQuizzes.includes(textSearch)) {
      alert("Quiz found.\nEnter Quiz");
      if(textSearch === "maths")
        {question1 = question.filter(item => item.subject === "Maths");
      quizType.innerHTML = "MATHEMATICS Quiz"; 
      changeDisplay();
    }
      else if(textSearch === "science") 
           { question1 = question.filter(item => item.subject === "Science");
      quizType.innerHTML = "SCIENCE Quiz";
            changeDisplay();
        }
        else 
               { question1 = question.filter(item => item.subject === "generalKnowledge");
               quizType.innerHTML = "GENERAL KNOWLEDGE Quiz";
               changeDisplay();
            }
}
 else {
      alert("Quiz not found. Please check for typo");
    }
  }

