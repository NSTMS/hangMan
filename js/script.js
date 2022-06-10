let cat_1 = [
  "PIZZA",
  "SPAGHETTI",
  "ZIEMNIAK",
  "BABECZKA",
  "SCHABOWY",
  "ROSÓŁ",
  "BARSZCZ",
  "POMIDOROWA",
  "LODY",
  "SUSHI",
  "KIMCHI",
  "KURCZAK",
  "WIEPRZOWINA",
  "WOŁOWINA",
  "BOCZEK",
  "POMIDOR",
  "SZYNKA",
  "SER",
  "BUŁKA",
  "PĄCZEK",
  "PRECEL",
  "DROŻDŻOWKA",
  "MLEKO",
  "PEPSI",
  "COLA",
  "FANTA",
  "OGÓREK",
  "JOGURT",
];
let cat_2 = [
  "BMW",
  "AUDI",
  "CITROEN",
  "DACIA",
  "FIAT",
  "FORD",
  "KIA",
  "HYUNDAI",
  "MERCEDES",
  "NISSAN",
  "OPEL",
  "PEUGEOT",
  "RENAULT",
  "SEAT",
  "SKODA",
  "TOYOTA",
  "VOLKSWAGEN",
  "VOLVO",
  "BENTLEY",
  "FERRARI",
  "HONDA",
  "JEEP",
  "LAMBORGHINI",
  "MAZDA",
  "PORSCHE",
];
let cat_3 = [
  "TULIPAN",
  "RÓŻA",
  "JEMIOŁA",
  "TRAWA",
  "KAKTUS",
  "OLCHA",
  "BRZOZA",
  "LESZCZYNA",
  "SOSNA",
  "MODRZEW",
  "HIACYNT",
  "GOŹDZIK",
  "SŁONECZNIK",
  "NIEZAPOMINAJKI",
  "STOKROTKA",
  "MLECZ",
  "DMUCHAWIEC",
  "KROKUS",
  "JABŁOŃ",
  "BUKSZPAN",
  "KONICZYNA",
  "TOPOLA",
  "WIERZBA",
  "FREZJA",
  "PIWONIA",
  "KRAKOWIAKI",
];
let cat_4 = [
  "PINGWIN",
  "PELIKAN",
  "FLAMING",
  "TYGRYS",
  "MOTYL",
  "ŻYRAFA",
  "SURYKATKA",
  "KAPIBARA",
  "LEMUR",
  "ZEBRA",
  "SŁOŃ",
  "SOKÓŁ",
  "LENIWIEC",
  "KANGUR",
  "KOALA",
  "PANDA",
  "MODLISZKA",
  "KRZYŻAK",
  "DUSICIEL",
  "TARANTULA",
  "BIEDRONKA",
  "WILK",
  "NIEDŹWIEDŹ",
  "ORZEŁ",
  "ŚWISTAK",
];
let cat_5 = [
  "WIECZNOŚĆ",
  "HALLOWEEN",
  "MÓZG",
  "KREATYNA",
  "PERFEKCJA",
  "LICEUM",
  "TECHNIKUM",
  "SERCE",
  "DRYFOWAĆ",
  "ŚMIERĆ",
  "BEZRUCH",
  "WIECZNOŚĆ",
  "MOMENT",
  "CHWILA",
  "ZEGAR",
  "KAPIBARA",
  "SŁONECZNIK",
  "TAPETA",
  "FOTOGRAF",
  "SZCZOTECZKA",
  "BAŻANT",
  "KAKTUS",
  "DŁUGOPIS",
  "PERFUMY",
  "DEZODORANT",
  "TORBA",
  "PÓŁKA",
  "SŁOIK",
  "SUSZARKA",
  "ZASŁONY",
  "KALORYFER",
  "HIPOPOTAM",
  "AKROBATA",
  "SOJUSZNIK",
  "SŁOWO",
  "ŚNIEG",
  "KATANA",
  "PANTOFLE",
  "ZIEMIA",
  "GWIAZDA",
  "KOMINEK",
  "PANELE",
  "DOLINA",
  "CIEŃ",
];
let cat_6 = [
  "LEKKOATLETYKA",
  "NIEPRZERWANIE",
  "INTERPUNKCJA",
  "DZIECIŃSTWO",
  "TELEKOMUNIKACJA",
  "METAMORFOZA",
  "ZWIERZCHNICTWO",
  "PRZEŚLADOWANIE",
  "ANTYTERRORYSTA",
  "DŹWIĘKONAŚLADOWNICTWO",
  "ANTYKONCEPCJA",
  "KOLOROWANKA",
  "KONSTANTYNOPOLITAŃSKI",
  "LUMPENPROLETARIAT",
  "LUMINESCENCJA",
  "MAGNETOELEKTRYCZNY",
  "MALKONTENCTWO",
  "PRIMAAPRILISOWY",
  "PIĘĆDZIESIĘCIOGROSZÓWKA",
  "ANATOMOPATOLOGICZNY",
  "DEOKSYRYBONUKLEINOWY",
  "ZWIERZCHNICTWO",
  "PRZEŚLADOWANIE",
  "ANTYTERRORYSTA",
  "KOCIMIĘTKA",
  "ŚPIULKOLOT",
  "DZIWADLO",
  "TELEPATIA",
  "LABORATORIUM",
  "DEMOGORGON",
  "EKSPERYMENTY",
  "NIEBEZPIECZEŃSTWO",
  "PRZESŁUCHANIE",
];
let words = [];

