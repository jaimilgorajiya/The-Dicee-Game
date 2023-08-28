
//For 1st Player
var randomnum1 = Math.floor(Math.random() * 6) + 1 ;

var image1 = "images/dice" + randomnum1 + ".png";

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", image1);


//For 2nd Player
var randomnum2 = Math.floor(Math.random() * 6) + 1 ;

var image2 = "images/dice" + randomnum2 + ".png";

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", image2);


//For Result Declaration

if(randomnum1 > randomnum2)
{
    document.querySelector("h1").innerHTML = ("Player 1 Wins ✌️!");
}

else if(randomnum2 > randomnum1)
{
    document.querySelector("h1").innerHTML = ("Player 2 Wins ✌️!");
} 

else{
    document.querySelector("h1").innerHTML = ("Draw !")
}





