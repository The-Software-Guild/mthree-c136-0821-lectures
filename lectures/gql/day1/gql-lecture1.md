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

-more abstraction and component structure

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

The best way to build a production-ready TypeScript GraphQL server that connects to any microservice, API, or database. Compatible with all popular JavaScript frameworks and deployable in serverless environments.

#### **Connect your services**

[Apollo Server](https://github.com/apollographql/apollo-server)

Apollo Server is an open-source, spec-compliant GraphQL server that's compatible with any GraphQL client, including Apollo Client. It's the best way to build a production-ready, self-documenting GraphQL API that can use data from any source.

You can use Apollo Server as:

- A stand-alone GraphQL server, including in a serverless environment

- An add-on to your application's existing Node.js middleware (such as Express or Fastify)

- A gateway for a federated data graph

Apollo Server provides:

- Straightforward setup, so your client developers can start fetching data quickly

- Incremental adoption, allowing you to add features as they're needed

- Universal compatibility with any data source, any build tool, and any GraphQL client

- Production readiness, enabling you to ship features faster

#### Client

Apollo Client is a way to consume a data graph. Apollo, as a company, gives you multiple libraries to this that are suited to wherever you’re building your app: web, ios, and android. Apollo Client is about binding your data to your UI with GraphQL.

The industry-standard open-source GraphQL client for web, iOS and Android apps with everything you need to fetch, cache, and modify application data.

#### **Connect your apps**

[Apollo Client](https://github.com/apollographql/apollo-client)

#### **Bind GraphQL data to your UI with one function call**

Help your team focus on what your product needs, not how to get it. Declare your data and Apollo Client will handle the rest. Never worry about caching, network status, or getting data into your UI ever again.

    Declarative data fetching

Write a query and receive data without manually tracking loading, error, or network states.

    Reactive data cache

Cut down on network traffic and keep data consistent throughout your application with Apollo Client’s normalized reactive data cache.

    Excellent dev experience

Enjoy cross stack type safety, runtime cache inspectors, and full featured editor integrations to keep you writing applications faster.

    Compatible and adoptable

Use any build setup and any GraphQL API. Drop Apollo Client into any app seamlessly without re-architecting your entire data strategy.

    Designed for modern UIs

Take advantage of modern UI architectures in the web, iOS, and Android ecosystems.

    Community driven

Share knowledge with thousands of developers, thanks to our active open source community.

#### **Cache Normalization**

Any library or framework can send a query to a GraphQL endpoint. Where Apollo Client shines is in its result caching. It uses a normalized cache to dramatically speed up the feel of your application. By reducing the number of network requests made to your GraphQL server, the cache improves the responsiveness of your application client while automatically keeping UI components up to date as new data is fetched.
