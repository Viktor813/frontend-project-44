import { getInt } from "../src/helper.js";

export default () => {
   
    const number1 = getInt();
    const number2 = getInt();

    const question = `Question ${number1} ${number2}`;
    let correctAnswer = 1;
    let minNumber = number1 > number2 ? number2:number1;
    for (let i = 2; i <= minNumber; i +=1){
        if (number1 % i === 0 && number2 % i === 0) {
                correctAnswer = i;
        }
    }
    return {question, correctAnswer};
};