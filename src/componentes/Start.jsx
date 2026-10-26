import { useContext } from "react";
import { FlipContext } from "../context/FlipContext.jsx";
import jogo from "../jogo";

function Start(props) {

    const {gridEscolhida, setGridEscolhida, setWhatCanvaShow} = useContext(FlipContext);

    function Gaming(tamanho) {
        jogo.whatIsGrid(tamanho);
        jogo.moves = 0;
        setGridEscolhida(true);
    }

    return (
        <div id="start">
            <h1>ESCOLHA O TAMANHO DO SEU TABULEIRO</h1>
            <button onClick={()=> Gaming(20)}>20 Cartas</button>
            <button onClick={()=> Gaming(30)}>30 Cartas</button>
        </div>
    )
}

export default Start