import Controller from './components/Controller';
import Header from './components/Header';
import Oscillator from './components/Oscillator';

function App() {
  return (
    <div className="App">
      <Header />
      <Oscillator />
      <Controller test="Testing!" />
    </div>
  );
}

export default App;

// useSelector instead of map state to props
