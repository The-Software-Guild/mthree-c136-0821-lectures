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
     this.speak = function() {
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



// classes in js are syntactical sugar for constructor functions





// console.log(this) // global object constructor

// const exampleFx = () => {
//      console.log(this)  
//      // this within arrow fx refers to the next outside scope because arrow fx's do NOT have lexical binding of the this keyword
// }

// function anotherExFx() {
//      console.log(this) // refer to the function itself
// }










