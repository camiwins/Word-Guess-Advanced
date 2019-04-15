// USER STORY
// ==============================================
// In the terminal, a random word is selected and displayed with blank placeholders. A user wins the game by guessing the all letters in the world and still have guesses remaining.

// PSUEDOCODE
// ==============================================
// 0) Global
    // Requirements
    // A selection of words
    // User can only guess letters
// 1) Start of Game
    // Word is chosen
    // Display blank letters
    // Show how many guesses left
    // Allow user to input letter guesses
// 2) User Guesses
    // Ask user to make a guess
    // If guess is wrong
        // Subtract guesses remaining
        // Check for end game
    // If letter guess is right
        // Display correct letter
        // Check for end game
// 3) End game
    // Correct 
        // If user guesses everything right
        // Display winning message
        // Show word
        // Back to start
    // Incorrect
        // If user runs out of guesses left
        // Display losing message
        // Show word
        // Ask to play again
        // Back to start
