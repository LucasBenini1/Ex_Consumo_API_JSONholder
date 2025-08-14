import { useEffect, useState } from "react";
import Header from "./components/header/header";
import './global.css';
import APIData from "./components/APIdata/APIdata";

function App() {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagina, setPagina] = useState(10);

  useEffect(() => {
    async function buscaPost() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_start=0&_limit=${pagina}`
        );
        const data = await response.json();
        setDados(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    buscaPost();
  }, [pagina]);

  function loadItens() {
    setPagina(pagina + 10);
  }

  function openDetails(e) {
    console.log("ID clicado:", e.currentTarget.id);
  }

  return (
    <>
      <Header />
      <APIData
        dados={dados}
        loading={loading}
        loadItens={loadItens}
        openDetails={openDetails}
      />
    </>
  );
}

export default App;
