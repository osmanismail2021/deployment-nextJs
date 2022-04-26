import logo from './logo.svg';
import './App.css';

function App() {

  const clickHandler =(e)=>{
    e.preventDefault()
    fetch('/posts')
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          onClick={clickHandler}
          className="App-link"
          href="#"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
