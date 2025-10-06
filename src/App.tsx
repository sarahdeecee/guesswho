import './App.css';
import { TopNav } from './components/TopNav';
import { Board } from './components/Board';
import { itemData } from './testdata/items';
import { useState } from 'react';

function App() {
  const [selected, setSelected] = useState(itemData);
  return (
    <div className="App">
      <TopNav />
      <Board cols={5} items={itemData} selected={selected} setSelected={setSelected} />
    </div>
  );
}

export default App;
