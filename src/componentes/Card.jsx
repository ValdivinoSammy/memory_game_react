import { useContext, useEffect, useState } from "react";
import { FlipContext } from "../context/FlipContext.jsx";
import jogo from "../jogo";

function Card(props) {
    let grid = jogo.tamanhoDaGrid === 20 ? "card cardMaior" : "card cardMenor";
    const {cardFlip, modoHard} = useContext(FlipContext);

    useEffect(()=>{
        modoHard? setFlip(""): setFlip("flip");
    },[])

    const [flip, setFlip] = useState("");
    setTimeout(()=>{setFlip("")},3000);

    

    return (
        <div onClick={()=> cardFlip(props.card)} className={`${grid} ${props.card.flipped? "flip": flip}`} id={props.card.id}>
            <div className="verse">
                <img alt="verso da carta" className="imageCards" src={`${import.meta.env.BASE_URL}assets/imagens/verso.png`}/>
            </div>
            <div className="front">
                <img alt="frente da carta" className="frontCard" src={`${import.meta.env.BASE_URL}${props.card.icon}`} />
            </div>
        </div>
    )
}

export default Card