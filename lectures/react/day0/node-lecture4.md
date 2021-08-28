# Week 2 Lecture - C136 Day0

Learnign goals for react-day0 => 

## Agenda

    1) End of Week 1 Refresh - BigO
    2) Recursion
    3) Introduction to React.js

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

### 3. Introduction to React.js
