const cat_1 = ["ZEGAR"]
const cat_2 = ["CHWILA",]
const cat_3 = [ "MOMENT",]
const cat_4 = ["BEZRUCH",]
const cat_5 = ["WIECZNOŚĆ",]
const cat_6 = [ "DZIECIŃSTWO",]
let words = [
  "LEKKOATLETYKA",
"INTERPUNKCJA",
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
"KAPIBARA",
"SŁONECZNIK",
"TAPETA",
"FOTOGRAF",
"SZCZOTECZKA",
"KOCIMIĘTKA",
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
"ŚNIEG",
"KATANA",
"PANTOFLE",
"ZIEMIA",
"GWIAZDA",
"ŚPIULKOLOT",
"KOMINEK",
"PANELE",
"DEMOGORGON",
"DOLINA",
"CIEŃ",
"TELEPATIA",
"DZIWADLO",
"LABORATORIUM",
"AKROBATA",
"SŁOWO",
"EKSPERYMENTY",
"NIEBEZPIECZEŃSTWO",
"PRZESŁUCHANIE",
"HALLOWEEN",
"SOJUSZNIK",
"MÓZG",
"KREATYNA",
"PERFEKCJA",
"LICEUM",
"TECHNIKUM",
"SERCE",
"NIEPRZERWANIE",
"DRYFOWAĆ",
"DZIECIŃSTWO",
"ŚMIERĆ",
"BEZRUCH",
"WIECZNOŚĆ",
"MOMENT",
"CHWILA",
"ZEGAR",
];


// function setWordCategory(i)
// {
//   console.log(i)
//   switch(i)
//   {
//     case 1:
//       words = cat_1
//       break;
//     case 2:
//       words = cat_2
//       break;
//     case 3:
//       words = cat_3
//       break;
//     case 4:
//       words = cat_4
//       break;
//     case 5:
//       words = cat_5
//       break;
//     case 6:
//       words = cat_6
//       break;
//     default:
//       break;
//   }
//   window.location = "index.html"
//   game()
//   console.log(words)
// }






let currentLetter = ""; // zaznaczona klasa
let tabOfLetters = []; // tablica zaznaczonych klas
let currentPassword = ""; // tablica z haslem
let hangPoints = 0;
let hangApproaches = 11;
let ifAll = 0;



function game()
{
  document.querySelector(".approaches").textContent = hangApproaches;
  document.querySelector(".points").textContent = hangPoints;
}

const alphabetArr = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ".split("");

function fillAlphabet() {
  for (let i = 0; i < alphabetArr.length; i++) {
    let tempStr = `.l${i + 1}`;
    document.querySelector(tempStr).innerText = alphabetArr[i];
  }
  currentPassword = generateNewWord();
}

fillAlphabet()

function generateNewWord() {
  const remove = document.querySelector(".page_title");
  while (remove.lastElementChild) {
    remove.removeChild(remove.lastElementChild);
  }

  clearAnswers();

  let passwordInPieces = randomWord();
  console.log("pass: ", passwordInPieces);

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
    document.querySelector(currentLetter).classList.add("correctAnswer");
    let els = document.querySelectorAll(`.${thisLetter}`);
    for (let i = 0; i < els.length; i++) {
      ifAll++;
      // console.log(`${thisLetter} ma ${ifAll}`);
      els[i].style.display = "block";
    }
    // console.log(`${currentPassword}: ${thisLetter} ${ifAll}`);

    if (ifAll == currentPassword.length) {
      let blockLetters = document.getElementsByClassName("letter")
      for(let i=0;i<blockLetters.length;i++)
      {
         blockLetters[i].style['pointer-events'] = 'none';
      }
      hangPoints++;
      document.querySelector(".winner_container").style.display = "flex";
      document.querySelector(".winner_title").textContent = "Wygrałeś";
      document.querySelector(".winner_img").src = "img/okay.jpg";
      hangApproaches = 11;
      ifAll = 0;
      document.querySelector(".approaches").textContent = hangApproaches;
      document.querySelector(".your_points").textContent = hangPoints;
      document.getElementById("page_img").src = `img/0.png`
      document.querySelector(".points").textContent = hangPoints;
      
    }
  } else {
    if (hangApproaches > 1) {
      hangApproaches = hangApproaches - 1;
      console.log(hangApproaches);
      document.getElementById("page_img").src = `img/${11-hangApproaches}.png`
      document.querySelector(currentLetter).classList.add("incorrectAnswer");
      document.querySelector(currentLetter).classList.add("incorrectAnswer");
      document.querySelector(".approaches").textContent = hangApproaches;
    } 
    else {
      for (i of currentPassword) {
        let els = document.querySelectorAll(`.${i}`);
        for (let i = 0; i < els.length; i++) {
          // console.log(`${thisLetter} ma ${ifAll}`);
          els[i].style.display = "block";
        }
      }
      let blockLetters = document.getElementsByClassName("letter")
      for(let i=0;i<blockLetters.length;i++)
      {
         blockLetters[i].style['pointer-events'] = 'none';
      }

      
      
      document.querySelector(".winner_title").textContent = "Przegrałeś!";
      document.querySelector(".winner_container").style.display = "flex";
      document.querySelector(".winner_img").src = "img/sad.jpeg";
      hangPoints = 0;
      hangApproaches = 11;
      document.querySelector(".points").textContent = hangPoints;
      document.querySelector(".approaches").textContent = hangApproaches;


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
  let blockLetters = document.getElementsByClassName("letter")
  for(let i=0;i<blockLetters.length;i++)
  {
     blockLetters[i].style['pointer-events'] = 'auto';
  }
  tabOfLetters = [];
  hangApproaches = 11;
  ifAll = 0;
}

// function showWord() {
//   alert(`${currentPassword}`);
// }

function next() {
  document.getElementById("page_img").src = `img/0.png`
  document.querySelector(".winner_container").style.display = "none";
  generateNewWord();
}

game()