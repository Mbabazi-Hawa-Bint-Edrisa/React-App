import logo from './logo.svg';
import './App.css';
import ShoppingList from './components/shoppingList';
import Gallery from './components/gallery';
import Car from './components/cars';
import Table from './components/table';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ShoppingList name='Eid'/>
        <Gallery name='My Gallery'/>
        <Car name='My cars'/>
        <Table name='My table'/>
      </header>
      
      

    </div>
  );
}

export default App;


