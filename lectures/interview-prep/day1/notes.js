// notes.js

// syntax & organization & nouns/verbs

// imperative => object oriented patterns
// declaritave => functional programming (FP)
// - building things w/ pure functions [predictable output & imutable parameters by the fx itself, have no side effects]
// - avoid shared state, mutable data, side effects
// - IMMUTABLE DATA!! 

// function composition => combine functions to make more functions

// JS runtime & interpretation (synchronicity)
// - whitespace removal 
// - scoping / hoisting
// - ASI
// - type casting 

// JS's 1st class functions

// execution context (lexical scoping) => call stacks (JS & NODE)
// JS === single threaded => LIFO stack 
// NODE === non-blocking I/O async =. event loop has 6 phases

// var, let, const => scoping / hoisting
// all the different fx's and thier unique propertioes => scoping hoisting

// inheritence patterns of JS => prototypal

// 4 pillars of OOP
// Inheritance, polymorphism, encapsulation, abstraction
// application state is usually shared and colocated with methods and objects
















// bind()
// const pokemon = {
//      firstname: 'Pika',
//      lastname: 'Chu ',
//      getPokeName: function () {
//           let fullname = this.firstname + ' ' + this.lastname;
//           return fullname;
//      }
// };

// const pokemonName = function (snack, hobby) {
//      // console.log(this.getPokeName() + 'I choose you!');
//      console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby)
// };

// const logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

// logPokemon('sushi', 'algorithms'); // 'Pika Chu I choose you!'


// the JS engine is creating a new pokemonName instance and binding pokemon
// as its 'this' variable => COPY so this ex is copying the pokemonName fx











const pokemon = {
     firstname: 'Pika',
     lastname: 'Chu ',
     getPokeName: function () {
          let fullname = this.firstname + ' ' + this.lastname;
          return fullname;
     }
};

const pokemonName = function (snack, hobby) {
     console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};


pokemonName.call(pokemon, 'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
pokemonName.apply(pokemon, ['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms




















// currying

function curry(f) { // curry(f) does the currying transform
     return function (a) {
          return function (b) {
               return f(a, b);
          };
     };
}

// usage
function sum(a, b) {
     return a + b;
}

let curriedSum = curry(sum);

// alert(curriedSum(1)(2)); // 3

// es6 partials

// It is also called nested function is ecmascript
// const multiply = (a) => (b) => a * b;
// multiply(3)(4); //Answer is 12

// const multipleBy5 = multiply(5);
// multipleBy5(10); //Answer is 50




















