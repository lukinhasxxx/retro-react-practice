import './botoes.css'

const Botoes = ({texto}) => {
return (
    <div className='botoes-externo'>
        <button
        style={{whiteSpace:'pre-line'}} 
        className="botoes-interno" 
        onClick={null}>
            {texto}

        </button>

    </div>
)
}
export default Botoes
