const cardArray = [
  {
    name: "fries",
    img: "../images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "../images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "../images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "../images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "../images/milkshake.png",
  },
  {
    name: "pizza",
    img: "../images/pizza.png",
  },
  {
    name: "fries",
    img: "../images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "../images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "../images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "../images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "../images/milkshake.png",
  },
  {
    name: "pizza",
    img: "../images/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBord() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "../images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
  }
}

createBord();

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

  if (optionOneId === optionTwoId) {
    cards[optionOneId].setAttribute("src", "./images/blank.png");
    cards[optionTwoId].setAttribute("src", "./images/blank.png");
    cards[cardsChosenIds[0]].removeEventListener("click", flipCard);
    cards[cardsChosenIds[1]].removeEventListener("click", flipCard);
    alert("You have clicked the same image!");
  }

  if (cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId) {
    alert("its a match");
    cards[optionOneId].setAttribute("src", "./images/white.png");
    cards[optionTwoId].setAttribute("src", "./images/white.png");
    cards[cardsChosenIds[0]].removeEventListener("click", flipCard);
    cards[cardsChosenIds[1]].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "./images/blank.png");
    cards[optionTwoId].setAttribute("src", "./images/blank.png");
    alert("Sorry try again!");
  }
  resultDisplay.textContent = cardsWon.length;
  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.innerHTML = "Congratulations you win";
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  console.log(cardsChosen);
  console.log(cardsChosenIds);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
