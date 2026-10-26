import { createContext, useEffect, useState } from "react";
import jogo from "../jogo";

export const FlipContext = createContext();

export function FlipProvider(props) {
    const [whatCanvaShow, setWhatCanvaShow] = useState("Start");
    const [gridEscolhida, setGridEscolhida] = useState(false);
    const [btnBack, setBtnBack] = useState(false);
    const [cards, setCards] = useState([]);
    const [cardCriado, setCardCriado] = useState(false);

    useEffect(() => {
        if (gridEscolhida) {
            jogo.clearCards();
            setCards(jogo.createCards());
            setCardCriado(true);
            setGridEscolhida(false);
        }
    }, [gridEscolhida])

    useEffect(() => {
        if (cardCriado) {
            setWhatCanvaShow("Gaming");
            setBtnBack(true);
            setCardCriado(false);
        }
    }, [cardCriado])

    function cardFlip(card) {
        if (jogo.setCard(card.id)) {
            if (jogo.secondCard) {
                if (jogo.checkMatch()) {
                    jogo.clearCards();
                    if (jogo.checkGameOver()) {
                        // WinScream
                        setBtnBack(false);
                        if (jogo.tamanhoDaGrid === 20) {
                            let record = Number(localStorage.getItem("recordgrid20"))
                            if (record) {
                                if (record > jogo.moves) {
                                    localStorage.setItem("recordgrid20", jogo.moves);
                                    setWhatCanvaShow("WinScream");
                                    return;
                                }
                                setWhatCanvaShow("WinScream");
                                return;
                            }
                            localStorage.setItem("recordgrid20", jogo.moves);
                            setWhatCanvaShow("WinScream");
                            return;
                        }

                        if (jogo.tamanhoDaGrid === 30) {
                            let record = Number(localStorage.getItem("recordgrid30"))
                            if (record) {
                                if (record > jogo.moves) {
                                    localStorage.setItem("recordgrid30", jogo.moves);
                                    setWhatCanvaShow("WinScream");
                                    return;
                                }
                                setWhatCanvaShow("WinScream");
                                return;
                            }
                            localStorage.setItem("recordgrid30", jogo.moves);
                            setWhatCanvaShow("WinScream");
                            return;
                        }
                    }
                } else {
                    setTimeout(() => {
                        // semPares
                        jogo.unflipCards();
                        setCards([...jogo.cards])
                    }, 600);

                };
            }
            setCards([...jogo.cards])
        }
    }

    function restart() {
        jogo.clearCards();
        jogo.moves = 0;
        setCards(jogo.createCards());
        setWhatCanvaShow("Gaming");
        setBtnBack(true);
    }

    return (
        <FlipContext.Provider value={{ cardFlip, restart, cards, setCards, gridEscolhida, setGridEscolhida, whatCanvaShow, setWhatCanvaShow, btnBack, setBtnBack }} >
            {props.children}
        </FlipContext.Provider>
    )
}