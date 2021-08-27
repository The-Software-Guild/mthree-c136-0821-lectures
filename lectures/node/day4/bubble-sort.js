// bubble-sort.js

// numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21

const fib = (n) => {
     // Base case
     if (n === 0 || n === 1) return n;

     // Recursive step
     return fib(n - 1) + fib(n - 2);
}

const result = fib(6) 

console.log(result);




