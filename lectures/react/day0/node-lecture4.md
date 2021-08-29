# Week 2 Lecture - C136 Day0

Learnign goals for react-day0 => 2.5 hrs of lecture hard stop ... start tmrw morn with wherever we left off

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

### 3. Vanilla JS DOM Review

### 4. Constructor Functions & Classes

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

### 5. Lifescyle Methods *

In applications with many components, it’s very important to free up resources taken by the components when they are destroyed.

    We can declare special methods on the component class to run some code when a component mounts and unmounts. These methods are called “lifecycle methods”.
