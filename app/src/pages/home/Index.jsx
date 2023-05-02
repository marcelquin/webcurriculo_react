import '../../App.css'
import Header from "../../componentes/Header/"
import Perfil from "../../componentes/Perfil/"
import Conhecimento from "../../componentes/Conhecimentos/"
import Footer from '../../componentes/Footer/'

function Home() {


  return (
    <>
     <div className="containerPrincipal">
      
        <Header />

        <div className="conteudoPagina">

          <section>

              <Perfil/>
            
              <Conhecimento />

          </section>
          

        </div>
          <Footer />
     </div>
    </>
  )
}

export default Home