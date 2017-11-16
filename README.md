# TriviaGame

https://melaniewest.github.io/TriviaGame/

This is a quiz game that uses html, css and jQuery.
It also incorporates the use of two timers:

the first timer is activated when a new question is displayed.  If the question is answered before the 
30 second timer counts down, then the timer is reset and the correct answer is displayed, with a 
relevant giphy.   If the question is not answered before timeout, the correct answer and the giphy still 
display.  Stats are updated at this time, either way.

the second timer is activated as soon as the answer is displayed, whether it is triggered by an expired timeout or an
answered question.  It only counts for 5 seconds - enough time to read the rcorrect answer, see the new score and enjoy
the giphy - before the next question is automatically displayed.

When the quiz is completed, a 'game over' image displays.