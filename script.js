// Looks for the id of the Charmander image in the document 
const charmander = document.querySelector('#charmander');

// Looks for the id of the Bulbasaur image in the document 
const bulbasaur = document.querySelector('#bulbasaur'); 

// Looks for the id of the Squirtle image in the document 
const squirtle = document.querySelector('#squirtle'); 

// Looks for the id of the restart button in the document 
const restartButton = document.querySelector('#restart-btn'); 

// Hides the button until the game is over 
restartButton.style.visibility = 'hidden'; 

// Refreshes the game when the restart button is clicked 
restartButton.addEventListener("click", function() {
    window.location.reload(); 
    return false; 
}); 

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

// Variables 
let userChoice; 
let gymLeaderChoice; 
let randomNumber; 
let userWins = 0; 
let gymLeaderWins = 0; 
let tie; 
let winner = 0; 
let roundWin; 

// Array that is used to pick a move for the gym leader 
const choices = [
    "fire",
    "grass", 
    "water"
];

// Gets the id's of all the text displays 
const userWinsDisplay = document.querySelector('#user-wins'); 
const gymLeaderWinsDisplay = document.querySelector('#gymleader-wins'); 
const userChoiceDisplay = document.querySelector('#user-choice'); 
const gymLeaderChoiceDisplay = document.querySelector('#gymleader-choice');
const tieDisplay = document.querySelector('#tie-message'); 
const userVictoryDisplay = document.querySelector('#userwon-message'); 
const userLostDisplay = document.querySelector('#userlost-message'); 
const positiveDisplay = document.querySelector('#positive-message'); 
const negativeDisplay = document.querySelector('#negative-message'); 

// Checks to see if anyone has reached 5 wins 
function checkWinner(userWins, gymLeaderWins) {
    // Checks to see if the user got to 5 wins 
    if (userWins == 5)
    {
        // Ensures no other messages are in the way 
        tieDisplay.textContent = " "; 
        positiveDisplay.textContent = " "; 
        negativeDisplay.textContent = " "; 

        userVictoryDisplay.textContent = "Congratulations, you won! 🎉";

        // Ends the game 
        winner = 1; 

        // Shows the restart button 
        restartButton.style.visibility = 'visible'; 
    }
        
    // Checks to see if the gym leader got to 5 wins
    else if (gymLeaderWins == 5)
    {
        // Ensures no other messages are in the way 
        tieDisplay.textContent = " "; 
        positiveDisplay.textContent = " "; 
        negativeDisplay.textContent = " "; 

        userLostDisplay.textContent = "Sorry, you lost... :("; 

        // Ends the game 
        winner = 1; 

        // Shows the restart button 
        restartButton.style.visibility = 'visible'; 
    }
}

// Updates all the text displays: choices made, number of wins, messages 
function displayResults(userChoice, gymLeaderChoice, userWins, gymLeaderWins, tie) {
    // Choices made 
    if (userChoice == "fire")
    {
        userChoiceDisplay.textContent = "You Chose: 🔥"; 
    }

    if (gymLeaderChoice == "fire")
    {
        gymLeaderChoiceDisplay.textContent = "Gym Leader Chose: 🔥"; 
    }

    if (userChoice == "grass")
    {
        userChoiceDisplay.textContent = "You Chose: 🍃"; 
    }

    if (gymLeaderChoice == "grass")
    {
        gymLeaderChoiceDisplay.textContent = "Gym Leader Chose: 🍃"; 
    }
    
    if (userChoice == "water")
    {
        userChoiceDisplay.textContent = "You Chose: 💧"; 
    }

    if (gymLeaderChoice == "water")
    {
        gymLeaderChoiceDisplay.textContent = "Gym Leader Chose: 💧"; 
    }

    // Number of wins 
    userWinsDisplay.textContent = "Your Wins: " + userWins; 
    gymLeaderWinsDisplay.textContent = "Gym Leader Wins: " + gymLeaderWins; 

    // Message for the user if they won a round 
    if (roundWin == "user")
    {
        positiveDisplay.textContent = "WOW amazing! :0"; 
    }

    // Message for the user if they lost a round 
    if (roundWin == "gymleader")
    {
        negativeDisplay.textContent = "Ouch... 🤕"; 
    }

    // Special message for when it's a tie 
    if (tie == 1)
    {
        tieDisplay.textContent = "It's a tie this round!"; 
    } 
}

