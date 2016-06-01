// You'll be using element.classList to manipulate the CSS classes on elements.
var outputTarget = document.getElementById("output-target");


// When any section is clicked the output target text should be "You clicked on the {text of the section} section"

var anysection = document.getElementById("all-the-text");

var clickIdent = function(event) {
  console.log("event target", event.target );
  outputTarget.innerHTML = `<h3>You clicked on the ${event.target.innerHTML} section</h3>`;
} 

anysection.addEventListener("click", clickIdent );


// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
var pageTitle = document.getElementById("page-title");

var headerMouse = function(event) {
  outputTarget.innerHTML = "<h3>you moved your mouse over the header</h3>";
}
pageTitle.addEventListener("mouseover", headerMouse);


// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
var headerMouseOut = function(event) {
  outputTarget.innerHTML = "You left me!!";
}
pageTitle.addEventListener("mouseout", headerMouseOut);


// When you type characters into the input field, the output element should mirror the text in the input field.
var inputText = document.getElementById("keypress-input");

var mirrorText = function(event) {
  console.log("keypress", inputText.value);
  outputTarget.innerHTML = inputText.value;
}

inputText.addEventListener("keyup", mirrorText);


//guinea pig DOM element
var guineaPig = document.getElementById("guinea-pig");

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
var colorAdder = document.getElementById("add-color"); 

var addColor = function(event) {
  guineaPig.classList.toggle("blue");
}

colorAdder.addEventListener("click", addColor);

// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger. 
var hulkifier = document.getElementById("make-large");

var hulkify = function(event) {
  guineaPig.classList.toggle("large");
}

hulkifier.addEventListener("click", hulkify);

// When you click the "Capture it" button, the guinea-pig element should have a border added to it.

var capturer = document.getElementById("add-border");

var capture = function(event) {
  guineaPig.classList.toggle("bordered");
} 

capturer.addEventListener("click", capture);

// When you click the "Rounded" button, the guinea-pig element's border should become rounded.

var rounder = document.getElementById("add-rounding");

var round = function(event) {
  guineaPig.classList.toggle("rounded");
} 

rounder.addEventListener("click", round);

