

//var that contains the questions
var counter = 0;
var questions = [
    ["Which one is a front end framework?", 1, "Orion", "React", "MonkeyJS"],
    ["Which company makes cameras?", 0, "SONY", "Epson", "Toshiba"],
    ["Which phone brand is Popular in the USA?", 2, "Android", "Window", "Apple"]
];


//get html information
const section =document.querySelector('section');
const question_paragraph = document.getElementById("question");
const answer_list = document.getElementById("answers");
const prompt_paragraph = document.getElementById("prompt");
//--------------
//create
//create button dynamically (innerHTMl deletes what was inside so it is not convenient now)
const PlayGamebutton = document.createElement("button");
//set the ID
PlayGamebutton.setAttribute("id", "start");
//create the text in the button
PlayGamebutton.textContent = "Start";
//append it to the section
section.appendChild(PlayGamebutton);
PlayGamebutton.addEventListener("click", () => {
    PlayGame();
})
//function when it plays

function PlayGame(){
var current_question = questions[counter];
question_paragraph.innerText = current_question[0];
current_question.shift();
var correct_answer_index = current_question[0];
current_question.shift();
var answerHTML= ''
//add more to the list of answers (since there is nothing inside then it is fine to use innerHTML
for(var i =0; i < current_question.length; i++){
    answerHTML +='<li><a href="#" onClick="checkAnswer(' + i + ', ' + correct_answer_index + ')">' + current_question[i] + '</a></li>';
}
answer_list.innerHTML = answerHTML;
counter++;

}
//check answer function
function checkAnswer(selected_index, correct_answer_index){
if(correct_answer_index == selected_index){
    prompt_paragraph.innerHTML = "Correct, Move to the next one";
}
else{
    prompt_paragraph.innerHTML = "Wrong answer";
}
if(counter == questions.length){
    //start over
    PlayGamebutton.textContent = "Start Over";
    PlayGamebutton.addEventListener("click", function(){
        location.reload();
    })
}
else{
    PlayGamebutton.textContent = "Next Question";
}


}



//---------------------------



