import {useState} from "react";

import Die from "./components/Die";

export default function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];

    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }

    return newDice;
  }

  function rollDice() {
    setDice(allNewDice());
  }
  console.log(allNewDice());
  const diceElements = dice.map((die) => <Die number={die} />);

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
