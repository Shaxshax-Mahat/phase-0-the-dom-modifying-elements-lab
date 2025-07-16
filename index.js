// Write your code here!
// 1️⃣ Remove the <main id="main"> from the DOM
const main = document.getElementById("main");
main.remove();  // Use .remove() for simplicity

// 2️⃣ Create a new <h1> element
const newHeader = document.createElement("h1");

// 3️⃣ Set its id to 'victory' (this is usually required by the tests)
newHeader.id = "victory";

// 4️⃣ Add the text content (replace YOUR-NAME with your actual name)
newHeader.textContent = "Abdirahman is the champion";

// 5️⃣ Append the new <h1> to the <body>
document.body.append(newHeader);
