//JavaScrip Type Convension

//number to String
let val;
let a = 50;
val = String(a); // var bc = a.toString();

//boolean to string
val = String(true) // var bc = val.toString();


//String to number
val = Number("Amjad");
val = parseFloat("Amjad");
val = parseInt("Amjad");

//check array
val = ["Amjad","jabed","Kamal"];
var abc = Array.isArray(val); //this is boolean string value true or false

// console.log(abc)
// console.log(typeof abc)
// console.log(abc.length) //number,boolean value have no length//undefined

// ########################################################

//string->parseFloat->parseInt
val = "120.8668657";
val = parseFloat(val).toFixed(3) // parseFloat is number but toFixed is string so total is string
//val = parseInt(val);

console.log(val)
console.log(typeof val)
console.log(val.length) //number,boolean value have no length//undefined

// ########################################################

// Find Date and Time
var date = new Date();
var year =date.getFullYear() //new Date().getFullYear()
var montn =date.getMonth()+1 //month calculate by index from zero,So always add 1 with month


console.log(montn)
console.log(typeof montn)
console.log(montn.length) //number,boolean value have no length//undefined



