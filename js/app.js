'use strict'


var name = prompt('What is your name?');
alert("Hello Mr/Mrs " + name);
alert("let's play aguessing game about me?");
alert("Please answer with yes/no or y/n");

var qeustionOne = prompt("is my favorite programming language is java?");
if (qeustionOne.toLowerCase() === 'y' ||qeustionOne.toLowerCase() === 'yes' ){
    //console.log("No It's wrong answer, My favorite programming language is Python");
    alert("No It's wrong answer, My favorite programming language is Python");
}else if(qeustionOne.toLowerCase() === 'n' ||qeustionOne.toLowerCase() === 'no'){
    //console.log("Yes It's right answer, My favorite programming language is Python");
   alert("Yes It's right answer, My favorite programming language is Python");

}

var qeustionTwo = prompt(" is red my favorite color?");
if (qeustionTwo.toLowerCase() === 'y' ||qeustionTwo.toLowerCase() === 'yes' ){
    //console.log("No It's wrong answer, My favorite color is blue ");
    alert("No It's wrong answer, My favorite color is blue ");
}else if(qeustionTwo.toLowerCase() === 'n' ||qeustionTwo.toLowerCase() === 'no'){
    //console.log("Yes It's right answer, My favorite color is blue");
    alert("Yes It's right answer, My favorite color is blue");

}

var qeustionThird= prompt("am i know aboout 4 programming language?");

if (qeustionThird.toLowerCase() === 'y' ||qeustionThird.toLowerCase() === 'yes' ){
    //console.log("No It's wrong answer, I know two programming language that android and python ");
    alert("No It's wrong answer, I know two programming language that android and python ");
}else if(qeustionThird.toLowerCase() === 'n' ||qeustionThird.toLowerCase() === 'no'){
   // console.log("Yes It's right answer, I know two programming language that android and python");
    alert("Yes It's right answer, I know two programming language that android and python");

}



var qeustionFour= prompt("have i take any course in networking ccna?");
if (qeustionFour.toLowerCase() === 'y' ||qeustionFour.toLowerCase() === 'yes' ){
    //console.log("Yes It's right answer, I have take ccna course from cisco and take my certified ");
   alert("Yes It's right answer, I have take ccna course from cisco and take my certified ");

    
}else if(qeustionFour.toLowerCase() === 'n' ||qeustionFour.toLowerCase() === 'no'){
   // console.log("No It's wrong answer, I have take ccna course from cisco and take my certified ");
    alert("No It's wrong answer, I have take ccna course from cisco and take my certified ");

}



var qeustionFive= prompt("have you enjoy with this game?");
switch(qeustionFive.toLowerCase())
{
    case 'y':
        //console.log("thank you for your time  ");
        alert("thank you for your time  ");
        break;

    case 'yes':
        //console.log("thank you for your time  ");
        alert("thank you for your time  ");
        break;

    case 'n':
        //console.log("thank you for your time  ");
        alert("thank you for your time  ");
        break;

    case 'no':
        //console.log("thank you for your time  ");
        alert("thank you for your time  ");
        break;
}





alert("thank you for your time  Mr/Mrs " + name);