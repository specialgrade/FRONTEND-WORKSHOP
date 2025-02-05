# JavaScript Basic Exercise 2: Console Calculator

## 🌟 Goal
To practice more on arithmetic operators and functions, let's create a simple calculator which we will improve on a later exercise. You'll create a **console-based calculator** that takes two numbers and an operator as input, performs the desired operation, and displays the result in the console. Additionally, you will use browser dialog methods such as `alert`, `confirm`, and `prompt` to interact with the user.

## 🛠️ Instructions
### 1. Provided Files 📂
You will be given only the `index.html` file just so we can see the browser-dialog boxes.

---

### 2. Sample Flow 🎮
1. The user is prompted to enter the first number.
2. The user is prompted to enter the second number.
3. The user is prompted to choose an operation (`+`, `-`, `*`, `/`, `%`).
4. The script calculates the result and displays it using `alert`.
5. The script logs the calculation details to the console.

---

### 🧩 Your Task
Create a `calculator.js` script file that implements the following:

1. Use `prompt` to get two numbers (`num1` and `num2`) from the user.
2. Use `prompt` to ask the user to choose an operation (`+`, `-`, `*`, `/`, `%`).
3. Use a control structure (`if-else` or `switch`) to perform the chosen operation.
4. Display the result using `alert`.
5. Log all inputs and outputs to the browser console using `console.log`.
6. Use a function to perform the calculation.

---

### 💡 Hints
- **Input/Output Environment**: You'll use browser dialog methods such as:
  - `prompt`: For taking user input.
  - `alert`: For displaying messages to the user.
  - `console.log`: For debugging and logging messages to the console.
- **Type Conversion**: Remember to convert the input from `prompt` (a string) into a floating-point number using `parseFloat()`.
- **Error Handling**: Consider what happens if the user enters invalid input (like a letter instead of a number). You can use control structures to handle such cases, or reserved functions like `isNaN()` to check if a value is not a number. 

---

### 📼 Sample Output Demo
Here’s a video of running a sample output for this exercise: [Console Calculator Video](https://drive.google.com/file/d/1pdLdgMwSc360DtrBBbVORlzV0LA6gO_o/view?usp=sharing)

### 🚀 Extra Challenges
1. Add error handling for invalid inputs (e.g., non-numeric inputs or invalid operators).
2. Ask the user if they want to perform another calculation using `confirm`. Repeat the process if the user chooses to continue.

Happy coding!
