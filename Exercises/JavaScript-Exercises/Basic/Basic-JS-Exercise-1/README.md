# JavaScript Basic Exercise 1: Number Guessing Game 🎲

## 🌟 Goal

As the first exercise, let's practice variables, conditionals, loops, and use some browser-dialog methods. You'll create a **number guessing game** where the user has to guess a randomly generated number between 1 and 100 in no more than 5 attempts. The program will provide hints like "Higher" or "Lower" based on the guesses. You'll also use browser dialog methods such as `alert`, `prompt`, and `console.log` to interact with the user.

---

## 🛠️ Instructions

### 1. Provided Files 📂
You will only receive the following `index.html` file. Your task is to create a `num-guess.js` script file to implement the game logic.

---

### 2. Sample Flow 🎮
1. The program generates a random number between 1 and 100.
2. The user is given **5 attempts** to guess the number.
3. After each guess:
   - If the guess is incorrect, the program will inform the user if the number is "Higher" or "Lower."
   - If the guess is correct, the program congratulates the user and ends the game.
4. If the user fails to guess the number in 5 attempts, the program reveals the number.

---

### 🧩 Your Task

1. Generate a random number between 1 and 100 using `Math.random()`.
2. Use a `for` loop to allow the user up to 5 guesses.
3. Use `prompt` to get the user's guesses and `alert` to provide feedback.
4. Use `console.log` to log all guesses and feedback for debugging purposes.
5. Use a flag (e.g., `guessedCorrectly`) to track whether the user guessed the number.

---

### 💡 Hints

- **Input/Output Methods**:
  - `prompt`: Use this to get the user's guess.
  - `alert`: Use this to display messages to the user.
  - `console.log`: Use this to log debugging information like guesses and feedback.

- **Generating a Random Number**:
  Use the following formula to generate a random integer between 1 and 100:

  ```javascript
  const randomNum = Math.floor(Math.random() * 100) + 1;
  ```

- **Control Structures**:
  Use a `for` loop to handle the guessing attempts and `if-else` to provide feedback (e.g., "Higher" or "Lower").

- **Type Conversion**:
  The value returned by `prompt` is a string. Use `Number()` to convert it into a number.

---

### 📼 Sample Output Demo

Here’s a video of running a sample output for this exercise: [Console Number Guessing Game Video](https://drive.google.com/file/d/1BVxmGd0Ytqy8HzX0YOcoWRU5ilvnq8vi/view?usp=sharing)

### 🚀 Extra Challenges

1. Add error handling for invalid guesses (e.g., non-numeric inputs or guesses outside the range of 1-100).
2. After the game ends, ask the user if they want to play again using `confirm` and restart the game if they agree.
3. Track the number of attempts taken and display it in the final result message.

Happy coding! 🎉
