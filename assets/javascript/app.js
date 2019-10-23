// var questions = ["Who was the first woman to score a perfect 10 at the Olympics?", "This is the second question", "This is the third question", "This is the fourth question";

// var correctAnswers = ["This is the correct answer to the first question", "This is the correct answer to the second question", "This is the correct answer to the third question", "This is the correct answer to the fourth question"];

// var wrongAnswers = {
//     firstQuestion: ["This is the first wrong answer to the first question", "This is the second wrong answer to the first question", "This is the third wrong answer to the first question"],
//     secondQuestion: ["This is the first wrong answer to the second question", "This is the second wrong answer to the second question", "This is the third wrong answer to the second question"],
//     thirdQuestion: ["This is the first wrong answer to the third question", "This is the second wrong answer to the third question", "This is the third wrong answer to the third question"],
//     fourthQuestion: ["This is the first wrong answer to the fourth question", "This is the second wrong answer to the fourth question", "This is the third wrong answer to the fourth question"]]
// }

console.log("The javascript is linked");

var questions = [
    {
        question: "Who was the first woman to score a perfect 10 at the Olympics?",
        correctAnswer: "Nadia Comaneci",
        wrongAnswers: ["Mary Lou Retton", "Svetlana Khorkina", "Simone Biles"],
    },
    {
        question: "In which events can gymnasts not be penalized for going overtime?",
        correctAnswer: "Vault and Uneven Bars",
        wrongAnswers: ["Vault, Uneven Bars, and Floor Exercise", "Balance Beam and Floor Exercise", "All of them"]
    }
]

console.log("questions is " + questions);

console.log("The first question is: " + questions[0].question);
