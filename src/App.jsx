import { CardContainer } from "./components/cardContainer/CardContainer";
import { RollButton } from "./components/rollButton/RollButton"

import { useState } from "react";


function App() {
  const [diceNumber, setDiceNumber] = useState(5)

  function handleRollDice () {
    let number = parseInt(Math.random() * 6 + 1)
    setDiceNumber(number)
  }

  return (
    <>
    <RollButton diceNumber={diceNumber} rollDice={handleRollDice}/>
      <CardContainer diceNumber={diceNumber}/>
    </>
  );
}
export default App;
