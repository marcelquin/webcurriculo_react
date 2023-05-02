import '../../../App.css'
import Header from "../../../componentes/Header"
import Footer from '../../../componentes/Footer/'

function Webcurriculo() {


    return (
      <>
         <div className="containerPrincipal">
      
      <Header />

      <div className="conteudoPagina">

        <section>

          <div className='boxProjetos'>

            <div className='imgProjeto imgwebcurriculo'></div>
            <div className='infoProjeto'>

              <h3>Web Curriculo</h3>
              <span>app feito com tecnicas de HTML5, CSS3, Flex, React, vite, dentre outras pronta para adição de recursos backend</span>
              
              <h3>ferramentas utilizadas</h3>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>FLEX</li>
                <li>REACT</li>
                <li>VITE</li>
              </ul>  
              <h3><a href='https://github.com/marcelquin/webcurriculo_reack'>GIT</a></h3>
            </div>

         </div>

        </section>

      </div>
        <Footer />
   </div>
      </>
    )
}
export default Webcurriculo