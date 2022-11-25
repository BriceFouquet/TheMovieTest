import './App.css';
import Content from './components/subComponents/Content'
import Nav from './components/subComponents/Nav'
import Home from './components/Home';
import Details from './components/Details';
import { Route, Router } from 'react-router-dom'

export default function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/details" component={Details} />
        </div>
      </header>
    </div>
    </Router>
  );
}