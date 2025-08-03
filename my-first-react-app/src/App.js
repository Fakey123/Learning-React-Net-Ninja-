import './App.css';
import NewComponent from './Components/NewComponent';
import StateComponent from './Components/StateComponent';
import OutputtingLists from './Components/OutputtingLists';
import ReactVid21 from './Components/ReactVid21';

function App() {
  return (
    <div className="App">
      <div>
        <NewComponent/>
      </div>
      <div>
        <StateComponent/>
      </div>
      <div>
        <OutputtingLists/>
      </div>
      <div>
        <ReactVid21/>
      </div>
    </div>
  );
}

export default App;
