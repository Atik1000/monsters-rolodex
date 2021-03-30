import axios from "axios";
import React, { useState, useEffect } from "react";
import CardList from "./components/Card-list/card-list.component";

const App = () => {
  const [monsters, setmonsters] = useState([]);
  const [value, setValue] = useState('');
  const handleChange = (e) => setValue(e.target.value);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (res) {
        setmonsters(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);
  const filterMonsters=monsters.filter(monsters=>{
    monsters.name.toLowerCase().include(value.toLowerCase)
  })

  return (
    <div className="App">
     <input type="text" value={value} onChange={handleChange} />
     {value}
      <CardList monsters={monsters} />
    </div>
  );
};

export default App;
