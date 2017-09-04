$(document).ready(function(){

//on click of a start button, load first question

var i=0;
var quiz=[];
var intervalTimer;
var delayButtonAlert;
var Count;
var imageChoice;
var correct=0;
var missed =0;
var attempted = 0;
var rightAns;

var questionIndex;  //protect answer from changing upon accidental double-click of ans button

quizBuild();        //put data into quiz constructor function to make object
$(".answer").hide();

$("#new-question").on("click",function(){       //change from click event to something else soon

    $(".stats, #Reveal, #message").hide();
    $("#message").html('');       
    $("#seconds-count").html("");
    if(i != 0) {$(".animal").remove();}

    quizWrite(i);       //write out i-th question
     $(".answer").show();

    //begin 1-second-interval timer for display

    Count = 30;  //initialize before starting timer    
    intervalTimer = setInterval(function(){
        Count -= 1;
        $("#seconds-count").html('<h4> You have '+ Count + ' seconds left </h4>')
        
     },1000);

     //begin timeout timer for end-of-question;
     delayButtonAlert = setTimeout(function(){
        displayStats();
        imageChoice = imageInsert(i);
        $("#picture").html(imageChoice);
        clearTimeout(intervalTimer);            //stop interval timer here 
        $(".stats, #Reveal, #message").show();
        i++;
    },30000);  // picture should show up after 30 seconds


    $(".answer").on("click",function(){

        userChoice = parseInt($(this).val());
        if ((1 <= userChoice) && (userChoice <= 4)){
            quiz[questionIndex].attempted = true; 
            attempted += 1;
        }

        if (quiz[questionIndex].attempted == true){ 
            $("#message").html('You answered this one already');
        }
 
        // console.log(userChoice);
        // console.log(quiz[questionIndex]);
        // console.log(quiz[questionIndex].question);
        
        clearTimeout(intervalTimer);            //stop both timers here
        clearTimeout(delayButtonAlert);  
        if (userChoice == quiz[questionIndex].ans){
            $("#message").html('correct!');
            correct += 1;
        }
        else {
            $("#message").html('sorry!');
            missed += 1;
        }
        displayStats();
        $(".stats, #Reveal, #message").show();
        imageChoice = imageInsert(i);       //I'm getting multiple images prop to index....
        $("#picture").html(imageChoice);
        rightAns = quizAnswer(i);       //make i=index
        $("#Reveal").html(rightAns);

});
  
        if (i == 8){
            $("#message").html("Quiz Complete!");
            $("#question, .answer, #Reveal,").hide();
        }
        i++;

})      //end of 'new question' block



function quizConstructor(question,choice1,choice2,choice3,choice4,ans,imageURL,attempted){

    this.question = question;
    this.choice1   = choice1;
    this.choice2   = choice2;
    this.choice3   = choice3;
    this.choice4   = choice4;
    this.ans       = ans;
    this.imageURL  = imageURL;
    this.attempted = attempted;

}

function quizBuild(){

//    console.log('quizBuild');

    quiz[0] = new quizConstructor('Alligators','Scourge','Congregation','Array','Herd',2,"https://media.giphy.com/media/11nNT2EiGIKsBa/giphy.gif",false);
    quiz[1] = new quizConstructor('Crows','Murder','Flutter','Omen','City',1,'https://media.giphy.com/media/VeTm2S9veYuli/giphy.gif',false);
    quiz[2] = new quizConstructor('Geese','Nuisance','Parliament','Gaggle','Honk',3,'https://media.giphy.com/media/b8hm9N1bjne3S/giphy.gif',false);
    quiz[3] = new quizConstructor('Mice','Click','Mischief','Nibble','World',2,'https://media.giphy.com/media/tCWMUAuZLMvKg/giphy.gif',false);
    quiz[4] = new quizConstructor('Cockroaches','Immortality','Crunch','Plague','Intrusion',4,'https://media.giphy.com/media/lSwE4S5EPUHf2/giphy.gif',false);
    quiz[5] = new quizConstructor('Rhinos','Rhumba','Wallop','Crash','Cluster',3,'https://media.giphy.com/media/pr7WHmW9qqG4M/giphy.gif',false);
    quiz[6] = new quizConstructor('Zebras','Zeal','Line','Skinny','Zip',1,'https://media.giphy.com/media/l0HlHPUWqZ8iTXjAA/giphy.gif',false);
    quiz[7] = new quizConstructor('Cats','Mob','Conspiracy','Royalty','Nuisance',4,'https://media.giphy.com/media/3o85xGRWMlHdGB1vMs/giphy.gif',false);
    quiz[8] = new quizConstructor('Hedgehogs','Array','Variable','Object','Function',1,'https://media.giphy.com/media/11mVKGuLwmfAZ2/giphy.gif',false);
    // --- need to modify the rest ---
  // quiz[9] = new quizConstructor('Rattlesnakes','Coil','Rhumba','Slither','Pile',2,'https://media.giphy.com/media/kkw6txIhMqnBu/giphy.gif',false);
  // quiz[10] = new quizConstructor('Ponies','String',4,false);
    // quiz[11] = new quizConstructor('Wombats','Wisdom',2,false);
    // quiz[12] = new quizConstructor('Wolves','Pack',2,false);
    // quiz[13] = new quizConstructor('Lions','Pride',3,false);
    // quiz[14] = new quizConstructor('Owls','Parliament',1,false);
    // quiz[15] = new quizConstructor('Cobras','Quiver',false);
    // quiz[16] = new quizConstructor('Salamanders','congress',4,false);
    // quiz[17] = new quizConstructor('Barracuda','Battery',false);
    // quiz[18] = new quizConstructor('Wombats','Wisdom',false);
    // quiz[19] = new quizConstructor('Apes','Shrewdness',false);
    // quiz[20] = new quizConstructor('Mosquitos','Scourge',false);
    // quiz[21] = new quizConstructor('Ants','Colony',false);

    return quiz
}


function quizWrite(index){

 //   console.log('quizWrite');

    questionIndex = index;

    $("#question").html("What do you call a group of " + quiz[index].question + " ?");
    
    $("#option-1").html(quiz[index].choice1);
    $("#option-2").html(quiz[index].choice2);
    $("#option-3").html(quiz[index].choice3);
    $("#option-4").html(quiz[index].choice4);
 
  return questionIndex;  
}


function quizAnswer(index){
    if (quiz[index].ans == 1){
        quizAns = quiz[index].choice1;
    }else if (quiz[index].ans == 2){
        quizAns = quiz[index].choice2;
    }else if (quiz[index].ans == 3){
        quizAns = quiz[index].choice3;
    }if (quiz[index].ans == 4){
        quizAns = quiz[index].choice4;
    }
    console.log(quizAns);

    return quizAns;
}



function displayStats(){
    $(".stats").html("<h4> Correct: "+correct+'<br>'+"Incorrect: " + missed + '<br>' +"Attempted: " +attempted+ '</h4>');
}



function imageInsert(index){ 

 //   console.log(quiz[index].imageURL);

    index -=1;

    var imageChoice = $('<img>');
    
    imageChoice.addClass('animal');
    
    imageChoice.attr('src', quiz[index].imageURL);

    imageChoice.attr('width','400px');
                      
   return imageChoice;
}



})