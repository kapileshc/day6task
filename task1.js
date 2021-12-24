//1.	Declare four variables without assigning values and print them in console
var a;
var b;
var c;
var d;
console.log(a)
console.log(b)
console.log(c)
console.log(d)

/* output 
undefined
undefined
undefined
undefined
*/

//2.	How to get value of the variable myvar as output

varmyvar= 1;
console.log(myvar);

/* output
1
*/
//3.	Declare variables to store your first name, last name, marital status, country and age in multiple lines
var firstname = "kapilesh";
var lastname = "chandran";
var maritalstatus = "Single";
var country= "India";
var age= 26;
console.log(firstname);
console.log(lastname);
console.log(maritalstatus);
console.log(country);
console.log(age);

/* output
kapilesh
chandran
single
india
26
*/

//4.	Declare variables to store your first name, last name, marital status, country and age in a single line
var firstName = "kapilesh",
lastName = "chandran",
marital_status = "Single",
  country = "India",
  age = 26;
 console.log(firstName,lastName,",",marital_status,",",country,",",age);

 /* output
 kapileshchandran,single,India,26
 */

 //5.	Declare variables and assign string, boolean, undefined and null data types
 let a = true;
let b = false;
let c = null;
let d;
let e = "This is a String-";
console.log(a,typeof(a));
console.log(b,typeof(b));
console.log(c,typeof(c));
console.log(d,typeof(d));
console.log(e,typeof(e));

/* output
true 'boolean'

false 'boolean'

null 'object'

undefined 'undefined'

This is a String- string
*/

//6.	 Convert the string to integer
/*
•	parseInt()
•	Number()
•	Plus sign(+)
*/
// Number() method:
var a = Number("1000");
console.log(a,typeof(a));
// parseInt() method :
let b = parseInt("2000");
console.log(b,typeof(b));
//Plus sign(+) method:
var c = +"200";
console.log(c,typeof(c));
/*
output
1000,number
2000,number
200,number
*/

//7.	Write 6 statement which provide truthy&falsey values.
let truthy1 = "kapilesh";
let truthy2 = "6897456";
let truthy3 = true;
let falsy1 = null;
let falsy2;
let falsy3 = false;

//8.square a number
function square(n) {
    return n * n;
  }
  varsq=square(2);
  console.log(sq)
  
//9)Swapping 2 numbers
function swap(n1, n2) {
    (n1 = 5), (n2 = 6);
    let arr = [];
  arr.push(n1);
  arr.push(n2);
  arr[0] = n2;
  arr[1] = n1;
    return arr.join();
  }
  console.log(swap());
//10) Addition of 3 numbers
function sum(n1, n2, n3) {
    return n1 + n2 + n3;
  }
  var total=sum(1,2,3);
  console.log(total);

//11) Celsius to Fahrenheit conversion
//formula (0°C × 9/5) + 32 = 32°F
function conversion(n) {
    let  a = n * (9 / 5);
    return a + 32;
  }
  var c= conversion(12);
  console.log(c);
/* output
53.6
*/
//12) Meter to miles
//divided the length value by 1609

function mtr(n) {
    return n / 1609;
  }
  var miles=mtr(1);
  console.log(miles);
//13) Pounds to kg
// divided the mass value by 2.205
function p(n) {
    return n / 2.205;
  }var kg=p(100);
  console.log(kg);
  /*
  Output:
  45.35147392290249
  */

//14)Calculate Batting Average for given array
function avg(arr) {
    let n = arr.length;
    let sum = 0;
    for (let i in arr) {
      sum += arr[i];
    }
    return sum / n;
  }
//15)Calculate five test scores and print their average
function avg(arr) {
    let n = arr.length;
    let sum = 0;
    for (let i in arr) {
      sum += arr[i];
    }
    return sum / n;
  }
  console.log(avg([12, 24, 48, 60, 70]));
/* output
42.8
*/
//16)Power of any number x ^ y.
function pow(a, b) {
    return Math.pow(a, b);
  }

//17)Calculate Simple Interest
functionsI(p, r, t) 
{
    return (p * r * t) / 100;
    }
//18)Calculate area of an equilateral triangle
function TriangleArea(a) {
    let squrt = Math.sqrt(3);
    let square = Math.pow(a, 2);
    return (squrt * square) / 4;
  }

//19)Area Of Isosceles Triangle

function isoTriangleArea(b, h) {
    return (b * h) / 2;
  }
  
//20)Volume Of Sphere
function volSphere(r) {
    let cube = Math.pow(r, 3);
    return (4 * Math.PI * cube) / 3;
  }

//21)Volume Of Prism
/*The formula for the volume of a prism is Volume=Base*height , The base of the prism is a rectangle. The length of the rectangle is 9 cm and the width is 7 cm.*/
function prismVol(B, h) {
    return B * h;
  }

//22)Find area of a triangle.
function triArea(b, h) {
    return (b * h) / 2;
  }

//23)Give the Actual cost and Sold cost, Calculate Discount Of Product
function Discount(n1, n2) {
    return n1 - n2;
  }

//24)Given their radius of a circle and find its diameter, circumference and area.
function findDiameter(r) {
    let diameter = 2 * r;
    return diameter;
  }
  function findArea(r) {
    let area = Math.PI * Math.pow(r, 2);
    return area; }
  function findCircum(r) {
    let circum = 2 * Math.PI * r;
    return circum;
  }console.log(findCircum(2));

  //25)Given two numbers and perform all arithmetic operations.
  let num1=5;
let num2=2;
let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);

////26)Display the asterisk pattern as shown below(No loop needed):
// *****
// *****
// *****
// *****
// *****
let number = 5;
for (let i = 0; i< number; i++) {
  for (let j = 0; j < number; j++) {
console.log("*");
  }
console.log("\n");
}

//27)Calculate electricity bill?
//For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?
//watt*rate*time

function bill(w, r, t) {
    let kwh = (w * t) / 1000;
    let perDayBill = kwh * r;
    let monthlyBill = perDayBill * 30;
    return monthlyBill;
  }
  console.log(bill(100, 10, 1));


//28)Program To Calculate CGPA
//To convert Percentage to CGPA, divide the percentage by 9.5 and the outcome will be your CGPA. (percentage/9.5)

function calcCgpa(marks, totalMarks) {
    let percentage = (marks / totalMarks) * 100;
    return percentage / 9.5;
  }
  console.log(calcCgpa(480, 600));
  
  
  
  
    








