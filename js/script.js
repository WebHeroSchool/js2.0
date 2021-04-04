let num;
let score;
const question1 = {
    question: '2 + 2 = ?',
    answer: (prompt('1. 2 + 2 = ?')),
    correctAnswer: '4'
}
const question2 = {
    question: '5 + 9 = ?',
    answer: (prompt('1. 5 + 9 = ?')),
    correctAnswer: '14'
}
const question3 = {
    question: 'a - b = ?',
    answer: (prompt('2. a - b = ?')),
    correctAnswer: 'c'
}
const question4 = {
    question: '20 * 5 = ?',
    answer: (prompt('20 * 5 = ?')),
    correctAnswer: '100'
}
const q = [
        question1, question2, question3, question4
    ]
    // q.forEach((item) => {
    //     if (item.correctAnswer === 'c') {
    //         console.log(item.correctAnswer);
    //     }
    // })

buildQuiz = q => {
    q.forEach((item) => {
        if (item.answer === item.correctAnswer) {
            alert('Верно');
        } else {
            console.log('Не верно');
        }
    })
}
buildQuiz(q);