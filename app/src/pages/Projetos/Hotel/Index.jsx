import '../../../App.css'
import Header from "../../../componentes/Header"
import Footer from '../../../componentes/Footer/'

function Hotel() {


    return (
      <>
         <div className="containerPrincipal">
      
      <Header />

      <div className="conteudoPagina">

        <section>

          <div className='boxProjetos'>

            <div className='imgProjeto imghotel'></div>
            <div className='infoProjeto'>

              <h3>Hotel</h3>
              <span>app feito com tecnicas de HTML5, CSS3, Flex, dentre outros, com o intuito de demostrar o conhecimento</span>
              
              <h3>ferramentas utilizadas</h3>
              <ul>
                <li>HTML 5</li>
                <li>CSS 3 </li>
                <li>FLEX</li>
                <li>sçolaslkd</li> 
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
export default Hotel