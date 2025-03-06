const questions = ["What is the capital of France?", "What is 2 + 2?", "What is the color of the sky?"];
const answers = ["paris", "4", "blue"];
/* create a date object */
const date = new Date();

function currentDate () {
    /*  Returns an integer number, between 1 and 31, representing the day of the month for the given date according to local time. */
    var day = date.getDate();
    /*  Returns the year of a Date object in four digit format */
    var year = date.getFullYear();
    /* create an array of month names and array of day names */
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"]
    /* access the names of the day and month from the arrays using the date from the date object plus the full year */
    return("<p>Today is " + days[date.getDay()] + " " + months[date.getMonth()] + " " + day + ", " + year + ".</p>");
}
document.getElementById("date").innerHTML = currentDate();

function timeResponse() {
    var username = prompt("What is your first name?");
    var usernameCap = username.charAt(0).toUpperCase() + username.substring(1);
    /* return the hour of the day in 24 hour format */
    var hour = date.getHours();
    //if methond for the times
    if(hour >=1 && hour < 12){
        return("Good Morning " + usernameCap);
    }
    else if(hour >= 12 && hour <= 18){
        return("Good Afternoon " + usernameCap);
    }
    else{
        return("Good Evening " + usernameCap);
    }
}
document.getElementById("greetings").innerHTML = timeResponse();

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