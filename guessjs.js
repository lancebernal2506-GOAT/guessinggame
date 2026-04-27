const BONUS_UNLOCK_SCORE = 25;
const TOTAL_SCORE_KEY = "guessing-game-total-score";
const BONUS_COMPLETED_KEY = "guessing-game-bonus-completed";

const GAME_MODES = {
  easy: {
    label: "Easy",
    theme: "General Knowledge",
    answerTime: 17,
    questions: [
      {
        prompt: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Venus", "Jupiter", "Mercury"],
        answer: "Mars"
      },
      {
        prompt: "What is the largest mammal in the world?",
        choices: ["Elephant", "Blue whale", "Giraffe", "Hippopotamus"],
        answer: "Blue whale"
      },
      {
        prompt: "How many days are there in a leap year?",
        choices: ["364", "365", "366", "367"],
        answer: "366"
      },
      {
        prompt: "Which ocean is the biggest on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
      },
      {
        prompt: "What do bees mainly collect from flowers?",
        choices: ["Sand", "Nectar", "Snow", "Pebbles"],
        answer: "Nectar"
      },
      {
        prompt: "Which shape has three sides?",
        choices: ["Square", "Circle", "Triangle", "Rectangle"],
        answer: "Triangle"
      },
      {
        prompt: "What gas do humans need to breathe to stay alive?",
        choices: ["Hydrogen", "Carbon dioxide", "Oxygen", "Helium"],
        answer: "Oxygen"
      },
      {
        prompt: "Which instrument usually has black and white keys?",
        choices: ["Drum", "Piano", "Violin", "Trumpet"],
        answer: "Piano"
      },
      {
        prompt: "What is the freezing point of water in Celsius?",
        choices: ["0", "10", "32", "100"],
        answer: "0"
      },
      {
        prompt: "Which animal is famous for carrying its house on its back?",
        choices: ["Rabbit", "Snail", "Frog", "Cat"],
        answer: "Snail"
      }
    ]
  },
  medium: {
    label: "Medium",
    theme: "Filipino Cuisine",
    answerTime: 13,
    questions: [
      {
        prompt: "Which Filipino dish is often called the country's unofficial national dish?",
        choices: ["Adobo", "Sinigang", "Kare-kare", "Laing"],
        answer: "Adobo"
      },
      {
        prompt: "What souring agent is commonly used in sinigang?",
        choices: ["Tamarind", "Chocolate", "Soy sauce", "Annatto"],
        answer: "Tamarind"
      },
      {
        prompt: "Which rice cake is traditionally purple because of ube?",
        choices: ["Puto bumbong", "Bibingka", "Kutsinta", "Sapin-sapin"],
        answer: "Puto bumbong"
      },
      {
        prompt: "Kare-kare is best known for having what kind of sauce?",
        choices: ["Tomato sauce", "Peanut sauce", "Coconut sauce", "Vinegar sauce"],
        answer: "Peanut sauce"
      },
      {
        prompt: "Which crispy pork dish is famous in Cebu?",
        choices: ["Lechon", "Tinola", "Dinuguan", "Bistek"],
        answer: "Lechon"
      },
      {
        prompt: "What is the main protein in the dish chicken inasal?",
        choices: ["Pork", "Beef", "Chicken", "Fish"],
        answer: "Chicken"
      },
      {
        prompt: "Which dessert usually combines shaved ice, milk, and mixed sweet ingredients?",
        choices: ["Leche flan", "Halo-halo", "Turon", "Buko pie"],
        answer: "Halo-halo"
      },
      {
        prompt: "Sisig is traditionally made from chopped pork and served on what kind of plate?",
        choices: ["Wooden plate", "Glass tray", "Sizzling plate", "Banana leaf bowl"],
        answer: "Sizzling plate"
      },
      {
        prompt: "What wrapping is commonly used for suman?",
        choices: ["Nori", "Cabbage leaves", "Banana leaves", "Parchment paper"],
        answer: "Banana leaves"
      },
      {
        prompt: "What sweet yellow fruit is often used in turon?",
        choices: ["Mango", "Jackfruit", "Pineapple", "Papaya"],
        answer: "Jackfruit"
      }
    ]
  },
  hard: {
    label: "Hard",
    theme: "Filipino Singers, Bands, and Rappers",
    answerTime: 10,
    questions: [
      {
        prompt: "Which Filipino rapper is known for the hit song 'Pauwi Nako' with Flow G?",
        choices: ["Skusta Clee", "Al James", "Because", "Pricetagg"],
        answer: "Skusta Clee"
      },
      {
        prompt: "Which band is known for the songs 'Kathang Isip' and 'Leaves'?",
        choices: ["Ben&Ben", "The Juans", "December Avenue", "Cup of Joe"],
        answer: "Ben&Ben"
      },
      {
        prompt: "Which of these OPM artists is a solo singer-songwriter rather than a band?",
        choices: ["Moira Dela Torre", "Ben&Ben", "Rivermaya", "Kamikazee"],
        answer: "Moira Dela Torre"
      },
      {
        prompt: "Who is the Filipino singer behind the songs 'PAPALAYO' and 'Isa Dalawa Tatlo'?",
        choices: ["Zack Tabudlo", "TJ Monterde", "Dionela", "Arthur Nery"],
        answer: "Zack Tabudlo"
      },
      {
        prompt: "Which artist sang the viral hit 'Pasilyo' as part of the band SunKissed Lola?",
        choices: ["Juan Karlos", "Maki", "Norman Dellosa", "Adie"],
        answer: "Norman Dellosa"
      },
      {
        prompt: "Which rapper is known for the song 'KG'?",
        choices: ["Nik Makino", "Flow G", "Hev Abi", "Loonie"],
        answer: "Nik Makino"
      },
      {
        prompt: "Which Filipina pop star is known for the hit song 'Tala'?",
        choices: ["BINI", "Sarah Geronimo", "Nadine Lustre", "Ylona Garcia"],
        answer: "Sarah Geronimo"
      },
      {
        prompt: "Which P-pop girl group popularized the songs 'Pantropiko' and 'Salamin, Salamin'?",
        choices: ["4th Impact", "G22", "BINI", "Kaia"],
        answer: "BINI"
      },
      {
        prompt: "Which Filipino singer-songwriter is behind the song '153'?",
        choices: ["Adie", "TJ Monterde", "Dionela", "Arthur Nery"],
        answer: "Dionela"
      },
      {
        prompt: "Which artist is known for the song 'Aura'?",
        choices: ["Arthur Nery", "Juan Karlos", "Unique Salonga", "Adie"],
        answer: "Unique Salonga"
      }
    ]
  },
  bonus: {
    label: "Bonus",
    theme: "...",
    answerTime: 11,
    questions: [
      {
        prompt: "Which of these international bands is my favorite?",
        choices: ["Queen", "The Beatles", "Air Supply", "AC/DC"],
        answer: "Queen"
      },
      {
        prompt: "Which of these is my favorite hobby?",
        choices: ["Watching anime", "Gaming", "Eating", "Sleeping"],
        answer: "Gaming"
      },
      {
        prompt: "My favorite anime of all time?",
        choices: ["Naruto", "JJBA", "One Piece", "Death Note"],
        answer: "One Piece"
      },
      {
        prompt: "When did I started listening to Zild?",
        choices: ["January 2025", "May 2025", "August 2023", "October 2024"],
        answer: "October 2024"
      },
      {
        prompt: "My favorite genggeng song right now?",
        choices: ["Marikit sa Dilim", "Boyfriend", "Para sa Streets", "Walang Tayo"],
        answer: "Boyfriend"
      },
      {
        prompt: "My favorite Zack Tabudlo song?",
        choices: ["Binibini", "For you", "Habang Buhay", "Pulso"],
        answer: "Habang Buhay"
      },
      {
        prompt: "My favorite chips?",
        choices: ["Cheezy", "Oishi Potato Chip", "Piknik", "Doritos"],
        answer: "Oishi Potato Chip"
      },
      {
        prompt: "My favorite Selecta ice cream flavor?",
        choices: ["Super Thick Vanilla", "Strawberries N' Cream", "Coffee Crumble", "Cookies and Cream"],
        answer: "Coffee Crumble"
      },
      {
        prompt: "My favorite dog breed?",
        choices: ["Chihuahua", "Golden Retriever", "K9", "Pomeranian"],
        answer: "Golden Retriever"
      },
      {
        prompt: "Which of these videogames I like the most?",
        choices: ["Naruto Ultimate Ninja Storm 4", "Ghost of Tsushima", "Valorant", "Stardew Valley"],
        answer: "Naruto Ultimate Ninja Storm 4"
      }
    ]
  }
};

