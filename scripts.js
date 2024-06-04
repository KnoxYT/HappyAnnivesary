document.getElementById('flowersButton').addEventListener('click', function() {
    document.getElementById('flowersGif').classList.remove('hidden');
    document.getElementById('backgroundMusic').play(); // Start music on first interaction
});

document.getElementById('nextPageButton').addEventListener('click', function() {
    document.getElementById('flowersGif').classList.add('hidden');
    document.getElementById('questionsSection').classList.remove('hidden');
});

let questions = document.querySelectorAll('#questionsSection .card');
let answers = document.querySelectorAll('.answer');
let currentQuestion = 0;

answers.forEach(answer => {
    answer.addEventListener('click', function() {
        questions[currentQuestion].classList.add('hidden');
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            questions[currentQuestion].classList.remove('hidden');
        } else {
            document.getElementById('readLetterButton').classList.remove('hidden');
        }
    });
});

document.getElementById('readLetterButton').addEventListener('click', function() {
    document.getElementById('questionsSection').classList.add('hidden');
    document.getElementById('letterSection').classList.remove('hidden');
});
