import './App.css';
import React from 'react';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={`${match.url}/Centro`}>Centro</Link>
        </li>
      </ul>
    </nav>
    );
  }
}

export default Navbar;