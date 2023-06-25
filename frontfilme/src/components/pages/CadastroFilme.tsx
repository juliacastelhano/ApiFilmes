import axios from 'axios';
import { useState } from 'react';
import { Filme } from '../../models/filme.model';

function CadastroFilme() {
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [ano, setAno] = useState('');

  function enviar() {
    let filmes: Filme = new Filme() ;
      filmes.titulo = titulo;
      filmes.genero = genero;
      filmes.ano = Number.parseInt(ano);
    
    
    axios
      .post('http://localhost:3001/filme', filmes)
      .then((resposta) => {
        console.log(resposta.data.mensagem);
        setTitulo('');
        setGenero('');
        setAno('');
      })
      .catch((erro) => {
        console.log(erro);
      }); 
  }

  return (
    <div>
      <h1> Cadastrar Filme</h1>
      <div>
        <label>Título:</label>
        <input
          type="text"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
        />
      </div>
      <div>
        <label>Gênero:</label>
        <input
          type="text"
          value={genero}
          onChange={(event) => setGenero(event.target.value)}
        />
      </div>
      <div>
        <label>Ano:</label>
        <input
          type="text"
          value={ano}
          onChange={(event) => setAno(event.target.value)}
        />
      </div>
      <div>
        <button onClick={enviar}>Cadastrar</button>
      </div>
    </div>
  );
}

export default CadastroFilme;
