const questions = [
  {
    question: "Qual é o maior oceano do mundo?",
    answers: [
      { text: "Oceano Atlântico", correct: false },
      { text: "Oceano Índico", correct: false },
      { text: "Oceano Ártico", correct: false },
      { text: "Oceano Pacífico", correct: true },
    ],
  },
  {
    question:
      "Qual planeta do nosso sistema solar é conhecido como o 'Planeta Vermelho'?",
    answers: [
      { text: "Júpiter", correct: false },
      { text: "Marte", correct: true },
      { text: "Vênus", correct: false },
      { text: "Saturno", correct: false },
    ],
  },
  {
    question: "Quem foi o primeiro imperador do Brasil?",
    answers: [
      { text: "Dom Pedro II", correct: false },
      { text: "Dom João VI", correct: false },
      { text: "Dom Pedro I", correct: true },
      { text: "Marechal Deodoro da Fonseca", correct: false },
    ],
  },
  {
    question:
      "Qual elemento químico é representado pelo símbolo 'O' na tabela periódica?",
    answers: [
      { text: "Ouro", correct: false },
      { text: "Ósmio", correct: false },
      { text: "Oxigênio", correct: true },
      { text: "Oligoceno", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