// Determines who gets the win for each round 
function compareChoices(userChoice, gymLeaderChoice) {
    // User wins 
    if (userChoice == "fire" && gymLeaderChoice == "grass")
    {
        userWins++; 
        tie = 0; 
        roundWin = "user"; 
        displayResults(userChoice, gymLeaderChoice, userWins, gymLeaderWins, tie, roundWin); 
    }

    // User wins 
    else if (userChoice == "grass" && gymLeaderChoice == "water")
    {
        userWins++; 
        tie = 0; 
        roundWin = "user"; 
        displayResults(userChoice, gymLeaderChoice, userWins, gymLeaderWins, tie, roundWin); 
    }

    // User wins 
    else if (userChoice == "water" && gymLeaderChoice == "fire")
    {
        userWins++; 
        tie = 0; 
        roundWin = "user"; 
        displayResults(userChoice, gymLeaderChoice, userWins, gymLeaderWins, tie, roundWin); 
    }

    // Gym leader wins 
    else if (gymLeaderChoice == "fire" && userChoice == "grass")
    {
        gymLeaderWins++; 
        tie = 0; 
        roundWin = "gymleader"; 
        displayResults(userChoice, gymLeaderChoice, userWins, gymLeaderWins, tie, roundWin); 
    }

    // Gym leader wins
    else if (gymLeaderChoice == "grass" && userChoice == "water")
    {
        gymLeaderWins++; 
        tie = 0; 
        roundWin = "gymleader"; 
        displayResults(userChoice, gymLeaderChoice, userWins, gymLeaderWins, tie, roundWin); 
    }

    // Gym leader wins 
    else if (gymLeaderChoice == "water" && userChoice == "fire")
    {
        gymLeaderWins++; 
        tie = 0; 
        roundWin = "gymleader"; 
        displayResults(userChoice, gymLeaderChoice, userWins, gymLeaderWins, tie, roundWin); 
    }

    // Tie 
    else 
    {
        tie = 1; 
        roundWin = "tie"; 
        displayResults(userChoice, gymLeaderChoice, userWins, gymLeaderWins, tie); 
    }
}

// Carries out the game 
function playGame() {
    // User clicks on Charmander/fire
    charmander.addEventListener("click", function() {
        // Continues the game if there is no winner yet
        if (winner == 0)
        {
            tieDisplay.textContent = " "; 
            positiveDisplay.textContent = " "; 
            negativeDisplay.textContent = " "; 
            userChoice = "fire"; 

            // Picks a random choice for the gym leader 
            randomNumber = Math.floor(Math.random() * choices.length);
            gymLeaderChoice = choices[randomNumber]; 

            compareChoices(userChoice, gymLeaderChoice);
            checkWinner(userWins, gymLeaderWins);  
        }
    });

    // User clicks on Bulbasaur/grass
    bulbasaur.addEventListener("click", function() {
        // Continues the game if there is no winner yet 
        if (winner == 0)
        {
            tieDisplay.textContent = " "; 
            positiveDisplay.textContent = " "; 
            negativeDisplay.textContent = " "; 
            userChoice = "grass"; 

            // Picks a random choice for the gym leader 
            randomNumber = Math.floor(Math.random() * choices.length);
            gymLeaderChoice = choices[randomNumber]; 

            compareChoices(userChoice, gymLeaderChoice); 
            checkWinner(userWins, gymLeaderWins);  
        }
    });

    // User clicks on Squirtle/water
    squirtle.addEventListener("click", function() {
        // Continues the game if there is no winner yet
        if (winner == 0)
        {
            tieDisplay.textContent = " "; 
            positiveDisplay.textContent = " "; 
            negativeDisplay.textContent = " "; 
            userChoice = "water"; 

            // Picks a random choice for the gym leader 
            randomNumber = Math.floor(Math.random() * choices.length);
            gymLeaderChoice = choices[randomNumber]; 

            compareChoices(userChoice, gymLeaderChoice); 
            checkWinner(userWins, gymLeaderWins);  
        }
    });
}

playGame(); 
