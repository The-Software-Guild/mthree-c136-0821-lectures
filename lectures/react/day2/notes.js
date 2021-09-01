// notes.js

// great way to see how event listeners work
// addEventLister('scroll', (e) => {
//   console.log(e)
// }) 

// listening enedlsy to events without cleaning them === memory leak

// e.prevtDefault()

// react components re-renders automatically when 3 things happen
// 1) if that component's state changes/updated
// 2) if that component's props are changed or in general passed down
// 3) If ANY of its parents' or higher up anchestors in a branch re-render

// you can force a rerender / force stop a component from renederings

//
// binding of this in constructor


// many abstractions between you and the production
// prod => qa => main (biz-logic) => dev (production-ready) => feature branch cluster
// 
// CI/CD pipelines


// TODO : akjdskasjdn

// NOTE : asdkansldkaslkdsa

const someFx = () => {
     console.log()
}

// that a singular file SHOULD contain and export a singular component
// HOC =>

// modularization = encapsulation & abstraction 
// class components are encapsulated because all information for that component is held withinitself
// i.e. its methods are tihing itself adn so to does it keep track of its own state
// static => they do not get passed wodn the hierarchy tree or into 
// The static keyword defines a static method or property for a class. 
// Neither static methods nor static properties can be called on instances of the class. Instead, they're called on the class itself.

// static methods are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches, 
// fixed-configuration, or any other data you don't need to be replicated across instances.

// const AN_ACTUAL_CONSTATNT = 2019281092809
// .env = 

// node modules => abstraction
// abstraction => removing similar functionality into thier own reusbale pieces (functions)

// polymorphism, inheritence 
// JS is technically not OOP because in certain situations you are forced into sacrificing polymorphism for encapsulation
// however, mostly everyone will say that JS is close enough to be considered O-O












