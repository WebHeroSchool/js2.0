let num;
let score;
const question1 = {
    question: '2 + 2 = ?',
    answer: '',
    correctAnswer: ''
}
const question2 = {
    question: '5 + 9 = ?',
    answer: '',
    correctAnswer: ''
}
const question3 = {
    question: 'a - b = ?',
    answer: '',
    correctAnswer: 'c'
}
const question4 = {
    question: '20 * 5 = ?',
    answer: '',
    correctAnswer: ''
}
const q = [
    question1, question2, question3, question4
]
q.forEach((item) => {
    if (item.correctAnswer === 'c') {
        console.log(item.correctAnswer);
    }
})