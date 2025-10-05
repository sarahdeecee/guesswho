import './App.css';
import { TopNav } from './TopNav';
import { Board } from './Board';
import { itemData } from './testdata/items';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Board cols={5} itemData={itemData} />
    </div>
  );
}

export default App;
