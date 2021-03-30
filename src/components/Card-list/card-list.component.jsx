import React from "react";
import Card from "../Card/Card.component";
import "./card-list.style.css";

const CardList = ({monsters}) => {
  // console.log(props);
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
