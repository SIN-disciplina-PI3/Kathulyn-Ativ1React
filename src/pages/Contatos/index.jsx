import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'


function Contatos(){
    return(
            <>
            <Header/>
            <section>
                <div className='perfil'>
                    <div className='foto'>
                        <img src="/fotoPerfil.jpg" alt="foto de perfil" className='foto'/>
                    </div>
                    <div className='bio'>
                        <h1>Kathulyn Neves</h1>
                        <h3 className='conteudo'>18 anos</h3>
                        <h3 className='conteudo'>Estudande de Sistemas para internet - Unicap</h3>
                        <p>Faço parte de um grupo chamado "Código de Garotas", <br />
                        e atualmente estamos trabalhando em um projeto <br />
                        chamado <Link to="https://github.com/helzaaragao/RepositorioCDG">Repositorio CDG</Link></p>
                        <div className='ico'>
                            <Link to="https://github.com/KathulynNeves">
                                <img src="/Githubicon.svg" alt="icon github" className='icon'/>
                            </Link>
                            <Link to="https://www.linkedin.com/in/kathulyn-neves-3b1017272">
                            <img src="/Linkedinicon.svg" alt="icon github" className='icon'/>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
            </>
        
    )
}

export default Contatos