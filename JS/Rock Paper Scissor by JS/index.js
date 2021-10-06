var randNum1=Math.floor(Math.random()*3)+1;
var handImage="hand"+randNum1;
var imgSrc1="images/"+handImage+".png";
var hand1=document.querySelectorAll(".img1")[0];
hand1.setAttribute("src",imgSrc1);
var randNum2=Math.floor(Math.random()*3)+1;
var imgSrc2="images/hand"+randNum2+".png";
var hand2=document.querySelectorAll(".img2")[0];
hand2.setAttribute("src",imgSrc2);
var winner=document.querySelector(".result");
if(randNum1==1 && randNum2==2){
    winner.innerHTML="Player 2 Wins";
}
else if(randNum1==1 && randNum2==3){
    winner.innerHTML="Player 1 Wins";
}
else if(randNum1==2 && randNum2==1){
    winner.innerHTML="Player 1 Wins";
}
else if(randNum1==2 && randNum2==3){
    winner.innerHTML="Player 2 Wins";
}
else if(randNum1==3 && randNum2==1){
    winner.innerHTML="Player 2 Wins";
}
else if(randNum1==3 && randNum2==2){
    winner.innerHTML="Player 1 Wins";
}
else{
    winner.innerHTML="Match Draw !!";
}
