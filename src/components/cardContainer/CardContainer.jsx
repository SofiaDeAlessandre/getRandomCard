import { Card } from "../../components/card/Card";
import "./cardContainer.css"
import cardImg1 from "../../assets/card-1.jpeg";
import cardImg2 from "../../assets/card-2.jpeg";
import cardImg3 from "../../assets/card-5.jpg";
import cardImg4 from "../../assets/card-4.jpg";
import cardImg5 from "../../assets/card-3.jpeg";
import cardImg6 from "../../assets/card-5.jpg";

export function CardContainer ({diceNumber}) {
    return(
<div className="card_container">

{diceNumber === 4 && (<Card
        cardHeader={`¡Exitos! Soy el mensaje  ${diceNumber} `}
        cardImg={cardImg4}
        cardFooter={
          "Sigue tus sueños"
        }
        cardText="♦"
      /> )} 
            {diceNumber === 5 && (<Card
        cardHeader={`¡Hola! Elegiste el mensaje  ${diceNumber} `}
        cardImg={cardImg5}
        cardFooter={
          "Confía en tí"
        }
        cardText="♦"
      /> )} 
            {diceNumber === 6 && (<Card
        cardHeader={`¡Exitos! Tu mensaje es el ${diceNumber} `}
        cardImg={cardImg6}
        cardFooter={
          "La felicidad no es una meta sino un estilo de vida"
        }
        cardText="♥"
      />)} 
            {diceNumber === 1 &&  (<Card
        cardHeader={`¡Hola! Soy el mensaje  ${diceNumber}`}
        cardImg={cardImg1}
        cardFooter={
          "Si lo necesitas, toma un descanso"
        }
        cardText="♣"
      />)} 
            {diceNumber === 2 && (<Card
        cardHeader={`¡Suerte! Soy el mensaje  ${diceNumber}`}
        cardImg={cardImg2}
        cardFooter={
          "Eres tan increíble como te dejas serlo"
        }
        cardText="♠"
      />
 )}
            {diceNumber === 3 && (<Card
        cardHeader={`¡Hola! Tu mensaje es el  ${diceNumber} `}
        cardImg={cardImg3}
        cardFooter={
    false
        }
        cardText="♥"
      /> )}











</div>
    )
}