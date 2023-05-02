import '../../App.css'
import Header from "../../componentes/Header/"
import Perfil from "../Sobre/"
import Footer from '../../componentes/Footer/'

function Home() {


  return (
    <>
     <div className="containerPrincipal">
      
        <Header />

        <div className="conteudoPagina">

          <section>

              <Perfil/>
            
            <div className='conhecimentos'>
                <div className='box'>html</div>
                <div className='box'>css</div>
                <div className='box'>java</div>
                <div className='box'>React</div>
                <div className='box'>React</div>
                <div className='box'>React</div>
           </div>

          </section>
          

        </div>
          <Footer />
     </div>
    </>
  )
}

export default Home