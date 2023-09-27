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
console.log(res); //

let res1=document.querySelector("h1")
console.log(res1); //

// let res2=document.getElementById("max")
// console.log(res2); //null
