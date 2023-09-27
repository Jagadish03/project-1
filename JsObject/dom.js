// * DOM method to get html elements

// ^ 1. document.getElementById("ElementId")
//& Returns a reference to the first object or element based on the ID 

// let res=document.getElementById("demo")
// console.log(res); //<p id="demo">Hi</p>

// let res1=document.getElementById("test")
// console.log(res1); //<span id="test">Javascript</span>

// let res2=document.getElementById("max")
// console.log(res2); //null

//^ 2. document.querySelector("Selector")
//& gets the element based on the selectors, and gets the first occured element

// let res=document.querySelector("a")
// console.log(res); //<a href="" id="demo">Bye</a>

// let res1=document.querySelector("h1")
// console.log(res1); //<h1 class="demo">Heading</h1>

// let res2=document.querySelector(".a")
// console.log(res2); //<h1 class="a">Hello</h1>

// let res3=document.querySelector("#a")
// console.log(res3); //null

// let res4=document.querySelector("div h2")
// console.log(res4); //<h2>h2 inside div</h2>

// let res5=document.querySelector("demo")
// console.log(res5); //null

//^ document.querySelectorALL:-
//& gets all the elements based on the selector, and returns all elements with the given selector 

// let res=document.querySelectorAll("a")
// console.log(res); //NodeList [a#demo]

// let res1=document.querySelectorAll("h1")
// console.log(res1); //NodeList(2) [h1.demo, h1.a]
// console.log(res1[0]);//<h1 class="demo">Heading</h1>

// let res2=document.querySelectorAll(".a")
// console.log(res2); //NodeList(2) [h1.a, span.a]

// let res3=document.querySelectorAll("#a")
// console.log(res3); //NodeList []

// let res4=document.querySelectorAll("div h2")
// console.log(res4); //NodeList [h2]

// let res5=document.querySelectorAll("demo")
// console.log(res5); //NodeList []

//^ documents.getElementsByClassName:-
//& getElementsByClassName() method is used to select HTML elements by their class name. It returns a list of matched elements in an array object

// let res=document.getElementsByClassName("a")
// console.log(res);// HTMLCollection(2) => HTMLCollection [a.a]

let res1=document.getElementsByClassName("h1")
console.log(res1)//HTMLCollection []


