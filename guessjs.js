const BONUS_UNLOCK_SCORE = 25;

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
const paperSeed = [
  "PHAgY2xhc3M9ImV5ZWJyb3ciPk15IENvbmZlc3Npb248L3A+CiAgICAgICAgICAgIDxoMj5Gb3IgeW91LCBMaWwgRmFpdGguPC9o",
  "Mj4KICAgICAgICAgICAgPHAgY2xhc3M9ImxldHRlci10ZXh0Ij4KICAgICAgICAgICAgICBIZWxsbywgcGFuZ2V0IEhBSEFIQUhB",
  "IGRlIGpva2UgbGFuZy4gSSdtIHdyaXRpbmcgdGhpcyBrYXNlIGRpIGthIG5hbmluaXdhbGEgbmEgbWF5IGZlZWxpbmdzIGFrbyBz",
  "YXlvIHBlcm8gaWYgaSB3YXMgaW4geW91ciBzaG9lcywgSSdkIGRvIHRoZSBzYW1lIHRoaW5nIGRpbiBzYSBnaW5hZ2F3YSBtby4g",
  "WWVzLCBJJ20gbm90IGpva2luZyBhbmQgeWVzLCBJIGRvIGxpa2UgeW91LCBGYWl0aC4gUGVybyBiYWdvIGFuZyBsYWhhdCwgbGV0",
  "J3MgZ28gYmFjayB0byAyMDI0LgogICAgICAgICAgICA8L3A+CiAgICAgICAgICAgIDxwIGNsYXNzPSJsZXR0ZXItdGV4dCI+CiAg",
  "ICAgICAgICAgICAgTnVuZyB1bmEgdW5hbmcgd2Vla3MgbmcgMm5kIHllYXIsIEkgd2FzIGF0dHJhY3RlZCB0byB5b3Uga2FzaSBu",
  "Z2EsIGN1dGUga2Ega2luZ2luYW5nIG11a2hhIGthc2kgeWFuLiBTbyBuYWdpbmcgY3J1c2gga2l0YSBhbmQgdGhhdCBvbmx5IGxh",
  "c3RlZCBmb3IgYSB3ZWVrIGthc2kgbmdhLCBiZiBtbyBzaSBKb3NoIHRoYXQgdGltZS4gRWRpIGFmdGVyIG5vbiwgdW5jcnVzaCwg",
  "Mm5kIHllYXIgc3R1ZmZzIGFuZCBNYXVpIGFuZCBibGEgYmxhIGFuZCBzaSBleCBtdS4gVG8gYmUgY2xlYXIgbGFuZyBoYSwgd2Fs",
  "YSBuYSB0YWxhZ2EgYWtvbmcga2FoaXQgYW5vbmcgZmVlbGluZ3Mgc2F5byBhdCB0aGF0IHBvaW50IGtheWEgeW9uIHBlcm8gd2Fn",
  "IGthIG11bmEgdHVtaWdpbCBtYWcgYmFzYS4KICAgICAgICAgICAgPC9wPgogICAgICAgICAgICA8cCBjbGFzcz0ibGV0dGVyLXRl",
  "eHQiPgogICAgICAgICAgICAgIDNyZCB5ZWFyLCBoYXJkZXN0IHllYXIgaW4gb3VyIGN1cnJpY3VsdW0gYW5kIHllYWgsIGkgZG9u",
  "J3Qga25vdyB3aHkgYnV0IHN1ZGRlbmx5LCBpIGZvdW5kIG15c2VsZiBzbG93bHkgbGlraW5nIHlvdSBhZ2Fpbi4gQXQgZmlyc3Qs",
  "IGkgd2FzIGNvbmZ1c2VkLiBBcyBpbiBkaSBrbyBhbGFtIGt1bmcgYmFraXQgZ2FudW4gbmFyYXJhbWRhbWFuIGtvIGtheWEgcGlu",
  "aWxpdCBrb25nIGFsYW1pbiBrdW5nIGJha2l0IGtpdGEgY3J1c2ggYW5kIGFzIEkgZ290IHRvIGtub3cgeW91IGJldHRlciwgaXQg",
  "YmVjYW1lIGNsZWFyLiBJIGxpa2VkIHlvdXIgcGVyc29uYWxpdHksIGNvbmZpZGVuY2UsIGtpbmRuZXNzLCBsZWFkZXJzaGlwLCBw",
  "ZXJzZXZlcmFuY2UsIGFuZCBiZWF1dHkuIE5hZyBzdGFydCBzaXlhIGFsYW0ga28gZnJvbSBBdWd1c3QuIEkgYXBwcm9hY2hlZCB5",
  "b3UgYW5kIHRyaWVkIHRvIGJlIGNsb3NlIHRvIHlvdS4gQWthbGEga28gbWF5IHByb2dyZXNzIGFrbyBudW4ga2FzaSBhbmcgYmFp",
  "dCBtbyBrYXNpIGFuZCBJIGFzc3VtZWQgc29tZSB0aGluZ3MgbmEgZGkgcGFsYSBkYXBhdCBpbmFhc3N1bWUgaGFoYWhhLiBJIHRo",
  "b3VnaHQgaXQgd2FzIGdvaW5nIGZpbmUgdW50aWwgSSBzYXcgeW91IG1lbnRpb25pbmcgSHVseW8gdG8geW91ciBub3RlcyBhbmQg",
  "cG9zdGluZyBoaW0gdG8geW91ciBzdG9yaWVzLgogICAgICAgICAgICA8L3A+CiAgICAgICAgICAgIDxwIGNsYXNzPSJsZXR0ZXIt",
  "dGV4dCI+CiAgICAgICAgICAgICAgSSdsbCBhZG1pdCwgaSBnb3QgamVhbG91cyBzbyBJIHN0YXJ0ZWQgbW9uaXRvcmluZyB5b3Vy",
  "IG5vdGVzIGFuZCBzdG9yaWVzIG11bGEgbm9uLiBUYXBvcyBub24sIGkgdGhpbmsgbGFzdCB3ZWVrIG5nIEF1Z3VzdCBvciBmaXJz",
  "dCBkYXkgbmcgU2VwdGVtYmVyLCB5b3UgcG9zdGVkIGEgc3Rvcnkgb2YgeW91IGFuZCBIdWx5byBlYXRpbmcgc29tZXdoZXJlLiBJ",
  "IHJlbWVtYmVyIHRhbGtpbmcgdG8gTWF1aSB0aGF0IG5pZ2h0IG51bmcgbmFraXRhIGtvIHl1biBhbmQgaSB3YXMgaGF2aW5nIGRv",
  "dWJ0cyBrdW5nIGtheW8gbmdhLiBJbmlpc2lwIG5hbWluIG5pIE1hdWkgbmEgZnJpZW5kIGxhbmcgdGFsYWdhIGtheW8gYnV0IHRo",
  "ZSBuZXh0IGRheSwgbmFnc2VuZCBzYWtpbiBzaSBNYXVpIG5nIGNoYXRzIG5peW8gc2EgZ2Mga2FzaSBuYWhvdCBzZWF0IGthIG5p",
  "IEJ1cmkgbm9uIGFuZCB5b24gc2luZW5kIHNha2luIHRhcyBuYWNvbmZpcm0gbmEgbmFtaW4uIEkgZ290IGhlYXJ0YnJva2VuIG51",
  "bmcgbmFraXRhIGtvIHlvbiBidXQgaSBwbGF5ZWQgaXQgb2ZmIGthc2UsIGJha2l0IGtvIGJhIG5hcmFtZGFtYW4geW9uIGRpYmE/",
  "IFBlcm8geWVhaCBpdCdzIGFscmlnaHQsIHNoaXQgaGFwcGVucy4KICAgICAgICAgICAgPC9wPgogICAgICAgICAgICA8cCBjbGFz",
  "cz0ibGV0dGVyLXRleHQiPgogICAgICAgICAgICAgIFRoZW4gYWZ0ZXIgbm9uLCBva2F5IGxhbmcgbmFtYW4gYWtvLCBuYWthIGdl",
  "dCBvdmVyIG5hbWFuIHBsdXMsIEknbSBoYXBweSBmb3IgeW91IGthc2kgbWF5IHBvdGVudGlhbCBiZiBrYSBuYSBhbmQgbmFnaW5n",
  "IGNsb3NlIGZyaWVuZHMgdXMgd2hpY2ggaXMgZ29vZCBhbmQgSSBzdGlsbCBjaGVyaXNoIGl0IHVudGlsIG5vdy4gRGkga28gbmEg",
  "aW5jbHVkZSBudW5nIG5hZyBvcGVuIHVwIGthIGtheSBIdWx5byBudW5nIE5vdmVtYmVyIGthc2kgZGkgbmFtYW4gYnVtYWxpayBm",
  "ZWVsaW5ncyBrbyBub24gdHNha2EgaXJyZWxldmFudCBzaXlhLgogICAgICAgICAgICA8L3A+CiAgICAgICAgICAgIDxwIGNsYXNz",
  "PSJsZXR0ZXItdGV4dCI+CiAgICAgICAgICAgICAgTmFhbGFsYSBtbyBudW5nIG5hZyBrd2VudG8ga28gYWJvdXQgc2F5byBudW5n",
  "IHJlYWRpbmdzIGtvIHNhIHRhcm90PyBZdW5nIGlmIG1hZ2tha2EgbG92ZSBsaWZlIGJhIGtvIHRoaXMgeWVhcj8gU2FuYSBuYWFs",
  "YWxhIG1vIGthc2UgYXQgdGhhdCBwb2ludCwgbmFpaXNpcCBuYSBuYW1hbiBraXRhIHVsaXQuIEFjdHVhbGx5LCAxIHdlZWsgYmVm",
  "b3JlIHBhIG51bmcgdGFyb3QsIGJ1bWFiYWxpayBuYSBuYW1hbiB5dW5nIGRpIG1haXBhbGl3YW5hZyBuYSBmZWVsaW5nIG5hIHl1",
  "bi4gTWFyY2ggMjIgb3IgMjMsIGkgc3RhcnRlZCB0aGUgZmxpcnQga2FzZSB3YWxhIGxhbmcsIGFuZHVuIG5hIGUgdHNha2EgZ3Vz",
  "dG8gcmluIGtpdGFuZyBhc2FyaW4gYW5kIHl1biBuZ2EsIG1lcm9uZyBidW1hYmFsaWsgbmEgZmVlbGluZy4KICAgICAgICAgICAg",
  "PC9wPgogICAgICAgICAgICA8cCBjbGFzcz0ibGV0dGVyLXRleHQiPgogICAgICAgICAgICAgIE9uIE1hcmNoIDI0LCBuYWt3ZW50",
  "byBrbyB1bmcgc2EgdGFyb3QgYW5kIG5hZyB1c2FwIHVzIHNsaWdodCBhYm91dCBzYSBmZWVsaW5ncyBrby4gVG90b28gc2luYWJp",
  "IGtvIHNheW8gbm9uLCB0YWxhZ2FuZyBoaW5kaSBha28gc3VyZSBzYSBmZWVsaW5ncyBrbywgbmEgcGFyYW5nIG1heSBzb21ldGhp",
  "bmcgcGEgc2EgYWtpbiBuYSBkaSBrbyBtYSBmaWd1cmUgb3V0IGtheWEgZGkgYWtvIG1ha2FwYXNvayBzYSByZWwgdWxpdC4gSSB0",
  "cmllZCBteSBoYXJkZXN0IG5hIHBpZ2lsYW4gdWxpdCBtYWd1c3R1aGFuIGthIGthc2kgbmdhLCBJJ20gbGlraW5nIHlvdSBhZ2Fp",
  "biBidXQgZm9yIHdoYXQgcmVhc29uPyBJIHdhcyB0cnlpbmcgdG8gZmlndXJlIG91dCB3aHkgaSBmZWVsIHRoYXQgd2F5IGFnYWlu",
  "LiBBeW9rbyBrYXNpbmcgdW1hbWluIG5hIGd1c3RvIGtpdGEgdGFwb3Mgd2FsYSBha29uZyBkYWhpbGFuIGRpYmE/IHBhcmFuZyB0",
  "cmlwcGluZ3MgbGFuZyBrdW5nIGdhbnVuIG1hbiBuYW5neWFyaS4KICAgICAgICAgICAgPC9wPgogICAgICAgICAgICA8cCBjbGFz",
  "cz0ibGV0dGVyLXRleHQiPgogICAgICAgICAgICAgIEkgZXZlbiB0cmllZCB0byBkaXN0YW5jZSBteXNlbGYgdG8geW91IGR1cmlu",
  "ZyBob2x5IHdlZWsga2FzaSBpIHRob3VnaHQgbmEgYmFrYSBwYWcgbmlsYXl1YW4ga2l0YSwgbWF3YWxhIGZlZWxpbmdzIGtvIHBl",
  "cm8gbWFzIGx1bWFsYWxhIHNpeWEuIExhZ2kga2l0YW5nIGluaWlzaXAsIGxhZ2kga2l0YW5nIGhpbmFoYW5hcC4gQmVjYXVzZSBv",
  "ZiB0aGF0IGFuZCBjb25zaWRlcmluZyBvdGhlciBzdHVmZiwgdGhlcmUgd2FzIG5vIG90aGVyIGFuc3dlci4KICAgICAgICAgICAg",
  "PC9wPgogICAgICAgICAgICA8cCBjbGFzcz0ibGV0dGVyLXRleHQiPkkgbGlrZSB5b3UuPC9wPgogICAgICAgICAgICA8cCBjbGFz",
  "cz0ibGV0dGVyLXRleHQiPgogICAgICAgICAgICAgIEkgZmluZCB5b3VyIGNoZWVyZnVsIG5hdHVyZSByZWFsbHkgY2hhcm1pbmcs",
  "IGFuZCBJIGFkbWlyZSBob3cgbXVjaCB5b3UgY2FyZSBhYm91dCBvdGhlcnMuIFdoZW5ldmVyIEkgb3BlbiB1cCB0byB5b3UsIHlv",
  "dSdyZSBhbHdheXMgc28gYXR0ZW50aXZlIGFuZCBtYWtlIG1lIGZlZWwgdHJ1bHkgaGVhcmQuIFlvdXIgY29tZm9ydGluZyB3b3Jk",
  "cyBoYXZlIGEgd2F5IG9mIHNvb3RoaW5nIG1lLCBhbmQgaXQgbWVhbnMgbW9yZSB0aGFuIEkgY2FuIGV4cGxhaW4uIFRoZSB3YXkg",
  "eW91IHNwZWFrLCBsYXVnaCwgc21pbGUsIGFuZCBqdXN0IGJlIHlvdXJzZWxmLCBpdCBob25lc3RseSBtYWtlcyBteSBoZWFydCBm",
  "bHV0dGVyLiBJIGFsc28gcmVhbGx5IGFkbWlyZSB5b3VyIHN0cmVuZ3RoLiBObyBtYXR0ZXIgaG93IGhhcmQgbGlmZSBnZXRzLCB5",
  "b3Uga2VlcCBwdXNoaW5nIGZvcndhcmQsIGFuZCB0aGF0IGluc3BpcmVzIG1lIGEgbG90LiBUaGVyZSBhcmUgcHJvYmFibHkgc28g",
  "bWFueSBtb3JlIHJlYXNvbnMsIGJ1dCB0aGVzZSBhcmUgdGhlIG9uZXMgSSBjYW4gcHV0IGludG8gd29yZHMgZm9yIG5vdy4KICAg",
  "ICAgICAgICAgPC9wPgogICAgICAgICAgICA8cCBjbGFzcz0ibGV0dGVyLXRleHQiPgogICAgICAgICAgICAgIE15IHR5cGUgb24g",
  "YSBnaXJsIGlzbid0IE1hdWksIGl0J3MgeW91LiBNYWJhaXQsIG1hc2lwYWcsIG1hdGFsaW5vLCBlbW90aW9uYWxseSBpbnRlbGxp",
  "Z2VudCwgY2FyaW5nLCBzd2VldCwgc3VwcG9ydGl2ZSwgbW9yZW5hLgogICAgICAgICAgICA8L3A+CiAgICAgICAgICAgIDxwIGNs",
  "YXNzPSJsZXR0ZXItdGV4dCI+CiAgICAgICAgICAgICAgU2ludWJ1a2FuIGtvbmcga2FiaXNhZHVoaW4ga2Ega2FzaSBndXN0byBr",
  "b25nIG1hYWxhZ2FhbiBrYSBuZyBtYWF5b3MgYXQgc2FrYSBnYW51biB0YWxhZ2EgZSwgZ3VzdG8ga2l0YSBlIGhheXMuIEFsc28g",
  "c2ludXN1YnVrYW4ga28gcmluIG1hZ2luZyBiZXR0ZXIgYXMgYSBwZXJzb24gYmVjYXVzZSBpIHdhbnQgdG8gZ2l2ZSB5b3UgdGhl",
  "IGJlc3QgdmVyc2lvbiBvZiBtZS4gQXlhdyBuYSBraXRhbmcgbWFraXRhbmcgbWFzYWt0YW4gbmcgbGFsYWtpIGthc2kgaSBrbm93",
  "IHRvIG15c2VsZiBuYSBoaW5kaSBraXRhIG1hc2FzYWt0YW4uIEkgd2FudCB0byBzaG93IHlvdSBhbmQgbWFrZSB5b3UgZmVlbCB3",
  "aGF0IGxvdmUgbWVhbnMgYWdhaW4uIEkga25vdyBuYSBkaSBrYSBwYSByZWFkeSB1bGl0IHNhIHJlbGF0aW9uc2hpcCBhbmQgZm9j",
  "dXMga2Egc2Egc2FyaWxpIG1vIGFuZCBJJ20gcHJvYmFibHkgbm90IHlvdXIgdHlwZSBidXQgeW91J3JlIHRoZSByaXNrIEknbSB3",
  "aWxsaW5nIHRvIHRha2UgYmVjYXVzZSBJIGtub3cgdGhhdCB5b3UgYXJlIHdvcnRoIGl0LgogICAgICAgICAgICA8L3A+CiAgICAg",
  "ICAgICAgIDxwIGNsYXNzPSJsZXR0ZXItdGV4dCI+CiAgICAgICAgICAgICAgWW91J3JlIG9uZSBvZiBhIGtpbmQsIEZhaXRoLCB5",
  "b3UgZGVzZXJ2ZSBldmVyeSBnb29kIHRoaW5nIHRoaXMgd29ybGQgaGFzIHRvIG9mZmVyIGFuZCBpZiB5b3UnbGwgYWxsb3cgbWUs",
  "IHdpdGhvdXQgYW55IHJ1c2ggYW5kIHByZXNzdXJlLCBJIHdhbnQgdG8gcHVyc3VlIHlvdSB0byBwcm92ZSBteXNlbGYgd29ydGh5",
  "IG9mIHlvdXIgbG92ZS4gSSBhc3N1cmUgeW91LCBpIGhhdmUgYSBnZW51aW5lIGludGVudGlvbiB3aXRoIHlvdSwgdG8gbG92ZSB5",
  "b3UgdGhlIHdheSB5b3UgZGVzZXJ2ZWQgdG8gYmUuCiAgICAgICAgICAgIDwvcD4KICAgICAgICAgICAgPHAgY2xhc3M9ImxldHRl",
  "ci10ZXh0Ij5HZSBuYSwgbWluc2FuIGxhbmcgZSwgcGF5YWcga2EgbmEsIGNoYXJvdC48L3A+CiAgICAgICAgICAgIDxwIGNsYXNz",
  "PSJsZXR0ZXItdGV4dCI+CiAgICAgICAgICAgICAgSWYgbWFzaXJhIG1hbiBmcmllbmRzaGlwIG5hdGluIGJlY2F1c2Ugb2YgdGhp",
  "cywgaXQncyBva2F5LiBJdCdzIG5vdCB5b3VyIGZhdWx0IGthc2kgZGkgbmFtYW4gaWthdyB5dW5nIG5hIGZhbGwgZSBodWh1IHBl",
  "cm8gSSdsbCBmb3JldmVyIGNoZXJpc2ggb3VyIGZyaWVuZHNoaXAgcGFyaW4uIE9uZSBvZiB0aGUgYmVzdCBmcmllbmRzaGlwcyBJ",
  "IGhhdmUsIHRvIGJlIGhvbmVzdC4KICAgICAgICAgICAgPC9wPgogICAgICAgICAgICA8cCBjbGFzcz0ibGV0dGVyLXRleHQiPgog",
  "ICAgICAgICAgICAgIE15IG9yaWdpbmFsIHBsYW4gd2FzIHRvIGdpdmUgeW91IGEgaGFuZHdyaXR0ZW4gY29uZmVzc2lvbiBsZXR0",
  "ZXIgYnV0IHNpbmNlIEkgY2FuJ3QgY29tZSB3aXRoIHlvdSBndXlzIHNhIE1hbmlsYSwgSSBkZWNpZGVkIHRvIGV4ZXJ0IGFsbCBv",
  "ZiBteSBlZmZvcnRzIHRvIGNyZWF0ZSB0aGlzIHdlYnNpdGUgdG8gY29uZmVzcyBteSBmZWVsaW5ncyB0byB5b3UuIEkgaG9wZSB5",
  "b3UgbGlrZSBpdCBhbmQgSSBob3BlIGl0IHNob3dzIGhvdyBtdWNoIEkgY2FyZSBmb3IgeW91LiBJIGtub3cgdGhpcyBpcyBhIGxv",
  "dCB0byB0YWtlIGluLCBzbyB0YWtlIGFsbCB0aGUgdGltZSB5b3UgbmVlZCB0byBwcm9jZXNzIHRoaXMuIEknbGwgYmUgaGVyZSwg",
  "c3VwcG9ydGluZyB5b3Ugbm8gbWF0dGVyIHdoYXQuCiAgICAgICAgICAgIDwvcD4KICAgICAgICAgICAgPHAgY2xhc3M9ImxldHRl",
  "ci10ZXh0Ij4KICAgICAgICAgICAgICBIYXlzLCBnb29kIGx1Y2sgd2l0aCBldmVyeXRoaW5nIHBvLCBrYWtheWFuaW4gbmF0aW4g",
  "b2p0IGFuZCA0dGggeWVhci4gV2FsYW5nIHN1c3VrbyBoYSwgZGFwYXQgbWFnIGdyYWR1YXRlIHRheW8gbmV4dCB5ZWFyIGJyby4K",
  "ICAgICAgICAgICAgPC9wPg=="
].join("");

let currentMode = null;
let currentModeKey = null;
let currentQuestionIndex = 0;
let score = 0;
let totalScore = 0;
let revealInterval = null;
let answerInterval = null;
let canAnswer = false;
let showBonusMessage = false;
let bonusCompleted = false;
let paperLoaded = false;

function decodeSeed(value) {
  const textBytes = Uint8Array.from(atob(value), (character) => character.charCodeAt(0));
  return new TextDecoder().decode(textBytes);
}

function loadSecretPaper() {
  if (paperLoaded) {
    return;
  }

  secretPaper.innerHTML = decodeSeed(paperSeed);
  paperLoaded = true;
}

function saveTotalScore() {
  // Progress is intentionally kept in memory only so it resets after leaving the site.
}

function saveBonusCompletedState() {
  // Progress is intentionally kept in memory only so it resets after leaving the site.
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
  loadSecretPaper();
  secretStage.classList.add("open");
}

function toggleInstructions() {
  if (!instructionsPanel) {
    return;
  }

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
if (instructionsButton) {
  instructionsButton.addEventListener("click", toggleInstructions);
}
