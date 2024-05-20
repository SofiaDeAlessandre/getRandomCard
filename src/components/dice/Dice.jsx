import { GiInvertedDice5, GiInvertedDice4, GiInvertedDice3, GiInvertedDice2, GiInvertedDice1 , GiInvertedDice6  } from "react-icons/gi";

export function Dice ({diceNumber}) {
    return (
<>
{diceNumber === 4 && <GiInvertedDice4 />} 
            {diceNumber === 5 && <GiInvertedDice5 />} 
            {diceNumber === 6 && <GiInvertedDice6 />} 
            {diceNumber === 1 && <GiInvertedDice1 />} 
            {diceNumber === 2 && <GiInvertedDice2 />}
            {diceNumber === 3 && <GiInvertedDice3 />} 
</>
    )
}