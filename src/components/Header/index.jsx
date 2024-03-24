import { Link } from 'react-router-dom'
import style from './Header.module.css'

function Header(){
    return(
        <header className={style.header}>
            <Link to="https://github.com/">
            <img src="/LogoODS.svg" alt=""  className='logo'/>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/ods">ODS</Link>
                <Link to="/contatos">Contatos</Link>
            </nav>
        </header>
    )
}

export default Header