# Week 2 Lecture - C136 Day0

Learnign goals for react-day0 => We depart from the introductory portion of the course, making way for a more structured and consistent remainder. Our goal is 2.5 hrs of lecture with a hard stop — picking up where we left off, if needed, the following morning. This week's focus is React.js while filling in the final pieces of vanilla JS we need to be sucessfull front-end developers. We begin the week by reviewing BigO notation and covering a concept known as recursion. We end the week by using React to consume the API's we have been building in the previous week with Node & Express.

## Agenda

    1) End of Week 1 Refresh - BigO
    2) Recursion
    3) Vanilla JS DOM Review
    4) Constructor Functions & Classes
    5) Introduction to React.js

### 1. BigO

When we consider the complexity of an algorithm, we shouldn’t really care about the exact number of operations that are performed; instead, **we should care about how the number of operations relates to the problem size.**

In computer programming, as in other aspects of life, there are different ways of solving a problem. These different ways may imply different times, computational power, or any other metric you choose, so we need to compare the efficiency of different approaches to pick up the right one.

Think about it: if the problem size doubles, does the number of operations stay the same? Do they double? Do they increase in some other way? To answer these questions, we need to measure the time complexity of algorithms.

**Time complexity represents the number of times a statement is executed.** The time complexity of an algorithm is NOT the actual time required to execute a particular code, since that depends on other factors like programming language, operating software, processing power, etc. The idea behind time complexity is that it can measure only the execution time of the algorithm in a way that depends only on the algorithm itself and its input.

To express the time complexity of an algorithm, we use something called the “Big O notation”. **The Big O notation is a language we use to describe the time complexity of an algorithm.** It’s how we compare the efficiency of different approaches to a problem, and helps us to make decisions.

**Big O notation expresses the run time of an algorithm in terms of how quickly it grows relative to the input (this input is called “n”).** This way, if we say for example that the run time of an algorithm grows “on the order of the size of the input”, we would state that as “O(n)”. If we say that the run time of an algorithm grows “on the order of the square of the size of the input”, we would express it as “O(n²)”. But what does that mean exactly?

The key to understanding time complexity is understanding the rates at which things can grow. The rate in question here is time taken per input size. There are different types of time complexities, so let’s check the most basic ones.

### 2. Recursion

_*see-assets_

     "To first understand recursion you must first understand recursion"

Recursion is a method of program design where you break apart a problem into smaller repeatable subtasks. The program will complete each subtask later combined to achieve a solution.

The primary feature that defines recursion is that a recursive function calls itself, either directly or indirectly during execution. The call usually comes at the end of another operation using the passed data, a practice called **tail recursion**. This results in a looping structure that repeats the operation until an exit condition is met.

Each pass through this loop brings the program closer to its desired state or solution, which is known as the **base case**. Once this base case is reached, the method will no longer loop back into its recursive step. Instead, the program will end.

#### **Base Case**

The base case (or base condition) is the state where the program’s solution has been reached. An achievable base case is essential to avoid an infinite loop. Recursive methods are built with two paths: the method first checks if the base state has been reached, if yes, the method ends and returns the current data, if not the method instead goes the other path and executes the recursive case, altering the input and calling the method again.

     I like to think of and test/implement my base case first so as to "always" break out of the recurssive loop. Then we can handle the tail section.

#### **Call Stack**

The call stack is an integrated, hidden data structure within all modern programing languages. By storing active subroutines in a stack structure, the program is able to execute subroutines in the order they were received.

Each recursive call in a program causes a nesting effect in the call stack, adding more subroutines that must be finished before the stack is empty.

Broadly speaking, the larger the call stack, the more memory and time that is needed for the program to run (more on this later!).

     Recursive solutions are sensitive to errors. A recursive solution can easily have either an unreachable base case or with a recursive step which does not correctly progress toward the base case. Both of these errors cause a stack overflow error, meaning that the recursive call resulted in an infinite loop and was therefore terminated.

#### **Tail Recursion**

Tail recursion is when the recursive call for the next cycle is the final statement in a method.

Tail end recursion is considered good practice whenever possible because it is easier to follow from a reader’s perspective and it can be optimized by modern compilers.

Compilers can recognize that a tail ended method has completed all the operations within that call. Since all the work is complete, the program doesn’t need to store the instance of that call, known as the call frame.

Modern compilers automatically recognize this and therefore perform tail call elimination, which eliminates all completed methods from the call stack.

Compiler’s use tail call elimination to simplify program execution and free up memory. The program stores the currently executed call frame.

Though right now we’ve only mentioned direct recursive calls, there are actually three ways to implement a recursive call – Direct, Indirect, and Anonymous.

#### **Types of recursion**

- Structural vs. Generative

- Direct, Indirect, and Anonymous Recursion

*_so.js_
*_nth.js_

### 3. Vanilla JS DOM Review

#### **The Document Object**

*_main.js_

#### **Intro To The DOM**

