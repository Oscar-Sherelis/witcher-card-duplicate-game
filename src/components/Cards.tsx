import React, { useState, useEffect } from "react";
import { data, card } from "../data";

const Card: React.FC = () => {
  const [cards, setCards] = useState(data);

  let updatedCards: Array<card> = [];
  const [counterState, setcounter] = useState(0);

  const [firstCardImageState, setfirstCardImageState] = useState("");

  const [firstCardIndexState, setfirstCardIndex] = useState(0);

  const ClosedCardImage: string = "images/closed_card.jpeg";

  useEffect(() => {
    const shuffleCards = () => {
      let shuffled = cards.sort(() => Math.random() - 0.5);
      setCards(shuffled);
    };

    shuffleCards();
  }, []);

  const flipCard = (objIndex: number, image: string) => {
    let counter = counterState;

    if (counter === 0) {
      updatedCards = [...cards];
    }

    const clickedCard = cards[objIndex].openedCard;

    if (!clickedCard) {
      counter++;
      setcounter(counter);
    }

    if (counter === 1) {
      updatedCards = [...cards];
      setfirstCardIndex(objIndex);

      updatedCards[objIndex].openedCard = true;

      setfirstCardImageState(image);
    } else if (counter === 2) {
      updatedCards = [...cards];

      let secondCardIndex = objIndex;

      if (firstCardImageState !== image) {
        updatedCards[secondCardIndex].openedCard = true;

        setTimeout(() => {
          updatedCards = [...cards];
          updatedCards[firstCardIndexState].openedCard = false;
          updatedCards[secondCardIndex].openedCard = false;
          setCards(updatedCards);
        }, 2000);
      } else if (firstCardImageState === image) {
        updatedCards[firstCardIndexState].openedCard = true;
        updatedCards[secondCardIndex].openedCard = true;
      }

      setcounter(0);
    }
    setCards(updatedCards);
  };

  return (
    <div className="cards">
      {cards.map(({ image, openedCard }, i) => (
        <div
          className="card"
          onClick={() => {
            flipCard(i, image);
          }}
          key={i}
          style={{ backgroundImage: "url(" + (openedCard ? image : ClosedCardImage) + ")" }}
        ></div>
      ))}
    </div>
  );
};

export default React.memo(Card);
