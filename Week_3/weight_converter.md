# Project to create a simple weight converter using Javascript. 

Project source : https://www.youtube.com/watch?v=7l-ZAuU8TXc&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=8


We're going to make a very simple program that does a bit of maths and displays values for conversions from pounds to grams, kilos and ounces. 


Open the starter code inside weight_converter_starter by either dragging the folder onto the Atom icon on your Taskbar, or go through Command Prompt and type 'atom .' inside the directory where your starter code is located. 

# 0 

Read over the starter code for the HTML. It contains elements for style and script. This allows us to put all our code in one file. Normally I Would have things in separate files but for this small project we can keep everything in one place. 

What we should always pay attention to are the ids and the class names added to the html elements. These are the 'handles' by which we can grap data from the web page and send it to our javascript functions, and at the same time, send data back to the web page from our javascript. 

** Ask students to find ids that refer to input and output. 

** Discuss briefly the camel case convention and the importance of referencing the ids and classes precisely. 

# 1

The first bit of code to go into the script tag...
This will listen for an input event and then run a function. 

```js
document.getElementById('lbsInput').addEventListener('input', function(){
    console.log(123);
})

```
We've put a console log in there so we can test it. Open up the index in a browser and open the developer tools so we can see the console. 

We should see 123 being logged to the console each time we type something. 


# 2 

```js

document.getElementById('lbsInput').addEventListener('input', function(){
    let lbs = e.target.value; //NEW
    console.log(lbs); //NEW
})

```
Now we can see whatever we type being logged to the console. 


# 3 

Now we want to target the different outputs. Access them by id. (id is back there in the markup).

Then we want to do a bit of maths so that the grams output is a result of converting pounds to grams. 

```js
document.getElementById('lbsInput').addEventListener('input', function(){
    let lbs = e.target.value; 
    document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;  //NEW
})

```

Next, we want to do that two more times for the kilograms and ounces. So copy that last line and paste it in below then we can edit the details.  

```js
document.getElementById('lbsInput').addEventListener('input', function(){
    let lbs = e.target.value; 
    document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;  //OLD

    document.getElementById('kgOutput').innerHTML = lbs/2.2046;  //NEW

    document.getElementById('ozOutput').innerHTML = lbs*16;  //NEW

})

```
If we check that in the browser, we'll see it's running

Last:
We'll add some code so that the 'cards' don't show before we've added some input. 

```js
document.getElementById('output').style.visibility = 'hidden'; //NEW

document.getElementById('lbsInput').addEventListener('input', function(){
    let lbs = e.target.value; 
    document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;  
    document.getElementById('kgOutput').innerHTML = lbs/2.2046;  
    document.getElementById('ozOutput').innerHTML = lbs*16;  
})

```

So that's going to set visibility of the output to hidden. But we want it to appear when the function fires so we'll copy that last line, and past it in at the top of the function body:

```js
document.getElementById('output').style.visibility = 'hidden'; 

document.getElementById('lbsInput').addEventListener('input', function(){
    
    document.getElementById('output').style.visibility = 'visible'; //NEW
    let lbs = e.target.value; 
    document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;  
    document.getElementById('kgOutput').innerHTML = lbs/2.2046;  
    document.getElementById('ozOutput').innerHTML = lbs*16;  
})

```




Final Script


  <script>

      document.getElementById('output').style.visibility = 'hidden';

      document.getElementById('lbsInput').addEventListener('input', function(e){
        document.getElementById('output').style.visibility = 'visible';

        let lbs = e.target.value;
        document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
        document.getElementById('kgOutput').innerHTML = lbs/2.2046;
        document.getElementById('ozOutput').innerHTML = lbs * 16;
      })

    </script>