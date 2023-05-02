import '../../../App.css'
import Header from "../../../componentes/Header"
import Footer from '../../../componentes/Footer/'
import {Link} from "react-router-dom"

function ProjetosH() {


    return (
      <>
       <div className="containerPrincipal">
      
      <Header />

      <div className="conteudoPagina">

        <section>
          
          <div className='blocoprojetoh'>
            <div className='boxprojetoh imghotel'>
            <Link to="/Hotel"> <span className='sphotel'>Hotel</span> </Link>
            </div>

            <div className='boxprojetoh imgdoceria'>
            <Link to="/Doceria"> <span className='sphotel'>Doceria</span> </Link>
            </div>

            <div className='boxprojetoh imgwebcurriculo'>
            <Link to="/Webcurriculo"> <span className='sphotel'>Web Curriculo</span> </Link>
            </div>


          </div>
        </section>

      </div>
        <Footer />
   </div>
      </>
    )
}
export default ProjetosH