let disabledLetters = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "Alt",
  "AltGraph",
  "Control",
  "Enter",
];
let TempdisabledLetters = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "Alt",
  "AltGraph",
  "Control",
  "Enter",
];

let currentLetter = ""; // zaznaczona klasa
let tabOfLetters = []; // tablica zaznaczonych klas
let currentPassword = ""; // tablica z haslem
let hangPoints = 0; // punkty
let hangApproaches = 11; // dozwolone podejścia
let ifAll = 0;
let alphabetArr = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ".split("");

setWordCategory(sessionStorage.getItem("parametr"));
function setWordCategory(i) {
  switch (i) {
    case "1":
      words = cat_1;
      document.querySelector("._category").textContent = "JEDZENIE";
      break;
    case "2":
      words = cat_2;
      document.querySelector("._category").textContent = "AUTA";
      break;
    case "3":
      words = cat_3;
      document.querySelector("._category").textContent = "ROŚLINY";
      break;
    case "4":
      words = cat_4;
      document.querySelector("._category").textContent = "ZWIERZĘTA";
      break;
    case "5":
      words = cat_5;
      document.querySelector("._category").textContent = "RÓŻNE";
      break;
    case "6":
      words = cat_6;
      document.querySelector("._category").textContent = "TRUDNE";
      break;
  }
  game();
}

function game() {
  document.querySelector(".approaches").textContent = hangApproaches;
  document.querySelector(".points").textContent = hangPoints;
  fillAlphabet();
}

function fillAlphabet() {
  for (let i = 0; i < alphabetArr.length; i++) {
    let tempStr = `.l${i + 1}`;
    document.querySelector(tempStr).innerText = alphabetArr[i];
  }
  currentPassword = generateNewWord();
}

fillAlphabet();

function generateNewWord() {
  clearAnswers();
  const remove = document.querySelector(".page_title");
  while (remove.lastElementChild) {
    remove.removeChild(remove.lastElementChild);
  }

  let passwordInPieces = randomWord();
  for (i of passwordInPieces) {
    let newDiv = document.createElement("div");
    let newP = document.createElement("p");
    newP.classList.add(i);
    newDiv.classList.add("downBorder");

    newP.innerHTML = i;
    newP.style.display = "none";
    newDiv.appendChild(newP);
    document.querySelector(".page_title").appendChild(newDiv);
  }
  currentPassword = passwordInPieces;
  return passwordInPieces;
}

