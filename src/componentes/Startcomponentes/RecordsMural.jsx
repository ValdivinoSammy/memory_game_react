import { useContext, useEffect, useState } from "react";
import { FlipContext } from "../../context/FlipContext.jsx";
import ExplicandoRecords from "./ExplicandoRecords";


function RecordsMural(props) {
    const [nome, setNome] = useState("Anônimo");
    const [whatRecord, setWhatRecord] = useState("20");
    const [explicando, setExplicando] = useState(false);
    const [altApelido, setAltApelido] = useState(false);

    const {modoHard, setModoHard} = useContext(FlipContext);

    useEffect(()=>{
        let temNomeSalvo = localStorage.getItem("apelidoSalvado");
        temNomeSalvo? setNome(temNomeSalvo): setNome("Anônimo");
    },[])

    function fecharExplicando() {
        setExplicando(false);
    }
    
     function fecharAltApelido() {
        setAltApelido(false);
    }

    function salvandoApelido() {
        let i = document.getElementById("user-name").value;
        setNome(i);
        localStorage.setItem("apelidoSalvado", i);
    }

    return (
        <>
            <div className="mural-record">
                <button onClick={() => { setExplicando(true); setTimeout(() => { document.addEventListener("click", fecharExplicando, { once: true }); }, 10); }} className="sobre-records">❔</button>
                <h3>Mural de Recordes</h3>
                <div className="btns-records">
                    <button onClick={() => setWhatRecord("20")} className={whatRecord === "20" ? "" : "selected"} >20 Cartas</button>
                    <button onClick={() => setWhatRecord("30")} className={whatRecord === "30" ? "" : "selected"}>30 Cartas</button>
                </div>
                <ul className="all-records">
                    {whatRecord === "20" && <li>{nome}: {localStorage.getItem("recordgrid20")? localStorage.getItem("recordgrid20"):"??"} Ações</li>}
                    {whatRecord === "20" && <li>{nome}: {localStorage.getItem("recordgrid20Hard")? localStorage.getItem("recordgrid20Hard"):"??"} Ações</li>}
                    {whatRecord === "30" && <li>{nome}: {localStorage.getItem("recordgrid30")? localStorage.getItem("recordgrid30"):"??"} Ações</li>}
                    {whatRecord === "30" && <li>{nome}: {localStorage.getItem("recordgrid30Hard")? localStorage.getItem("recordgrid30Hard"):"??"} Ações</li>}
                </ul>
            </div>
            <div onClick={()=>{setModoHard(!modoHard);}} className={`btn-modo-hard ${modoHard? "ON": ""}`}>Modo Hard : {modoHard? "ON":"OFF"}</div>
            <div className="btn-apelido" onClick={()=> setAltApelido(true)}>Defina um apelido</div>
            
            {altApelido && <div className="div-alt-apelido">
                                <button className="btn-closed-ap" onClick={()=> setAltApelido(false)}>❌</button>
                                <input id="user-name" type="text"  placeholder="Seu nome" />
                                <button className="btn-saved-ap" onClick={()=>{ salvandoApelido(); setAltApelido(false);}} >Salvar</button>
                            </div>}
            {explicando && <ExplicandoRecords />}
        </>
    )
}

export default RecordsMural