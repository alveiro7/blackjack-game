/*
2C = Two of Clubs ♣️
2D = Two of Diamonds ♦️
2H = Two of Hearts ♥️
2S = Two of spades ♠️
*/

let deck = []
const types = ['C', 'D', 'H', 'S']
const specials = ['A', 'J', 'Q', 'K']

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