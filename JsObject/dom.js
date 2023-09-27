// * DOM method to get html elements

// ^ 1. document.getElementById("ElementId")
//& Returns a reference to the first object or element based on the ID 

// let res=document.getElementById("demo")
// console.log(res); //<p id="demo">Hi</p>

// let res1=document.getElementById("test")
// console.log(res1); //<span id="test">Javascript</span>

// let res2=document.getElementById("max")
// console.log(res2); //null

//^ 2. documentquerySelector("Selector")
//& gets the element based on the selectors, and gets the first occured element

let res=document.querySelector("a")
console.log(res); //<a href="" id="demo">Bye</a>

let res1=document.querySelector("h1")
console.log(res1); //<h1 class="demo">Heading</h1>

// let res2=document.querySelector(".a")
// console.log(res2); //<h1 class="a">Hello</h1>

let res3=document.querySelector("#a")
console.log(res3); //null

let res4=document.querySelector("div h2")
console.log(res4); //

let res5=document.querySelector("demo")
console.log(res5); //