const screens = {
  menu: document.getElementById("menuScreen"),
  game: document.getElementById("gameScreen"),
  result: document.getElementById("resultScreen"),
  letter: document.getElementById("letterScreen"),
  secret: document.getElementById("secretScreen")
};

const modeLabel = document.getElementById("modeLabel");
const questionCounter = document.getElementById("questionCounter");
const scoreValue = document.getElementById("scoreValue");
const timerValue = document.getElementById("timerValue");
const phaseLabel = document.getElementById("phaseLabel");
const questionText = document.getElementById("questionText");
const feedbackText = document.getElementById("feedbackText");
const choicesContainer = document.getElementById("choicesContainer");
const nextButton = document.getElementById("nextButton");
const menuButton = document.getElementById("menuButton");
const resultTitle = document.getElementById("resultTitle");
const resultSummary = document.getElementById("resultSummary");
const playAgainButton = document.getElementById("playAgainButton");
const resultMenuButton = document.getElementById("resultMenuButton");
const bonusModeCard = document.getElementById("bonusModeCard");
const letterMenuButton = document.getElementById("letterMenuButton");
const letterArrowButton = document.getElementById("letterArrowButton");
const messageButton = document.getElementById("messageButton");
const appShell = document.querySelector(".app-shell");
const secretStage = document.querySelector(".secret-stage");
const secretEnvelopeButton = document.getElementById("secretEnvelopeButton");

