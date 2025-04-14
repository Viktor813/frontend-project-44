import gameCalc from "./brain-calc.js";
import gameEven from "./brain-even.js";
import gameProgression from "./brain-progression.js";

export default {
    "calc": {
        desc: "What is the result of the expression?",
        rules: gameCalc,
    },
    "even": {
        desc: 'Answer "yes" if the number is even, otherwise answer "no".',
        rules: gameEven,
    },
    "progression": {
        desc: 'What number is missing in the progression?',
        rules: gameProgression,
    },
};