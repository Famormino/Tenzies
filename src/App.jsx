import {nanoid} from "nanoid";
import {useEffect, useState} from "react";
import Confetti from "react-confetti";

import Die from "./components/Die";

export default function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const diceTrue = dice.every((die) => die.isHeld);
    const diceValueReference = dice[0].value;
    const allSameValue = dice.every((die) => die.value === diceValueReference);

    if (diceTrue && allSameValue) {
      setTenzies(true);
    }
  }, [dice]);

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((dice) => {
        return dice.id === id ? {...dice, isHeld: !dice.isHeld} : dice;
      }),
    );
  }

  function rollDice() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDice();
        }),
      );
    } else {
      setDice(allNewDice());
      setTenzies(false);
    }
  }

  function generateNewDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];

    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDice());
    }

    return newDice;
  }

  const diceElements = dice.map((die) => (
    <Die key={die.id} holdDice={() => holdDice(die.id)} isHeld={die.isHeld} number={die.value} />
  ));

  return (
    <main>
      {tenzies && <Confetti width={window.innerWidth || 1000} />}

      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its current value between
        rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        {!tenzies ? "Roll" : "Nuevo Juego"}
      </button>
    </main>
  );
}
