//hooks are the way of setting the state in the functional compnent
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";

function App() {
  const [items, setItems] = useState([]); //this is used for setting up the state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //this is used for calling and manupulating the state
    const fetchItems = async () => {
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters`
      );
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);
  return (
    <div className="App">
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
// left the video at this time
