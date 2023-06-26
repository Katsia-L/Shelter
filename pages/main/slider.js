const card = document.querySelectorAll('.card');
const cardImg = document.querySelectorAll('.card-img');
const cardName = document.querySelectorAll('.card-name');
const arrowNext = document.querySelector('.next')
const arrowPrevious = document.querySelector('.previous')

function createCards() {
    let randomCards = new Set();
    let numberOfCards = 3

    function setCards() {
        let randomCardsArr = Array.from(randomCards);
        for (let i = 0; i < 3; i++) {
            card[i].setAttribute('id', randomCardsArr[i].name);
            cardImg[i].setAttribute('src', randomCardsArr[i].img)
            card[i].querySelector('.card-name').innerText = randomCardsArr[i].name
        }
    }

    function refreshCards() {
        while (randomCards.size < 2 * numberOfCards) {
            indexPets = Math.floor(Math.random() * 8);
            randomCards.add(petsCard[indexPets]);
        }

        for (let i of randomCards) {
            if (randomCards.size > numberOfCards) {
                randomCards.delete(i);
            }
        }

        setCards();
    }
    
    arrowNext.addEventListener("click", refreshCards)
    arrowPrevious.addEventListener("click", refreshCards)

    refreshCards();
}

createCards();