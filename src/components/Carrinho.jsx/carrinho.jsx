import { useContext } from "react"
import UserContext from "../../context/Context"
import styles from './carrinho.module.css'


function Carrinho( { deleteItem } ){
    const {item} = useContext(UserContext)

    return(
        <>
            <div className={styles.container}>
            <h1>Lista de Desejos - {item.length}</h1>
             {/* Adicionar filtro */}
            {item.map((item, index) => (
                <div className={styles.listItem}>
                     <p key={index}>- {item.title}</p>
                     <span onClick={() => deleteItem(item.id)}>Remover</span>
                </div>
            ))}
            </div>
        </>
    )
}

export default Carrinho