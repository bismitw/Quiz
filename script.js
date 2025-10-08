// DOM elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizQuestions = [
  {
    question: "Who played Ariadne in the 2010 film Inception?",
    answers: [
      { text: "Winona Ryder", correct: false },
      { text: "Marion Cotillard", correct: false },
      { text: "Elliot Page", correct: true },
      { text: "Salma Hayek", correct: false },
    ],
  },
  {
    question: "What fictional mineral was sought by the Sky People in Avatar?",
    answers: [
      { text: "Vibranium", correct: false },
      { text: "Mithril", correct: false },
      { text: "Unobtainium", correct: true },
      { text: "Adamantium", correct: false },
    ],
  },
  {
    question: "Who was King of England when the Magna Carta was created?",
    answers: [
      { text: "King Richard I", correct: false },
      { text: "King John", correct: true },
      { text: "King Edward I", correct: false },
      { text: "King Henry III", correct: false },
    ],
  },
  {
    question: "When did Joseph Stalin become the leader of the Soviet Union?",
    answers: [
      { text: "1914", correct: false },
      { text: "1924", correct: true },
      { text: "1934", correct: false },
      { text: "1944", correct: false },
    ],
  },
  {
    question: "Which novel explores the racial and social issues in the Southern United States during the 1930s?",
    answers: [
      { text: "To Kill a Mockingbird", correct: true },
      { text: "Gone with the Wind", correct: false },
      { text: "The Grapes of Wrath", correct: false },
      { text: "Invisible Man", correct: false },
    ],
  },
];

// Quiz state vars
let currentQuestionIndex = 0;