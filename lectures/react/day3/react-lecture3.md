# Week 2 Lecture - C136 Day3

Learnign goals for react-day3 => 

## Agenda

    1) react-day2-review
    2) Hooks
    3) CRUD w/ React
    4) Consuming API’s with Axios

### 1. react-day2-review

- Composition vs. Inheritance
- Lifecycle Methods
- Hooks

### 2. Hooks

[Hooks are a new addition in React 16.8](https://www.youtube.com/watch?v=dpw9EHDh2bM). They let you use state and other React features without writing a class.

**No Breaking Changes**

Before we continue, note that Hooks are:

- **Completely opt-in.** You can try Hooks in a few components without rewriting any existing code. But you don’t have to learn or use Hooks right now if you don’t want to.

- **100% backwards-compatible.** Hooks don’t contain any breaking changes.

- **Available now.** Hooks are now available with the release of v16.8.0.

- **There are no plans to remove classes from React.** You can read more about the gradual adoption strategy for Hooks in the bottom section of this page.

**Hooks don’t replace your knowledge of React concepts.** Instead, Hooks provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle — hooks also offer a new powerful way to combine them.

#### **Motivation**

Hooks solve a wide variety of seemingly unconnected problems in React that we’ve encountered over five years of writing and maintaining tens of thousands of components. Whether you’re learning React, use it daily, or even prefer a different library with a similar component model, you might recognize some of these problems.

##### **It’s hard to reuse stateful logic between components**

React doesn’t offer a way to “attach” reusable behavior to a component (for example, connecting it to a store). If you’ve worked with React for a while, you may be familiar with patterns like render props and higher-order components that try to solve this. But these patterns require you to restructure your components when you use them, which can be cumbersome and make code harder to follow. If you look at a typical React application in React DevTools, you will likely find a “wrapper hell” of components surrounded by layers of providers, consumers, higher-order components, render props, and other abstractions. While we could filter them out in DevTools, this points to a deeper underlying problem: React needs a better primitive for sharing stateful logic.

With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. **Hooks allow you to reuse stateful logic without changing your component hierarchy.** This makes it easy to share Hooks among many components or with the community.

##### **Complex components become hard to understand**

We’ve often had to maintain components that started out simple but grew into an unmanageable mess of stateful logic and side effects. Each lifecycle method often contains a mix of unrelated logic. For example, components might perform some data fetching in ```componentDidMount``` and ```componentDidUpdate```. However, the same ```componentDidMount``` method might also contain some unrelated logic that sets up event listeners, with cleanup performed in ```componentWillUnmount```. Mutually related code that changes together gets split apart, but completely unrelated code ends up combined in a single method. This makes it too easy to introduce bugs and inconsistencies.

In many cases it’s not possible to break these components into smaller ones because the stateful logic is all over the place. It’s also difficult to test them. This is one of the reasons many people prefer to combine React with a separate state management library. However, that often introduces too much abstraction, requires you to jump between different files, and makes reusing components more difficult.

To solve this, **Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data)**, rather than forcing a split based on lifecycle methods. You may also opt into managing the component’s local state with a reducer to make it more predictable.

##### **Classes confuse both people and machines**

In addition to making code reuse and code organization more difficult, we’ve found that classes can be a large barrier to learning React. You have to understand how ```this``` works in JavaScript, which is very different from how it works in most languages. You have to remember to bind the event handlers. Without unstable syntax proposals, the code is very verbose. People can understand props, state, and top-down data flow perfectly well but still struggle with classes. The distinction between function and class components in React and when to use each one leads to disagreements even between experienced React developers.

Additionally, React has been out for about five years, and we want to make sure it stays relevant in the next five years. As Svelte, Angular, Glimmer, and others show, ahead-of-time compilation of components has a lot of future potential. Especially if it’s not limited to templates. Recently, we’ve been experimenting with component folding using Prepack, and we’ve seen promising early results. However, we found that class components can encourage unintentional patterns that make these optimizations fall back to a slower path. Classes present issues for today’s tools, too. For example, classes don’t minify very well, and they make hot reloading flaky and unreliable. We want to present an API that makes it more likely for code to stay on the optimizable path.

To solve these problems, **Hooks let you use more of React’s features without classes**. Conceptually, React components have always been closer to functions. Hooks embrace functions, but without sacrificing the practical spirit of React. Hooks provide access to imperative escape hatches and don’t require you to learn complex functional or reactive programming techniques.

### 2. CRUD w/ React

***_see videos_**

### 3. Consuming API’s with Axios

[Axios](https://www.npmjs.com/package/axios) is a JavaScript library that helps us make AJAX calls to APIs.

We will being using to make requests for data in the form of JSON.

#### **AJAX**

AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

Asynchronously means that it's happening at the same time as your app is loading or doing other tasks.

The steps an AJAX call makes are the following:

1. An event occurs in a web page (the page is loaded, a button is clicked)

2. An XMLHttpRequest object is created by JavaScript

3. The XMLHttpRequest object sends a request to a web server

4. The server processes the request

5. The server sends a response back to the web page

6. The response is read by JavaScript

7. Proper action (like page update) is performed by JavaScript

Previously, there was a lot of code required to make these requests. Many library's created solutions to preform the common functions needed. jQuery had a ```.get()``` method, and a ```.ajax()``` method. We will learn how to use Axios and Axios's methods. Axios's whole job is to help us with these calls. It is what we will use in React. Angular has a $http service that does this same thing. If jQuery and Angular both have their own, why doesn't React?

In the creators words, _"In general we resist adding features that can be implemented in userland. We don't want to bloat your apps with useless library code."_

#### **APIs**

API is a very general term used to describe applications talking with each other. Within the context of this class, it will be servers communicating with our stuff.

For example, we can have our app ask for weather data from a weather API.

In the past, data was sent in XML (The X in AJAX). Modern web developers use JSON.

#### **JSON**

JSON is JavaScript Object Notation. It's pretty much a JavaScript object with a few key differences. Axios will take care of turning JSON in JavaScript for us. It's not too difficult because the two are structured the same.
