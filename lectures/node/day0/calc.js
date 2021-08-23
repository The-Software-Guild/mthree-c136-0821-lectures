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
    anotherFx: anotherFunction,
    whatever: 'string of whatever',
    numnum: 4,
    bool: false
} /// 









// literals
// 3
// true
// ''
// {}
// obj's in JS pair similar detailed information about one thing

// {
//     key: value
// }

// const instructor = {
//     name: 6,
//     location: 'brooklyn'
// }

// console.log(instructor.name) // patrick


// module.exports = {
//     key: value
// }