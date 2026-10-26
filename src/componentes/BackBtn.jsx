import { useContext } from "react";
import { FlipContext } from "../context/FlipContext.jsx";

function BackBtn(props) {

    const {setBtnBack, setWhatCanvaShow } = useContext(FlipContext);
    
    return (
    <button className="to-back" onClick={()=>{
        setWhatCanvaShow("Start");
        setBtnBack(false);
    }}>↩</button>
    )
}

export default BackBtn