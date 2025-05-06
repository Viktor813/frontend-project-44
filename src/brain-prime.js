import { getInt } from "./helper.js";

export default () => {
   
    const question = getInt();

    let correctAnswer = "yes";
    for (let i = 2; i < question; i +=1){
        if (question % i === 0) {
                correctAnswer = 'no';
        }
    }
    return {question, correctAnswer};
};
//2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 