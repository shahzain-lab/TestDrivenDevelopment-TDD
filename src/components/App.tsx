import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          {/* <TodoList /> */}
        </Router>
      </header>
    </div>
  );
}

export default App;
