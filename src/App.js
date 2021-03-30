import axios from "axios";
import React, { useState, useEffect } from "react";
import CardList from "./components/Card-list/card-list.component";

const App = () => {
  const [monsters, setmonsters] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (res) {
        setmonsters(res.data);
        console.log(res, "===success");
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <CardList monsters={monsters} />
    </div>
  );
};

export default App;
