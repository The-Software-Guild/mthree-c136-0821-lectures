import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// entry point to our application
// rendering or paiting our app

//                //what to render (plug)                        //where to render it (socket)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'));

// high-level configuration => analytics, some other wacky packages 