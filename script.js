let questions = [
    {
    "question": "What does HTML stand for?",
    "answer_1": "Hyper Text Modul Language",
    "answer_2": "Hyper Text Markup Language",
    "answer_3": "Hyper Test Markup Language",
    "answer_4": "Hyperlink Markup Language",
    "right_answer": 4
},
{
    "question": "Which tag is used to create a hyperlink?",
    "answer_1": "&lt;a&gt;",
    "answer_2": "&lt;img&gt;",
    "answer_3": "&lt;dl&gt;",
    "answer_4": "&lt;link&gt;",
    "right_answer": 1
},
{
    "question": "What is the HTML element used to display an image?",
    "answer_1": "&lt;image&gt;",
    "answer_2": "&lt;img&gt;",
    "answer_3": "&lt;picture&gt;",
    "answer_4": "&lt;pic&gt;",
    "right_answer": 2
},
{
    "question": "Which of the following table tags is used to create a table row?    ",
    "answer_1": "&lt;th&gt;",
    "answer_2": "&lt;td&gt;",
    "answer_3": "&lt;tr&gt;",
    "answer_4": "&lt;table&gt;",
    "right_answer": 3
},
{
    "question": "Which of the following HTML tags is not valid?",
    "answer_1": "&lt;h1&gt;",
    "answer_2": "&lt;h4&gt;",
    "answer_3": "&lt;h8&gt;",
    "answer_4": "&lt;h5&gt;",
    "right_answer": 3
},
];

let currentQuestion = 0;
let rightQuestions = 0;
let audioSuccess = new Audio('audio/right-answer.mp3');
let audioFail = new Audio('audio/wrong-answer.mp3')

function render() {
   document.getElementById('all-questions-number').innerHTML = questions.length;
   document.getElementById('question-number').innerHTML = currentQuestion + 1;

   showQuestion();
}


function showQuestion() {
    if (gameOver()) { //Show endscreen
        showEndscreen();
     } else { // Show question
        showCurrentQuestion();
    }
}


function gameOver() {
    return currentQuestion >= questions.length;
}


function showEndscreen() {
    document.getElementById('endscreen').style = '';
    document.getElementById('questionbody').style = 'display: none;';
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
    document.getElementById('amount-of-questions').innerHTML = questions.length;
}


function showCurrentQuestion() {
    showProgress();
    let question = questions[currentQuestion];
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function showProgress() {
    let percent = (currentQuestion + 1)/questions.length;
    percent = Math.round(percent*100);
    document.getElementById('progressbar').innerHTML = `${percent} %`
    document.getElementById('progressbar').style = `width: ${percent}%;`
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    
    if (rightAnswerSelected(selectedQuestionNumber)) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
        audioSuccess.play();
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        audioFail.play();
    }
    document.getElementById('next-button').disabled = false;

    showQuestion()
}


function rightAnswerSelected(selectedQuestionNumber) {
   return  selectedQuestionNumber == question['right_answer']
}


function nextQuestion() {
    currentQuestion++; //z.B. von 0 auf 1;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
}


function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success', 'bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success', 'bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success', 'bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success', 'bg-danger');
}

function restartGame() {
    document.getElementById('questionbody').style = ''; //show startscreen
    document.getElementById('questionbody').style = 'width: 40rem'; //show startscreen
    document.getElementById('endscreen').style = 'display: none;'; // hide endscreen
    currentQuestion = 0;
    rightQuestions = 0;
    render();
}