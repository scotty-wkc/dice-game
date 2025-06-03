# Dicee Game 🎲

This project is a simple interactive dice game built with HTML, CSS, and JavaScript. It demonstrates how to use JavaScript for basic DOM manipulation, handling user input, updating content dynamically, and randomizing images. The game is fully responsive and works well on desktop, tablet, and mobile devices.

## How It Works

- When you open the game, you are prompted to enter names for Player 1 and Player 2.
- Each player's name is displayed next to their dice.
- When you click the **Click to Roll** button, both dice are rolled (randomized), and the images update to show the result.
- The heading updates to show which player won, or if it's a draw.
- You can roll as many times as you like without refreshing the page, and the player names remain visible.

---

## File Overview

### index.html

- The main HTML file for the game.
- Contains the structure for the dice, player names, roll button, and links to the stylesheet and JavaScript.

### styles.css

- Handles all styling for the game.
- Uses media queries to ensure the layout looks great on phones, tablets, and desktops.
- Customizes fonts, colors, button styles, and layout.

### index.js

- Handles all game logic and interactivity.
- Prompts for player names and formats them.
- Randomizes dice rolls and updates the images and winner text.
- Uses `textContent` to update player names and results, and `setAttribute` to change dice images.
- Adds an event listener to the roll button to roll the dice without refreshing the page.

### images/

- Contains six dice images (`dice1.png` to `dice6.png`) used to display the result of each roll.

---

## Key JavaScript Concepts Demonstrated

- **onclick functions:** The roll button uses an event listener to trigger the dice roll.
- **textContent:** Used to update player names and the winner/result text dynamically.
- **setAttribute:** Used to change the `src` attribute of the dice images based on the random roll.
- **Randomization:** Uses `Math.random()` and `Math.floor()` to select a random dice image for each player.

---

## How to Use

1. Open `https://scotty-wkc.github.io/dice-game` in your browser.
2. Enter names for Player 1 and Player 2 when prompted.
3. Click the **Click to Roll** button to roll the dice and see who wins!
4. The game is fully responsive—try it on your phone or tablet!

---

This project is a great starting point for learning about JavaScript DOM manipulation, event handling, and responsive web design. Have fun rolling the dice!
