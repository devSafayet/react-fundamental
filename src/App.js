import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Components/Menubar/Menubar';
import AllFoducts from './Components/AllFoducts/AllFoducts';
import { useState } from 'react';

function App() {
  const [Count, setCount] = useState(0);
  const setCardCount = () => {
    setCount(Count + 1);
  }
  return (
    <div className="App">
      <Menubar Count={Count}></Menubar>
      <AllFoducts setCardCount={setCardCount}></AllFoducts>

    </div>
  );
}
export default App;