let currentMode = null;
let currentModeKey = null;
let currentQuestionIndex = 0;
let score = 0;
let totalScore = getStoredTotalScore();
let revealInterval = null;
let answerInterval = null;
let canAnswer = false;
let showBonusMessage = false;
let bonusCompleted = getBonusCompletedState();

function getStoredTotalScore() {
  const savedValue = Number.parseInt(localStorage.getItem(TOTAL_SCORE_KEY) || "0", 10);
  return Number.isNaN(savedValue) ? 0 : savedValue;
}

function saveTotalScore() {
  localStorage.setItem(TOTAL_SCORE_KEY, String(totalScore));
}

function getBonusCompletedState() {
  return localStorage.getItem(BONUS_COMPLETED_KEY) === "true";
}

function saveBonusCompletedState() {
  localStorage.setItem(BONUS_COMPLETED_KEY, String(bonusCompleted));
}

function isBonusUnlocked() {
  return totalScore >= BONUS_UNLOCK_SCORE;
}

function updateBonusVisibility() {
  bonusModeCard.hidden = !isBonusUnlocked();
}

function updateMessageButton() {
  const onMenuScreen = screens.menu.classList.contains("active");
  const isPlayingFirstBonusRun = currentModeKey === "bonus" && !bonusCompleted && screens.game.classList.contains("active");
  const canShowOnMenu = onMenuScreen && isBonusUnlocked() && bonusCompleted;
  messageButton.hidden = isPlayingFirstBonusRun || !(showBonusMessage || canShowOnMenu);
}

function showScreen(screenName) {
  Object.entries(screens).forEach(([key, screen]) => {
    screen.classList.toggle("active", key === screenName);
  });
}

function clearTimers() {
  clearInterval(revealInterval);
  clearInterval(answerInterval);
}

function startGame(modeKey) {
  if (modeKey === "bonus" && !isBonusUnlocked()) {
    return;
  }

  appShell.classList.remove("clearing", "show-letter", "show-secret");
  secretStage.classList.remove("open");
  showBonusMessage = false;
  updateMessageButton();
  currentMode = GAME_MODES[modeKey];
  currentModeKey = modeKey;
  currentQuestionIndex = 0;
  score = 0;
  scoreValue.textContent = score;
  modeLabel.textContent = `${currentMode.label} | ${currentMode.theme}`;
  showScreen("game");
  renderQuestion();
}

function renderQuestion() {
  clearTimers();
  canAnswer = false;
  feedbackText.textContent = "";
  choicesContainer.innerHTML = "";
  nextButton.hidden = true;

  const currentQuestion = currentMode.questions[currentQuestionIndex];
  questionCounter.textContent = `${currentQuestionIndex + 1} / ${currentMode.questions.length}`;
  questionText.textContent = currentQuestion.prompt;
  showChoices();
}

function showChoices() {
  const currentQuestion = currentMode.questions[currentQuestionIndex];
  phaseLabel.textContent = "Choose your answer now.";
  canAnswer = true;

  currentQuestion.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.textContent = choice;
    button.addEventListener("click", () => handleAnswer(choice, button));
    choicesContainer.appendChild(button);
  });

  let answerTimeLeft = currentMode.answerTime;
  timerValue.textContent = answerTimeLeft;

  answerInterval = setInterval(() => {
    answerTimeLeft -= 1;
    timerValue.textContent = Math.max(answerTimeLeft, 0);

    if (answerTimeLeft <= 0) {
      clearInterval(answerInterval);
      handleTimeout();
    }
  }, 1000);
}

