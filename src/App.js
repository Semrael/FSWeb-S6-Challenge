import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import axios from "axios";
import Karakterler from "./components/Karakterler";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState([]);

  const ChangeHandler = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  useEffect(() => {
    axios.get`https://swapi.dev/api/people/`
      .then((res) => {
        console.log(res.data);
        setCharacters(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [search]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Header search={search} changeHandler={ChangeHandler} />
      <Karakterler characters={characters} />
    </div>
  );
};

export default App;
