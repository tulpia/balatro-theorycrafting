import { useState } from "react";

// Types
import CardProps from "./components/Cards/Card/types";

// Components
import Sidebar from "./components/Sidebar";
import Cards from "./components/Cards";

function App() {
  const [cards, setCards] = useState<Array<CardProps>>([]);

  return (
    <main>
      <Sidebar cards={cards} />
      <section>
        <Cards cards={cards} setCards={setCards} />
      </section>
    </main>
  );
}

export default App;
