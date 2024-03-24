import Header from '../../components/Header'
import Footer from '../../components/Footer'


function ODS(){
    return(
        <>
            <Header/>
            <section style={{display:'flex'}} className='pageOds' >
                <div>
                    <div className='ContOds' style={{display:'flex'}}>
                        <img src="/ods8.png" alt=" Imagem ods 8" className='imgOds8'/>
                        <div className='infoOds' style={{display:'flex'}}>
                            <h2>Trabalho Descente e Crescimento Econômico</h2><br />
                            <div className='texto'>
                                <p>
                                A Objetivo de Desenvolvimento Sustentável (ODS) número 8,<br /> "Trabalho Decente e Crescimento Econômico", <br />
                                é um dos pilares fundamentais da Agenda 2030 das Nações Unidas. <br />Este objetivo visa promover oportunidades <br />
                                econômicas inclusivas e trabalho digno para todos, reconhecendo <br />que o emprego é crucial para o desenvolvimento 
                                humano e social.
                                </p>
                                <br />
                                <p>
                                    A ODS 8 busca garantir a criação de empregos de qualidade, <br />proteger os direitos trabalhistas e promover a igualdade <br />
                                    no local de trabalho. Isso inclui não apenas a redução da taxa <br />de desemprego, mas também a erradicação do trabalho <br />
                                    infantil e do trabalho forçado, bem como a eliminação da <br />discriminação no emprego.
                                </p>
                                <br />
                                <p>
                                    Além disso, a ODS 8 incentiva o crescimento econômico sustentável,<br /> que promova a inovação, o empreendedorismo e a <br />
                                    produtividade. Isso implica investir em infraestrutura, tecnologia<br /> e capacitação para garantir que as economias possam <br />
                                    prosperar de forma sustentável, criando oportunidades para todos,<br /> especialmente para os mais vulneráveis.
                                </p>
                                <br />
                                <p>
                                    Para alcançar a ODS 8, são necessárias parcerias entre governos, <br />setor privado, sociedade civil e outras partes interessadas, <br />
                                    a fim de implementar políticas e práticas que promovam o trabalho <br />decente e o crescimento econômico, garantindo que ninguém seja <br />
                                    deixado para trás no caminho rumo ao desenvolvimento sustentável.
                                </p>
                            </div>
                        </div>
                        <img src="/ods8.png" alt=" Imagem ods 8" className='imgOds8'/>
                    </div>
                    
                </div>
                
            </section>
            <Footer/>
        </>
    )
}

export default ODS 