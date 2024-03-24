import Header from '../../components/Header'
import Footer from '../../components/Footer'
import style from './Home.module.css'

function Home(){
    return(
        <>
        <Header/>

      <section className={style.home}>
        <div className='container'>
        <div style={{display:'flex'}}>
          <div className='ods-p1'>
            <div className='linha1'>
              <img src="/ods1.svg" alt="ods1" className='ods1' />
              <img src="/ods2.svg" alt="ods2" />
              <img src="/ods3.svg" alt="ods3" />
            </div>
            <div className='linha2'>
            <img src="/ods4.svg" alt="ods4" />
            <img src="/ods5.svg" alt="ods5" />
            </div>
            <div className='linha3'>
            <img src="/ods6.svg" alt="ods6" />
            <img src="/ods7.svg" alt="ods7" />
            </div>
            <div className='linha4'>
            <img src="/ods8.svg" alt="ods8" />
            <img src="/ods9.svg" alt="ods9" />
            </div>
          </div>
          <div className='descricao'>
          <h1>O que são ODS?</h1><br />
          <p>Os Objetivos de Desenvolvimento <br />
          Sustentável (ODS) são um apelo <br />
          universal da Organização das <br />
          Nações Unidas à ação para acabar <br />
          com a pobreza, proteger o planeta <br />
          e assegurar que todas as pessoas <br />
          tenham paz e prosperidade.</p>
          </div>
          <div className='ods-p2' >
              <div className='linha5'>
                <img src="/ods10.svg" alt="ods10" />
                <img src="/ods11.svg" alt="ods11" />
                <img src="/ods12.svg" alt="ods12" />
              </div>
              <div className='linha6'>
                <img src="/ods13.svg" alt="ods13" />
                <img src="/ods14.svg" alt="ods14" />
              </div>
              <div className='linha7'>
                <img src="/ods15.svg" alt="ods15" />
                <img src="/ods16.svg" alt="ods16" />
              </div>
              <div className='linha8'>
                <img src="/ods17.svg" alt="ods17" />
                <img src="/objetivos.svg" alt="ods" />
              </div>
          </div>
        </div>
        </div>
      </section>
      <Footer/>
        </>
    )
}

export default Home
