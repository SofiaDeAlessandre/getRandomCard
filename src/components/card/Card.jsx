import "./card.css"

export function Card ({ cardHeader, cardFooter, cardImg, cardText }) {
    return (
        <div className="card_container">
            {cardHeader &&  <h3 className="card_header">{cardHeader}</h3> }
            {cardImg && <img src={cardImg} alt="Imágen Card" className="card_img"/>}
            {cardFooter &&  <p className="card_footer">{cardFooter}</p> }
            {cardText &&  <p className="card_button">{cardText}</p> }
        </div>
    )
    }