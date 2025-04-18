import gamelibary from './gamelibary.js';
import readlineSync from 'readline-sync';

export default (game) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    const greeting = `Hello, ${name}!`;
    console.log(greeting);
    const { desc, rules } = gamelibary[game];
    console.log(desc);


    let wins = 0;
    while (wins < 3) {
        const { question, correctAnswer } = rules();
        console.log(`Question: ${question}`);
        const answer = readlineSync.question(`Your answer: `);
        if (answer.toLowerCase() === correctAnswer.toString().toLowerCase()) {
            console.log(`Correct!`);
            wins += 1;
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
        if (wins === 3)
            console.log(`Congratulations,${name}!`);
    }

};