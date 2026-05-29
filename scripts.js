const operations = ["+", "-", "*", "/"];

let num1, num2, operator, correctAnswer;
let score = 0;

function generateQuestion() {
  num1 = Math.floor(Math.random() * 11);
  num2 = Math.floor(Math.random() * 11);
  operator = operations[Math.floor(Math.random() * operations.length)];

  switch (operator) {
    case "+": correctAnswer = num1 + num2; break;
    case "-": correctAnswer = num1 - num2; break;
    case "*": correctAnswer = num1 * num2; break;
    case "/":
      if (num2 === 0) num2 = 1;
      correctAnswer = num1 / num2;
      break;
  }

  document.getElementById("question").textContent = `${num1} ${operator} ${num2}`;
  document.getElementById("answer").value = "";
}

function checkAnswer() {
  const input = Number(document.getElementById("answer").value);
  const messageEl = document.getElementById("message");

  const savedAnswer = correctAnswer; // save it before generating new question
  generateQuestion();

  if (input === savedAnswer) {
    score++;
    document.getElementById("score").textContent = score;
    messageEl.style.color = "green";
    messageEl.textContent = "Correct!";
  } else {
    messageEl.style.color = "red";
    messageEl.textContent = `Wrong! Correct answer is ${savedAnswer}.`;
  }

  if (score >= 5) {
    document.getElementById("div-questions").style.display = "none";
    document.getElementById("div-success").style.display = "block";
  }
}

function playAgain() {
  score = 0;
  document.getElementById("score").textContent = score;
  document.getElementById("message").textContent = "";
  document.getElementById("div-success").style.display = "none";
  document.getElementById("div-questions").style.display = "block";
  generateQuestion();
}

generateQuestion();
