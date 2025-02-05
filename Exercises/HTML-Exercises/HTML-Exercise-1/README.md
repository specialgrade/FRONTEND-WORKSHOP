
# 📊 Survey Form Project

✨ **Objective**  
The goal of this project is to create a simple survey form using **HTML** only. The form will gather user responses through text fields, multiple-choice questions, and checkboxes. This is an opportunity to practice form elements and how to collect user input through basic HTML.

🔧 **Instructions**  
1. **Provided File 🗂️**  
   You will receive:
   - `exercise-1.html`: A basic HTML file where you will create the survey form.

Your task is to design and structure a survey form within the `exercise-1.html` file using only HTML.

2. **Survey Form Flow 🏁**  
   - The survey form should ask the user at least 4 different questions. The form flow should look like this:
     - A question to ask the user’s **name** (using text input).
     - A field to ask for the user’s **email address** (using email input).
     - A question asking the user to rate their **satisfaction** (using radio buttons).
     - A multiple-choice question asking what features the user liked (using checkboxes).
   - After submission, the user should see a simple message thanking them for participating in the survey.

3. **Form Elements 🔲**  
Use the following HTML form elements to build your survey:
   - **Text Inputs**: For collecting personal data such as name or email.
     - Example: `<input type="text" id="name" name="name" required>`
   - **Radio Buttons**: For asking questions where only one answer is allowed.
     - Example: `<input type="radio" id="satisfaction1" name="satisfaction" value="good">`
   - **Checkboxes**: For questions where users can select multiple options.
     - Example: `<input type="checkbox" id="feature1" name="features[]" value="speed">`
   - **Submit Button**: To allow users to submit their responses.
     - Example: `<button type="submit">Submit</button>`

4. **Form Validation ⚖️**  
Make sure to:
   - Ensure that the **name** and **email** fields are required.
   - Use the `type="email"` attribute to validate the format of the email.
   - Provide basic validation by marking fields as **required** using the `required` attribute.

5. **Confirmation Message 🎉**  
   - After the user submits the form, display a simple message thanking them for their participation. This will be done directly on the page using HTML.

---

💼 **Your Task**  

**Create the Survey Form:**
- Add the necessary form elements to `survey-form.html`.
- Organize the form logically by grouping similar questions together.

**Form Validation:**
- Ensure that the required fields (like name and email) are marked as required.

**User Confirmation:**
- After the form submission, show a "thank you" message on the same page.

---

💡 **Tips**  
**HTML Form Elements:**
- Use `<form>` to define the form structure.
- Use `<input>` for text, radio buttons, and checkboxes.
- Use `<label>` to properly label the input fields.

**Form Organization:**
- Keep the form simple and user-friendly.
- Group related questions together (e.g., personal details in one section, preferences in another).

  💻 **Sample Output:** 

  ![HTML Exer1](/Assets/htmlExercise1Sample.png)

 
   
---

🚀 **Happy Coding!**  

