import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 data-testid="header">Getting started with React Testing</h2>
      </header>
      <section className="App-body">
        <Counter />
      </section>
    </div>
  );
}

export default App;
