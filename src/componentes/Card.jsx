import { useContext } from "react";
import { FlipContext } from "../context/FlipContext.jsx";
import jogo from "../jogo";

function Card(props) {
    let grid = jogo.tamanhoDaGrid === 20 ? "card cardMaior" : "card cardMenor";
    const value = useContext(FlipContext);

    return (
        <div onClick={()=>value.cardFlip(props.card)} className={`${grid} ${props.card.flipped? "flip":""}`} id={props.card.id}>
            <div className="verse">
                <img alt="verso da carta" className="imageCards" src="../../assets/imagens/verso.png"/>
            </div>
            <div className="front">
                <img alt="frente da carta" className="frontCard" src={`../${props.card.icon}`} />
            </div>
        </div>
    )
}

export default Card