The DOM (Document Object Model) is a object that represents the HTML and CSS of a web page. The DOM allows us to use JavaScript to interface with what the user sees.

There are a few ways to select elements from the DOM.

    document.getElementById()

    document.getElementsByClassName()

    document.querySelector()

Notice the "s" on elements in getElementsByClassName. **Any DOM method with the plural elements will return an array.** You are able to loop over each element, or select an individual element with bracket notation.

    document.createElement() takes a string of the tag name you want to create. It then returns the element.

The most common way to append this to the DOM is to first select the parent, and call it's .appendChild.

You may be asking why we wouldn't just write this in our HTML.

JavaScript helps us dynamically render our apps. We'll be using JavaScript to get us dynamic data, and then change how the webpage looks depending.

If a user wanted to take things from a list, or add to a list, we would use JavaScript to control that.

Much of your DOM manipulation will happen after the user does something. To make the user able to change what they see, you'll need to learn to use [event listeners](https://coursework.vschool.io/event-listeners/)

### 4. Constructor Functions & Classes

Sometimes we need a "blueprint" for creating many objects of the same "type".

The way to create an "object type", is to use an object constructor function.

Objects of the same type are created by calling the constructor function with the new keyword:

```javascript
const myFather = new Person("John", "Doe", 50, "blue");

const myMother = new Person("Sally", "Rally", 48, "green");
```

#### **The this Keyword**

In JavaScript, the thing called _**this**_ is the object that "owns" the code.

The value of _**this**_, when used in an object, is the object itself.

In a constructor function _**this**_ does not have a value. It is a substitute for the new object. The value of _**this**_ will become the new object when a new object is created.

#### **Built-in JavaScript Constructors**

#### **Classes**

Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.

One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class ("Rectangle" here).

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

An important difference between function declarations and class declarations is that **function declarations are hoisted and class declarations are not**. You first need to declare your class and then access it

#### **Strict Mode**

The body of a class is executed in strict mode, i.e., code written here is subject to stricter syntax for increased performance, some otherwise silent errors will be thrown, and certain keywords are reserved for future versions of ECMAScript.

##### **constructor()**

The constructor method is a special method of a class for creating and initializing an object of that class.

    A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.

If you don't provide your own constructor, then a default constructor will be supplied for you. If your class is a base class, the default constructor is empty:

```Javascript
constructor()
```

If your class is a derived class, the default constructor calls the parent constructor, passing along any arguments that were provided:

```Javascript
constructor(...args) {
    super(...args)
}
```

- args for us are what we use to pass information between components ... aka props!

There can be only one special method with the name "constructor" in a class. Having more than one occurrence of a constructor method in a class will throw a SyntaxError error.

    A constructor can use the super keyword to call the constructor of the super class.

#### **Static Methods & Properties**

The static keyword defines a static method or property for a class. Static members (properties and methods) are called without instantiating their class and cannot be called through a class instance. Static methods are often used to create utility functions for an application, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

### 5. Introduction to React.js

REACT DEV TOOLS -> has everyone installed it? If not lets do that now

React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code **more predictable** and easier to debug.

React is component-based, meaning you can build **encapsulated** components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

- Setup

CRA and how everything is connected with ReactDom.render()

- Components

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

    2 types:

    1. Functional
    2. Class

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

- Props

When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.

**Props are Read-Only**

Whether you declare a component as a function or a class, it must never modify its own props.

    Functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs.

React is pretty flexible but it has a single strict rule:

_**All React components must act like pure functions with respect to their props.**_

#### **State**

State is similar to props, but it is private and fully controlled by the component.

In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().

    Internal state alows for true encapsulation and reusability.

#### **Do Not Modify State Directly**

- Instead, use setState()

- The only place where you can assign this.state is the constructor.

- State Updates May Be Asynchronous

*React may batch multiple setState() calls into a single update for performance. Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.

#### **A Simple Component**

React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.

#### **A Stateful Component**

In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().

In order to gain access to state or a components lifecycle method we must convert our functional component into a class. (you should always be writing components functional, until you need state or a lifecycle method and then convert it)

_example.see_assets_

#### **Events**

Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:

- React events are named using camelCase, rather than lowercase.

- With JSX you pass a function as the event handler, rather than a string.

- You cannot return false to prevent default behavior in React. You must call preventDefault explicitly

- You generally don’t need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.

- When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class.

#### **This**

You have to be careful about the meaning of _this_ in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.

This is not React-specific behavior; it is a part of how functions work in JavaScript. Generally, **if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method.**

If calling bind annoys you, there are two ways you can get around this. If you are using the experimental public class fields syntax, you can use class fields to correctly bind callbacks.

```Javascript
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```

*This syntax is enabled by default in Create React App.

If you aren’t using class fields syntax, you can use an arrow function in the callback:

```Javascript
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}
```

The problem with this syntax is that a different callback is created each time the LoggingButton renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem.

**_show binding of this in constructor_**
