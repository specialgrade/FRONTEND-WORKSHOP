# Hands-on Activity: Christmas Digital Clock

## 🎉 Introduction  
Thank you for sticking with us and listening through the workshop — you're amazing!

Now, let’s make something amazing together! In this project, you'll build a festive Christmas-themed webpage that features:

- A live digital clock ⏰  
- A countdown timer to Christmas ⏳ 
- Animated falling snowflakes ❄️


## ✨ Features
- **Live Digital Clock**: Displays the current time in a digital format that updates every second.

- **Christmas Countdown**: Shows a countdown timer to Christmas.

- **Snowflake Animation**: Animated snowflakes fall gently across the screen, giving the page a chilly vibe ❄️

- **Responsive Design**: The layout adapts to both small and large screens.


##  🗝️ Hints
Here are some helpful tips to guide you through building the Christmas Digital Clock Webpage:

### 1. **Creating the Clock in HTML**
   - The clock can be created using a simple `<div>` in your `index.html` file.
   - Inside the `<div>`, you will need to add an `id` to target the clock in your JavaScript. For example:
     `html`
     `<div id="clock"></div>`
     

### 2. **Styling the Clock with CSS**
   - Use **CSS** to style the clock and give it a festive, holiday look.
   - Consider adding a **font-family** that resembles digital clocks, such as `Courier New`.
   - To make it stand out, add some **text-shadow** and use bright colors like **green** or **red**.

### 3. **Making the Clock Dynamic with JavaScript**
   - In `script.js`, create a function that gets the current time and updates the clock every second.
   - You can use `setInterval()` to update the clock every 1000 milliseconds (1 second):
     ```javascript
     setInterval(updateClock, 1000);
     ```
   - The `updateClock()` function should retrieve the current hour, minute, and second, format them, and display them inside the clock `<div>`.

### 4. **Handling the Countdown**
   - The countdown to Christmas can be done by calculating the difference between the current date and Christmas Day.
   - Use JavaScript’s `Date()` object to get the current date and Christmas date.
   - Subtract the two dates and display the result as the number of days remaining until Christmas.

### 5. **Adding Snowflakes Animation**
   - To create the snowflakes animation, you can use `@keyframes` in CSS.
   - Create a `div` for each snowflake and apply random positions, sizes, and animation durations to make them fall from the top of the page.
   - You can use JavaScript to generate snowflakes dynamically for added variety.


## 👩🏻‍💻 Happy Coding and Merry Christmas!

As you build your clock and countdown, remember — every second you code brings you closer to mastering your craft🕒. Enjoy the process, spread holiday cheer, and have fun creating something magical!🎅🎁
