// Looks for the id of the Charmander image in the document 
const charmander = document.querySelector('#charmander');

// Looks for the id of the Bulbasaur image in the document 
const bulbasaur = document.querySelector('#bulbasaur'); 

// Looks for the id of the Squirtle image in the document 
const squirtle = document.querySelector('#squirtle'); 

// If Charmander is moused over, changes the gray-scale to color 
charmander.addEventListener("mouseover", function() {
    charmander.setAttribute("src", "images/charmander.png"); 
});

// If the mouse leaves Charmander, changes the color to gray-scale 
charmander.addEventListener("mouseout", function() {
    charmander.setAttribute("src", "images/graychar.png"); 
});

// If Bulbasaur is moused over, changes the gray-scale to color 
bulbasaur.addEventListener("mouseover", function() {
    bulbasaur.setAttribute("src", "images/bulbasaur.png"); 
});

// If the mouse leaves Bulbasaur, changes the color to gray-scale 
bulbasaur.addEventListener("mouseout", function() {
    bulbasaur.setAttribute("src", "images/graybulba.png"); 
});

// If Squirtle is moused over, changes the gray-scale to color 
squirtle.addEventListener("mouseover", function() {
    squirtle.setAttribute("src", "images/squirtle.png"); 
});

// If the mouse leaves Squirtle, changes the color to gray-scale 
squirtle.addEventListener("mouseout", function() {
    squirtle.setAttribute("src", "images/graysquirtle.png"); 
});

// If image is clicked on, playGame() 

// playGame() --> 
// 1) Display what you chose 
// 2) Display what the gym leader chose 
// 3) Determine who won that round (compare())
// 4) Update the number of wins you now have 
// 5) Update the number of wins the gym leader has 
// 6) Check to see if anyone has won 5 (checkWinner())