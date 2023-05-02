import '../../../App.css'
import Header from "../../../componentes/Header"
import Footer from '../../../componentes/Footer/'

function Doceria() {


    return (
      <>
         <div className="containerPrincipal">
      
      <Header />

      <div className="conteudoPagina">

        <section>

          <div className='boxProjetos'>

            <div className='imgProjeto imgdoceria'></div>
            <div className='infoProjeto'>

              <h3>DOCERIA</h3>
              <span>app feito com tecnicas de HTML5, CSS3, Flex, dentre outros, com o intuito de demostrar o conhecimento.</span>
              
              <h3>ferramentas utilizadas</h3>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>FLEX</li> 
              </ul>  

            </div>

         </div>

        </section>

      </div>
        <Footer />
   </div>
      </>
    )
}
export default Doceria