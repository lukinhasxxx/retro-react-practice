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








// const Botoes = (props) => {
// return (
//     <div>
//         <div className="botao-1">
//             <h5>{props.textoBotao1}</h5>
//             <h5>{props.textoBotao2}</h5>
//             <h5>{props.textoBotao3}</h5>
//         </div>

//         <div className="botao-2" >
//             <h5>{props.textoBotao4}</h5>
//             <h5>{props.textoBotao5}</h5>
//             <h5>{props.textoBotao6}</h5>
//         </div>

//         <div className="botao-3" >
//             <h5>{props.textoBotao7}</h5>
//             <h5>{props.textoBotao8}</h5>
//             <h5>{props.textoBotao9}</h5>
//         </div>

//            <div className="botao-4" >
//             <h5>{props.textoBotao10}</h5>
//             <h5>{props.textoBotao11}</h5>
//             <h5>{props.textoBotao12}</h5>
//         </div>

//     </div>



// )
// }
// export default Botoes