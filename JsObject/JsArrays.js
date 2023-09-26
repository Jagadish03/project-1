// * JavaScript array 
// let a = ["hello", 22, undefined, true, null, "hi"]
// console.log(a);
// console.log(a.length);
// console.log(a[0]);
// console.log(a[12]);
// a[18]="javascript"
// console.log(a);
// console.log(a[15]);
// console.log("Don't delete by using delete operator because it will leave empty loop holes");
// delete a[3]; 
// console.log(a);
// console.log(a[3]);

// * Builtin Methods in Array

let products=["mobile", "watch", "earphone", "camera", "watch", "mobile", "laptop"];

// ^ 1. includes(arg1,arg2) arg2 in included
// & determines wether an array included a certain element returning true or false

// console.log(products.includes("watch",2));   //true
// console.log(products.includes("watch",-2));   //false
// console.log(products.includes("watch",-3));  //true
// console.log(products.includes("watch"));    //true
// console.log(products.includes("car"));  //false

// ^2. indexOf(arg1,arg2) arg2 is included
// & The value to locate in the array.Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

// console.log(products.indexOf("watch",0));   //1
// console.log(products.indexOf("watch",1));   //1
// console.log(products.indexOf("watch",2));   //4
// console.log(products.indexOf("earphone",1));    //2
// console.log(products.indexOf("earphone",4));    //-1

// ^ 3. lastIndexOf(arg1,arg2)
//& Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.The array is searched backwards

// console.log(products.lastIndexOf("watch",2));   //1
// console.log(products.lastIndexOf("watch")); //4
// console.log(products.lastIndexOf("earphone",5));    //2
// console.log(products.lastIndexOf("earphone",1));    //-1
// console.log(products.lastIndexOf("bike"));  //-1

// ^ 4. Slice(agr1,arg2) arg1-included arg2-excluded
//& The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end 
//& ( end not included) where start and end represent the index of items in that array. Cut the part of array

// console.log(products.slice(2,5));   // ['earphone', 'camera', 'watch']
// console.log(products.slice(0,3));   // ['mobile', 'watch', 'earphone']
// console.log(products.slice(1,6));   // ['watch', 'earphone', 'camera', 'watch', 'mobile']
// console.log(products.slice(-7,-3)); //['mobile', 'watch', 'earphone', 'camera']
// console.log(products.slice(4,4)); //[]
// console.log(products.slice(5,4)); //[]

//^ 5. Concat(arg1,arg2,arg3......) 
//& Combines two or more arrays. This method returns a new array without modifying any existing arrays.

// console.log(products); //['mobile', 'watch', 'earphone', 'camera', 'watch', 'mobile', 'laptop']
// console.log(products.concat("mouse")); //['mobile', 'watch', 'earphone', 'camera', 'watch', 'mobile', 'laptop', 'mouse']
// console.log(products.concat(2));    //['mobile', 'watch', 'earphone', 'camera', 'watch', 'mobile', 'laptop', 2]
// console.log(products.concat("mouse",2)); //['mobile', 'watch', 'earphone', 'camera', 'watch', 'mobile', 'laptop', 'mouse', 2]
// console.log(products.concat(["mouse","pen"])); //['mobile', 'watch', 'earphone', 'camera', 'watch', 'mobile', 'laptop', 'mouse', 'pen']
// console.log(products); //['mobile', 'watch', 'earphone', 'camera', 'watch', 'mobile', 'laptop']

//^ 6. Unshift(arg1........)
//& Inserts new elements at the start of an array, and returns the new length of the array. It affects the original array

// console.log(products.unshift("pen","wallet","mobile","laptop")); //11
// let newlength=products.unshift("car","bike",44) 
// console.log(products); // ['car', 'bike', 'pen', 'wallet', 'mobile', 'laptop', 'mobile', 'watch', 'earphone', 'camera', 'watch', 'mobile', 'laptop']
// console.log(newlength); //14

//^ 7.Puch()
//& It is used to add the elements to the array it always adds the elements at the end. It affects original array
// let newlength=products.push("pencile",4,"pen",8); 
// console.log(products); // ['mobile', 'watch', 'earphone', 'camera', 'watch', 'mobile', 'laptop', 'pencile', 4, 'pen', 8]
// console.log(newlength);//11

//^ 8. shift()
//& Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified

// console.log(products.shift()); //mobile
// console.log(products);//  ['watch', 'earphone', 'camera', 'watch', 'mobile', 'laptop']
// let deletedElement=products.shift();
// console.log(products);  // ['earphone', 'camera', 'watch', 'mobile', 'laptop']
// console.log(deletedElement);    //watch

//^ 9. pop()
//& 

console.log(products); //['mobile', 'watch', 'earphone', 'camera', 'watch', 'mobile', 'laptop']
console.log(products.pop()); //laptop
console.log(products); //['mobile', 'watch', 'earphone', 'camera', 'watch', 'mobile']
let deletedElement=products.pop()
console.log(products); //
console.log(deletedElement); //


