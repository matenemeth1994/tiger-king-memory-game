document.addEventListener("DOMContentLoaded", (): any => {
  // CARD ARRAY
  const cardArray: { name: string; img: string }[] = [
    {
      name: "carole-baskin",
      img: "images/carole-baskin.png",
    },
    {
      name: "dr-bhagavan",
      img: "images/dr-bhagavan.png",
    },
    {
      name: "jeff-lowe",
      img: "images/jeff-lowe.png",
    },
    {
      name: "joe-exotic",
      img: "images/joe-exotic.png",
    },
    {
      name: "john-finlay",
      img: "images/john-finlay.png",
    },
    {
      name: "rick-kirkham",
      img: "images/rick-kirkham.png",
    },
    {
      name: "carole-baskin",
      img: "images/carole-baskin.png",
    },
    {
      name: "dr-bhagavan",
      img: "images/dr-bhagavan.png",
    },
    {
      name: "jeff-lowe",
      img: "images/jeff-lowe.png",
    },
    {
      name: "joe-exotic",
      img: "images/joe-exotic.png",
    },
    {
      name: "john-finlay",
      img: "images/john-finlay.png",
    },
    {
      name: "rick-kirkham",
      img: "images/rick-kirkham.png",
    },
  ];

  cardArray.sort((): number => 0.5 - Math.random());

  const grid: HTMLElement | null = document.querySelector(".grid");
  const resultDisplay: HTMLElement | null = document.querySelector("#result");
  let alertText: HTMLElement | null = document.getElementById("alert-text");
  let cardsChosen: string[] = [];
  let cardsChosenId: string[] = [];
  const cardsWon: string[] = [];

  //   CREATE BOARD
  function createBoard(): any {
    for (let i: any = 0; i < cardArray.length; i++) {
      let card: HTMLElement | null = document.createElement("img");
      card.setAttribute("src", "images/funny-tiger.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid?.appendChild(card);
    }
  }

  // CHECK MATCHES
  function checkForMatch(): any {
    let cards: HTMLElement | null = document.querySelectorAll("img");
    const optionOneId: string = cardsChosenId[0];
    const optionTwoId: string = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alertText.innerHTML = "<p>You found a match!</p>";
      setTimeout(() => {
        alertText.innerHTML = "<p>Find all the tiger king heroes!</p>";
      }, 800);
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cards[optionOneId].style.pointerEvents = "none";
      cards[optionTwoId].style.pointerEvents = "none";
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/funny-tiger.png");
      cards[optionTwoId].setAttribute("src", "images/funny-tiger.png");
      alertText.innerHTML = "<p>Sorry, try again!</p>";
      setTimeout(() => {
        alertText.innerHTML = "<p>Find all the tiger king heroes!</p>";
      }, 800);
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      alertText.innerHTML =
        "<p>Congratulations! You found them all!</p>";
    }
  }

  //   FLIP CARD
  function flipCard(this: any): any {
    let cardId: any = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      if (cardsChosenId[0] === cardsChosenId[1]) {
        alertText.innerHTML =
          "<p>You are choosing the same card. Choose another one!</p>";
        setTimeout(() => {
          alertText.innerHTML = "<p>Find all the tiger king heroes!</p>";
        }, 1500);
        cardsChosenId.pop();
        cardsChosen.pop();
      }
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
