# C136 Interview Prep Day1

Learnign goals => We begin our review of javascript by exploring a few different ways to call functions that expose themselves to more advanced functional programming design paradaigms.

## Agenda

    1) Day 0 Recap
    2) Call
    3) Apply
    4) Bind
    5) Currying

### 1. Day 0 Recap

- Online Presence
- Pacing
- Tracking & Feedback
- Preperation
- Self Awareness
- Tracking & Feedback
- Professionalism
- intention

#### **"this" refresher**

Throughout our exploration of Object Oriented JS we learned that in JS, everything is an object. _Because everything is an object_, we came to understand that we could set and access additional properties to functions.

Setting properties to a function and additional methods via the prototype is super awesome … but how do we access them?!??!

We were introduced to the `this` keyword. We learned that every function gets this property automatically. If we were to create a mental model of our function execution context it would look something like this:

![js-this-fx-execution-context](https://i.ibb.co/QNBHbP7/this-fx-execution-context.png)

It took us a little while to get comfortable with the `this` keyword, but once we did we began to realize how useful it is. `this` is used inside a function, and will always refer to a single object — **the object that invokes (calls) the function where “this” is used**.

But life isn’t perfect. Sometimes, we lose our `this` reference. When that happens, we end up using confusing hacks to save our reference to `this`.

### 2. bind()

Up until now we have treated functions as objects that are composed of a name (optional, can also be an anonymous function) and the code it executes when it is invoked. But that isn’t the entire truth. A function actually looks closer to the following image:

![js-this-fx-execution-context](https://i.ibb.co/j8zCQw5/call-apply-bind.png)

    The bind() method creates a new function that, when called, has its this keyword set to the provided value.

### 3. call() & apply()

The `call()` method calls a function with a given `this` value and arguments provided individually. What that means, is that we can call any function, and explicitly specify what `this` should reference within the calling function.

    call() is really similar to the bind() method

This can definitely save us from writing hacky code (even though we are all still hackerzzz).
The main differences between bind() and call() is that the call() method:
Accepts additional parameters as well
Executes the function it was called upon right away.
The call() method does not make a copy of the function it is being called on.
call() and apply() serve the exact same purpose. The only difference between how they work is that call() expects all parameters to be passed in individually, whereas apply() expects an array of all of our parameters.

### 5. Currying
