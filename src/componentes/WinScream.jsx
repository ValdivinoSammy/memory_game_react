import { useContext } from "react";
import { FlipContext } from "../context/FlipContext.jsx";
import jogo from "../jogo";

function WinScream(props) {
    const {setWhatCanvaShow , restart} = useContext(FlipContext);
    let record;
    jogo.tamanhoDaGrid === 20? record = localStorage.getItem("recordgrid20"): record = localStorage.getItem("recordgrid30");

    return (
        <div className="winDiv">
            <h1>Parabéns, você venceu o Jogo.</h1>
            <p>Recorde de movimentos: {record} </p>
            <p>Movimentos realizados: {jogo.moves} </p>
            <div className="reset" onClick={()=> restart()} >Restart</div>
            <div className="reset" onClick={()=> setWhatCanvaShow("Start")} >Tela inicial</div>
        </div>
    )
}

export default WinScream