import axios from 'axios';
import { useState } from 'react';
import { Filme } from '../../models/filme.model';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';

function CadastroFilme() {
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [ano, setAno] = useState('');
  const [estrelas, setEstrelas] = useState('');


  function enviar() {
    let filmes: Filme = new Filme() ;
      filmes.titulo = titulo;
      filmes.genero = genero;
      filmes.ano = Number.parseInt(ano);
      filmes.estrelas = Number.parseInt(estrelas);

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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}> Cadastrar Filme</h1>
      <div>
      <TextField id="outlined-size-small" label="Título" onChange={(event) => setTitulo(event.target.value)}/>
      </div>
      <br />
      <div>
        <TextField id="outlined-size-small" label="Gênero" onChange={(event) => setGenero(event.target.value)}/>
      </div>
      <br />
      <div>
        <TextField id="outlined-size-small" label="Ano" onChange={(event) => setAno(event.target.value)}/>
      </div>
      <br />
      <div>
        <TextField id="outlined-size-small" label="Estrelas" onChange={(event) => setEstrelas(event.target.value)}/>
      </div>
      <br />
      <div>
      <Button variant="contained" color="secondary" size="medium" onClick={enviar}>
          Cadastrar
        </Button>
      <div>
      </div>
      </div>
    </div>
  );
}

export default CadastroFilme;
