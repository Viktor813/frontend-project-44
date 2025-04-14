import { getInt } from "./helper.js";

export default () => {
    const startNumber = getInt();
    const progressionStep = getInt(10);
    const hiddenNum = getInt(10);
    const progresson = generateProgression(startNumber, progressionStep);
    let correctAnswer = progresson[hiddenNum];

    progresson[hiddenNum] = "..";
    const question = progresson.join(' ');

    correctAnswer = `${correctAnswer}`;
    return { question, correctAnswer };
};

function generateProgression(startNumber, progressionStep) {
    const progression = [];
    for (let i = 0; i < 10; i += i) {
        const shag = startNumber + progressionStep * i;
        progression.push(startNumber + shag);
    }
    return progression;

}