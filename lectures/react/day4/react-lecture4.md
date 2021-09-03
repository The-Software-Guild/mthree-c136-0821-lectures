# Week 2 Lecture - C136 Day4

Learnign goals for react-day4 => We are filling in the last bit of vanilla JS that you need to be fullstack MERN devlopers.

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

    Let’s walk through an example of prototypical inheritance you’re likely familiar with from grade school: all squares are rectangles, but not all rectangles are squares. If we think of this as a JS program, we could say that the rectangle is a prototype to the square: the square inherits all properties of a rectangle (i.e. four-sides and closed), while also adding a new feature (i.e. all sides are the same length).

    We could not, however, construct this same concept using the square as a prototype, because there are properties of a square that do not apply to rectangles (i.e. all sides are the same length).

    We can see how prototypal inheritance works on the basis of specifying categories within a group from least specific to most – from rectangle to square. In code, this concept can sometimes be lost in the syntax. If you find this happens, speak the relations between objects and listen to where you draw distinctions. If you hear, “all ___ are , but…not all ___ are”, that is where a new prototypical relationship should be added.

The JavaScript ```prototype``` property allows you to add new properties/methods to an existing prototype. A prototype is an object from which other objects inherit properties. Every object has a prototype by default. Since prototypes are themselves objects, every prototype has a prototype as well.

#### **Advantages:**

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

#### **Disadvantages:**

- **Inheritance cannot flow in circles as this will create an error.**

- **Objects cannot inherit from multiple prototypes.** As we saw above, they can inherit multiple object’s properties through a chain, however another object linked as a prototype explicitly will cause an error. This is the case even if the additional prototype is within the same chain.

- **Prototypical relationships can only be made to objects.** This is because the ```__proto__``` function works as a forwarder, directing the program where to find the value it is looking for. As the program either knows where to look or it doesn’t, the function can be only either ```null``` or an object. All other types will be discarded.

#### **```__proto__``` property**

In Javascript, every object has its own hidden, internal property, ```[[Prototype]]```. We can access that ```[[Prototype]]``` using the ```__proto__``` property. This calls the program to mark the template object as a hidden type. JavaScript objects must be linked to this prototype object. Now, an object’s properties can be accessed by the inheritor object.

Let’s take a look at the syntax for accessing and setting the ```[[Prototype]]``` property of an object.

```javascript
//using __proto__ to access and set the [[Prototype]] of "anObject"
anObject.__proto__ = someotherObject
```

#### **hasOwnProperty**
Using hasOwnProperty, we can test if an object contains a certain prototype property; the method will return true or false depending. This will help you clarify if an object has its own property or if it is inheriting instead. Take a look at the syntax below:

```javascript
obj.hasOwnProperty(prop)
```

#### **The Prototype Chain**

Prototypal inheritance uses the concept of **prototype chaining**. Let’s explore that concept. Every object created contains ```[[Prototype]]```, which points either to another object or null. Envision an object C with a ```[[Prototype]]``` property that points to object B. Object B’s ```[[Prototype]]```property points to prototype object A. This continues onward, forming a kind of chain called the prototype chain.

This concept is used when searching our code. When we need to find a property in an object, it is first searched for in the object, and if not found, it is searched for on that object’s prototype, and so on. Thus, the entire prototype chain is traversed until the property is found or ```null``` is reached.

### 3. Equality of Values

In JavaScript, there are several kinds of equality.

- Strict Equality: ```a === b``` (triple equals).

- Loose Equality: ```a == b``` (double equals).

- Same Value Equality: ```Object.is(a, b)```.

#### **Same Value Equality: ```Object.is(a, b)```**

In JavaScript, ```Object.is(a, b)``` tells us if a and b are the same value:

```console.log(Object.is(2, 2)); // true```

```console.log(Object.is({}, {})); // false```

This is called **Same Value Equality**.
What does “same value” mean, exactly. You might already know this intuitively, but let’s verify your understanding.

```javascript
let dwarves = 7;
let continents = '7';
let worldWonders = 3 + 4;
```

Now try to answer these questions using the code above:

```javascript
console.log(Object.is(dwarves, continents)); // ?
console.log(Object.is(continents, worldWonders)); // ?
console.log(Object.is(worldWonders, dwarves)); // ?
```

- ```Object.is(dwarves, continents)``` is false because dwarves and continents point at different values.

- ```Object.is(continents, worldWonders)``` is false because continents and worldWonders point at different values.

- ```Object.is(worldWonders, dwarves)``` is true because worldWonders and dwarves point at the same value.

#### **Strict Equality: a === b**

So what’s the difference between ```Object.is``` and ```===```?

In almost all cases, the same intuition works for **Strict Value Equaliy** too. For example, ```2 === 2``` is **true** because 2 always “summons” the same value.

Conversely, ```{} === {}``` is **false** because each ```{}``` creates a different value.

However, there are two rare cases where the behavior of ```===``` is different.

Consider the cases below as exceptions to the rule — just like you had to memorize the irregular verbs when you were learning English. Both of these unusual cases involve “special numbers” that we discussed in the past:

1. ```NaN === NaN``` is **false**, although they are the same value.

2. ```-0 === 0``` and ```0 === -0``` are **true**, although they are different values.

```NaN``` is a special number that shows up when we do invalid math like ```0 / 0```.

You probably won’t do this intentionally, but it can happen when you work with incorrect data in the first place, or if your calculation contains a mistake.

Remember that ```NaN === NaN``` is always false:

```javascript
console.log(width === height); // false
```

However, NaN is the same value as NaN:

```javascript
console.log(Object.is(width, height)); // true
```

**Second Special Case: -0**

In regular math, there is no such concept as “minus zero”, but it exists in floating point math for practical reasons. Here’s an interesting fact about it.

Both ```0 === -0``` and ```-0 === 0``` are always true.

In practice, I haven’t run into a case where this matters in my entire career.

    Imagine negotiating business deals at a masked carnival. You might talk to two people, and not realize that you really talked to the same person twice. Or you might think you talked to one person but those were two different people!

    If you don’t have a clear mental model of equality in JavaScript, every day is like a carnival – and not in a good way. You’re never quite sure if you’re dealing with the same value, or with two different values. As a result, you’ll often make mistakes — like changing a value you didn’t intend to change.

#### **Loose Equality**

"**_Loose Equality (double equals) is the bogeyman of JavaScript._**" - Dan Abramov

The rules of Loose Equality (also called “abstract equality”) are arcane and confusing. They are widely acknowledged as an early bad design decision. Many coding standards prohibit the use of == and != in code altogether.

Although I don't take strong opinions on what features you should or shouldn’t use, we’re not going to cover Loose Equality for now. It’s uncommon in modern codebases, and its rules don’t play a larger role in the language — or in our mental model. If you are curious, check out how it works, but don’t feel pressured to memorize it.

### 4. Vanilla JS Runtime (ASI, Hoisting, Lexical Scoping)

*_move to next week_
