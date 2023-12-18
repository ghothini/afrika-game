const answerInputElement = document.getElementById('answer');
const questionElement = document.getElementById('question');
const questionNoElement = document.getElementById('questionNo');
const questionProgressElement = document.getElementById('questionProgress');
const tries1Element = document.getElementById('tries1');
const tries2Element = document.getElementById('tries2');
const tries3Element = document.getElementById('tries3');
const pointsElement = document.getElementById('points');
const submitBtn = document.getElementById('submit');

// Initialize game points to 0 before questions
var points = 0;
var count = 0;
var tries = 3;
var minusTryColor = '#c7c7c7';
var defaultTryColor = 'blue';
// questionPrompts count for everytime user input answer, starts @ 0
var questionPrompts = 1;
var question, questionAnswer;
// Levels array for holding level questions and their correct answers
var levels = [{
    question: 'What side of the hemisphere is South Afica?' ,
    questionAnswer: 'Southern Hemisphere'
}, {
    question: 'What side of the hemisphere is South Afica?',
    questionAnswer: 'Southern Hemisphere'
}, {
    question: 'What side of the hemisphere is South Afica?',
    questionAnswer: 'Southern Hemisphere'
}, {
    question: 'What side of the hemisphere is South Afica?',
    questionAnswer: 'Southern Hemisphere'
}, {
    question: 'What side of the hemisphere is South Afica?',
    questionAnswer: 'Southern Hemisphere'
}, {
    question: 'What side of the hemisphere is South Afica?',
    questionAnswer: 'Southern Hemisphere'
}, {
    question: 'What side of the hemisphere is South Afica?',
    questionAnswer: 'Southern Hemisphere'
}, {
    question: 'What side of the hemisphere is South Afica?',
    questionAnswer: 'Southern Hemisphere'
}, {
    question: 'What side of the hemisphere is South Afica?',
    questionAnswer: 'Southern Hemisphere'
}, {
    question: 'What side of the hemisphere is South Afica?',
    questionAnswer: 'Southern Hemisphere'
}]

// Show Question 1
questionNoElement.innerHTML = `Question ${count + 1}`;
questionElement.innerHTML = levels[count].question;
// Show default atttempts message
questionProgressElement.innerHTML = 'Each question has 3 attempts to answer!';

submitBtn.addEventListener('click', (e) => {
    let userAnswer = answerInputElement.value;

    if (!userAnswer) {
        alert('You must provide an answer to proceed.');
        return;
    }

    // Get Question and question answer from array
    question = levels[count].question;
    questionAnswer = levels[count].questionAnswer;

    // Start question point to 0 every time
    let questionPoint = 0;

    switch (questionPrompts) {
        case 2:
            if (userAnswer === questionAnswer) {
                // Correct answer increase questionPoint by 1
                questionPoint++;
                // Make questionPrompts final 4 to exit question
                questionPrompts = 4;
                // Show question progress
                questionProgressElement.innerHTML = 'Congratulations! moved on to next question';
            } else {
                // Incorrect answer input reduces tries by 1
                tries--;
                // Change color or full tries div (-1)
                tries2Element.style.backgroundColor = minusTryColor;
                questionPrompts++;
                questionProgressElement.innerHTML = `Wrong answer! Regardless you have ${tries} attempts remaining`;
                // Show Question & Receive Answer
            }
            break;
        case 3:
            if (userAnswer === questionAnswer) {
                // Correct answer increase questionPoint by 1
                questionPoint++;
                // Make questionPrompts final 4 to exit question
                questionPrompts = 4;
                // Show question progress
                questionProgressElement.innerHTML = 'Congratulations! moved on to next question';
            } else {
                questionPrompts++;
                questionProgressElement.innerHTML = 'Previous question failed,Regardless you moved on to next question.';
            }
            break;

        default:
            if (userAnswer === questionAnswer) {
                // Correct answer increase questionPoint by 1
                questionPoint++;
                // Show question progress
                questionProgressElement.innerHTML = 'Congratulations! moved on to next question';
            } else {
                // Incorrect answer input reduces tries by 1
                tries--;
                // Change color or full tries div (-1)
                tries3Element.style.backgroundColor = minusTryColor;

                questionPrompts++;
                questionProgressElement.innerHTML = `Wrong answer! Regardless you have ${tries} attempts remaining`;
                // Show Question & Receive Answer
            }
            break;
    }

    // Clear input element
    resetInput();

    // Run only if questions are passed or tries are out.
    if (questionPrompts === 1 || questionPrompts === 4) {
        points += questionPoint;

        // Show current game points after every question
        pointsElement.innerHTML = points;
        count++;

        questionNoElement.innerHTML = `Question ${count + 1}`;
        questionElement.innerHTML = levels[count].question;

        // Reset tries to 3 after every question
        tries = 3;
        // Reset questionPrompts to 1 for every new question's first prompt
        questionPrompts = 1;

        // Show the correct full tries colors
        tries1Element.style.backgroundColor = defaultTryColor;
        tries2Element.style.backgroundColor = defaultTryColor;
        tries3Element.style.backgroundColor = defaultTryColor;
    }
})


// Function for reseting input after question answer
const resetInput = () => answerInputElement.value = '';