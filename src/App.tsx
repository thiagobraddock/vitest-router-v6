import { NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Home</h1>
      <NavLink to="about">About Page</NavLink>
    </div>
  );
}

export default App;
