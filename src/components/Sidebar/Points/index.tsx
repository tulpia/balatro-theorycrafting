import { useEffect, useState } from "react";

// Types
import CardProps from "../../Cards/Card/types";

function Points({ cards }: { cards: Array<CardProps> }) {
  const [points, setPoints] = useState<number>(0);

  useEffect(() => {
    setPoints(0);

    cards.forEach((card) => setPoints((points) => (points += card.points)));
  }, [cards]);

  return (
    <div>
      <h1>Points</h1>
      <div className="points-container">
        <p className="points-container__points">{points}</p>
      </div>
    </div>
  );
}

export default Points;
