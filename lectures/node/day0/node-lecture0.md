# Week 1 Lecture - C136

Learnign goals for week 1 => Familiarize ourselves with node.js while refreshign parts of vanilla JS that will help us move into writing our own servers and RESTful API's with express.js by the end of the week.

## Agenda

    1) Introductions
    2) Class Overview & Lecture Note Walkthrough
    3) Problem Solving Process*
    4) How To Ask a "Good" Question
    5) Vanilla JS Refresh
    6) Node.js => Node Patterns and Modularization

### 1. Introductions

### 2. Class Overview & Lecture Note Walkthrough

[lecture-notes-repo](https://github.com/The-Software-Guild/mthree-c136-0821-lectures)

### 3. Problem Solving Process

Starting and maintaining a good problem solving process is a **vital** skill as a programmer. This is especially important for students and soon to be junior level devs.

The key here is to find something that works for you and stick to it no matter what. As the idium goes, "3 hours of planning can save you 3 days of headaches."

#### Example) The 20 min rule

Conceptually we never want to be stuck on a given problem for more than 20 minutes. Let's take a look at that practically.

1) Given any problem or task the first step will always be to map out your direction, idea, data strucure & flow, components, local & global state, folder structure, required modules, ...etc. This can be quick but is vital to our process. Should be done with psedo code and some form or drawings or wireframing.

2) Code out the scaffold of your project and start working on your tasks, constantly testing or reffering to the unit tests provided to you. Important to do this as you develop (Test Driven Development) not once you complete hours of coding.

3) When stuck try different solutions for no more than 20 mins in your IDE. DO NOT use destructive code — meaning comment out old code not deleting it in lie of copy pasting new code from the internet. Creating this breadcrumb of ideas 99% of the time will lead you to your answer before moving forward.  _show example_

4) Take a break! This can mean any number of things I usually suggest to go work on other code. Something that is "easy" or "easily" completed in your project. Often times writing sucessfull code can get your brain flowing again. Or go for a walk, do some pushups, find your peace, take the dog out — whatever works for you.

5) Try again for 20 minutes. You should not have went through stack overflow or anythign yet if you are goign to use outside materials it should be from your notes or the **documentation** for whatever you are using. I know often your answer can be found easily on SO but at your level I think it will help you immensely to try and figure it out without that help. Leading to a stronger knwledge base will make your interview process easier and ultimately add more value to the first company you go to work for.

6) Leave comments **everywhere**. If you are not, start immediately and do not stop. This is important for your own sanity but also good practice for when you join a team. Think of facebooks codebase and 100,000 some developers globally. Imagine looking at some code and trying to figure out a bug or what the problem is with no test files or comments. Write comments everywere. Full stop. This will also differenite your code from other juniors as you move into the interview process.

7) If you can not figure it out yet now head online in this order — documentation, blogs/vids/articles, stack overflow. When using google for these look for **recent** posts.

8) If you are still stuck you need to ask somebody for help. Utilize your networks. Start thinking about the fact you will not have these networks soon and begin thinking about how to create your own moving forward. Twitter, dischords, slack channels, meetups.

### 4. How To Ask a "Good" Question

Asking a good question is not only for yourself but helps the person helping you quickly and efficently figure out what in the hell is going on in your jumbled mess of a project and how to help you through it. At first this will be your support system at BU, next most likely stack overflow, and lastly your mentor or senior level devs. The very first thing your senior dev will ask you will be did you google it.

#### Contents of a "good" question

1) Code snippets of every file involved. If full stack MERN this could be 5-10 ... all labeled on the top with a comment of the name of the file. Including the commented out code of your "tries."

2) A description of the problem you are trying to solve, or what you are tryign to accomplish. Think — how do I do x ..... tell us what x is.

3) What you specifically have done to try and solve this problem.

4) What error you are getting and any associated screenshot of that error.

### 5. Vanilla JS Refresh

Lousely typed dynamic scripting language.

[syntax](https://github.com/airbnb/javascript)

    nouns & verbs

#### **Values**

_Primitive Values_

- Numbers
- Strings
- Booleans, used for logical operations.

- Undefined, used for unintentionally missing values.
- Null, used for intentionally missing values.

- BigInt
- Symbolk, used to hide implementation details.

**Primitive values are immutable (unchangeable/read only)!**

_Objects and Functions_

- Objects ({} and others), used to group related data and code.
- Functions (x => x * 2 and others), used to refer to code.

Functions in JS are explicitly returned. JS has 1st class functions, which means:

1) Store fx's as values

2) Pass around fx's as arguments

3) Fx's can be returned from other fx's

Function Invocation

1) FX Style

2) Method Style

3) Constructor Style

**No Other Types**

#### **Expressions**

Expressions are questions that JavaScript can answer. JavaScript answers expressions in the only way it knows how — with values.

If we “ask” the expression 2 + 2, JavaScript will “answer” with the value 4.

```Javascript
console.log(2 + 2); // 4
```

If the word “expression” confuses you, think of it as a piece of code that expresses a value. You might hear people say that 2 + 2 “results in” or “evaluates to” 4. These are all different ways to say the same thing.

We ask JavaScript 2 + 2, and it answers with 4. **Expressions always result in a single value**.

#### **Variables**

Variables are not values.

Variables point to values.

_Declaratios & Assignment_

_Var vs. Let vs. Const_

### 6. Node.js => Node Patterns and Modularization

Node is a server side JS runtime env ... allowing use of JS on computer not in browser (v8 engine = chrome)

#### 3 Types of Modules

1) External/3rd Party - installed via NPM
2) Node Core Modules - intentially minimal built in (no need to install). Includes path, fs, OS, util, and more.
3) File Based - within our own application, using a pattern of module.exports and require.

Similar to es6 import/export.

[More on Node Module Patterns](https://coursework.vschool.io/node-module-patterns/)
