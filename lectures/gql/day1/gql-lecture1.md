# Week 4 Lecture - C136 GQL Day 1

Learnign goals => We will sped today diving into GraphQL & Apollo, slightly new deisgn paradaims for an already familiar data flow. We will keep today very high level so you can finish the authentication assignment from yesterday this afternoon. Later in the day/ tomorrow will be enough time for you to dive into the syntax so that you are ready for the assessment. As a reminder that assessment, number 4, will be given out this Tursdaya nd due by at least the end of day next Monday.

## Agenda

    1) Day 0 Recap
    2) Introduction to GraphQL
    3) Apollo

### 1. Day 0 Recap

- Auth Basics
- JSON Web Tokens (Jot)
- React Context API
- Redirects
- Hash & Salt

#### assessment

-async await

-promises, thenable

-explicit UI updates => end of req <-> res cycle

- more abstraction and component structure

### 2. Introduction to GraphQL

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

#### **Ask for what you need, get exactly that**

Send a GraphQL query to your API and get exactly what you need, nothing more and nothing less. GraphQL queries always return predictable results. Apps using GraphQL are fast and stable because they control the data they get, not the server.

#### **Get many resources in a single request**

GraphQL queries access not just the properties of one resource but also smoothly follow references between them. While typical REST APIs require loading from multiple URLs, GraphQL APIs get all the data your app needs in a single request. Apps using GraphQL can be quick even on slow mobile network connections.

#### **Describe what’s possible with a type system**

GraphQL APIs are organized in terms of types and fields, not endpoints. Access the full capabilities of your data from a single endpoint. GraphQL uses types to ensure Apps only ask for what’s possible and provide clear and helpful errors. Apps can use types to avoid writing manual parsing code.

#### **Evolve your API without versions**

Add new fields and types to your GraphQL API without impacting existing queries. Aging fields can be deprecated and hidden from tools. By using a single evolving version, GraphQL APIs give apps continuous access to new features and encourage cleaner, more maintainable server code.

#### **Bring your own data and code**

GraphQL creates a uniform API across your entire application without being limited by a specific storage engine. Write GraphQL APIs that leverage your existing data and code with GraphQL engines available in many languages. You provide functions for each field in the type system, and GraphQL calls them with optimal concurrency.

#### **Extras**

[graphiql](https://github.com/graphql/graphiql) = GraphiQL is the reference implementation of this monorepo, GraphQL IDE, an official project under the GraphQL Foundation. Whether you want a simple GraphiQL IDE instance for your server, or a more advanced web or desktop GraphQL IDE experience for your framework or plugin, or you want to build an IDE extension or plugin.

[Best Way to Learn](https://graphql.org/learn/)

### 3. Apollo

#### Server

https://github.com/apollographql/apollo-server

#### Client

https://github.com/apollographql/apollo-client
