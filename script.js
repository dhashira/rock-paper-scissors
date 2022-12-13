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

let userChoice; 
let gymLeaderChoice; 
let randomNumber; 
let userWins = 0; 
let gymLeaderWins = 0; 
let tie; 

const choices = [
    "fire",
    "grass", 
    "water"
];

const userWinsDisplay = document.querySelector('#user-wins'); 
const gymLeaderWinsDisplay = document.querySelector('#gymleader-wins'); 
const userChoiceDisplay = document.querySelector('#user-choice'); 
const gymLeaderChoiceDisplay = document.querySelector('#gymleader-choice'); 

function display(userChoice, gymLeaderChoice, userWins, gymLeaderWins, tie) {

    userWinsDisplay.textContent = "Your Wins: " + userWins; 
    gymLeaderWinsDisplay.textContent = "Gym Leader Wins: " + gymLeaderWins; 
    userChoiceDisplay.textContent = "You Chose: " + userChoice; 
    gymLeaderChoiceDisplay.textContent = "Gym Leader Chose: " + gymLeaderChoice; 
    
}

function compare(userChoice, gymLeaderChoice) {
 
    // User wins 
    if (userChoice == "fire" && gymLeaderChoice == "grass")
    {
        // Increment the number of user wins 
        userWins++; 
        tie = 0; 
        display(userChoice, gymLeaderChoice, userWins, gymLeaderWins, tie); 
    }

    // User wins 
    else if (userChoice == "grass" && gymLeaderChoice == "water")
    {
        // Increment the number of user wins 
        userWins++; 
        tie = 0; 
        display(userChoice, gymLeaderChoice, userWins, gymLeaderWins, tie); 
    }

    // User wins 
    else if (userChoice == "water" && gymLeaderChoice == "fire")
    {
        // Increment the number of user wins 
        userWins++; 
        tie = 0; 
        display(userChoice, gymLeaderChoice, userWins, gymLeaderWins, tie); 
    }

    // Gym leader wins 
    else if (gymLeaderChoice == "fire" && userChoice == "grass")
    {
        // Increment the number of gym leader wins
        gymLeaderWins++; 
        tie = 0; 
        display(userChoice, gymLeaderChoice, userWins, gymLeaderWins, tie); 
    }

    // Gym leader wins
    else if (gymLeaderChoice == "grass" && userChoice == "water")
    {
        // Increment the number of gym leader wins 
        gymLeaderWins++; 
        tie = 0; 
        display(userChoice, gymLeaderChoice, userWins, gymLeaderWins, tie); 
    }

    // Gym leader wins 
    else if (gymLeaderChoice == "water" && userChoice == "fire")
    {
        // Increment the number of gym leader wins 
        gymLeaderWins++; 
        tie = 0; 
        display(userChoice, gymLeaderChoice, userWins, gymLeaderWins, tie); 
    }

    // Tie 
    else 
    {
        tie = 1; 
        display(userChoice, gymLeaderChoice, userWins, gymLeaderWins, tie); 
    }
}

function playGame() {
    // If user chooses fire...
    charmander.addEventListener("click", function() {
        userChoice = "fire"; 
        randomNumber = Math.floor(Math.random() * choices.length);
        gymLeaderChoice = choices[randomNumber]; 
        compare(userChoice, gymLeaderChoice); 
    });

    // If user chooses grass... 
    bulbasaur.addEventListener("click", function() {
        userChoice = "grass"; 
        randomNumber = Math.floor(Math.random() * choices.length);
        gymLeaderChoice = choices[randomNumber]; 
        compare(userChoice, gymLeaderChoice); 
    });

    // If user chooses water... 
    squirtle.addEventListener("click", function() {
        userChoice = "water"; 
        randomNumber = Math.floor(Math.random() * choices.length);
        gymLeaderChoice = choices[randomNumber]; 
        compare(userChoice, gymLeaderChoice); 
    });

    // End the game 
    if (userWins == 5)
    {

    }

    // End the game 
    else if (gymLeaderWins == 5)
    {

    }
}

playGame(); 
