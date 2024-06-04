document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('question1').style.display = 'block';
    playMusic();
});

function playMusic() {
    var audio = document.getElementById('background-music');
    audio.play();
}

function preventSelection() {
    alert("Please choose a positive option.");
}

function nextQuestion(questionNumber) {
    document.querySelector(`#question${questionNumber - 1}`).style.display = 'none';
    document.querySelector(`#question${questionNumber}`).style.display = 'block';
}

function showFlowerPage() {
    document.querySelector('#question3').style.display = 'none';
    document.querySelector('.flower-page').style.display = 'block';
}

function showFlower() {
    document.querySelector('.flower-page').style.display = 'none';
    document.querySelector('.flower').style.display = 'block';
}

function showLetterPage() {
    document.querySelector('.flower').style.display = 'none';
    document.querySelector('.letter-page').style.display = 'block';
}

function showLetter() {
    document.querySelector('.letter-page').style.display = 'none';
    document.querySelector('#card').classList.remove('hidden'); // Show the card
    document.querySelector('#card').classList.add('open'); // Add the open class to flip the card
    document.querySelector('.final-message').style.display = 'block';
}