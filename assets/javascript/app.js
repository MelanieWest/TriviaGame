
//list groups as a dictionary, with the question/answer pair together
//keep outside functions so they're global

var animalGroups = { 'Alligators':'Congregation' , 'Apes':'Shrewdness', 'Barracudas':'Battery', 'Clams':'Bed',
'Crows':'Murder', 'Geese':'Gaggle', 'Gnus':'Implausibility', 'Hedgehogs':'Array', 'Ponies':'String', 
'Mice':'Mischief', 'Mosquitoes':'Scourge', 'Cockroaches':'Intrusion', 'Cobras':'Quiver', 'Owls':'Parliament', 
'Rattlesnakes':'Rhumba', 'Rhinos':'Crash', 'Salamanders':'Congress', 'Wolves':'Pack', 'Wombats':'Wisdom', 
'Zebras':'Zeal', 'Lions':'Pride', 'Cats':'Nuisance','Camels':'Caravan'};

var quiz=[];

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



$(document).ready(function(){

//first, just try to print to the screen
//for (var i = 0; i<5; i++){

var i = 0   //set the variable outside the timer function

// for now - the timer starts when a button is clicked.  Change that to 
//be the end of prev question or a 'start quiz' button -----
//---------------------------------------------------------------
//click the 'seconds' button to start counting 
//seconds to the 'seconds-count' line.  The id
// of startTimer can be used to end the count
// declared globally, then returned after it's reset in a function

var startTimer = 0;     //global (to the doc ready function...)

$("#secCount").on("click",function(){

//startTimer is a number id assigned to the timer.
// The timer counts for 1000 ms and then executes 'myTimer'
// function.  It will go forever until terminated by id
//using the 'stopCount' button.


startTimer = setInterval(myTimer,1000);
var Count = 0;  //initialize before starting timer

function myTimer(){
    Count += 1;
    $("#seconds-count").html(Count + " seconds have passed")
}
return startTimer;  // this has to be returned for the timer to stop on click
})


$("#stopCount").on("click",function(){
    clearTimeout(startTimer);    
})
//-------------------above block is the timer that counts seconds------
//'delayButtonAlert' is an id assigned to the timeout event.
// the id is used if I want to cancel the countdown

//start this with each new question.  The code inside will simply display the 
//animation and then start a new question 

$("#start").on("click", function(){
    delayButtonAlert = setTimeout(function(){
     $("#timer").html('30 seconds have passed');
    },30000);
  });
  
  //for now, clicking the cancel button will stop the timer
  //I'll need to change this to when the question is answered
  $("#cancel").on("click",function(){
  clearTimeout(delayButtonAlert);
  })
  //this resets anything written to the 'timer' id when the
  //reset button is pushed (I may not need this...)
  
  $("#reset").on("click",function(){
  $("#timer").html('');
  })
  //--------------------------------------------------------
  


    $("#question").html("What do you call a group of " + quiz[i].question + " ?");
    
    $("#option-1").html(quiz[i].choice1);
    $("#option-2").html(quiz[i].choice2);
    $("#option-3").html(quiz[i].choice3);
    $("#option-4").html(quiz[i].choice4);
   
    
       //now, compare chosen option to correct one  
    $(".btn").on("click",function(){
        userChoice = parseInt($(this).val());
        console.log(userChoice);
        if (userChoice == quiz[i].ans){
            $("#seconds-count").html('correct!');        
        }
        else {
            $("#seconds-count").html('sorry!');       
        }
    });
        //make the screen wait 5 seconds for a response
        delayButtonAlert = setTimeout(function(){
        $("#timer").html('5 seconds have passed');
        },5000);

    $("#cancel").on("click",function(){
        clearTimeout(delayButtonAlert);
        })
    
    }


    

     


 

  

// ---- this is me learning timers ----------------------------------------------
// the variable 'windowTimeout' is a number assigned to this
// timer - it is an id that can be used to stop or 
//reset the timer.

// the function inside executes only AFTER the assigned delay

var windowTimeout = setTimeout(function(){
    console.log('2 seconds have passed since reset');
},2000);


//-----------end of me learning timers

//set up objects with q/a
//upon 'start' event, begin cycling thru questions

//post question 1 w/answer choices and start 1) a timer and 2)a counter.

//(if) the question is answered before time's up, stop both the timer and counter 
//(if this is true, determine correctness and calc. stats)

// (else), if the timer runs out on its own, have the counter reset automatically
// (count this as a missed question)

//in either case, show answer with an animation and reset timer/counter

//when all questions are finished, display stats and display a button for reset/restart

}) //end of document ready function

function quizConstructor(question,choice1,choice2,choice3,choice4,ans,asked){
    this.question = question;
    this.choice1   = choice1;
    this.choice2   = choice2;
    this.choice3   = choice3;
    this.choice4   = choice4;
    this.ans       = ans;
    this.asked     = asked;

}
