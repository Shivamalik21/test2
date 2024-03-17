
import './App.css';
import Home from './component/Home';
const arr=require("./component/Data/Data.json")
function App() {
  return (
    <div className="App">
      <Home arr={arr}/>
    </div>
  );
}

export default App;
