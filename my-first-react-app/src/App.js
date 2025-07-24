import logo from './logo.svg';
import './App.css';
import NewComponent from './Components/NewComponent';
import StateComponent from './Components/StateComponent';

function App() {
  return (
    <div className="App">
      <div>
        <NewComponent/>
      </div>
      <div>
        <StateComponent/>
      </div>
    </div>
  );
}

export default App;
