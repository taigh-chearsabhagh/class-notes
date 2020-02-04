//
// // STEP 2
// // Create a "close" element and append it to each list item
const myNodelist = document.getElementsByTagName("LI");
console.log(myNodelist);
let i;

// The for loop below iterates through the list created above (stored in the myNodeList variable).
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");  // creates the span element
  let txt = document.createTextNode("\u00D7");  // creates a character
  span.className = "close";   // sets the classname of the span element (like typing class="close" into the html file)
  span.appendChild(txt);  // puts the character inside the span element
  console.log(txt); // logging the variable to the console to see what's happening to the data at this point in the program
  console.log(span)
  myNodelist[i].appendChild(span); // pops the span element back into the htmlCollection (myNodeList)
}


// STEP 3
// Click on a close button to hide the current list item

// creates variable for accessing the collection of elements with class name 'close'
let close = document.getElementsByClassName("close");
let j;
// loops through the htmlCollection created above
for (j = 0; j < close.length; j++) {
  // for each item in the list, when it is clicked, call the function below:
  close[j].onclick = function() {
    // creates a div element to wrap the li and set its display to none (hides it)
    let div = this.parentElement;
    div.style.display = "none";
  }
}


// STEP 1
// Add a "checked" symbol when clicking on a list item

// create list of items from the ul element
let list = document.querySelector('ul');
// add an event listener to this list, which listens for a click then calls a function.
list.addEventListener('click', function(ev) {
  // where element is a list item, toggle the css to class of 'checked'
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
// above sets default of not checked.


//
// // STEP 4
// // Create a new list item when clicking on the "Add" button
function newElement() {

  var li = document.createElement("li"); // creates li element
  var inputValue = document.getElementById("myInput").value; // sets input text to a variable
  var t = document.createTextNode(inputValue); // turns inputValue (text) into a textNode
  li.appendChild(t); // puts the text node in the li element

  // error correction: if add button clicked with no text in the input field, returns an alert message to screen.
  // otherwise, adds the element created above to the ul element (li elements always go inside ul elements)
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = ""; // clears the input field once 'add' has been clicked.

  // code below adds a close button to the new li (repeats the code in step 2). This is because the code in step 2 will run
  // when the page loads but won't run when a new element is added. So we need to create a new element AND create a close button for it.
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
