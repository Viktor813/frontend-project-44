import { getInt } from "./helper.js";
export default () => {
    const question = getInt();
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    return { question, correctAnswer };
};
