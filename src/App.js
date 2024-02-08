import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Users from './Users';
import './controllers';

function App() {
  return (
    <Router>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ display: 'inline', marginRight: '20px' }}>
              <Link to='/'>Home</Link>
            </li>
            <li style={{ display: 'inline' }}>
              <Link to='/users'>Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/users' element={<Users />} />
          <Route
            path='/'
            element={<h1 style={{ color: '#3498db' }}>Hello, World!</h1>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
