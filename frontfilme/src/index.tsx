import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CadastroFilme from "./components/pages/CadastroFilme";
import ListarFilmes from "./components/pages/ListarFilmes";
import Error from "./components/pages/Error";
import ListarFavoritos from "./components/pages/Favoritos";

const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <CadastroFilme />,
      },
      {
        path: "/cadastrar",
        element: <CadastroFilme />,
      },
      {
        path: "/listar",
        element: <ListarFilmes />,
      },

      {
        path: "/favoritos/:titulo",
        element: <ListarFavoritos />,
      },
     
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
