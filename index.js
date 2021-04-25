// alert("hjhh");
// $("h1").css("color","#ffff");
//var randomNumber = Math.random();


var randomNumber;
var buttonColours  = ["red", "blue", "green","yellow"];
var randomChosenColour ;
var gamePattern = [ ];
var lvl=0;
//pattern 

function nextSequence(){
     randomNumber = Math.floor(Math.random()*4);
    randomChosenColour  = buttonColours[randomNumber];
    randomChosenColour  = buttonColours[randomNumber];
 gamePattern.push(randomChosenColour);
 setTimeout(  playSound(randomChosenColour), 10);
 
}

    // nextSequence();
    function playSound(name){
        var tom1 = new Audio("sounds/"+name+".mp3");
        tom1.play();
        $("."+name).fadeIn(90).fadeOut(90).fadeIn(90);
        $("."+name).addClass("pressed");
        setTimeout(function(){   $("."+name).removeClass("pressed"); }, 20);
    }
   
  

    var status = false;
   
    document.addEventListener('keydown',function(event)
 {
      if(event.key== "A" || event.key == "a")
       {
           
        setTimeout(  function(){ nextSequence() ;}, 400);
      status = true;
      $("h1").text("Level 1");
        console.log(gamePattern.length);
        lvl++;
       }
 }
 );
 var l=0;
 
 
    $(".btn").click(function(){
       // status=false;
       console.log(this);
     
       if( $(this).hasClass("blue"))
       {
      
        setTimeout( function(){ playSound("blue") ;}, 200);
           if(gamePattern[l]=="blue")
           {
               l++;
              
           }
           else 
           {
               l=-1;
           }
           
       }
       else  if( $(this).hasClass("red"))
       {
        setTimeout( function(){ playSound("red"); }, 100);
           if(gamePattern[l]=="red")
           {
               l++;
              
           }
           else 
           {
               l=-1000000;
           }
           
       }

       else  if( $(this).hasClass("yellow"))
       {
        setTimeout( function(){ playSound("yellow"); }, 100);
           if(gamePattern[l]=="yellow")
           {
               l++;
              
           }
           else 
           {
            l=-1000000;
           }
           
       }

       else  if( $(this).hasClass("green"))
       {
       setTimeout( function(){ playSound("green"); }, 100);
           if(gamePattern[l]=="green")
           {
               l++;
              
           }
           else 
           {
            l=-1000000;
           }
           
       }
       if(gamePattern.length==l)
       {
           lvl++;
           setTimeout( function(){  $("h1").text("Level "+lvl); }, 700);
          
        setTimeout( function(){ nextSequence() }, 1000);

      
        l=0;
       // status=false;
       }
       else if(l<0)
       {
          // alert("wrong");
           gamePattern=[];
           l=0;
           status=false;
           lvl=0;
           setTimeout( function(){  $("h1").text("Game Over");  }, 100);
          
           setTimeout( function(){ $("body").addClass("game-over"); }, 100);
           setTimeout( function(){ $("body").removeClass("game-over"); }, 210);
           setTimeout( function(){ playSound("wrong"); }, 111);
           setTimeout( function(){  $("h1").text("Press A to continue again ");  }, 1500);

       }
       console.log(gamePattern);
    });




 