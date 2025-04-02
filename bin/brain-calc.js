import readlineSync from 'readline-sync';   
 import { getInt } from "./helper.js";
export const braiCalc = () => {
    console.log('Welcome to the Brain Games!')
    const name = readlineSync.question('May I have your name? ');
    const greeting = `Hello, ${name}!`
    console.log(greeting);
    console.log("What is the result of the expression?");

    const operators = ['+', '-', '*'];


    const number1 = getInt(100)
    const number2 = getInt(100)
    let operatorsIndex = gerInt(3);
    let correctAnswer;

    switch (operatorsIndex) {
        case 0:
            correctAnswer = number1 + number2
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

}