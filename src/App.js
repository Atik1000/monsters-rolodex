import axios from "axios";
import React, { useState, useEffect } from "react";
import CardList from "./components/Card-list/card-list.component";


const App = () => {
  const [monsters, setmonsters] = useState([]);
useEffect(()=>{
 fetch('https://jsonplaceholder.typicode.com/users')
 .then(Response => Response.json())
 .then(users => setmonsters({ monsters: users }))
 console.log(Response);
})
 
  return (
    <div className="App">
      <CardList monsters={monsters} />
    </div>
  );
};

export default App;
