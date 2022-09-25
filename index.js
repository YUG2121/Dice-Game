var randomDIce1 = Math.floor(Math.random() * 7);
var randomDIce2 = Math.floor(Math.random() * 7);
document.querySelector(".img1").setAttribute("src","images/dice" + randomDIce1 + ".png");
document.querySelector(".img2").setAttribute("src","images/dice" + randomDIce2 + ".png");