function handleAnswer(selectedChoice, selectedButton) {
  if (!canAnswer) {
    return;
  }

  clearInterval(answerInterval);
  canAnswer = false;

  const currentQuestion = currentMode.questions[currentQuestionIndex];
  const buttons = [...choicesContainer.querySelectorAll(".choice-button")];

  buttons.forEach((button) => {
    button.disabled = true;

    if (button.textContent === currentQuestion.answer) {
      button.classList.add("correct");
    }
  });

  if (selectedChoice === currentQuestion.answer) {
    score += 1;
    totalScore += 1;
    saveTotalScore();
    scoreValue.textContent = score;
    feedbackText.textContent = "Correct answer!";
  } else {
    selectedButton.classList.add("incorrect");
    feedbackText.textContent = `Not quite. The correct answer was ${currentQuestion.answer}.`;
  }

  phaseLabel.textContent = "Answer locked in.";
  showNextStep();
}

function handleTimeout() {
  if (!canAnswer) {
    return;
  }

  canAnswer = false;
  const currentQuestion = currentMode.questions[currentQuestionIndex];
  const buttons = [...choicesContainer.querySelectorAll(".choice-button")];

  buttons.forEach((button) => {
    button.disabled = true;
    if (button.textContent === currentQuestion.answer) {
      button.classList.add("correct");
    }
  });

  phaseLabel.textContent = "Time's up.";
  feedbackText.textContent = `The correct answer was ${currentQuestion.answer}.`;
  showNextStep();
}

function showNextStep() {
  const isLastQuestion = currentQuestionIndex === currentMode.questions.length - 1;
  nextButton.textContent = isLastQuestion ? "See Results" : "Next Question";
  nextButton.hidden = false;
}

function goToNextQuestion() {
  if (currentQuestionIndex === currentMode.questions.length - 1) {
    showResults();
    return;
  }

  currentQuestionIndex += 1;
  renderQuestion();
}

function showResults() {
  clearTimers();
  showScreen("result");
  updateBonusVisibility();
  showBonusMessage = currentModeKey === "bonus";
  if (currentModeKey === "bonus") {
    bonusCompleted = true;
    saveBonusCompletedState();
  }
  updateMessageButton();

  const totalQuestions = currentMode.questions.length;
  const percentage = Math.round((score / totalQuestions) * 100);

  if (percentage === 100) {
    resultTitle.textContent = "Perfect score!";
  } else if (percentage >= 70) {
    resultTitle.textContent = "Nice job!";
  } else if (percentage >= 40) {
    resultTitle.textContent = "Good try!";
  } else {
    resultTitle.textContent = "Keep practicing!";
  }

  if (isBonusUnlocked()) {
    resultSummary.textContent =
      `You answered ${score} out of ${totalQuestions} questions correctly in ${currentMode.label} mode. Bonus Round is now unlocked.`;
  } else {
    const pointsNeeded = BONUS_UNLOCK_SCORE - totalScore;
    resultSummary.textContent =
      `You answered ${score} out of ${totalQuestions} questions correctly in ${currentMode.label} mode. Total points: ${totalScore}. Earn ${pointsNeeded} more to unlock the Bonus Round.`;
  }
}

function backToMenu() {
  clearTimers();
  currentMode = null;
  currentModeKey = null;
  showBonusMessage = false;
  appShell.classList.remove("clearing", "show-letter", "show-secret");
  secretStage.classList.remove("open");
  updateBonusVisibility();
  showScreen("menu");
  updateMessageButton();
}

function showLetter() {
  showBonusMessage = false;
  updateMessageButton();
  appShell.classList.add("clearing");

  window.setTimeout(() => {
    appShell.classList.remove("clearing");
    appShell.classList.remove("show-secret");
    appShell.classList.add("show-letter");
    showScreen("letter");
    updateMessageButton();
  }, 650);
}

function showSecretStage() {
  appShell.classList.add("clearing");

  window.setTimeout(() => {
    appShell.classList.remove("clearing");
    appShell.classList.remove("show-letter");
    appShell.classList.add("show-secret");
    secretStage.classList.remove("open");
    showScreen("secret");
  }, 650);
}

function openSecretLetter() {
  secretStage.classList.add("open");
}

document.querySelectorAll(".mode-card").forEach((button) => {
  button.addEventListener("click", () => startGame(button.dataset.mode));
});

updateBonusVisibility();
updateMessageButton();

nextButton.addEventListener("click", goToNextQuestion);
menuButton.addEventListener("click", backToMenu);
playAgainButton.addEventListener("click", () => {
  if (currentModeKey) {
    startGame(currentModeKey);
  }
});
resultMenuButton.addEventListener("click", backToMenu);
letterMenuButton.addEventListener("click", backToMenu);
letterArrowButton.addEventListener("click", showSecretStage);
messageButton.addEventListener("click", showLetter);
secretEnvelopeButton.addEventListener("click", openSecretLetter);
