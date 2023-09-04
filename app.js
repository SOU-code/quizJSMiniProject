const qna = [
  {
    question: "Who am I ?",
    options: [
      { answer: "Souvik", value: true },
      { answer: "Sanju", value: false },
      { answer: "Sou", value: false },
      { answer: "Sjuan", value: false },
    ],
  },
  {
    question: "How old are me?",
    options: [
      { answer: 21, value: false },
      { answer: 22, value: false },
      { answer: 25, value: false },
      { answer: 23, value: true },
    ],
  },
  {
    question: "Name of my College?",
    options: [
      { answer: "ju", value: false },
      { answer: "hit", value: false },
      { answer: "gcelt", value: true },
      { answer: "msit", value: false },
    ],
  },
  {
    question: "Who am I 4?",
    options: [
      { answer: "4Sanju-123", value: false },
      { answer: "4Souvik@Ma", value: true },
      { answer: "4Sou-Code", value: false },
      { answer: "4Sou-Dev", value: false },
    ],
  },
];
const question = document.querySelector(".questions");
const answers = document.querySelector(".answers");
const next = document.querySelector(".next");
const cover = document.querySelector(".cover");
function showQuestion(CurrentQuestion, maxQuestion, obtainedMarks) {
  resetState();
  if (CurrentQuestion >= maxQuestion) {
    question.innerHTML = ` You got ${obtainedMarks} out of ${maxQuestion} !!`;
  }

  question.innerHTML =
    CurrentQuestion + 1 + ". " + qna[CurrentQuestion].question;
  const totalOptions = qna[CurrentQuestion].options.length;
  for (let i = 0; i < totalOptions; i++) {
    const btn = document.createElement("button");
    btn.classList.add("btnOp");
    btn.protype = qna[CurrentQuestion].options[i];
    btn.innerText = btn.protype.answer;
    answers.appendChild(btn);
  }
  chooseAnswer(CurrentQuestion, maxQuestion, obtainedMarks);
}
function resetState() {
  next.style.display = "none";
  cover.style.display = "none";
  while (answers.firstChild) {
    answers.removeChild(answers.firstChild);
  }
}
function chooseAnswer(CurrentQuestion, maxQuestion, obtainedMarks) {
  answers.addEventListener("click", (e) => {
    if (e.target.tagName == "BUTTON") {
      if (e.target.protype.value) {
        e.target.classList.add("correct");
        obtainedMarks++;
      } else {
        e.target.classList.add("incorrect");
        findCorrect();
      }
      next.style.display = "block";
      cover.style.display = "block";
      const nextBtn = document.querySelector(".next button");
      if (CurrentQuestion == maxQuestion - 1) {
        nextBtn.innerText = "Submit";
      }
      nextBtn.addEventListener("click", () => {
        console.log(CurrentQuestion);
        CurrentQuestion++;
        console.log(CurrentQuestion);
        showQuestion(CurrentQuestion, maxQuestion, obtainedMarks);
      });
    }
  });
}
function findCorrect() {
  const allOptions = document.querySelectorAll(".answers button");
  allOptions.forEach((element) => {
    if (element.protype.value) {
      element.classList.add("correct");
    }
  });
}
function startQuiz() {
  let CurrentQuestion = 0;
  const maxQuestion = qna.length;
  let obtainedMarks = 0;
  showQuestion(CurrentQuestion, maxQuestion, obtainedMarks);
}
startQuiz();
