import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Getting started</h2>
      </header>
      <section className="App-body">
        <Router>
          <Route path="/" component={TodoList} />
        </Router>
      </section>
    </div>
  );
}

export default App;
