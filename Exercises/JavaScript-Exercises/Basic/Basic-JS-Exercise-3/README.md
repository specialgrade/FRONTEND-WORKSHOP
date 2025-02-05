# JavaScript Basic Exercise 3: Temperature Converter 🌡️

## 🌟 Goal

The last basic exercise will ask you to create a **temperature converter** that converts values between Celsius and Fahrenheit. This exercise will help you continue practice working with variables, conditionals, etc., while also having a sneak peek of DOM manipulation and event listener topics in preparation for the "JS Advanced Exercises". The functionality will rely on a JavaScript script that interacts with the provided HTML and CSS.

---

## 🛠️ Instructions

### 1. Provided Files 📂
You will be given:
- **`index.html`**: A structured HTML file with input fields, a dropdown for options, and a button.
- **`temp-converter.css`**: A styled CSS file to enhance the visual appearance.

Your task is to write the JavaScript functionality in a `temp-converter.js` file.

---

### 2. Sample Flow 🎮
1. The user enters a temperature value in the input box (without specifying the unit).
2. The user selects the unit they want to convert into (Celsius or Fahrenheit) using the dropdown menu.
3. The user clicks the **Convert** button.
4. The converted temperature is displayed below the button with the appropriate unit (e.g., `°C` or `°F`).
5. If the input is invalid or a unit is not selected, an appropriate error message is displayed.

---

### 🧩 Your Task

1. Select the necessary DOM elements using methods like `document.querySelector` or `document.getElementById`.
2. Add a `click` event listener to the **Convert** button.
3. Implement the conversion logic:
   - Convert Fahrenheit to Celsius using the formula: `(F - 32) × 5/9`.
   - Convert Celsius to Fahrenheit using the formula: `(C × 9/5) + 32`.
4. Update the text content of the **Converted Temperature** message (`#conversion-text`) using the `.textContent` property.
5. Handle invalid input gracefully:
   - If the input is empty or not a valid number, display an error message.
   - If no unit is selected, prompt the user to choose a unit.

---

### 💡 Hints

- **DOM Selection**:
  - Use `document.getElementById` or `document.querySelector` to select elements like the input field, dropdown menu, button, and result text.
  
- **Updating Content**:
  - Use the `.textContent` property to update the text inside an element, such as the converted temperature message.

- **Event Handling**:
  - Use `.addEventListener('click', callback)` to execute your conversion logic when the button is clicked.

- **Type Conversion**:
  - The value from an input field is always a string. Use `parseFloat()` to convert it to a floating-point number.

- **Basic Error Handling**:
  - Use `isNaN()` to check if the input is not a valid number.

---

### 📼 Sample Output Demo

Here’s a video showing how the converter should work: [Temperature Converter Video](https://drive.google.com/file/d/15YMnKluMfhtwjWboKT__7GRLYpxI7O-i/view?usp=sharing)

---

### 🚀 Extra Challenges

1. **Precision Control**:
   - Allow the user to set the number of decimal places for the result, or limit the decimal places to 2.
2. **Error Styling**:
   - Update the CSS to visually highlight error messages or invalid input fields.

Happy coding! 🎉
