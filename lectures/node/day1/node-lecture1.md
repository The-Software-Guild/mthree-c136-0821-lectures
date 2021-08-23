# Week 1 Lecture - C136 Day1

Learnign goals for week-1-day-1 => 

## Agenda

    1) Day 0 Recap
    2) DOM Overview
    3) Vanilla JS Call Stack
    4) Callbacks, Closures, & the Node Event Loop

### 1. Day 0 Recap

### 4. Callbacks, Closure, & The Node Event Loop

What is a cb?

Why do we use or need them?

What is closure?

The node event loop enables Node’s non-blocking asynchronous I/O model,which is the key to Node’s ability to scale under load. This is accomplished even though Javascript is single-threaded.

It accomplishes this by handing off expensive I/O operations to the multi-threaded system kernel to complete without blocking Node's single threaded operations.

Then the kernel lets Node know when an operation is completed, and Node uses callbacks and the event loop to pick up where it left off

#### Six phases of the node event loop

    1) Timer*
    2) Pending Callbacks
    3) Idle, Prepare
    4) Poll*
    5) Check*
    6) Close Callbacks

*Typically only the Timer, Poll, and Check phases will be relevant to a Node developer – the rest are handled by Node in the background.

**Timer phase: Handles callbacks from setTimeout() and setInterval()

**Poll phase: Processes I/O callbacks in a queue, waits for more callbacks  

**Check phase: Handles callbacks from setImmediate() which are run as soon as poll phase's callbacks queue is empty

#### Javascript Functions Review

* First-Class Functions

    A programming language has "first-class functions" when it supports treating functions like any other variable – JavaScript has first-class functions

    With first-class functions, functions can be assigned to variables, passed around as arguments to other functions, used as the return value of another function.

* Higher-Order Function

    A function that takes another function as an argument, or returns a function as its return value.

* Callback Function

    A function that is passed to another function as an argument which is then run (called back)inside that function, often asynchronously.

Different ways to envoke JS fx's ???

1)
2)
3)

**

#### Node Callback Pattern & Error Callback Convention

*see images folder*

More on cb's, closure, and the node event loop.

[I/O-bound vs CPU-bound in Node.js](https://bytearcher.com/articles/io-vs-cpu-bound/)

[NodeJS - The Node.js Event Loop](https://nodejs.org/fa/docs/guides/event-loop-timers-and-nexttick/)

[IBM Developer - Learn Node.js - The Event Loop](https://developer.ibm.com/tutorials/learn-nodejs-the-event-loop/)

[Codeburst.io - What the Heck is a Callback?](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)

[MDN - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

[Closure & Lexical Scope](https://dev.to/stephencweiss/closure-lexical-scope-12f4)