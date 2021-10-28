import { useState } from 'react';
import './App.css';
import Form, { User } from './Form';
import List from './List';

function App() {
  const [user, setUser] = useState<User[]>([]);

  const handleSubmit = (getUser: User) => {
    setUser(prev => [...prev, getUser]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2 data-testid="header">Getting started with React Testing</h2>
      </header>
      <section className="App-body">
        <Form onSubmit={handleSubmit} />
        <List user={user} />
      </section>
    </div>
  );
}

export default App;
