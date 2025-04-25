import { getInt } from "./helper.js";

export default () => {
   
    const number1 = getInt();

    const question = `Question ${number1} ${number2}`;
    let correctAnswer = 1;
    let minNumber = number1 > number2 ? number2:number1;
    for (let i = 2; i <= number1; i +=1){
        if (number1 % i === 0 && number2 % i === 0) {
                correctAnswer = i;
        }
    }
    return {question, correctAnswer};
};
//2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 