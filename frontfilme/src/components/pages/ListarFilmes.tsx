import axios from "axios";
import { useEffect, useState } from "react";
function ListarFilmes() {
  const [filmes, setFilmes] = useState([]);

  function carregarDados() {
    axios
      .get("http://localhost:3001/")
      .then((resposta) => {
        setFilmes(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  useEffect(() => {
    carregarDados();
  }, []);

  function remover(titulo: String) {
    axios
      .delete(`http://localhost:3001/${titulo}`)
      .then((resposta) => {
        carregarDados();
      })
      .catch((erro) => {
        console.log(erro);
      });

}

function adicionarAosFavoritos(titulo: String) {
  axios
    .post(`http://localhost:3001/favoritos/${titulo}`)
    .then((resposta) => {
      console.log(resposta.data);
    })
    .catch((erro) => {
      console.log(erro);
    });
}


  return (
    <div>
      <h1>Listagem de filmes</h1>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Gênero</th>
            <th>Ano</th>
            <th>Remover</th>
            <th>Favoritos</th>
          </tr>
        </thead>
        <tbody>
          {filmes.map((filme: any) => (
            <tr key={filme.id}>
              <td>{filme.titulo}</td>
              <td>{filme.genero}</td>
              <td>{filme.ano}</td>

              <td>
                <button onClick={() => remover(filme.titulo)}>Remover</button>
              </td>
              <td><button onClick={() => adicionarAosFavoritos(filme.tiulo)}>Favoritos</button></td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarFilmes;