# JavaScript Advanced Exercise 1: Dynamic Counter 🔢

## 🌟 Goal

For the first JS Advanced Exercise, you'll create a **dynamic counter** that increases or decreases its value based on user interaction. This task will help you practice **DOM manipulation**, **event handling**, and working with **conditional logic**.

---

## 🛠️ Instructions

### 1. Provided Files 📂
You will receive:
- **`dynamic-counter.html`**: A simple HTML file with a counter display and two buttons.
- **`Advanced-JS-Exercise-1.css`**: A CSS file to style the counter and buttons.

Your task is to implement the JavaScript functionality in a `dynamic-counter.js` file.

---

### 2. Sample Flow 🎮
1. The counter starts at `0`.
2. When the **blue (+)** button is clicked, the counter value increases by 1.
3. When the **red (-)** button is clicked, the counter value decreases by 1.
4. The counter will not go below `0` (use conditional logic to handle this).
5. The counter value is dynamically updated on the webpage after every button click.

---

### 🧩 Your Task

1. **Select Elements**: Use `document.querySelector` to select the counter display and both buttons.
2. **Initialize Variables**: Set up a `counterVal` variable initialized to `0` to track the current counter value.
3. **Event Handling**:
   - Attach a `click` event listener to each button.
   - Increment or decrement the `counterVal` based on the button clicked.
4. **Update the Display**: Use the `.textContent` property to update the counter display with the latest value.
5. **Prevent Negative Values**: Use a conditional check to ensure the counter does not go below `0`.

---

### 💡 Hints

- **DOM Selection**:
  - Use `document.querySelector("#id-name")` to target elements by their `id`.
  - Store these elements in variables for easier reuse.

- **Event Listeners**:
  - Use `.addEventListener('click', callback)` to listen for button clicks.

- **Conditional Logic**:
  - Use an `if` statement to ensure the counter does not decrease below `0`.

- **Function for Updates**:
  - Create a helper function (e.g., `updateCounter`) to centralize the logic for updating the counter display.

---

### 📼 Sample Output Demo

Here’s a video of running a sample output for this exercise: [Dynamic Counter Video](https://drive.google.com/file/d/1AfI5Lk2RFIGGO7SPuYxbL1fbn3AoEROE/view?usp=sharing)

---

### 🚀 Extra Challenges

1. **Set Limits**:
   - Add a maximum limit (e.g., `100`) to the counter.
   - Display an alert if the user tries to exceed the maximum or minimum limits.

2. **Keyboard Shortcuts**:
   - Allow users to increase or decrease the counter using keyboard keys (e.g., `ArrowUp` and `ArrowDown`) by attaching event listener to "window".

Happy coding! 🎉
