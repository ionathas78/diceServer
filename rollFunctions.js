//  **  Functions

function rollxDy(diceNumber, dieType, modifier) {
    let rolls = [];
    for (let i = 0; i < diceNumber; i++) {
        rolls.push(Math.floor(Math.random() * dieType) + 1);
    };
    return (rolls.reduce((total, item) => total + item) + parseInt(modifier));
};

function rollxDF(diceNumber, modifier) {
    let rolls = [];
    for (let i = 0; i < diceNumber; i++) {
        rolls.push(Math.floor(Math.random() * 3) - 1);
    };
    return (rolls.reduce((total, item) => total + item) + parseInt(modifier));
};

function rollFate(modifier) {
    let rolls = [];
    let diceNumber = 4;
    for (let i = 0; i < diceNumber; i++) {
        rolls.push(Math.floor(Math.random() * 3) - 1);
    };
    return (rolls.reduce((total, item) => total + item) + parseInt(modifier));
};

module.exports = { rollxDy, rollxDF, rollFate };
