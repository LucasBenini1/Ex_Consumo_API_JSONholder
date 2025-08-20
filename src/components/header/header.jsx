import styles from './header.module.css'
import { Link, useLocation } from 'react-router-dom'

function Header(){
    const location = useLocation();
    return(
        <>
        <div className={styles.container}>
            <h1>Consumo API JsonHolder - Tratamento de dados recebidos pela API</h1>

        <Link to={location.pathname === "/carrinho" ? '/' : "/carrinho"}>{location.pathname === "/carrinho" ?(
            <p>Home</p>
        ):(
            <p>Lista de Desejos</p>
        )}</Link>

        </div>
        </>
    )
}

export default Header