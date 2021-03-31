import axios from "axios";
import React, { useState, useEffect } from "react";
import CardList from "./components/Card-list/Card-list.component";


const App = () => {
  const [monsters, setmonsters] = useState([]);
  const [value, setValue] = useState('');
  const handleChange = (e) =>{
    setValue(e.target.value);
      
    const filterMonsters=monsters.filter(obj=>{
      return obj.name.toLowerCase().includes(value.toLowerCase())
    })

    console.log(filterMonsters)
  } 
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
  

  return (
    <div className="App">
     <input type="text" value={value} onChange={handleChange} />
    
      <CardList monsters={monsters} />
    </div>
  );
};

export default App;