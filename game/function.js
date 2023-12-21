//startConfetti();
var buttonDrums=["w","a","s","d","j","k","l"];
var gamePattern=[]; 
userClickedPattern=[];
var started= false;
var level=0;
var score=0;
var count=0;
var flag=0;
localStorage.setItem("highscore",0);

// CHANGE 1 .0
// ADDED A BUTTON IN HTML 
// FUNTION TO EXECUTE HANDLE THE CLICK OF BUTTON


function functionToExecute(){
  if(!started){
   

    $("#bb").hide();// JS HIDE METHOD TO DISAPPEAR THE BUTTON AFTER START
    $("#level-title").text("Level"+level);
    $("#point").text("SCORE :" + score); //Useful to change text instead of queryselector
    nextSequence();
    started=true;
  }
}




// CHANGE 1.1



// FUNCTION TO DETECT KEY AND CONTROL THE INPUT 
$(document).keypress(function(event){
 
  var userChosenDrum=(event.key);
  userClickedPattern.push(userChosenDrum);
  playSound(userChosenDrum);
  animatePress(userChosenDrum);
  checkAnswer(userClickedPattern.length-1);
  }
)
$(".btn").click(function(){
  var userChosenDrum=$(this).attr("id");
  userClickedPattern.push(userChosenDrum);
  playSound(userChosenDrum);
  animatePress(userChosenDrum);
  checkAnswer(userClickedPattern.length-1);
});
function nextSequence(){
  userClickedPattern=[];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 6);
   var randomChosenDrum=buttonDrums[randomNumber];

gamePattern.push(randomChosenDrum);
$("#" + randomChosenDrum).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenDrum);

  
   // alert(randomNumber);
}
// function playSound(name){
//   //var audio = new Audio("game/sounds" + name + ".mp3");
//   var audio = new Audio('game/sounds/'+ name + '.mp3');
//   audio.play();
// }
var audioyay =new Audio('game/sounds/yay.mp3')
var audiowrong =new Audio('game/sounds/wrong.mp3')
var audioyay =new Audio('game/sounds/yay.mp3')
var audioyay =new Audio('game/sounds/yay.mp3')
var audioyay =new Audio('game/sounds/yay.mp3')
var audioyay =new Audio('game/sounds/yay.mp3')

function animatePress(currentDrum){
  $("#"+ currentDrum).addClass("pressed");
  setTimeout(function(){
    $("#"+ currentDrum).removeClass("pressed");
  },50);// THE TIME LINIT DECRESED TO CONTER THE TRANSPARENT EFFECT
}
function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    console.log("Success!!");
  if(userClickedPattern.length===gamePattern.length){
    score+=10;
      $("#point").text("SCORE :" + score);
      if(count>0 && flag==1){
      let high=localStorage.getItem("highscore");
  if(high<score){
    localStorage.setItem("highscore", score);
    var ans=localStorage.getItem("highscore");
    $("#highest").text("HIGH SCORE :"+ ans);
  for(var  i=0;i<3;i++)confetti();
    playSound("yay");
    flag=0;
  }
}
    setTimeout(function(){
      nextSequence();
    },1000);
  }
}
else{
  console.log("Wrong");
  count++;
  flag=1;
  audiowrong.play();
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  },200);
  $("#bb").show();
  $("#level-title").text("Game Over, Press START to PLAY AGAIN");
  let high=localStorage.getItem("highscore");
  if(high<score){
    localStorage.setItem("highscore", score);
    var ans=localStorage.getItem("highscore");
    $("#highest").text("HIGH SCORE :"+ ans);
  }
  score=0;
  startOver();
}
}
let high = localStorage.getItem("highscore");
function startOver(){
  level=0;
  gamePattern=[];
  started=false;
 
}
