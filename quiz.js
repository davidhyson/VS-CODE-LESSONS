const questions = ["What is the capital of France?", "What is 2 + 2?", "What is the color of the sky?"];
const answers = ["paris", "4", "blue"];

function startQuiz() {
    let score = 0;
    let quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = ""; // Clear previous content

    for (let i = 0; i < questions.length; i++) {
        let guesses = 3;
        let userAnswer = "";

        while (guesses > 0) {
            userAnswer = prompt(questions[i]).toLowerCase(); // Get user input
            if (userAnswer === answers[i]) {
                score += guesses; // Award points based on attempts left
                alert("Correct! You earned " + guesses + " points.");
                break;
            } else {
                guesses--;
                if (guesses > 0) {
                    alert("Wrong! Try again. Attempts left: " + guesses);
                } else {
                    alert("Incorrect! The correct answer was: " + answers[i]);
                }
            }
        }
    }

    document.getElementById("score").innerText = "Your Score: " + score;
}