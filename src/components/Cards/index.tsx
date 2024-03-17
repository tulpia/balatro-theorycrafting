// Types
import CardProps from "./Card/types";

// Utils
import cardsData from "./cardsData";

// Components
import Card from "./Card";

function Cards({
  cards,
  setCards,
}: {
  cards: Array<CardProps>;
  setCards: Function;
}) {
  /**
   * TODO : Convertir le setState en useReducer
   * @doc: https://react.dev/learn/extracting-state-logic-into-a-reducer
   */

  const handleAddCards = (index: number) => {
    if (cards.length > 4) return;

    setCards([...cards, cardsData[index]]);
  };

  const handleRemoveCards = (index: number) => {
    setCards(cards.filter((_t, indexCard) => indexCard !== index));
  };

  return (
    <div>
      <select
        name="cards-picker"
        id="cards-picker"
        onChange={(e) => handleAddCards(parseInt(e.target.value))}
        defaultValue={"default"}
      >
        <option value="default" disabled>
          Sélectionner une carte
        </option>
        {cardsData.map((card: CardProps, index: number) => (
          <option key={`${card.name}-${card.color}`} value={index}>
            {card.label} de {card.color}
          </option>
        ))}
      </select>
      <div>
        <p>Cartes sélectionnées</p>
        <ul>
          {cards.map((card: CardProps, index: number) => (
            <li onClick={() => handleRemoveCards(index)}>
              <Card key={`${card.name}-${card.color}`} card={card} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cards;
