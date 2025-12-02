const questions = [
  {
    category: "Math",
    question: "What is 5 + 3?",
    choices: ["7", "8", "9"],
    answer: "8"
  },
  {
    category: "Science",
    question: "What gas do plants absorb?",
    choices: ["Oxygen", "Carbon Dioxide", "Nitrogen"],
    answer: "Carbon Dioxide"
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin"],
    answer: "Paris"
  },
  {
    category: "Programming",
    question: "Which language runs in a web browser?",
    choices: ["JavaScript", "Python", "C++"],
    answer: "JavaScript"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["George Washington", "Abraham Lincoln", "John Adams"],
    answer: "George Washington"
  }
];

function getRandomQuestion(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function getRandomComputerChoice(choicesArr) {
  const randomIndex = Math.floor(Math.random() * choicesArr.length);
  return choicesArr[randomIndex];
}

function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}
