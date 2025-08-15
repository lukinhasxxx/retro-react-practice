import './App.css';
import Botoes from './componentes/botoes/Botoes.js';
import Rodape from './componentes/botoes/rodape/Rodape.js';

function App() {

  const primeiraColuna = [
  {id:1,nome:'DOUBLE\nDRAGON'},
  {id:2,nome:'VECTORMAN\n MEGA DRIVE'},
  {id:3,nome:'WOLFSTEIN\n 3D'}  
  ]
  const segundaColuna = [
  {id:4,nome:'MINECRAFT'},
  {id:5,nome:'ASSASSINS \n CREED'},
  {id:6,nome:'F1 2010'} 
  ]
  const terceiraColuna = [  
  {id:1,nome:'DOUBLE\nDRAGON'},
  {id:2,nome:'VECTORMAN\n MEGA DRIVE'},
  {id:3,nome:'WOLFSTEIN\n 3D'}  ]

  const equipamentos = [
  {id:10, nome:'CARREGADOR'},
  {id:11, nome:'TAMPA'},
  {id:12, nome:'FONTE'},
  ]
  return (
    <div className="App">
  
  <div style={{ 
      backgroundImage: "url('/imagens/testeBackground.png')",
      width:'1920px',
      height:'1080px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      bottom:'-285px',
      position:'fixed',
      
      }}></div>
     
      <div className='coracoes' >
        <img className='coracao' src='./imagens/8bit-heart.png' alt='coracoes'/>
        <img className='coracao' src='./imagens/8bit-heart.png' alt='coracoes'/>
        <img className='coracao' src='./imagens/8bit-heart.png' alt='coracoes'/>
      </div>
      
      <div className='titulo-todo'>
        <div></div>
        <h1 className='titulo'>AOZORA BUY N'SOULD
          <img className='icone-moeda-titulo' src='./imagens/insert-coin.png' alt='imagem de moeda' />
        </h1>

        <h4 className='sub-titulo'>GAMES</h4>
      </div>

      <div className='parte-principal' >

        <div className='card-1'>
          <h5>Jogos antigos</h5>
          {primeiraColuna.map(nomeBotao =>(<Botoes key={nomeBotao.id} texto={nomeBotao.nome}/>) )}
        </div>



        <img className='estrela1' src='./imagens/pixel-star.png' alt='estrela 8 bit' />

        <div className= 'card-2'>
          <h5>Jogos atuais</h5>
          {segundaColuna.map(nomeBotao=>(<Botoes key={nomeBotao.id} texto={nomeBotao.nome} />))}
        </div>

        <img className='estrela2' src='./imagens/pixel-star.png' alt='estrela 8 bit' />

        <div className='card-3'>
          <h5>Consoles</h5>
          {terceiraColuna.map(nomeBotao=>(<Botoes key={nomeBotao.id} texto={nomeBotao.nome} />))}
        </div>

        <img className='estrela3'  src='./imagens/pixel-star.png' alt='estrela 8 bit' />










        <div className='card-4'>
          <h5>Equipamentos</h5>
          {equipamentos.map( nomeBotao => (<Botoes texto ={nomeBotao.nome} key={nomeBotao.id} />) )}
        </div>

        <img className='bau' src='./imagens/open-chest.png' alt='bau' />
        <img className='personagem' src='./imagens/personagem.png' alt='bau' />
        
      </div>
      
    <Rodape />

    </div>
  );
}

export default App;
