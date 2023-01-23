/*
2C = Two of Clubs ♣️
2D = Two of Diamonds ♦️
2H = Two of Hearts ♥️
2S = Two of spades ♠️
*/

let deck = []
const types = ['C', 'D', 'H', 'S']
const specials = ['A', 'J', 'Q', 'K']
let playerPoints = 0
let computerPoints = 0



// References to HTML
const btnSplit = document.querySelector('#btnSplit')
const smallPlayer = document.querySelectorAll('small')
const divCard = document.querySelector('#player-cards')



const createDeck = () => {
    for ( let i = 2; i <= 10; i++) {
        for (let type of types) {
            deck.push( i + type)
        }
    }

    for ( let type of types) {
        for (let special of specials) {
            deck.push(special + type)
        }
    }
    console.log(deck)
    deck = _.shuffle(deck)
    console.log(deck)
    return deck
}

createDeck()


const getCard = () => {
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck'
    }
    const card = deck.pop()
    console.log(deck)
    console.log(card)
    return card
}

getCard()

const cardValue = (card) => {
    const value = card.substring(0, card.length - 1)


    return isNaN(value) ? (value === 'A') ? 11 : 10
    : value * 1
}

const value = cardValue(getCard())

console.log({value})

// Events
btnSplit.addEventListener('click', () => {
    const card = getCard()
    console.log('La carta es ', card, ' y tiene ', cardValue(card), ' puntos');

    playerPoints = playerPoints + cardValue(card)
    smallPlayer[0].innerText = playerPoints

    const imgCard = document.createElement('img')
    imgCard.src = `/assets/cartas/${card}.png`
    imgCard.classList = 'cardi'
    divCard.append(imgCard)

    if (playerPoints > 21) {
        console.warn('Lo siento mucho perdistes');
        btnSplit.disabled = true
    } else if (playerPoints === 21) {
        console.warn('Genial!!! Haz Ganado');
        btnSplit.disabled = true
    }

    
})

