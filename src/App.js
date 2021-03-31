import axios from "axios";
import React, { useState, useEffect } from "react";
import CardList from "./components/Card-list/Card-list.component";
import './App.css'

export default function App() {
  const [monsters, setmonsters] = useState([]);
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);

  
  };
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
const filterMonsters = monsters.filter((obj) =>obj.name.toLowerCase().includes(value.toLowerCase())
  );

  console.log(filterMonsters);

  return (
    <div className="App">
    <h1>Monster Rolodex</h1>
      <input style={{marginBottom:'20px',marginTop:'5px',height:'50px'}} placeholder="Serch monster" type="text" value={value} onChange={handleChange} />

      <CardList monsters={filterMonsters} />
    </div>
  );
}
