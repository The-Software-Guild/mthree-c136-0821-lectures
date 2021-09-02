# Week 2 Lecture - C136 Day2

Learnign goals for react-day2 => We will be covering some inredibly important high level conecpts that are the basis for all of react. Ultimately allowing for us to start pushing into more advanced design paradaigms and transition away from beginner react developers.

## Agenda

    1) react-day1-review
    2) Composition vs. Inheritance
    3) Lifecycle Methods
    4) Hooks

### 1. react-day1-review

- Introduction to React.js
- Event Handling
- Routing
- Unit Tests With Jest & Enzyme

#### Events

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

^This syntax is enabled by default in Create React App.

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

**_*show binding of this in constructor_**

#### Routing

Components are the heart of React's powerful, declarative programming model. [React Router](https://reactrouter.com/) is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native.

#### Unit Testing with Jest & Enzyme

As your codebase expands, small errors and edge cases you don’t expect can cascade into larger failures. Bugs lead to bad user experience and ultimately, business losses. One way to prevent fragile programming is to test your code before releasing it into the wild.

In this guide, we will cover different, automated ways to ensure your app works as expected, ranging from static analysis to end-to-end tests.

We're humans, and humans make mistakes. Testing is important because it helps you uncover these mistakes and verifies that your code is working. Perhaps even more importantly, testing ensures that your code continues to work in the future as you add new features, refactor the existing ones, or upgrade major dependencies of your project.

There is more value in testing than you might realize. One of the best ways to fix a bug in your code is to write a failing test that exposes it. Then when you fix the bug and re-run the test, if it passes it means the bug is fixed, never reintroduced into the code base.

Tests can also serve as **documentation** for new people joining your team. For people who have never seen a codebase before, reading tests can help them understand how the existing code works.

Last but not least, more automated testing means less time spent with manual QA, freeing up valuable time.

##### **Static Analysis**

The first step to improve your code quality is to start using static analysis tools. Static analysis checks your code for errors as you write it, but without running any of that code.

Linters analyze code to catch common errors such as unused code and to help avoid pitfalls, to flag style guide no-nos like using tabs instead of spaces (or vice versa, depending on your configuration).

Type checking ensures that the construct you’re passing to a function matches what the function was designed to accept, preventing passing a string to a counting function that expects a number, for instance.

##### **Writing Testable Code**

To start with tests, you first need to write code that is testable. Consider an aircraft manufacturing process - before any model first takes off to show that all of its complex systems work well together, individual parts are tested to guarantee they are safe and function correctly. For example, wings are tested by bending them under extreme load; engine parts are tested for their durability; the windshield is tested against simulated bird impact.

Software is similar. Instead of writing your entire program in one huge file with many lines of code, you write your code in multiple small modules that you can test more thoroughly than if you tested the assembled whole. In this way, writing testable code is intertwined with writing clean, modular code.

To make your app more testable, start by separating the view part of your app—your React components—from your business logic and app state (regardless of whether you use Redux, MobX or other solutions). This way, you can keep your business logic testing—which shouldn’t rely on your React components—independent of the components themselves, whose job is primarily rendering your app’s UI!

Theoretically, you could go so far as to move all logic and data fetching out of your components. This way your components would be solely dedicated to rendering. Your state would be entirely independent of your components. Your app’s logic would work without any React components at all!

You can test React components similar to testing other JavaScript code.

