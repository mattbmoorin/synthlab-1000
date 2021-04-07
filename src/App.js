import Controller from './components/Controller';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Controller test="Testing!" />
    </div>
  );
}

export default App;

// useSelector instead of map state to props
