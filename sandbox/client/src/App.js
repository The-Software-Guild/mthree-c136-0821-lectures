import { useState, useEffect } from 'react';
import axios from 'axios';

// logic that makes the same request I have already verified works from my BE and in postman
// Axios http://localhost:5000/home
// useEffect componentDidMount => .res.data store the information recieved in state or soemthign like localStorage for future use

// app.js => routing information
function App() {
  let [fetchedData, setFetchedData] = useState([])
  
  // componentDidMount
  useEffect(() => {
    // fx decleration using es6 aync/await syntax to handle our promises
    async function getResults() {
      // storing the values of the awaited response into a variable
      const results = await axios.post('http://localhost:5000/home', /* the new thing to eb added bundled up from your form data  */);
      // connecting the useState hooks updating fucntion by storing or updating the results from the previous line into our state object
      setFetchedData(results.data)
    }

    // actually invoking the function declared above
    getResults()
  }, [])
  console.log(fetchedData) // {}

  const ui = JSON.stringify(fetchedData.body)

  console.log(`this is ui: ${ui}`)
  return (
    <div>
      {ui}
    </div>
  );
}

export default App;
