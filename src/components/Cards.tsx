import React, { useState, useEffect } from "react";
import { data } from "../data";

const Card: React.FC = () => {
  const [cards, setCards] = useState(data);

  useEffect(() => {
    const shuffled = [...data, ...data].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }, []);

  // const shuffled = cards.sort(() => Math.random() - 0.5)
  // setCards(shuffled)

  // const tester = () => {
  // console.log(cards);
  // }

  return (
    <div className="cards">
      {cards.map(({ image }, i) => (
          <div className="card" key={i} style={{ backgroundImage: "url(" + image + ")" }}></div>
        ))}
    </div>
  );
};

export default Card;
