import { useEffect, useState } from "react";
import Header from "./components/header/header";
import './global.css';
import APIData from "./components/APIdata/APIdata";
import UserContext from "./context/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carrinho from "./components/Carrinho.jsx/carrinho";

function App() {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagina, setPagina] = useState(10);
  const [item, setItem] = useState([])

  useEffect(() => {
    async function buscaPost() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_start=0&_limit=${pagina}`
        );
        const data = await response.json();
        console.log(data)
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

  function deleteItem() {
    alert("Funciona")
  }

    //Essa foi o chat que fez. Pega o id, coloca numa variavel e adiciona por esta variavel.
    function openDetails(e) {
    const idClicado = parseInt(e.currentTarget.id); // pega o id clicado
    const itemClicado = dados.find(element => element.id === idClicado); // encontra o item no array dados

    if (itemClicado) {
      setItem(prev => [...prev, itemClicado]); // adiciona ao array sem sobrescrever
    }
  }


  return (
    <>
      <UserContext.Provider value={{item, setItem}}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<APIData dados={dados} loading={loading} loadItens={loadItens} openDetails={openDetails}/>}></Route>
            <Route path="/carrinho" element={<Carrinho  deleteItem={deleteItem}/>}></Route>
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
}


export default App;
