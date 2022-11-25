import './App.css';
import Nav from './components/Nav';
import Content from './components/Content';


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Nav/>
          <Content />
        </div>
      </header>
    </div>
  );
}