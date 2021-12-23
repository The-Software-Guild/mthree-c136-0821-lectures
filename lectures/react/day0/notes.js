// notes.js

const someArray = [0, true, 4, 199]
// some fx that itterates over this once and does logs something

// some fx that itterates over each indicie does some computation 
// and stores the new value in a new array
// and then we have a new itteration through the new array to do another thing


// DOM


// JS provides us a document object in which ALL properties and methods are passed down
// a tree like data structure representative of the given HTML of any web page


// 

// constructor function
function Person(nameParam, ageParam) {
     this.name = nameParam,
          this.age = ageParam,
          this.speak = function () {
               console.log('hello ' + this.name + ' ' + this.age)
          }
}

// create an object
const person1 = new Person('patrick', 31); // instatiation
const person2 = new Person('whoeever', 21);
// const person2 = new Person('whoeever', 21); 
// const person2 = new Person('whoeever', 21); 
// const person2 = new Person('whoeever', 21); 
// const person2 = new Person('whoeever', 21); 

console.log(person1.speak())
console.log(person2.speak()) // whoever 21



//  in js are syntactical sugar for constructor functions


const stringEx = 'hello'

// const reverseString = (str, function name() {

// }) => {
//      str.split('').reverse().join('')

//      return str
// }

// console.log(reverseString(stringEx)) // olleh


// anonnmyous
console.log(x * 2)

//named
function iHaveAName() {

}

// arrow es6=> named
const arrow = () => {

}

// constructor
function Person() {

}

// hello
// hell
// hel
// he

function reverse(str) {
     if (str === "") {
          return ""; // if the given string is empty we return out of our function
     } else {
          return reverse(str.substr(1)) + str.charAt(0);
          return str.split('').reverse().join('')
     }
}

// 0 + o === o
// o + l === ol
// l + ol === oll
// e + oll === olle
// h + olle === olleh





















// console.log(this) // global object constructor

// const exampleFx = () => {
//      console.log(this)  
//      // this within arrow fx refers to the next outside scope because arrow fx's do NOT have lexical binding of the this keyword
// }

// function anotherExFx() {
//      console.log(this) // refer to the function itself
// }










