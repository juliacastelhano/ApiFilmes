import axios from "axios";
import { useState } from "react";
import { Favoritos } from "../../models/favoritos.model";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


function AdicionarFavoritos() {
    const [ titulo, setTitulo] = useState('');
    const [filmesId, setFilmesId] = useState('');
  
    function enviar() {
      let favoritos: Favoritos = new Favoritos();
      favoritos.titulo = titulo;
      favoritos.filmesId = Number.parseInt(filmesId);
  
      axios
        .post("http://localhost:3001/favoritos/" + filmesId, favoritos)
        .then((resposta) => {
          console.log(resposta.data.mensagem);
          setTitulo('');  
        })
        .catch((erro) => {
          console.log(erro);
        }); 
  
    }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}> Cadastrar Favoritos</h1>
      <div>
        <TextField id="outlined-size-small" label="Título" onChange={(event) => setTitulo(event.target.value)}/>
      </div>
      <br />
      <div>
        <TextField id="outlined-size-small" label="Id do filme" onChange={(event) => setFilmesId(event.target.value)}/>
      </div>
      <div>
        <br />
        <Button variant="contained" color="secondary" size="medium" onClick={enviar}>
          Favoritar
        </Button>
      </div>
    </div>
  );
}

  export default AdicionarFavoritos;