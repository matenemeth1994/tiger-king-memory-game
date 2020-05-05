"use strict";
document.addEventListener("DOMContentLoaded", function () {
    // CARD ARRAY
    var cardArray = [
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
    cardArray.sort(function () { return 0.5 - Math.random(); });
    var grid = document.querySelector(".grid");
    var resultDisplay = document.querySelector("#result");
    var alertText = document.getElementById("alert-text");
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];
    //   CREATE BOARD
    function createBoard() {
        for (var i = 0; i < cardArray.length; i++) {
            var card = document.createElement("img");
            card.setAttribute("src", "images/funny-tiger.png");
            card.setAttribute("data-id", i);
            card.addEventListener("click", flipCard);
            grid === null || grid === void 0 ? void 0 : grid.appendChild(card);
        }
    }
    // CHECK MATCHES
    function checkForMatch() {
        var cards = document.querySelectorAll("img");
        var optionOneId = cardsChosenId[0];
        var optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            alertText.innerHTML = "<p>You found a match!</p>";
            setTimeout(function () {
                alertText.innerHTML = "<p>Find all the tiger king heroes!</p>";
            }, 800);
            cards[optionOneId].setAttribute("src", "images/white.png");
            cards[optionTwoId].setAttribute("src", "images/white.png");
            cards[optionOneId].style.pointerEvents = "none";
            cards[optionTwoId].style.pointerEvents = "none";
            cardsWon.push(cardsChosen);
        }
        else {
            cards[optionOneId].setAttribute("src", "images/funny-tiger.png");
            cards[optionTwoId].setAttribute("src", "images/funny-tiger.png");
            alertText.innerHTML = "<p>Sorry, try again!</p>";
            setTimeout(function () {
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
    function flipCard() {
        var cardId = this.getAttribute("data-id");
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute("src", cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            if (cardsChosenId[0] === cardsChosenId[1]) {
                alertText.innerHTML =
                    "<p>You are choosing the same card. Choose another one!</p>";
                setTimeout(function () {
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
