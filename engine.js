import gamelibary from './gamelibary.js';
import readlineSync from 'readline-sync';

export default (game) => {
    console.log('Welcome to the Brain Games!')
    const name = readlineSync.question('May I have your name? ');
    const greeting = `Hello, ${name}!`
    console.log(greeting);
    const { desc, rules } = gamelibary[game]
    console.log(desc);


    let wins = 0
    while (wins < 3) {
    const { question, correctAnswer } = rules()

        console.log(question);
        const answer = readlineSync.question(`Your answer: `)
        //   const rightAnsver = num % 2 === 0 ? 'yes' : 'no'
        if (answer.toLowerCase() === correctAnswer) {
            console.log(`Correct!`);
            wins += 1
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return
        }
        if (wins === 3)
            console.log(`Congratulations,${name}!`);
    }

}