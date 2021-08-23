// calc.js

// DRY => dont repeat yourself
// single source of truth

// require / module.exports
// import / export => es6
// syntactic sugar


// all functionality of calculator 
// use that functionality endlesslesy without writing more















function squaredFunction(num) {
    return num * num;
};

function anotherFunction() {
    let someVar = 'hello'
    someVar = 'some other thing'
    
    return someVar;
};


// module.exports = {
//     nameOfFunction: actualFuncion
// }
module.exports = {
    squaredFx: squaredFunction,
    squaredFx2: squaredFx2,
    whatever: 'string of whatever'
} /// 