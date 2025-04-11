
import { getInt } from "./helper.js";
export default () => {
    const operators = ['+', '-', '*'];
    const number1 = getInt();
    const number2 = getInt();
    let operatorsIndex = getInt(3);
    let correctAnswer;
    const question = `${number1} ${operators[operatorsIndex]} ${number2}`;
    switch (operatorsIndex) {
        case 0:
            correctAnswer = number1 + number2;
            break;
        case 1:
            correctAnswer = number1 - number2;
            break;
        case 2:
            correctAnswer = number1 * number2;
            break;
        default:
            break;
    }
    correctAnswer = `${correctAnswer}`
    return { question, correctAnswer };

};