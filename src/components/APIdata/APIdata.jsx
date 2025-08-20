import styles from './APIdata.module.css';


function APIData({ dados, loading, loadItens, openDetails }) {


  return (
    <>
      <h1 className={styles.title}>Quotes</h1>
      <div className={styles.container}>
          {loading
            ? "Carregando..."
            : dados.map((item) => (
                <div
                  key={item.id}
                  id={item.id} // necessário para capturar no evento
                  className={styles.itemAPI}
                  onClick={openDetails} // passa o evento direto
                >
                  <p>{item.id}</p>
                  <h3>{item.title}</h3>
                  <p className={styles.textBody}>{item.body}</p>
                  <span>+</span>
                </div>
              ))}

          {!loading && (
            <button
              className={styles.loadItensBtn}
              onClick={loadItens}
            >
              Carregar mais itens
            </button>
          )}
      </div>
    </>
  );
}

export default APIData;
