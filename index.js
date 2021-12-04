
var readlinesync = require ("readline-sync");

var score=0;

var playername = readlinesync.question("what is yoyur name? ");
console.log ("welcome " , playername , " to do you know saurav!");
console.log ("-----------------------------------------------------------")

function quiz( question, answer) {
  var userans = readlinesync.question(question);

  if (userans === answer) {
    console.log("you are right");
    score = score + 1;
  }
    else { 
      console.log("you are wrong")
    }

    console.log("you current score is" , score);

}
//without array.
// quiz("which city i live in ?", "panvel");


var questions = [ { 
  question: "where do i live ? ",
  answer: "mumbai"
},
  { 
  question: "which is my school ? ",
  answer:  "NHPS"

   
},
  {
  question: "my hobby ? ",
  answer: "playing",
},

{
    question: "my hometown ? ",
    answer: "panvel",
  },

  {
    question: "my pet name ? ",
    answer: "bruno",
  },



];



for (let qestion in questions){
  quiz(questions[qestion].question , questions[qestion].answer);
}


