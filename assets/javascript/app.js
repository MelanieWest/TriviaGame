$(document).ready(function(){

//on click of a start button, load first question

var i=0;
var quiz=[];
var intervalTimer;
var delayButtonAlert;
var Count;
var imageChoice;

var questionIndex;  //protect answer from changing upon accidental double-click of ans button

quizBuild();        //put data into quiz constructor function to make object

$("#new-question").on("click",function(){       //change from click event to something else soon

    $("#message").html('');       
    $("#seconds-count").html("");
    if(i != 0) {$(".animal").remove();}

    quizWrite(i);       //write out i-th question
        
    //begin 1-second-interval timer for display

    Count = 30;  //initialize before starting timer    
    intervalTimer = setInterval(function(){
        Count -= 1;
        $("#seconds-count").html('You have '+ Count + " seconds left ")
        
     },1000);

     //begin timeout timer for end-of-question;

     delayButtonAlert = setTimeout(function(){
    //        $("message").html('5 seconds have passed');
    //        console.log("image here");
     //       imageChoice = '<img src=' + 'https://media.giphy.com/media/11nNT2EiGIKsBa/giphy.gif' + '/>';
            imageChoice = imageInsert(i);
        $("#picture").append(imageChoice);
        },5000);  // picture should show up after 5 seconds






    $(".answer").on("click",function(){
        userChoice = parseInt($(this).val());
        if ((1 <= userChoice) && (userChoice <= 4)){
            quiz[questionIndex].attempted = true; 
        }
        console.log(userChoice);
        console.log(quiz[questionIndex]);
        console.log(quiz[questionIndex].ans);
        clearTimeout(intervalTimer); 
        clearTimeout(delayButtonAlert);  
        if (userChoice == quiz[questionIndex].ans){
            $("#message").html('correct!');
  //          i++;
        }
        else {
            $("#message").html('sorry!');
    //        i++;
        }
         // increment array item after one attempt (also modify stats here)
       console.log(i);
});
   // compare chosen option to correct one  




 


    
    i++;

})      //end of 'new question' block



//when first question is loaded, start 2 timers:
// the seconds count timer and the timeout timer;

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

    console.log('quizBuild');

    quiz[0] = new quizConstructor('Alligators','Scourge','Congregation','Array','Herd',2,"https://media.giphy.com/media/11nNT2EiGIKsBa/giphy.gif",false);
    quiz[1] = new quizConstructor('Crows','Murder','Flutter','Omen','City',1,'https://media.giphy.com/media/VeTm2S9veYuli/giphy.gif',false);
    quiz[2] = new quizConstructor('Geese','Nuisance','Parliament','Gaggle','Honk',3,'https://media.giphy.com/media/b8hm9N1bjne3S/giphy.gif',false);
    quiz[3] = new quizConstructor('Mice','Click','Mischief','Nibble','World',2,'https://media.giphy.com/media/tCWMUAuZLMvKg/giphy.gif',false);
    quiz[4] = new quizConstructor('Cockroaches','Immortality','Crunch','Plague','Intrusion',4,'https://media.giphy.com/media/TYewlOKxANR4s/giphy.gif',false);
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

    questionIndex = index;

    $("#question").html("What do you call a group of " + quiz[index].question + " ?");
    
    $("#option-1").html(quiz[index].choice1);
    $("#option-2").html(quiz[index].choice2);
    $("#option-3").html(quiz[index].choice3);
    $("#option-4").html(quiz[index].choice4);

  return questionIndex;  
}




function imageInsert(index){    
    console.log(quiz[index].imageURL);

    index -=1;
    var imageChoice = $('<img>');
    
    imageChoice.addClass('animal');
    
    imageChoice.attr('src', quiz[index].imageURL);

    imageChoice.attr('width','400px');
                      
   return imageChoice;
}



})