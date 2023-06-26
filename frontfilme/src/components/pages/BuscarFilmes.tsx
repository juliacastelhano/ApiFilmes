import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const BuscarFilmes = () => {
  const [titulo, setTitulo] = useState("");
  const [filmeEncontrado, setFilmeEncontrado] = useState<any>(null);

  const buscarFilme = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/filme/${titulo}`);
      const filme: any = response.data;
      setFilmeEncontrado(filme);
    } catch (error) {
      console.error(error);
      setFilmeEncontrado(null);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>Busca</h1>
      
      <TextField type="text" value={titulo} id="outlined-size-small" label="Digite o título do filme" onChange={(event) => setTitulo(event.target.value)}/>
      <br />
        <div>
          <Button variant="contained" color="secondary" size="medium" onClick={buscarFilme}>Buscar</Button>
          </div>

      {filmeEncontrado ? (
        <div>
          <h2>Filme Encontrado:</h2>
          <p>Título: {filmeEncontrado.titulo}</p>
          <p>Gênero: {filmeEncontrado.genero}</p>
          <p>Ano: {filmeEncontrado.ano}</p>
        </div>
      ) : <p>Filme não encontrado 😢</p>}
    </div>
  );
};

export default BuscarFilmes;