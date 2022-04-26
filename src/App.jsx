import {nanoid} from "nanoid";
import {useState} from "react";

import Die from "./components/Die";

export default function App() {
  const [dice, setDice] = useState(allNewDice());

  /**
   * Challenge: Create a function `holdDice` that takes
   * `id` as a parameter. For now, just have the function
   * console.log(id).
   *
   * Then, figure out how to pass that function down to each
   * instance of the Die component so when each one is clicked,
   * it logs its own unique ID property. (Hint: there's more
   * than one way to make that work, so just choose whichever
   * you want)
   *
   */

  function holdDice(id) {
    console.log(id);
  }

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
  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      holdDice={() => holdDice(die.id)}
      id={die.id}
      isHeld={die.isHeld}
      number={die.value}
    />
  ));

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
