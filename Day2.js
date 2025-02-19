alert("This is an external JavaScript alert!");
console.log("Tarun Abhishek")
console.log("Demonstrating var, let, and const");

// Using let
let b = 30;
console.log("let b:", b);
b = 40;  // Reassigning
console.log("Updated let b:", b);

// Using var
var a = 10;
console.log("var a:", a);
a = 20;  // Reassigning
console.log("Updated var a:", a);

// Using const
const c = 50;
console.log("const c:", c);
// c = 60;  // Error because const cannot be reassigned.

// Different data types
var num = 25; // Number
var str = "Tarun"; // String
var bool = true; // Boolean
var undef; // Undefined
var g = null; // Null
var obj = { name: "Tarun", age: 25 }; // Object
var arr = [2, "Tarun", "Abhishek"]; // Array
var func = function() { return "Hello, World!"; }; // Function

console.log("Type of num:", typeof num);
console.log("Type of str:", typeof str);
console.log("Type of bool:", typeof bool);
console.log("Type of undef:", typeof undef);
console.log("Type of g:", typeof g); // "object"
console.log("Type of obj:", typeof obj);
console.log("Type of arr:", typeof arr); // "object" (arrays are objects in JavaScript)
console.log("Type of func:", typeof func);
