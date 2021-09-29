// notes.js

// bind()

var pokemon = {
     firstname: 'Pika',
     lastname: 'Chu ',
     getPokeName: function () {
          var fullname = this.firstname + ' ' + this.lastname;
          return fullname;
     }
};

var pokemonName = function () {
     console.log(this.getPokeName() + 'I choose you!');
};

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon(); // 'Pika Chu I choose you!'





























