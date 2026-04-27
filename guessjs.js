const BONUS_UNLOCK_SCORE = 25;
const TOTAL_SCORE_KEY = "guessing-game-total-score";
const BONUS_COMPLETED_KEY = "guessing-game-bonus-completed";
const SECRET_LETTER_TITLE = "For you, Lil Faith.";
const SECRET_LETTER_PARAGRAPHS = [
  "Hello, panget HAHAHAHA de joke lang. I'm writing this kase di ka naniniwala na may feelings ako sayo pero if i was in your shoes, I'd do the same thing din sa ginagawa mo. Yes, I'm not joking and yes, I do like you, Faith. Pero bago ang lahat, let's go back to 2024.",
  "Nung una unang weeks ng 2nd year, I was attracted to you kasi nga, cute ka kinginang mukha kasi yan. So naging crush kita and that only lasted for a week kasi nga, bf mo si Josh that time. Edi after non, uncrush, 2nd year stuffs and Maui and bla bla and si ex mu. To be clear lang ha, wala na talaga akong kahit anong feelings sayo at that point kaya yon pero wag ka muna tumigil mag basa.",
  "3rd year, hardest year in our curriculum and yeah, i don't know why but suddenly, i found myself slowly liking you again. At first, i was confused. As in di ko alam kung bakit ganun nararamdaman ko kaya pinilit kong alamin kung bakit kita crush and as I got to know you better, it became clear. I liked your personality, confidence, kindness, leadership, perseverance, and beauty. Nag start siya alam ko from August. I approached you and tried to be close to you. Akala ko may progress ako nun kasi ang bait mo kasi and I assumed some things na di pala dapat inaassume hahaha. I thought it was going fine until I saw you mentioning Hulyo to your notes and posting him to your stories.",
  "I'll admit, i got jealous so I started monitoring your notes and stories mula non. Tapos non, i think last week ng August or first day ng September, you posted a story of you and Hulyo eating somewhere. I remember talking to Maui that night nung nakita ko yun and i was having doubts kung kayo nga. Iniisip namin ni Maui na friend lang talaga kayo but the next day, nagsend sakin si Maui ng chats niyo sa gc kasi nahot seat ka ni Buri non and yon sinend sakin tas naconfirm na namin. I got heartbroken nung nakita ko yon but i played it off kase, bakit ko ba naramdaman yon diba? Pero yeah it's alright, shit happens.",
  "Then after non, okay lang naman ako, naka get over naman plus, I'm happy for you kasi may potential bf ka na and naging close friends us which is good and I still cherish it until now. Di ko na include nung nag open up ka kay Hulyo nung November kasi di naman bumalik feelings ko non tsaka irrelevant siya.",
  "Naalala mo nung nag kwento ko about sayo nung readings ko sa tarot? Yung if magkaka love life ba ko this year? Sana naalala mo kase at that point, naiisip na naman kita ulit. Actually, 1 week before pa nung tarot, bumabalik na naman yung di maipaliwanag na feeling na yun. March 22 or 23, i started the flirt kase wala lang, andun na e tsaka gusto rin kitang asarin and yun nga, merong bumabalik na feeling.",
  "On March 24, nakwento ko ung sa tarot and nag usap us slight about sa feelings ko. Totoo sinabi ko sayo non, talagang hindi ako sure sa feelings ko, na parang may something pa sa akin na di ko ma figure out kaya di ako makapasok sa rel ulit. I tried my hardest na pigilan ulit magustuhan ka kasi nga, I'm liking you again but for what reason? I was trying to figure out why i feel that way again. Ayoko kasing umamin na gusto kita tapos wala akong dahilan diba? parang trippings lang kung ganun man nangyari.",
  "I even tried to distance myself to you during holy week kasi i thought na baka pag nilayuan kita, mawala feelings ko pero mas lumalala siya. Lagi kitang iniisip, lagi kitang hinahanap. Because of that and considering other stuff, there was no other answer.",
  "I like you.",
  "I find your cheerful nature really charming, and I admire how much you care about others. Whenever I open up to you, you're always so attentive and make me feel truly heard. Your comforting words have a way of soothing me, and it means more than I can explain. The way you speak, laugh, smile, and just be yourself, it honestly makes my heart flutter. I also really admire your strength. No matter how hard life gets, you keep pushing forward, and that inspires me a lot. There are probably so many more reasons, but these are the ones I can put into words for now.",
  "My type on a girl isn't Maui, it's you. Mabait, masipag, matalino, emotionally intelligent, caring, sweet, supportive, morena.",
  "Sinubukan kong kabisaduhin ka kasi gusto kong maalagaan ka ng maayos at saka ganun talaga e, gusto kita e hays. Also sinusubukan ko rin maging better as a person because i want to give you the best version of me. Ayaw na kitang makitang masaktan ng lalaki kasi i know to myself na hindi kita masasaktan. I want to show you and make you feel what love means again. I know na di ka pa ready ulit sa relationship and focus ka sa sarili mo and I'm probably not your type but you're the risk I'm willing to take because I know that you are worth it.",
  "You're one of a kind, Faith, you deserve every good thing this world has to offer and if you'll allow me, without any rush and pressure, I want to pursue you to prove myself worthy of your love. I assure you, i have a genuine intention with you, to love you the way you deserved to be.",
  "Ge na, minsan lang e, payag ka na, charot.",
  "If masira man friendship natin because of this, it's okay. It's not your fault kasi di naman ikaw yung na fall e huhu pero I'll forever cherish our friendship parin. One of the best friendships I have, to be honest.",
  "My original plan was to give you a handwritten confession letter but since I can't come with you guys sa Manila, I decided to exert all of my efforts to create this website to confess my feelings to you. I hope you like it and I hope it shows how much I care for you. I know this is a lot to take in, so take all the time you need to process this. I'll be here, supporting you no matter what.",
  "Hays, good luck with everything po, kakayanin natin ojt and 4th year. Walang susuko ha, dapat mag graduate tayo next year bro."
];

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
const instructionsButton = document.getElementById("instructionsButton");
const instructionsPanel = document.getElementById("instructionsPanel");
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
const secretPaper = document.getElementById("secretPaper");

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
  renderSecretLetter();
  secretStage.classList.add("open");
}

function renderSecretLetter() {
  if (secretPaper.dataset.ready === "true") {
    return;
  }

  const eyebrow = document.createElement("p");
  eyebrow.className = "eyebrow";
  eyebrow.textContent = "My Confession";
  secretPaper.appendChild(eyebrow);

  const title = document.createElement("h2");
  title.textContent = SECRET_LETTER_TITLE;
  secretPaper.appendChild(title);

  SECRET_LETTER_PARAGRAPHS.forEach((text) => {
    const paragraph = document.createElement("p");
    paragraph.className = "letter-text";
    paragraph.textContent = text;
    secretPaper.appendChild(paragraph);
  });

  secretPaper.dataset.ready = "true";
}

function toggleInstructions() {
  instructionsPanel.hidden = !instructionsPanel.hidden;
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
instructionsButton.addEventListener("click", toggleInstructions);
