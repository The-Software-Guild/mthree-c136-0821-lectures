# Week 4 Lecture - C136 GQL Day0

Learnign goals => Today we touch on Token Based Authentication and React Context. We will spend the majority of our day in code reviews from the assessment, practicing authentication using JWT's, and fillin in any knowledge gaps from the past weeks. The rest of the week will focus on GraphQl & Apollo.

## Agenda

    1) Auth Basics
    2) React Context API

### 1. Auth Basics

Authentication is the process of allowing a user of your application to create an account, sign in, have specific user permissions, get data that only concerns them as a user, etc. Authentication includes a **security** concern (we don't want people to be able to see or manipulate each other's data) as well as a **usability** concern (a todo app that doesn't let me have my own todo list is pretty pointless, unless I'm the only user of the application).

There are three main different authentication types you really need to concern yourself with - 1) Session/cookie-based auth, 2) Token-based auth, and 3) OAuth. We will be focusing mainly on token-based authentication for now. I I will be skipping over session-based authentication for now because it is generally considered to be inferior to token-based authentication these days. That being said, it is still worth researching on your own because there are TONS of applications that are still using session-based auth, so as a programmer in the field, you may find yourself in a position to need to deal with it.

#### **Understanding Token-based Auth**

Token-authentication is conceptually pretty easy to understand. A user fills in a login form containing, typically, a username and password which is then sent to the server for checking. The server looks up a user with the given username in the database and checks if the password is correct. If not, it returns an authentication error telling the person they put in the wrong username and/or password.

Otherwise, if everything checks out, the server creates a **token**, which is just a long string of seemingly-random text that gets sent back to the user. This token is like an access card to a building - that user now has a certain level of privilege to move about the app accessing certain data, making changes to the data, accessing certain parts of the website, etc. Oftentimes we save this token in sessionStorage or localStorage for easy access by the client app.

Every single time the client app makes an HTTP request to the server, it sends that token along with it. And with every protected resource on the server (any API endpoint that requires special access rights, like that of a logged-in user), the server checks the token that it received from the client to make sure this user is authorized to access this content. If so, it returns the requested content. Otherwise it sends some kind of authorization error indicating that the user isn't authorized to see that information.

In order to log a user out, you simply need to remove the token from wherever you saved it (session or local storage) and it stops being sent with every request, meaning the server stops giving the user access to the protected data. This is akin to taking away the access card from the employee of a building until they come in the next time and prove again they're allowed to be there.

Here are some great resources for better understanding how token-based authentication works, and specifically how JSON Web Tokens (a.k.a JWTs, pronounced "jots") work.

* [The Ins and Outs of Token-based auth](https://scotch.io/tutorials/the-ins-and-outs-of-token-based-authentication)

* [Getting to know JSON Web Tokens](https://scotch.io/tutorials/the-anatomy-of-a-json-web-token)

* [Tutorial on authenticating a Node.js app with JWTs](https://scotch.io/tutorials/authenticate-a-node-es6-api-with-json-web-tokens)

### 2. Context

[React Context](https://reactjs.org/docs/context.html) provides a way to pass data through the component tree without having to pass props down manually at every level.

    In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.

Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.

**If you only want to avoid passing some props through many levels, [component composition](https://reactjs.org/docs/composition-vs-inheritance.html) is often a simpler solution than context.**
