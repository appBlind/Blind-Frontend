import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import DeleteUser from './components/DeleteUser';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/delete-user">Delete User</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <div>
                <h1>Welcome to the User Management System</h1>
                <p>Please choose an action from the navigation menu above.</p>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
