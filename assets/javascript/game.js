$( document ).ready(function(){

  var Random=Math.floor(Math.random()*101+19)
  var red= Math.floor(Math.random()*11+1)
  var green= Math.floor(Math.random()*11+1)
  var rose= Math.floor(Math.random()*11+1)
  var yellow= Math.floor(Math.random()*11+1)

  var yourScore= 0; 
  var wins= 0;
  var loss = 0;
  
  // Declaring variables

$('#wins').text(wins);
$('#loss').text(loss);
$('#score-match').text(Random);
$("#score").text(yourScore);

// Resets the game

function reset(){
      Random=Math.floor(Math.random()*101+19);
      $('#score-match').text(Random);
      red= Math.floor(Math.random()*11+1);
      green= Math.floor(Math.random()*11+1);
      rose= Math.floor(Math.random()*11+1);
      yellow= Math.floor(Math.random()*11+1);
      yourScore= 0;
      $('#score').text(yourScore);
      } 

//Win 

function youWin(){
alert("You won!");
  wins++; 
  $('#wins').text(wins);
  reset();
}
//Loss 
function youLose(){
alert ("You lose!");
  loss++;
  $('#loss').text(loss);
  reset()
}
// Crystals Functions 

  $('#red').on ('click', function(){
    yourScore = yourScore + red;
    $('#score').text(yourScore); 
          //sets win/lose conditions
        if (yourScore == Random){
          youWin();
        }
        else if ( yourScore > Random){
          youLose();
        }   
       console.log(yourScore, Random);
  })  
  $('#green').on ('click', function(){
    yourScore = yourScore + green;
    $('#score').text(yourScore); 
        if (yourScore == Random){
          youWin();
        }
        else if ( yourScore > Random){
          youLose();
        } 
  })  
  $('#rose').on ('click', function(){
    yourScore = yourScore + rose;
    $('#score').text(yourScore);
          if (yourScore == Random){
          youWin();
        }
        else if ( yourScore > Random){
          youLose();
        } 
  })  
  $('#yellow').on ('click', function(){
    yourScore = yourScore + yellow;
    $('#score').text(yourScore); 
      
          if (yourScore == Random){
          youWin();
        }
        else if ( yourScore > Random){
          youLose();
        }
  });   
}); 