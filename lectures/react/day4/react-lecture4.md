# Week 2 Lecture - C136 Day4

Learnign goals for react-day4 => 

## Agenda

    1) react-day3-review
    2) Prototypal Inheritance
    3) Equivalence in JS
    4) Vanilla JS Runtime (ASI, Hoisting, Lexical Scoping) 

### 1. react-day3-review

- CRUD w/ React
- Consuming API’s with Axios
- Hooks

### 2. Prototypal Inheritance

Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes.

    Prototype-based programming uses generalized objects, which can then be cloned and extended. Using fruit as an example, a "fruit" object would represent the properties and functionality of fruit in general. A "banana" object would be cloned from the "fruit" object and general properties specific to bananas would be appended. Each individual "banana" object would be cloned from the generic "banana" object. Compare to the class-based paradigm, where a "fruit" class would be extended by a "banana" class.

Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.

All JavaScript objects inherit properties and methods from a prototype:

- ```Date``` objects inherit from ```Date.prototype```.
- ```Array``` objects inherit from ```Array.prototype```.
- ```Player``` objects inherit from ```Player.prototype```.

The ```Object.prototype``` is on top of the prototype inheritance chain. ​ Date objects, Array objects, and Player objects all inherit from ```Object.prototype```.

The JavaScript ```prototype``` property allows you to add new properties/methods to an existing prototype. A prototype is an object from which other objects inherit properties. Every object has a prototype by default. Since prototypes are themselves objects, every prototype has a prototype as well.

**Advantages:**

No matter how many objects you create, functions are loaded only once into memory.
It allows you to override functions if required.
When we put something on the prototype, every instance of the object shares the same code for the method. They are all using the same function instance.

```javascript
function Pokemon(pokemonName, pokemonType, pokemonAttackList){
	this.name = pokemonName;
	this.type = pokemonType;
	this.attackList = pokemonAttackList;
}

var Arcanine = new Pokemon("Arcanine", "Fire", ["Ember", "Bite", "FlameThrower"]);
var Pikachu = new Pokemon("Pikachu", "Electric", ["Tail Whip", "ThunderBolt", "Agility"]);
var Blastoise = new Pokemon("Blastoise", "Water", ["Water Gun", "Hydro Cannon", "Hyper Beam"]);


Pokemon.prototype.callPokemon = function(){
	console.log(`I choose you, ${this.name}!`);
};

Pokemon.prototype.attack = function(attack_number){
	console.log(`${this.name}! use ${this.attackList[attack_number]}.`);
};

Pikachu.callPokemon();
Arcanine.callPokemon();
Blastoise.callPokemon();

Pikachu.attack(1);
Arcanine.attack(2);
Blastoise.attack(2);
```

Output

    I choose you, Pikachu!
    I choose you, Arcanine!
    I choose you, Blastoise!
    Pikachu! use ThunderBolt.
    Arcanine! use FlameThrower.
    Blastoise! use Hyper Beam.

Using prototypes is much more efficient. In the above example, the methods are placed on the prototype since we typically want all instances to use the same method. However, the properties are placed on the instance itself because we usually don't want all instances to share the same properties.

### 3. Equivalence in JS

### 4. Vanilla JS Runtime (ASI, Hoisting, Lexical Scoping)
