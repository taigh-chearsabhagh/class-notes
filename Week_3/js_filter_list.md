# Filterable List Using Javascript


Project Source: https://www.youtube.com/watch?v=G1eW3Oi6uoc&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=7


# Intro

This project allows us to build out a slightly more complex program. It does some fancier logic than in our previous projects so there's more room for error. 


The first thing we'll add to the main.js file is we'll create a variable. This is going to get the input from the input field. 
It grabs any tag by its id. The one we're looking to use is 'filterInput

```js
// Get input Element using id. 
let filterInput = document.getElementById('filterInput');

```

Okay, that just allows us to store some data. We need to add an event so that the code can respond. 
So under the previous statement we'll add an event listener and that will call a function when it receives the event of 'keyup'. There are different types of events that javascript can work with. onMouseUp and so on. We've seen some already. 

```js
// Get input Element using id. 
let filterInput = document.getElementById('filterInput');

// Add event listener
filterInput.addEventListener('keyup', filterNames);

```

Then we define that function, using a console log to test it's working so far. 

```js
// Get input Element using id. 
let filterInput = document.getElementById('filterInput');

// Add event listener
filterInput.addEventListener('keyup', filterNames);
// define function being called above
function filterNames(){
    console.log(1);
}

```

Now we want to actually get the value of the input. 
And we don't just want the element ( which we'd get with document.getElementById('filterInput') ) but the value of that so we add  .value and then convert that value to upper case 

```js
let filterInput = document.getElementById('filterInput');
filterInput.addEventListener('keyup', filterNames);
function filterNames(){
    // get value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    console.log(filterValue);
}

```
We should now see whatever we've typed in in the console. If we're going to match against a value we need it to be uppercase = consistent. 


We now want to get the unordered list; the 'ul' , which has an id of 'names'. We want to create a variable representing that. 

```js
// get names ul
let ul = document.getElementById('names');


```

Now we want to get the collection items in the ul. 

querySelectorAll is really useful built in function. We can get things by classes, or anything else. 
We're going to get the lis with the class collection-item

```js
// get lis from ul
let li = ul.querySelectorAll('li.collection-item); 

```
This puts them into an array. Then we'll loop through the array. 


```js

// loop through collection-item lis 

for(let i = 0; i < li.length;i++){
    let a = li[i].getElementsByTagName('a')[0];
}

```
We're accessing each element in the array at a time, and for each element we're creating a variable of a and setting it equal to the tag called 'a'

What we want to do is check if the name in the list has any letters in it that match the value at tag 'a', 


innerHTML wil grad whatever is inside the a tag . The name inside. 
```js

// if matched
if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
    // remember filterValue is whatever is being passed in the form
    li[i].style.display = '';
}else{
    li[i].style.display = 'none';
}

```
Above: if there's a match we don't want to do anything, we want to set CSS stype property to nothing. 

IF there isnt a match we want it to dissapear;  set the stype property to none 


```js

```


```js

```


```js

```