import './rodape.css'

const Rodape = () => {

    return (
        <footer className='rodape'>
        <h3 className='direitos'>TODOS OS DIREITOS RESERVADOS: 2025</h3>
        <h3 className='pagamento'>FORMAS DE PAGAMENTO:<br></br>PIX, CARTÕES E BOLETO</h3>
        <img className='icone-moeda' src='./imagens/insert-coin.png' alt='imagem de moeda' />
        <h3>SAC: <br></br>DÚVIDAS, ENTREGAS <br></br> E RECLAMAÇÕES</h3>
        <img className='bloco-interrogacao' src='./imagens/question_block.png' alt='caixa de interrogacao'/>
      </footer>
    )

}

export default Rodape