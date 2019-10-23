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
        q: "Who was the first woman to score a perfect 10 at the Olympics?",
        a1: "Svetlana Khorkina",
        a2: "Mary Lou Retton",
        a3: "Nadia Comaneci",
        a4: "Simone Biles",
        correct: "Nadia Comaneci"
    },
    {
        q: "In which events can gymnasts not be penalized for going overtime?",
        a1: "Vault and Uneven Bars",
        a2: "Balance Beam and Floor Exercise",
        a3: "Vault, Uneven Bars, and Floor Exercise",
        a4: "All of them",
        correct: "Vault and Uneven Bars"
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
    }

]

console.log("questions is " + questions);

console.log("The first question is: " + questions[0].q);
console.log("The wrong answers to the second question are " + questions[1].a2 + ", " + questions[1].a3 + ", " + questions[1].a4);
