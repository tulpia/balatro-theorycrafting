// Types
import CardProps from "../Cards/Card/types";

// Components
import Points from "./Points";

function Sidebar({ cards }: { cards: Array<CardProps> }) {
  return (
    <aside>
      <Points cards={cards} />
    </aside>
  );
}

export default Sidebar;
