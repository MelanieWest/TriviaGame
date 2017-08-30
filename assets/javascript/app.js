$(document).ready(function(){

//on click of a start button, load first question

var i=0;
var quiz=[];
var intervalTimer;
var delayButtonAlert;

quizBuild();        //put data into quiz constructor function to make object

$("#new-question").on("click",function(){       //change from click event to something else soon

    $("#message").html('');       
    $("#seconds-count").html("");

    quizWrite(i);       //write out i-th question
        
    //begin 1-second-interval timer for display

    intervalTimer = setInterval(myTimer,1000);
    var Count = 30;  //initialize before starting timer

    function myTimer(){       //this displays the seconds
        Count -= 1;
        $("#seconds-count").html('You have '+ Count + " seconds left ")
    }
   
    $(".answer").on("click",function(){
        userChoice = parseInt($(this).val());
        console.log(userChoice);
        console.log(quiz[i]);
        console.log(quiz[i].ans);
        clearTimeout(intervalTimer); 
        if (userChoice == quiz[i].ans){
            $("#message").html('correct!'); 
            i++;      
        }
        else {
            $("#message").html('sorry!');
             i++;       
        }
 
         // increment array item after one attempt (also modify stats here)
       console.log(i);
});
   // compare chosen option to correct one  




 //initiate the 30 second timer.  This will execute display of gif, show data and load a new question

 //for testing purposes, make this a shorter time

    $("#new-question").on("click", function(){      //allow answering the question to activate contents also        
        delayButtonAlert = setTimeout(function(){
         $("message").html('5 seconds have passed');
        },5000);
      });

    //   clearTimeout(delayButtonAlert);        //activate this when I want this to stop/reset
    $("#stop").on("click",function(){      //for now, start timer will stop with answer or button
        clearTimeout(startTimer);
        clearTimeout(delayButtonAlert);    
    })
    


})      //end of 'new question' block



//when first question is loaded, start 2 timers:
// the seconds count timer and the timeout timer;

function quizConstructor(question,choice1,choice2,choice3,choice4,ans,asked){

    this.question = question;
    this.choice1   = choice1;
    this.choice2   = choice2;
    this.choice3   = choice3;
    this.choice4   = choice4;
    this.ans       = ans;
    this.asked     = asked;

}

function quizBuild(){

    console.log('quizBuild');

    quiz[0] = new quizConstructor('Alligators','Scourge','Congregation','Array','Herd',2,false);
    quiz[1] = new quizConstructor('Crows','Murder','Flutter','Omen','Poe',1,false);
    quiz[2] = new quizConstructor('Geese','Nuisance','Parliament','Gaggle','Honk',3,false);
    quiz[3] = new quizConstructor('Mice','Click','Mischief','Nibble','World',2,false);
    quiz[4] = new quizConstructor('Cockroaches','Immortality','Crunch','Plague','Intrusion',4,false);
    // --- need to modify the rest ---
    // quiz[5] = new quizConstructor('Rhinos','Crash',false;
    // quiz[6] = new quizConstructor('Zebras','Zeal',false);
    // quiz[7] = new quizConstructor('Rattlesnakes','Rhumba',false);
    // quiz[8] = new quizConstructor('Cats','Nuisance',false);
    // quiz[9] = new quizConstructor('Hedgehogs','Array',false);
    // quiz[10] = new quizConstructor('Ponies','String',false);
    // quiz[11] = new quizConstructor('Wombats','Wisdom',false);
    // quiz[12] = new quizConstructor('Wolves','Pack',false);
    // quiz[13] = new quizConstructor('Lions','Pride',false);
    // quiz[14] = new quizConstructor('Owls','Parliament',false);
    // quiz[15] = new quizConstructor('Wombats','Wisdom',false);
    // quiz[16] = new quizConstructor('Salamanders','congress',false);
    // quiz[17] = new quizConstructor('Barracuda','Battery',false);
    // quiz[18] = new quizConstructor('Wombats','Wisdom',false);
    // quiz[19] = new quizConstructor('Apes','Shrewdness',false);
    // quiz[20] = new quizConstructor('Mosquitos','Scourge',false);
    // quiz[11] = new quizConstructor('Ants','Colony',false);
    // quiz[11] = new quizConstructor('Cobras','Quiver',false);

    return quiz
}


function quizWrite(index){

    console.log('quizWrite');

    $("#question").html("What do you call a group of " + quiz[index].question + " ?");
    
    $("#option-1").html(quiz[index].choice1);
    $("#option-2").html(quiz[index].choice2);
    $("#option-3").html(quiz[index].choice3);
    $("#option-4").html(quiz[index].choice4);
    
}




})