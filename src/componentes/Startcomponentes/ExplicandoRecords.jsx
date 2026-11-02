function ExplicandoRecords(props) {
    return (
        <div className="explicando">
            <h1>SOBRE OS RECORDES</h1>
            <div className="sobre-div">
                <div className="topic-div">
                    <h2>Tabuleiro de 20 cartas</h2>
                    <p>Esse tabuleiro possui 10 cartas unicas com 1 par cada uma, contendo um total de 20 cartas no tabuleiro. O valor minimo de "Ações" nesse tabuleiro são 10.</p>
                </div>
                <div className="topic-div">
                    <h2>Tabuleiro de 30 cartas</h2>
                    <p>Esse tabuleiro possui 15 cartas unicas com 1 par cada uma, contendo um total de 30 cartas no tabuleiro. O valor minimo de "Ações" nesse tabuleiro são 15.</p>
                </div>
                <div className="topic-div">
                    <h2>Ações</h2>
                    <p>As chamadas "ações" realizadas pelo jogador funcionam da seguinte forma: As ações sempre começam zeradas em qualquer tabuleiro e aumenta ao decorrer do jogo, uma "Ação" é contabilizada somente quando há uma checagem de pares, ou seja, quando o jogador seleciona 2 cartas no tabuleiro para comparar se elas são iguais. O valor minimo de ações de cada tabuleiro está em seus respectivas explicações acima.</p>
                    <p>Há 2 tipos de recordes em cada tabuleiro, o primeiro é referente ao modo "normal" onde as cartas permanecem com face para cima no inicio do jogo, já o segundo é referente ao modo "Dificil" onde não é possivel ter a visualização previa das cartas antes do inicio do jogo, se tornando mais um teste de sorte do que memória.</p>
                </div>
            </div>
        </div>
    )
}

export default ExplicandoRecords