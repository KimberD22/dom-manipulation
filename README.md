# dom-manipulation

## Getting Started :)
* Let's create a website for Hawkins, Indiana
* Inside of the student_examples folder make a dom_intro folder
* Inside of the dom_intro folder. Create an app.js file and index.html file
* Connect them and run a console log in order to test out your files

Once we have our basic files set up we could get started with creating our website and learn a little about the DOM
* Add an h1 tag to your file with the text "Welcome to Hawkins"
* A div with with a class of container
* an image with a `src` attribute of https://londontheinside.com/wp-content/uploads/2017/11/StrangerThings2.png and an `alt` attribute that says "Welcome to Hawkins"
* An h2 with the text that says "Featuring"
* An unordered list with list items that say
  * Hawkins National Laboratory
  * Hawkins Police Station
  * Bradly's Big Guy Supermarket
  * Melvad's General Store
  * The Palace Arcade

## DOM manipulation. What is it?

Before we talk about DOM manipulation we first have to talk about what the DOM is.

DOM stands for Document Object Model. It is depicted as a tree with items inside of the tree. Each individual item is called a _node_

![Image of a basic DOM tree](https://github.com/angeljuarez77/dom-manipulation/blob/master/assets/html-dom.jpg)

The reason the DOM exists is to depict an HTML or XMl webpage/document. The reason we need it is so that we as programmers may have a way to wrap our head around interacting with and modifying our content within an HTML page.

We could interact with the DOM with any browser that exists. And every browser has to adhere to a certain standard. This means that we don't have to worry about worrying specific commands with specific browsers to get started. We could immediately get started using the DOM manipulation commands.

Since we're interacting with the content in our browser, and the only programming language that is able to interact with our browser is Javascript we'd have to use Javascript. There are some options to use libraries like jQuery but... IN ANGEL'S OPINION. It would be better to learn how to manipulate the DOM with [vanilla JS](http://vanilla-js.com/)

## Let's experiment with the website that we made

Let us open up the console inside of our browser. (Please use Chrome for this exercise)

### Let us start with document and what it represents.
The Document object in our browser represent... literally our entire document. It would show us all of the information about our webpage as our browser interprets it.

The `document` object inside of our console would exist in all of our webpages (since every webpage would need a document to depict it). If we console log it we could then see all of the children that the document object has! Since the document referes to our current webpage it would essentially just console log all of the content inside of our HTML page.

* To log the document object to our console we just have to navigate to our console within our browser. And typing in `console.log(document)` then pressing enter

As we can see our document object has children once we log it which correspond with the information inside of our actual HTML file. So since we see that document has children. And one of the children is a body. We could also console log our body which is inside of the document by simply running

* `console.log(document.body)`

And just like how we accessed the body object. We could also access all the rest of the children within the body of our document. Let's take a look at the .children property. What the children property does is return an array of HTML objects. So if we log out document.body.children we'll see an array of HTML elements!

### Quick Exercise
Let's use the .children property inside of our document and a new method .innerText in order to select any element inside of our HTML file. And change the text inside of it.

## DOM selectors
Currently we've only been selecting a thing at a time to mess with. We could leverage the generalization techniques of HTML pages to interact with more than just one HTML element at a time. We could select HTML elements using the elements tags, classes, and id's [(there are more options as well)](http://xahlee.info/js/js_get_elements.html)

What to use when selecting
* Tags - document.getElementsByTagName("tag_name");
* Classes - document.getElementsByClassName("class_name");
* id's - document.getElementById("id_name"); --> NOTE: in the other two it was "getElement _s_..." in this one. Since each HTML element should have a unique ID (if any) we only put "getElementById"

### Quick Exercise
* Change the font color of all the li tags
* Put an id on the img tag and add a border to it. If you want to also mess with the height and width of it!
* Attach classes to all of the li tags. And change the font color again... let's see what happens! (this has to do with CSS specificity)

## Time to bring everything we learned (and then some) together!!!
For our next code along exercise we'll start a small project in order to make use of a lot of the concepts we learned throughout the entire course. But also of some DOM manipulation concepts we learned today. And some we didn't. There is code to start you off inside of the student_examples/code-along-api/ folder inside of this repository. (So to get started let us navigate to the code-along-api directory and run `code .` within it). The reason there is starter code is so we don't have to worry about making an API call.

As a class we will render information to our DOM by traversing our API response, selecting an element, adding children to the selected element, and using those children to render information

## Resources
* https://www.w3schools.com/whatis/whatis_htmldom.asp - What is the DOM?
* https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction - What is the DOM? (A more technical view)
* https://dom.spec.whatwg.org/ - The DOM standard

* https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText - innerText
* https://www.w3schools.com/JSREF/prop_node_innertext.asp - innerText

* https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity - CSS specificity
* https://dev.to/emmabostian/css-specificity-1kca - CSS specificity
* https://www.w3schools.com/css/css_specificity.asp - CSS specificity
