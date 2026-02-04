 //Task 1: DOM SELECTION

// By Tag Name
let headings = document.getElementsByTagName("h1");
console.log(headings);
console.log(headings[0].textContent);
headings[0].innerHTML = "This is <em>updated</em> heading";

// By ID
let introParagraph = document.getElementById("intro");
console.log(introParagraph.textContent);
introParagraph.innerHTML =
  "This is a <strong>updated</strong> introductory paragraph.";

// By Class Name
let titles = document.getElementsByClassName("title");
console.log(titles);

// querySelector
let additionalInfo = document.querySelector("#additional-info");
console.log(additionalInfo.textContent);
additionalInfo.innerHTML =
  "This is <u>updated</u> additional information paragraph.";

// querySelectorAll
let allTitles = document.querySelectorAll(".title");
console.log(allTitles);

   //Task 2: CONTENT MANIPULATION

let updateBtn = document.getElementById("update-btn");

updateBtn.addEventListener("click", function () {
  introParagraph.innerHTML +=
    " <mark>Text added after button click.</mark>";
  console.log("Paragraph length:", introParagraph.textContent.length);
});
