const rollFx = require("../rollFunctions.js");

describe("rollxDy", () => {
    describe("Return value", () => {
        it("should return a Number", () => {
            const diceNumber = 1;
            const dieType = 6;
            const modifier = 1;
            const result = rollFx.rollxDy(diceNumber, dieType, modifier);

            expect(typeof result).toEqual("number");
        });

        it("should return a value of 1 or higher", () => {
            const iterations = 100;
            const diceNumber = 1;
            const dieType = 6;
            const modifier = 0;
            const rolls = [];
            for (let i = 0; i < iterations; i++) {
                rolls.push(rollFx.rollxDy(diceNumber, dieType, modifier));
            };
            const minResult = Math.min(...rolls);
            console.log(minResult > 0);
            expect(minResult > 0).toEqual(true);
        });

        it("should return a value less than or equal to dieType", () => {
            const iterations = 100;
            const diceNumber = 1;
            const dieType = 6;
            const modifier = 0;
            const rolls = [];
            for (let i = 0; i < iterations; i++) {
                rolls.push(rollFx.rollxDy(diceNumber, dieType, modifier));
            };
            const maxResult = Math.max(...rolls);
            expect(maxResult <= dieType).toEqual(true);
        });

        it("should return a value greater than or equal to diceNumber", () => {
            const iterations = 100;
            const diceNumber = 10;
            const dieType = 6;
            const modifier = 0;
            const rolls = [];
            for (let i = 0; i < iterations; i++) {
                rolls.push(rollFx.rollxDy(diceNumber, dieType, modifier));
            };
            const minResult = Math.min(...rolls);
            expect(minResult >= diceNumber).toEqual(true);
        });

        it("should return a value less than or equal to diceNumber * dieType", () => {
            const iterations = 100;
            const diceNumber = 10;
            const dieType = 6;
            const modifier = 0;
            const rolls = [];
            for (let i = 0; i < iterations; i++) {
                rolls.push(rollFx.rollxDy(diceNumber, dieType, modifier));
            };
            const minResult = Math.min(...rolls);
            expect(minResult <= diceNumber * dieType).toEqual(true);
        });
    });;
});
describe("rollxDF", () => {
    describe("Return value", () => {
        it("should return a Number", () => {
            const diceNumber = 1;
            const modifier = 1;
            const result = rollFx.rollxDF(diceNumber, modifier);

            expect(typeof result).toEqual("number");
        });

        it("should return a value no greater than 1", () => {
            const iterations = 100;
            const diceNumber = 1;
            const modifier = 0;
            const rolls = [];
            for (let i = 0; i < iterations; i++) {
                rolls.push(rollFx.rollxDF(diceNumber, modifier));
            };
            const maxResult = Math.max(...rolls);
            expect(maxResult <= 1).toEqual(true);
        });

        it("should return a value no lower than -1", () => {
            const iterations = 100;
            const diceNumber = 1;
            const modifier = 0;
            const rolls = [];
            for (let i = 0; i < iterations; i++) {
                rolls.push(rollFx.rollxDF(diceNumber, modifier));
            };
            const minResult = Math.min(...rolls);
            expect(minResult >= -1).toEqual(true);
        });

        it("should return a value no higher than the number of dice", () => {
            const iterations = 100;
            const diceNumber = 10;
            const modifier = 0;
            const rolls = [];
            for (let i = 0; i < iterations; i++) {
                rolls.push(rollFx.rollxDF(diceNumber, modifier));
            };
            const maxResult = Math.max(...rolls);
            expect(maxResult <= diceNumber).toEqual(true);
        });

        it("should return a negative value no lower than the number of dice", () => {
            const iterations = 100;
            const diceNumber = 10;
            const modifier = 0;
            const rolls = [];
            for (let i = 0; i < iterations; i++) {
                rolls.push(rollFx.rollxDF(diceNumber, modifier));
            };
            const minResult = Math.min(...rolls);
            expect(minResult >= -1 * diceNumber).toEqual(true);
        });
    });
});
describe("rollFate", () => {
    describe("Return value", () => {
        it("should return a Number", () => {
            const modifier = 1;
            const result = rollFx.rollFate(modifier);

            expect(typeof result).toEqual("number");
        });

        it("should return a value no greater than 4", () => {
            const iterations = 100;
            const modifier = 0;
            const rolls = [];
            for (let i = 0; i < iterations; i++) {
                rolls.push(rollFx.rollFate(modifier));
            };
            const maxResult = Math.max(...rolls);
            expect(maxResult <= 4).toEqual(true);
        });

        it("should return a value no lower than -4", () => {
            const iterations = 100;
            const modifier = 0;
            const rolls = [];
            for (let i = 0; i < iterations; i++) {
                rolls.push(rollFx.rollFate(modifier));
            };
            const minResult = Math.min(...rolls);
            expect(minResult >= -4).toEqual(true);
        });
    });
});