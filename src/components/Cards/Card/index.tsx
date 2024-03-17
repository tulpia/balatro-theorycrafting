// Types
import CardProps from "./types";

function Card({ card }: { card: CardProps }) {
  return (
    <div>
      <p>
        {card.label} de {card.color}
      </p>
    </div>
  );
}

export default Card;
