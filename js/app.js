'use strict'


var name = prompt('What is your name?');
console.log("Hello Mr/Mrs " + name);
alert("Hello Mr/Mrs " + name);
alert("let's play aguessing game about me? \n Please answer with yes/no or y/n");

var arrayOfAnswers = [] ;

var totalScore = 0;

var qeustionOne = prompt("is my favorite programming language is java?");
if (qeustionOne.toLowerCase() === 'y' ||qeustionOne.toLowerCase() === 'yes' ){
    var message = "My favorite programming language is Python"
    alertWrongAswer(message, "qeustionOne");
}else if(qeustionOne.toLowerCase() === 'n' ||qeustionOne.toLowerCase() === 'no'){
    alertCorrectAswer(message, "qeustionOne");
}else{
    alertWrongInput()
}


var qeustionTwo = prompt(" is red my favorite color?");
if (qeustionTwo.toLowerCase() === 'y' ||qeustionTwo.toLowerCase() === 'yes' ){
    var message = "My favorite color is blue";
    alertWrongAswer(message, "qeustionTwo");
}else if(qeustionTwo.toLowerCase() === 'n' ||qeustionTwo.toLowerCase() === 'no'){
    alertCorrectAswer(message, "qeustionTwo");
}else{
    alertWrongInput()
}


var qeustionThird= prompt("am i know aboout 4 programming language?");
if (qeustionThird.toLowerCase() === 'y' ||qeustionThird.toLowerCase() === 'yes' ){
    var message = "I know two programming language that android and python";
    alertWrongAswer(message, "qeustionThird");
}else if(qeustionThird.toLowerCase() === 'n' ||qeustionThird.toLowerCase() === 'no'){
    alertCorrectAswer(message, "qeustionThird");
}else{
    alertWrongInput()
}


var qeustionFour= prompt("have i take any course in networking ccna?");
if (qeustionFour.toLowerCase() === 'y' ||qeustionFour.toLowerCase() === 'yes' ){
    var message = "I have take ccna course from cisco and take my certified";
    alertCorrectAswer(message, "qeustionFour");
}else if(qeustionFour.toLowerCase() === 'n' ||qeustionFour.toLowerCase() === 'no'){
    alertWrongAswer(message, "qeustionFour");
}else{
    alertWrongInput()
}


var qeustionFive= prompt("have you enjoy with this game?");
switch(qeustionFive.toLowerCase())
{
    case 'y':
    case 'yes':
        console.log("thank you for your time  ");
        alert("thank you for your time  ");
        arrayOfAnswers.push(["qeustionFive ", " Correct Answer"]);
        totalScore++;
        break;
    case 'no':
    case 'n':
        console.log("thank you for your time  ");
        alert("thank you for your time  ");
        break;
    default:
        console.log("Please make sure to input yes/no");
        alert("Please make sure to input yes/no");
        arrayOfAnswers.push(["qeustionFive ", " Wrong Answer"]);
        break;
          
}


answerScore();


var counter = 4;
var i = 0;
var rand =Math.floor(Math.random() * 50);
while(i < 4)
{

    var checkAnswer = "";
    var questionSix = parseInt(prompt("enter guess number between 1 and 50 ? \n you have "+ counter+" opportunity to guess the correct number"));
    if(questionSix >=  1  && questionSix < rand){
        console.log('Too Low');
        checkAnswer = checkAnswer + " Too Low \n";
        //alert('Too Low');
    }
    else if (questionSix <= 50 && questionSix > rand){
        console.log('Too High');
        checkAnswer = checkAnswer + " Too High \n";
        //alert('Too High');
    }
    else if (isNaN(questionSix)){
        console.log('Please make sure to enter a number');
        checkAnswer = checkAnswer + " Please make sure to enter a number \n";
       // alert('Please make sure to enter a number ');
    }
    else if(questionSix === rand){
        console.log('you have the correct answer');
        alert('you have the correct answer');
        totalScore++;
        break;
    }
    counter--;
    if(counter !== 0){
        console.log(checkAnswer +'you stll have  '+ counter + '  opportunity try again');
        alert(checkAnswer +'you stll have  '+ counter + '  opportunity try again');
    }else{
        console.log('you take all opportunity');
        alert('you take all opportunity');
    }

    if(i === 3){
        console.log('Oh I am sorry you did not guess  \n The correct answer is '+ rand);
        alert('Oh I am sorry you did not guess  \n The correct answer is '+ rand);
    }
    i++;
}


var correctAnswer = ['golf mk3 gti','bmw e45','shalpy 500gt','eleanor 1969','hellcat','g-class']
var count = 6;
var j = 0;
while(j < 6)
{
    var questionSaven =prompt(" guess what is my favorit car ? \n you have "+ count +" opportunity to guess the correct number");
    var checkCarAnswer = "" ;
    if(questionSaven === null){
        console.log('you have did not input any thing ');
        //alert('you have did not input any thing ');
        checkCarAnswer = checkCarAnswer + 'you have did not input any thing \n';
    }
    else{
        if(correctAnswer.indexOf(questionSaven.toLowerCase()) !== -1){
            console.log('you have guess the correct answer');
            alert('you have guess the correct answer \n');
            totalScore++;
            var cars = 'this is all correct answer \n';
            for(var x = 0; x < correctAnswer.length; x++){
                 console.log('Answer number ' + (x+1) + ' is : '+ correctAnswer[x].toUpperCase())
                 cars = cars +' Answer number ' + (x+1) + ' is : '+ correctAnswer[x].toUpperCase() +'\n';
             }
            console.log(cars);
            alert(cars);
            break;
        }
        else{
            console.log('you did not guess the correct answer');
            //alert('you did not guess the correct answer');
            checkCarAnswer = checkCarAnswer + 'you did not guess the correct answer \n';
        }
         count--;
         if(count !== 0){
           console.log(checkCarAnswer + ' you stll have  '+ count + '  opportunity try again');
          alert(checkCarAnswer + ' you stll have  '+ count + '  opportunity try again');
         }else{
            console.log('you take all opportunity');
            alert('you take all opportunity');
         }
     
         if(j === 5){
             console.log('Oh I am sorry you did not guess The correct answer');
             alert('Oh I am sorry you did not guess The correct answer ');
             var car = 'this is all correct answer \n';
             for(var k = 0; k < correctAnswer.length; k++){
                 console.log('Answer number ' + (k+1) + ' is : '+ correctAnswer[k].toUpperCase())
                 car = car +' Answer number ' + (k+1) + ' is : '+ correctAnswer[k].toUpperCase() +'\n';
             }
             console.log(car);
             alert(car);
         }
    }

   
    j++;
}


alert("thank you for your time  Mr/Mrs " + name + "\n Your Score is : " + totalScore+" of 7 ");


function alertWrongAswer(message, questionNumber){
    console.log("No It's wrong answer, " +message );
    alert("No It's wrong answer, " +message);
    arrayOfAnswers.push([questionNumber, " Wrong Answer"]);
}

function alertCorrectAswer(message, questionNumber){
    console.log("Yes It's right answer, " +message );
    alert("Yes It's right answer, " +message);
    arrayOfAnswers.push([questionNumber, " Correct Answer"]);
    totalScore++;
}

function alertWrongInput(){
    console.log("Please make sure to input yes/no or y/n");
    alert("Please make sure to input yes/no or y/n");
}

function answerScore(){
    var answer = "your answered "+ arrayOfAnswers.length +" Question and the answers is : \n ";
    for (var c = 0; c< arrayOfAnswers.length ; c++){
        answer = answer + arrayOfAnswers[c] +"\n";
    }
    console.log(answer);
    alert( answer);
}