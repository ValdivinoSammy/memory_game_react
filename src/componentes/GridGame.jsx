import { useContext } from "react";
import { FlipContext } from "../context/FlipContext.jsx";
import jogo from "../jogo";
import Card from "./Card";


function GridGame(props) {
    let grid = jogo.tamanhoDaGrid === 20 ? "gridTemplate20cards" : "gridTemplate30cards";
    const {cards} = useContext(FlipContext);
    if(!cards) return;
    return (
        <div id="container" className={grid}>
            {cards.map((card,index) =>  
            <Card  key={index} card={card} /> 
            )}
        </div>
    )
}



export default GridGame