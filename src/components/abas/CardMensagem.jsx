function Mensagens(){
    return(
        <div className="caixa" id="mensagem">
        <h1>Troca de mensagem</h1>
        <hr />
        <div className="caixaChat2">
            <h1>João</h1>
            <p>E aí, tudo certo?</p>
        </div>

        <div className="caixaChat1">
            <h1>Luís</h1>
            <p>Tudo sim! E você?</p>
        </div>
         <div className="caixaChat2">
            <h1>João</h1>
            <p>Também! Vai conseguir terminar o projeto de React hoje?</p>
        </div>
        <div className="caixaChat1">
            <h1>Luís</h1>
            <p>Vou sim. Falta só finalizar alguns componentes.</p>
        </div>
        <div className="caixaChat2">
            <h1>João</h1>
            <p>Boa! Depois me mostra como ficou.</p>
        </div>
        <button>Enviar mensagem</button>
    </div>
    
    );
}

export default Mensagens;