function randomWord() {
  const tempInt = Math.floor(Math.random() * words.length);
  return words[tempInt].split("");
}

function ifContains(thisLetter) {
  for (let i = 0; i < alphabetArr.length; i++) {
    if (alphabetArr[i] == thisLetter) {
      currentLetter = `.l${i + 1}`;
      tabOfLetters.push(currentLetter);
      break;
    }
  }

  if (currentPassword.includes(thisLetter)) {
    if (!TempdisabledLetters.includes(thisLetter)) {
      TempdisabledLetters.push(thisLetter);

      document.querySelector(currentLetter).classList.add("correctAnswer");
      document.querySelector(currentLetter).style["pointer-events"] = "none";
      let els = document.querySelectorAll(`.${thisLetter}`);
      for (let i = 0; i < els.length; i++) {
        ifAll++;
        els[i].style.display = "block";
      }

      if (ifAll == currentPassword.length) {
        hangPoints++;

        TempdisabledLetters = disabledLetters + alphabetArr;
        TempdisabledLetters = TempdisabledLetters.split(",");
        document.querySelector(".winner_container").style.display = "flex";
        document.querySelector(".winner_title").textContent = "Wygrałeś";
        hangApproaches = 11;
        ifAll = 0;
        document.querySelector(".approaches").textContent = hangApproaches;
        document.querySelector(".your_points").textContent = hangPoints;
        document.querySelector(".points").textContent = hangPoints;
      }
    }
  } else {
    if (!TempdisabledLetters.includes(thisLetter)) {
      TempdisabledLetters.push(thisLetter);

      if (hangApproaches > 1) {
        hangApproaches = hangApproaches - 1;
        console.log(hangApproaches);
        document.getElementById("page_img").src = `img/${
          11 - hangApproaches
        }.png`;
        document.querySelector(currentLetter).classList.add("incorrectAnswer");
        document.querySelector(".approaches").textContent = hangApproaches;
      } else {
        TempdisabledLetters = disabledLetters + alphabetArr;
        TempdisabledLetters = TempdisabledLetters.split(",");

        for (i of currentPassword) {
          let els = document.querySelectorAll(`.${i}`);
          for (let i = 0; i < els.length; i++) {
            els[i].style.display = "block";
          }
        }
        let blockLetters = document.getElementsByClassName("letter");
        for (let i = 0; i < blockLetters.length; i++) {
          blockLetters[i].style["pointer-events"] = "none";
        }

        document.querySelector(".winner_title").textContent = "Przegałeś!";
        document.querySelector(".winner_container").style.display = "flex";
        hangPoints = 0;
        document.querySelector(".points").textContent = hangPoints;
        document.querySelector(".approaches").textContent = hangApproaches;
      }
    }
  }
}

function clearAnswers() {
  if (tabOfLetters.length != 0) {
    let currentClass;
    for (let i of tabOfLetters) {
      currentClass = document.querySelector(i);
      currentClass.classList.remove("correctAnswer");
      currentClass.classList.remove("incorrectAnswer");
    }
  }
  let blockLetters = document.getElementsByClassName("letter");
  for (let i = 0; i < blockLetters.length; i++) {
    blockLetters[i].style["pointer-events"] = "auto";
  }

  tabOfLetters = [];
  hangApproaches = 11;
  ifAll = 0;
}

function next() {
  document.getElementById("page_img").src = `img/0.png`;
  document.querySelector(".winner_container").style.display = "none";

  let minus = TempdisabledLetters.length - disabledLetters.length;
  for (let i = 0; i < minus; i++) {
    TempdisabledLetters.pop();
  }
  generateNewWord();
}

window.addEventListener("keydown", function (event) {
  if (!disabledLetters.includes(event.key)) ifContains(event.key.toUpperCase());
});
