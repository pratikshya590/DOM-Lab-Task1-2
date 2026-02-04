//Task 1: DOM SELECTION

// By ID
let heading = document.getElementById("main-heading");
console.log("By ID:", heading);

// By Class Name
let titles = document.getElementsByClassName("title");
console.log("By Class Name:", titles);

// By Tag Name
let paragraphs = document.getElementsByTagName("p");
console.log("By Tag Name:", paragraphs);

// querySelector (first matching element)
let firstParagraph = document.querySelector("p");
console.log("querySelector:", firstParagraph);

// querySelectorAll (all matching elements)
let allListItems = document.querySelectorAll("#my-list li");
console.log("querySelectorAll:", allListItems);


   //Task 2: CONTENT MANIPULATION

// Change heading text
heading.innerText = "Heading updated using innerText";
console.log("innerText:", heading.innerText);

heading.innerHTML = "Heading updated using <em>innerHTML</em>";
console.log("innerHTML:", heading.innerHTML);

heading.textContent = "Heading updated using textContent";
console.log("textContent:", heading.textContent);

// Button click to update paragraph
let introParagraph = document.getElementById("intro");
let updateBtn = document.getElementById("update-btn");

updateBtn.addEventListener("click", function () {
  introParagraph.innerHTML += " <mark>Text added after button click.</mark>";
  console.log("Paragraph length:", introParagraph.textContent.length);
});
