// Methods for DOM selection

// document.getElementById

var testParagraph = document.getElementById('test-paragraph')
// console.log(testParagraph)

// document.querySelector

var anotherTest = document.querySelector('body ul li')
// console.log(anotherTest)

// document.querySelectorAll

var allThePs = document.querySelectorAll('p')
// console.log(allThePs)


// Create 2 variables and use getElementsByTagName to select the h1 and img tags.
// Create 2 variables and use getElementsByTagName to select the h1 and img tags.
// Log the variables to the console, observe the results.

var text = document.getElementsByTagName('h1')[0]
// console.log(text)


// Create a variable and use getElementById to select the img tag.
// Create a variable and use getElementById to select the img tag.
// Log the variable to the console, observe the result.


// Create a variable and use getElementsByClassName to select the li tag.
// Log the variable to the console, observe the result.

var lists = document.getElementsByClassName('bearname')
// console.log(lists)

// Create at least 3 variables and use querySelector to select the h1, img, and li tags.
// Create at least 3 variables and use querySelector to select the h1, img, and li tags.
// Try grabbing by class and id and tag name.
// Log the variables to the console, observe the results.

// Create at least 3 variables and use querySelectorAll to select the h1, img, and li tags.
// Create at least 3 variables and use querySelectorAll to select the h1, img, and li tags.
// Try grabbing by class and id and tag name.
// Log the variables to the console, observe the results.




// PART TWO
// The time of the bears ruling things is over. Lets use DOM manipulation to give power
// to our true overlords CORGIS

// Lets start by changing the text of the H1 to read "CORGIS!"
// Don't forget to select the h1 before trying to change the text

var $h1 = document.querySelector('h1')
// console.log($h1)

$h1.innerText += " CORGIS!"

// element.innerText
// element.innerHTML

// element.textContent = 'string'

// Do the same thing with the paragraph tag. It should read
// "Two types of corgi lords Pembroke and Cardigan"

var pTag = document.getElementsByTagName('p')[0]
pTag.textContent = 'Two types of corgi lords Pembroke and Cardigan'
// Cool we are on our way to spreading the good news about our new
// overlords but the site needs more work

// Lets change the image source to be a picture of a corgi of your choosing
document.getElementById('mainpicture').src = 'http://cdn.akc.org/akccontentimages/BreedOfficialPortraits/hero/pembroke-welsh-corgi-hero.jpg'
// console.log(document.getElementById('mainpicture').getAttribute('src'))


// Lets change the class of the lis to be "corgitype"

var corgType = document.querySelectorAll('li')
for (let i = 0; i < corgType.length; i++) {
    corgType[i].classList = 'corgitype'
    //can also use classList
    //classList.add(‘corgitype’)
}

// Now set the text of each li to be Pembroke and Cardigan

// var $li = document.getElementsByClassName('corgitype')
// $li[0].textContent = "Pembroke"
// $li[1].textContent = "Cardigan"

var list = document.getElementsByTagName('li');

for (var i = 0; i < list.length; i++) {
    // list[i].textContent = "Pembrooke and Cardigan"
    if (i === 0) {
        list[i].textContent = "Pembroke"
    } else {
        list[i].textContent = "Cardigan"
    }
} 

// Change the color of the H1 to be your favorite color

// ‘’’var titleColor = document.querySelector(‘h1’);

// titleColor.style.color = ‘green’; ‘’'


// STRETCH IT OUT

//  Use this portion to cretae more images of corgis or more corgi 
// related things. Maybe you want to have a collab take over and add
// cats or brids also taking over. Use this section to create new elements
// And add then to our corgi page


// ---------- LET'S MAKE SOME NEW DOM ELEMENTS! ----------


// Research the DOM method for creating new elements
// Question: Which method do we need?
// Answer: document.createElement('elementName')

var newParagraph = document.createElement('p')
// console.log(newParagraph)

// Create a new <h2> element called favorites
// console.log the result

// CODE HERE

// Add the text 'Favorite Corgis' to the new <h2>

// CODE HERE
var favorites = document.createElement('h2')
favorites.innerText = 'Favorite Corgis'
console.log(favorites)

// var h2 = document.createElement('h2');
// h2.textContent = "favorites"

// Create a new <li> element and store it in a variable called kiki
// console.log the result

// CODE HERE

// Add the text 'Kiki' to the new <li>
    // Give the <li> the class 'corgi-queen'
    // console.log the result

// CODE HERE

var kiki = document.createElement('li')
kiki.innerText = "kiki"
kiki.classList.add('corgi-queen', 'classtwo', 'three')
console.log(kiki)

// ---------- LET'S ADD ELEMENTS TO THE PAGE! ----------


// OK, now we have created some new elements we'd like to add the DOM, but they only exist in memory
// Let's add them to the actual page!

// Research the DOM method for adding/appending elements
// Question: which method do we need?
// Answer: node.appendChild function (method)

var myDiv = document.createElement('div')
var myP = document.createElement('p')

myDiv.appendChild(myP)
console.log(myDiv)

// Create a new <ul> element, store in a variable called queens
// Append the kiki <li> to the queens <ul>
// console.log the queens <ul>
var queens = document.createElement('ul')
queens.appendChild(kiki)
console.log(queens)
// CODE HERE

// Select the <body> and store it in a variable
// Then append the <h2> to the body

// CODE HERE

// Append the <ul> to the body as well!

// CODE HERE

var theBody = document.querySelector('body')
theBody.appendChild(favorites)
theBody.appendChild(queens)

// ---------- LET'S ADD EVENT LISTENERS TO THE DOM! ----------


// Let's make it so that we can change things in the DOM based on user input

// Research the DOM method for adding event listeners
// Question: Which method do we need?
// Answer: element.addEventLister()

// Cool, let's change some colors on click

// Attach a click listener to our 'favorites' <h2>
// Change the color of the <h2> to 'orange' in the event handler function

// CODE HERE

favorites.addEventListener('mouseover', eventHandler)

function eventHandler(event) {
    console.log(event)
    console.log(event.target)
    event.target.style.color = 'orange'
}

// Refactor your event handler above to accept the 'event' as a parameter
// console.log the event in your handler

// OBSERVE THE MASSIVENESS OF THE EVENT OBJECT: AHHHHHHHH!!

// Attach a 'mouseover' event to the kiki <li>
// Change the display property to 'none in the event handler function
// See what happens when you bring your mouse over the <li>

// CODE HERE

// Refactor your current event listeners to use event.target
// rather than the 'favorites' and 'kiki' variables

// CODE HERE

// KEEP PLAYING AROUND!
// There are tons of different events to play with
// See if you can build up a whole 'chunk' of HTML in memory, then append to the page

let $h2 = document.querySelector('h1')
console.log('%o', $h2)

const variablename = document.querySelector('someting')

