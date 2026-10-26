import { useContext } from "react";
import { FlipContext } from "./context/FlipContext.jsx";
import Start from "./componentes/Start.jsx";
import GridGame from "./componentes/GridGame.jsx";
import WinScream from "./componentes/WinScream";
import BackBtn from "./componentes/BackBtn.jsx";
import jogo from "./jogo.js";
import "./App.jsx";


function App() {
    const { whatCanvaShow, btnBack} = useContext(FlipContext);

    return (
        <>
            {whatCanvaShow === "Start" && <Start />}
            {whatCanvaShow === "Gaming" && <GridGame />}
            {whatCanvaShow === "WinScream" && <WinScream  />}
            {btnBack && <BackBtn/>}
        </>
    )
}

export default App