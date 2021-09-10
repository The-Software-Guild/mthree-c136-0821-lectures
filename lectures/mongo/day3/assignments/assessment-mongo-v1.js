// assessment #3 - MERN

// You must complete the assessment by the beginning of class Monday 
// September 13th @ 10:00am est. Handed in via github classroom: https://classroom.github.com/a/pf7INuAG
// Once finished, please book your code review with me via the following link: https://calendly.com/patrick-morgan-bkny/c136-assessment-2

// Section One: mern-bug-tracker.js

// Purpose: You have just joined a new high growth startup and have been tasked with your first new feature
// buildout since being promoted to team lead. Your task is to to build a 'bug tracker' that can more easily 
// track bugs in your codebase allowing for more efficiency from your team.

// Getting Started:
// Step-1: Plan It
// Create a component tree mock up or wireframe outlining your project, include all associated 
// directories, external node modules, routes, programs you will need ... etc. Screenshot or hand these 
// in via your PR or assets folder.

// Step-2: Backend Routes & ORM
// Using Node.js, Express.js, Mongoose, MongoDB, and Postman create all 6 of your CRUD routes
// You should have two collections: Users & Bugs
// Screenshot, videocast/screen-record, or gif these routes working and include them in your PR or assets folder

// Step-3: Consuming Your API Client Side
// Within a Client folder create a font end application using React.js that allows for:
// 1) The creation of new users
// 2) That user should then be able to create and interact with 'bugs'

// Create a user form to add bugs, it should contain following field:
//            - Title
//            - Description
//            - Time (should auto-fill with system date &time)
//            - Date (should auto-fill with system date &time)
//            - Assignee
// All Data created should be saved in MongoDB. And displayed in an INTERACTIVE table. I should be able to click on cells and interact with each bug
// by seeign more details, leaving notes, adjusting due date, etc, ...etc.
// Build a programming logic for SLA that every bug should be resolve in 3 days, after third the day the unresolved bug should be highlighted.
// Add one more field to show the leftover days to fix the bug (Total time is 3 days from the day bug is assigned).

// Step-4: Styling
// Make you entire application fully-styled and responsive per the past requirements.

// Outcome:
// Testing is NOT required for this assessment. You are more than welcome to follow TDD but I will not be helpign or
// checking any of your testing code. The focus here should be on mongo, mongoose, node, and react.

// Make sure that our application is RESTfull, meaning status codes & error handlign included for all
// backend functionality along with verbose and UI friendly updates (red notice when soemthign is
// not added correctly, a note saying somethign was successfully deleted, ... etc)
