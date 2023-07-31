import SearchBar from "./components/SearchBar";
import Cryptodata from "./components/Cryptodata";
import "./styles/Mixins.scss";
import './App.css';
import { useState } from "react";

function App() {
  const [item, setItem] = useState('');

  const handleChange =(e)=>{
    const searchtext = document.getElementById("Searchinput").value;
    setItem(searchtext);
}

  return (
    <div className="App">
        <SearchBar handleChange = {handleChange} />
        <Cryptodata item={item} />
    </div>
  );
}

export default App;