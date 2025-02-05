<img src="/Assets/css exercise.png" alt="CSS Banner" width="100%">


## 🌈 Introduction
CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation and layout of web pages. It works alongside HTML to enhance visual appearance and create engaging, user-friendly interfaces.

---

## 📚 Topics Covered
1. **Selectors**
2. **Properties**
3. **Box Model**
4. **Flexbox**

---

## 📁 Description of the Exercise Directory
The exercise directory contains interactive challenges that reinforce your understanding of essential CSS concepts. Each exercise targets a specific topic, allowing you to practice real-world applications of CSS.

### ✏️ What to Expect:
- **Step-by-step instructions**: Each exercise provides clear guidance for completion.
- **Hands-on challenges**: Tasks designed to test your CSS skills.
- **Solution files**: Example solutions are included for reference.
- **Files and structure**: Organized files covering selectors, properties, the box model, and flexbox.

---

## 🎯 Selectors
CSS selectors are patterns used to select and style HTML elements.

### Key Types of Selectors:
- **Universal Selector (`*`)**: Selects all elements.
- **Type Selector (`element`)**: Selects elements by tag name (e.g., `h1`, `p`).
- **Class Selector (`.className`)**: Selects elements with a specific class.
- **ID Selector (`#idName`)**: Selects elements with a specific ID.
- **Attribute Selector (`[attribute]`)**: Selects elements with a specific attribute.

### Example:
```css
/* Universal Selector */
* {
  margin: 0;
  padding: 0;
}

/* Class Selector */
.button {
  background-color: blue;
  color: white;
}

/* ID Selector */
#main-title {
  font-size: 2rem;
}
```

---

## 🎉 Properties
CSS properties control the style and layout of elements.

### Commonly Used Properties:
- **Color**: Sets text or background color (`color`, `background-color`).
- **Font**: Controls font size, family, weight, and style (`font-size`, `font-family`, `font-weight`).
- **Margin & Padding**: Controls spacing around and inside elements (`margin`, `padding`).
- **Display & Position**: Determines layout and position of elements (`display`, `position`).

### Example:
```css
/* Text and Background Colors */
h1 {
  color: #333;
  background-color: #f0f0f0;
}

/* Font Properties */
p {
  font-size: 16px;
  font-family: Arial, sans-serif;
}

/* Spacing Properties */
.container {
  margin: 20px;
  padding: 10px;
}
```

---

## 📦 Box Model
The CSS box model describes the rectangular boxes generated for elements.

### Box Model Structure:
- **Content**: The actual content inside the element (text, images, etc.).
- **Padding**: Space between the content and the border.
- **Border**: A border surrounding the padding (can have width, style, and color).
- **Margin**: Space between the border and neighboring elements.

  <img src="https://th.bing.com/th/id/OIP.l8pY7UGYRzlEM7QD8WIWsgHaEz?rs=1&pid=ImgDetMain" alt="CSS Box Model Example" width="100%">

### Example:
```css
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid #333;
  margin: 10px;
}
```

---

## 📐 Flexbox
Flexbox (Flexible Box Layout) is a layout model that allows for the alignment and distribution of elements inside a container.

### Key Flexbox Concepts:
- **Container**: The parent element where the flex layout is applied.
- **Items**: The child elements of the flex container.

### Important Properties:
- **`display: flex;`**: Activates flexbox on the container.
- **`flex-direction`**: Defines the direction of child elements (`row`, `column`).
- **`justify-content`**: Aligns items horizontally (`flex-start`, `center`, `space-between`, etc.).
- **`align-items`**: Aligns items vertically (`flex-start`, `center`, `stretch`, etc.).

### Example:
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.item {
  background-color: #4caf50;
  padding: 20px;
  color: white;
}
```




