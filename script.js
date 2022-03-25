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
    "answer_1": "<a>",
    "answer_2": "<img>",
    "answer_3": "<dl>",
    "answer_4": " <link>",
    "right_answer": 1
},
{
    "question": "What is the HTML element used to display an image?",
    "answer_1": "<image>",
    "answer_2": "<img>",
    "answer_3": "<picture>",
    "answer_4": "</pic>",
    "right answer": 2
},
{
    "question": "Which of the following table tags is used to create a table row?    ",
    "answer_1": "<th>",
    "answer_2": "<td>",
    "answer_3": "<tr>",
    "answer_4": "<table>",
    "right_answer": 3
},
{
    "question": "Which of the following HTML tags is not valid?",
    "answer_1": "<h1>",
    "answer_2": "<h4>",
    "answer_3": "<h8>",
    "answer_4": " <h5>",
    "right_answer": 3
},
];

let currentQuestion = 0;

function render() {
   document.getElementById('question_number').innerHTML = questions.length;

   showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
   
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    
    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;

}