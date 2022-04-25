import {nanoid} from "nanoid";
import {useState} from "react";

import Die from "./components/Die";

export default function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];

    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }

    return newDice;
  }

  function rollDice() {
    setDice(allNewDice());
  }
  const diceElements = dice.map((die) => <Die key={die.id} number={die.value} />);

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
