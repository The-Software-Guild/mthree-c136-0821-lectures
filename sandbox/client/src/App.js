import Box from './components/Box'

// app.js => routing information
function App() {
  const someVar = 'text'
  return (
    <div>
      <Box
        number={5} 
        name={{text: 'circle'}}/>
      <Box name={{text: 'square'}}/>
      <Box name={{text: 'box'}}/>
      <Box name={{text: 'rectangle'}}/>
      <Box name={{text: 'parallelogram'}}/>
    </div>
  );
}

export default App;