There are a few ways to [test React components](https://reactjs.org/docs/testing.html). Broadly, they divide into two categories:

- Rendering component trees in a simplified test environment and asserting on their output.

- Running a complete app in a realistic browser environment (also known as “end-to-end” tests).

##### **Structuring Tests**

Your tests should be short and ideally test only one thing. Let's start with an example unit test written with Jest:

```javascript
it('given a date in the past, colorForDueDate() returns red', () => {
  expect(colorForDueDate('2000-10-20')).toBe('red');
});
```

The test is described by the string passed to the it function. Take good care writing the description so that it’s clear what is being tested. Do your best to cover the following:

Given - some precondition
When - some action executed by the function that you’re testing
Then - the expected outcome
This is also known as AAA (Arrange, Act, Assert).

Jest offers describe function to help structure your tests. Use describe to group together all tests that belong to one functionality. Describes can be nested, if you need that. Other functions you'll commonly use are beforeEach or beforeAll that you can use for setting up the objects you're testing. Read more in the Jest api reference.

If your test has many steps or many expectations, you probably want to split it into multiple smaller ones. Also, ensure that your tests are completely independent of one another. Each test in your suite must be executable on its own without first running some other test. Conversely, if you run all your tests together, the first test must not influence the output of the second one.

Lastly, as developers we like when our code works great and doesn't crash. With tests, this is often the opposite. Think of a failed test as of a good thing! When a test fails, it often means something is not right. This gives you an opportunity to fix the problem before it impacts the users.

##### **Unit tests**

Unit tests cover the smallest parts of code, like individual functions or classes.

When the object being tested has any dependencies, you’ll often need to mock them out, as described in the next paragraph.

The great thing about unit tests is that they are quick to write and run. Therefore, as you work, you get fast feedback about whether your tests are passing. Jest even has an option to continuously run tests that are related to code you’re editing: Watch mode.

##### **Mocking & Integration Tests ?**?

### 2. Composition vs. Inheritance

React has a powerful composition model, and they recommend using composition instead of inheritance to reuse code between components.

**So What About Inheritance?**

At Facebook, they use React in thousands of components, and haven’t found any use cases where they would recommend creating component inheritance hierarchies.

Props and composition give you all the flexibility you need to customize a component’s look and behavior in an explicit and safe way. Remember that components may accept arbitrary props, including primitive values, React elements, or functions.

If you want to reuse non-UI functionality between components, they suggest extracting it into a separate JavaScript module. The components may import it and use that function, object, or a class, without extending it.

    The above paragraph is a perfect example of Encapsulation & Abstraction, can you name the other two pillars of OOP (Object Oriented Programming)

#### **Containment**

Some components don’t know their children ahead of time. This is especially common for components like Sidebar or Dialog that represent generic “boxes”.

We recommend that such components use the special children prop to pass children elements directly into their output:

```javascript
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}
```

This lets other components pass arbitrary children to them by nesting the JSX:

```javascript
function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}
```

Anything inside the ```FancyBorder``` JSX tag gets passed into the FancyBorder component as a children prop. Since FancyBorder renders {props.children} inside a ```div```, the passed elements appear in the final output.

While this is less common, sometimes you might need multiple “holes” in a component. In such cases you may come up with your own convention instead of using children:

```javascript
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}
```

React elements like ```Contacts``` and ```Chat`` are just objects, so you can pass them as props like any other data. This approach may remind you of “slots” in other libraries but there are no limitations on what you can pass as props in React.

#### **Specialization**

Sometimes we think about components as being “special cases” of other components. For example, we might say that a WelcomeDialog is a special case of Dialog.

In React, this is also achieved by composition, where a more “specific” component renders a more “generic” one and configures it with props:

```javascript
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}
```

Composition works equally well for components defined as classes:

```javascript
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}
```

### 3. Lifecycle Methods

In applications with many components, it’s very important to free up resources taken by the components when they are destroyed.

We can declare special methods on the component class to run some code when a component mounts and unmounts.

These methods are called _“lifecycle methods”_.

The ```componentDidMount()``` method runs after the component output has been rendered to the DOM. While ```componentWillUnmount()``` should be used for cleanup of things as the component unmounts.

#### **Using State Correctly**

There are three things you should know about ```setState()```.

1. **Do not modify state directly**, instead use ```setState()```. The only place where you can assign this.state is the constructor.

2. **State updates may be asynchronous.** React may batch multiple setState() calls into a single update for performance. Because ```this.props``` and ```this.state``` may be updated asynchronously, you should not rely on their values for calculating the next state.

3. **State updates are merged**
When you call ```setState()```, React merges the object you provide into the current state.

#### **The Data Flows Down**

Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn’t care whether it is defined as a function or a class.

This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.

A component may choose to pass its state down as props to its child components:

```javascript
<FormattedDate date={this.state.date} />
```

This is commonly called a _“top-down”_ or _“unidirectional”_ data flow. Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree.

If you imagine a component tree as a waterfall of props, each component’s state is like an additional water source that joins it at an arbitrary point but also flows down.

### 4. Hooks

[Hooks are a new addition in React 16.8](https://www.youtube.com/watch?v=dpw9EHDh2bM). They let you use state and other React features without writing a class.

**No Breaking Changes**

Before we continue, note that Hooks are:

- **Completely opt-in.** You can try Hooks in a few components without rewriting any existing code. But you don’t have to learn or use Hooks right now if you don’t want to.

- **100% backwards-compatible.** Hooks don’t contain any breaking changes.

- **Available now.** Hooks are now available with the release of v16.8.0.

- **There are no plans to remove classes from React.** You can read more about the gradual adoption strategy for Hooks in the bottom section of this page.

**Hooks don’t replace your knowledge of React concepts.** Instead, Hooks provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle — hooks also offer a new powerful way to combine them.
