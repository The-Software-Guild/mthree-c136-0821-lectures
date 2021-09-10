// notes.js


// resource is a singular thing from the DB (in NR like mongo it will be a document)
// collection is a group of similar resources
// transaction singular logical unit of retrival ()
// two main governance (BASE vs ACID)



// users => collection
// user => resource


// to-do's => collection
// to-do => resource (represented by a singular document)





// BASE (non-relational)-basic vs ACID (relational)-rigid
// basically available 
// soft-state 
// eventually consistent




// Atomicity => either the transaction as awhole is excuted or fails (all or nothing)
// Consistincy => all of your data must confine to all constraints (triggers, cascades)
// isolation => concurency (controlling things independently)
// Durability => all changes made to DB are permanent once a singualr transaction is completw


// IAM
// Auth0 (OAuth) => OCTA ()

// SSO (single sign on) 
// MFA (multi-factor-aithentication) => two-factor, 
// 




// state management
// single source of truth located outside of our DF

// it allows for the the passing of data between components
// that are not within the normal flow of data

// redux is a state management tool made by FB to combat prop drilling by Dan Abramov
// redux is written in the Context API (providers <-> consumers)

























