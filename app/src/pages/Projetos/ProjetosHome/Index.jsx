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
                <Link to="/Hotel"> <button type="button" class="btn btn-primary btn-sm">Ver Mais</button> </Link>
                </div>


            <div className='boxprojetoh imgdoceria'>
            <Link to="/Doceria"> <button type="button" class="btn btn-primary btn-sm">Ver Mais</button> </Link>
            </div>

            <div className='boxprojetoh imgwebcurriculo'>
            <Link to="/Webcurriculo"> <span className='sphotel'>
            <button type="button" class="btn btn-primary btn-sm">Ver Mais</button>
            </span> </Link>

            </div>

            <div className='boxprojetoh mkflix'>
            <Link to="/Mkflix"> <button type="button" class="btn btn-primary btn-sm">Ver Mais</button> </Link>
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