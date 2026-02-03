let screen = document.getElementById("body");
let greenBtn = document.getElementById("greenBtn");
let redBtn = document.getElementById("redBtn");
let blueBtn = document.getElementById("blueBtn");
let randBtn = document.getElementById("randBtn");

greenBtn.addEventListener("click", function(){
    screen.style.background = "green";
});

blueBtn.addEventListener("click", function(){
    screen.style.background = "blue"; 
});

redBtn.addEventListener("click", function(){
    screen.style.background = "red";
});


randBtn.addEventListener("click", function(){
    let colors = ["white", "red", "blue", "orange", "black", "brown", "grey", "purple"];

    let index = Math.floor(Math.random() * colors.length);
    screen.style.background = colors[index];
});