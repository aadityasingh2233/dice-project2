var randomnumber=Math.round(Math.random()*6);
var randomimage1="images/dice"+randomnumber+".png";
var randomimagesource1=document.querySelector(".img1").setAttribute("src",randomimage1);

var randomnumber2=Math.round(Math.random()*6);
var randomimage2="images/dice"+randomnumber2+".png";
var randomimagesource2=document.querySelector(".img2").setAttribute("src",randomimage2);


if (randomimage1 > randomimage2){
    document.querySelector("h1").innerHTML="player1 wins";
}
else if (randomimage2 > randomimage1){
    document.querySelector("h1").innerHTML="player2 wins";
}
else if( randomimage1===randomimage2){
    document.querySelector(".dice").innerHTML="its a draw";
}

