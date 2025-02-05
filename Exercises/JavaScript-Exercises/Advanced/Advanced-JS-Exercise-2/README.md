# JavaScript Advanced Exercise 2: Number Guessing Game Web App 🎮

## 🌟 Goal

For this exercise, you will implement the **Number Guessing Game** you previously made as a web app. This task will help you practice **DOM manipulation**, **event handling**, **conditional logic**, and implementing a web-based game with user interactions.

---

## 🛠️ Instructions

### 1. Provided Files 📂
You will receive:
- **`num-guess-app.html`**: A simple HTML file containing the game layout.
- **`num-guess-app.css`**: A CSS file for styling the game interface.

Your task is to implement the JavaScript functionality in the `num-guess-app.js` file.

---

### 2. Sample Flow 🎮
1. The game starts with a random number chosen by the machine between 1 and 100 (inclusive).
2. The user has a maximum of 5 guesses to correctly guess the number.
3. After each guess, the machine provides feedback whether the unknown number is higher or lower than the user's guess.
4. The user’s previous guesses will be added dynamically to the web page with color coding:
   - **Green** for guesses that are lower than the target number.
   - **Red** for guesses that are higher.
   - **Darkorchid** for the correct guess.
5. If the user guesses correctly or exceeds the maximum number of attempts, the game will display a message and provide a button to start a new game.

---

### 🧩 Your Task

1. **Initialize the Game**:
   - Start a new game with a randomly chosen number between 1 and 100.
   - Allow the user to make up to 5 guesses.
   - Display previous guesses and provide feedback if they are too high or too low.

2. **Guess Validation**:
   - Ensure that the input is a valid number between 1 and 100.
   - Provide appropriate messages for invalid inputs.

3. **Display Results**:
   - After each guess, update the result section with appropriate text, like "Higher!" if guess is too high, "Lower!" if guess is too low, or "Congratulations! The number is {number}" if guess is right along with the correct number.
   - If the user exceeds the number of allowed guesses, show a "Game Over" message.

4. **Start a New Game**:
   - Allow the user to start a new game after finishing the current round by clicking the "New Game" button.

---

### 💡 Hints

- **DOM Selection**:
  - Use `document.getElementById("id-name")` or `document.querySelector(".class-name")` to target elements by their `id` or class name.
  - Store these elements in variables for easier access.

- **Event Listeners**:
  - Use `.addEventListener('click', callback)` to listen for button clicks, triggering game actions like making a guess or starting a new game.

- **Conditional Logic**:
  - Use `if` and `else` statements to check if the guess is higher, lower, or equal to the target number.
  - Make sure to handle the input validation (between 1 and 100) and game-over conditions.

- **Function for Updates**:
  - Create helper functions to handle game logic, such as making a guess, updating the guess history, and resetting the game.

---

### 📼 Sample Output Demo

Here’s a video demonstrating how the Number Guessing Game Web App works: [Number Guessing Web App Video](https://drive.google.com/file/d/14oqNdGgB3RmBnmae1uPw-e6pBa45E6Wu/view?usp=sharing)

---

### 🚀 Extra Challenges

1. **Disable Inputs when Game is Over**:
   - Block the ability to place input and click guess button when a round is finished, which should be reenabled after clicking new game button.

1. **Add Difficulty Levels**:
   - Allow users to choose the difficulty (easy: 10 guesses, hard: 3 guesses) before starting the game.

Happy coding! 🎉