// notes.js


// a callback fx in js is a fx that is passed as an argument to another fx

const cb = (num1c, num2c) => {
     console.log(num1c + num2c)
}


const higherOrderFunction = (cb, num1, num2) => {
     // parameters act as local variables within a givin block scope
     // console.log(arguments[1])

     cb(num1, num2)
} // output to the console two numbers added together


// higherOrderFunction(2, 3) // 9

// arguments in JS are arbitrary meaning 

// two ways to hold information in JS
// array is a data structure 

// {} => to hold more detailed info on a singular thing
// [] => hold many thigns

// const person = {
//      name: 'patrick', 
//      location: 'bk',
//      records: [alot, 2, 3],
//      example: {},
//      methodExample: function() {
//           console.log(this.name + ' ' + this.location)
//      }
// }

// person.methodExample() // patrick bk

// const exampleArray = [patrick, cordelia, [], {}]


// arrow fx's do NOT create thier own lexical scope
// the value of this will be different


// scoping
// global
// function/block


function closureExample() {
     console.log(name)
     

     const insideFx = () => {
          var name = 'patrick'
          console.log('inside')
     }

     insideFx()
}

closureExample() //error 



// js single threaded LIFO

// 1, 2, 3, 4

// Node non-blocking i/o async


// In computing, a stateless protocol is a communications protocol in which no session information is retained by the receiver, usually a server. 
// Relevant session data is sent to the receiver by the client in such a way that every packet of information transferred can be understood in isolation, 
// without context information from previous packets in the session. This property of stateless protocols makes them ideal in high volume applications, 
// increasing performance by removing server load caused by retention of session information.



// state of the union 
// state of a molecul
// state of a react class 



// current changes of the applciation
// statefull => it contains and knows about its own changes {persisting}
// stateless => does NOT know about its changes and does NOT keep track of any changes or anythign at all really


// 3 ways we can add state to a application === persist data 

// cookies -> js/browser based
// localStorage/sessionStorage -> js/browser based

// database -> external


// cookies are incredible small usually under 4kb
// can expire 



localStorage.setItem('key', 'value')
localStorage.removeItem('key')
const exampleStorage = localStorage.getItem()



// req <-> res HTTTP cycle 

// ****** streams are special node objects whichw e treat EXACTLY like js objects we are used to 

// req, res = {
//     body ={},
//     header ={},
//     payload ={}
// }

const jsObjWeKnow = {
    property: 'value',
    anotherProp: function() {}
}

// JSON 
const jsonObj = {
    "property": value,
    "anotherProperty": 'some value'
} // must use double quotes for string named properties

// we can send req and repsonses as strings but if we need more complex data types like objects or arrays 
// we must wrap them in a JSON obj

// JSON.stringify()
// JSON.parse()



// crud vs http verbs vs express methods that map directly to our HTTP 

// create  ------>  POST       -> .post

// read    ------>   GET       -> .get

// update   ------>  PUT       -> .put

// delete   ------>  DELETE    -> .delete

// REST



// resource operation = route path + HTTTP method

