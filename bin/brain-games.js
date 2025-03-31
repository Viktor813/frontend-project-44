#!/usr/bin/env node
import readlineSync from 'readline-sync';
export const brainivn = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ');
  const greeting = `Hello, ${name}!`
  console.log(greeting);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const getRamdemint = () => {
    return Math.floor(Math.random() * 100)
  }
  let wins = 0
  while (wins < 3) {


    const num = getRamdemint()
    console.log(`Question: ${num}`);
    const answer = readlineSync.question(`Your answer: `)
    const rightAnsver = num % 2 === 0 ? 'yes' : 'no'
    if (answer.toLowerCase() === rightAnsver) {
      console.log(`Correct!`);
      wins += 1
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnsver}'.`);
      console.log(`Let's try again, ${name}!`);
      return 
    }
    if (wins === 3)
      console.log(`Congratulations,${name}!`);
  }
}
brainivn()
