// notes.js

// bind()

const pokemon = {
     firstname: 'Pika',
     lastname: 'Chu ',
     getPokeName: function () {
          var fullname = this.firstname + ' ' + this.lastname;
          return fullname;
     }
};

const pokemonName = function () {
     console.log(this.getPokeName() + 'I choose you!');
};

const logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon(); // 'Pika Chu I choose you!'


// const pokemonName = function (snack, hobby) {
//      console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
// };

// pokemonName.call(pokemon, 'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
// pokemonName.apply(pokemon, ['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms




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




















