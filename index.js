function writeCards() {
    let names = ["Guadalupe", "Ollie", "Aki"];
    let cards = [];
    for (let name of names) {
        cards.push(`Thank you, ${name}, for the wonderful surprise gift!`);
    }
    return cards;
}

function countDown() {
    let i = 10;
    while (i >= 0) {
        console.log(i--);
    }
}
