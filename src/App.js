//hooks are the way of setting the state in the functional compnent
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/ui/Header";
import Search from "./components/ui/Search";
import CharacterGrid from "./components/characters/CharacterGrid";

function App() {
  const [items, setItems] = useState([]); //this is used for setting up the state
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState(" ");

  //this useEffect is fired off again as the dependency i.e. the querry changes again and again
  useEffect(() => {
    //this is used for calling and manupulating the state
    const fetchItems = async () => {
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters/?name=${query}`
      );
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);
  return (
    <div className="App">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
// left the video at this time
