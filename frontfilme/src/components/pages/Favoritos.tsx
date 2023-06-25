import axios from "axios";
import { useEffect, useState } from "react";

function ListarFavoritos() {
  const [favoritos, setFavoritos] = useState([]);

  function carregarFavoritos() {
    axios
      .post("http://localhost:3001/favoritos/:titulo")
      .then((resposta) => {
        setFavoritos(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  useEffect(() => {
    carregarFavoritos();
  }, []);

  function removerDosFavoritos(titulo: String) {
    axios
      .delete(`http://localhost:3001/favoritos/${titulo}`)
      .then((resposta) => {
        carregarFavoritos();
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
  

  return (
    <div>
      <h1>Listagem de filmes favoritos</h1>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Gênero</th>
            <th>Ano</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          {favoritos.map((favoritos: any) => (
            <tr key={favoritos.id}>
              <td>{favoritos.titulo}</td>
              <td>{favoritos.genero}</td>
              <td>{favoritos.ano}</td>
              <td>
                <button onClick={() => removerDosFavoritos(favoritos.titulo)}>
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarFavoritos;
  
