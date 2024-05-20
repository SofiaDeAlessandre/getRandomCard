import { Dice } from "../dice/Dice"
import "./rollButton.css"


export function RollButton ({diceNumber, rollDice}) {
    return (
       <><button className="roll_button" onClick={rollDice}> 
       ¡Tira el dado para ver tu mensaje!
            <Dice diceNumber={diceNumber}/>
            </button>
            </> 
    )
}