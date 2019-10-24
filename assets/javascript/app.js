// var questions = ["Who was the first woman to score a perfect 10 at the Olympics?", "This is the second question", "This is the third question", "This is the fourth question";

// var correctAnswers = ["This is the correct answer to the first question", "This is the correct answer to the second question", "This is the correct answer to the third question", "This is the correct answer to the fourth question"];

// var wrongAnswers = {
//     firstQuestion: ["This is the first wrong answer to the first question", "This is the second wrong answer to the first question", "This is the third wrong answer to the first question"],
//     secondQuestion: ["This is the first wrong answer to the second question", "This is the second wrong answer to the second question", "This is the third wrong answer to the second question"],
//     thirdQuestion: ["This is the first wrong answer to the third question", "This is the second wrong answer to the third question", "This is the third wrong answer to the third question"],
//     fourthQuestion: ["This is the first wrong answer to the fourth question", "This is the second wrong answer to the fourth question", "This is the third wrong answer to the fourth question"]]
// }


//an array of objects contain the questions and answers
var questions = [
    {
        q: "Who was the first woman to score a perfect 10 at the Olympics?",
        a1: "Svetlana Khorkina",
        a2: "Mary Lou Retton",
        a3: "Nadia Comaneci",
        a4: "Simone Biles",
        correct: "Nadia Comaneci"
    },
    {
        q: "In which events can gymnasts be penalized for going overtime?",
        a1: "Balance Beam and Floor Exercise",
        a2: "Vault and Uneven Bars",
        a3: "Vault, Uneven Bars, and Floor Exercise",
        a4: "All of them",
        correct: "Balance Beam and Floor Exercise"
    },
    {
        q: "Which American gymnast performed her final vault in the 1996 Olympics on an injured ankle, clinching the gold for the USA?",
        a1: "Dominique Moceanu",
        a2: "Kerri Strug",
        a3: "Bela Karolyi",
        a4: "Shannon Miller",
        correct: "Kerri Strug"
    },
    {
        q: "When did elite gymnastics get rid of the Perfect 10 by switching to an open-ended scoring system?",
        a1: "1980",
        a2: "1996",
        a3: "2006",
        a4: "2013",
        correct: "2006"
    },
    {
        q: "Which gymnast has won the most total medals at the World Championships?",
        a1: "Nadia Comaneci",
        a2: "Aliya Mustafina",
        a3: "Larisa Latynina",
        a4: "Simone Biles",
        correct: "Simone Biles"
    },
    {
        q: "Which gymnast won the gold medal on Vault in the 2012 Olympics?",
        a1: "Sandra Izbasa",
        a2: "McKayla Maroney",
        a3: "Mykayla Skinner",
        a4: "Simone Biles",
        correct: "Sandra Izbasa"
    }

]

var right = 0;
var wrong = 0;
var index = 0;

console.log("questions is " + questions);

console.log("The first question is: " + questions[0].q);
console.log("The wrong answers to the second question are " + questions[1].a2 + ", " + questions[1].a3 + ", " + questions[1].a4);

var intervalID;
var time = 5;

intervalID = setInterval(countdown, 1000);

//Begins the timer at 5s 
$("#timeLeft").append(time + "s");

console.log("intervalID is " + intervalID);

showQuestion();



//function coundown decreases "time" by 1 each time it's called
function countdown() {
    if (time > 0) {
        time--;
        $("#timeLeft").text(time + "s");
    }
    else {
        timeOut();
    }
}

//The next question is shown in the html
function showQuestion() {
    $("#question").html(questions[index].q);
    $("#answers").html('<input type="radio" name="option" class="radio-button" value="a" data-name="' + questions[index].a1 + '">' + questions[index].a1 + '<br /> <input type="radio" name="option" class="radio-button" value="b" data-name="' + questions[index].a2 + '">' + questions[index].a2 + '<br /> <input type="radio" name="option"  class="radio-button" value="c" data-name="' + questions[index].a3 + '">' + questions[index].a3 + '<br /> <input type="radio" name="option"  class="radio-button" value="d" data-name="' + questions[index].a4 + '">' + questions[index].a4 + '<br /> </p>')



}

//Function executes when the user presses a button
$(document).on("click", ".radio-button", function () {

    //gets the user's selection
    var response = $(this).attr("data-name")
    console.log(response);

    //if it's correct, right is increased by 1
    //if it's incorrect, wrong is increased
    if (response == questions[index].correct) {
        console.log("Correct!");
        right++;
        console.log("right is " + right);
    } else {
        console.log("Incorrect!");
        wrong++;
        console.log("wrong is " + wrong);
    }

    //if the question isn't the last one in the array,
    //time is reset to 5s and showQuestion() is called
    //to show the next question
    if (index < questions.length - 1) {
        index++;
        console.log(index);
        time = 5;
        showQuestion();
    }
});

function timeOut() {
    console.log("timeOut was called");
    time = 5;
    wrong++;
    index++;
    console.log("index is " + index);
    console.log("wrong is " + wrong);
    if (index < questions.length - 1) {
        showQuestion();
    }
    else {

        clearInterval(intervalID);
        resultsPage();
    }
}

function resultsPage() {
    console.log("resultsPage was called");

}
