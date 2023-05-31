import '../../App.css'
import Header from "../../componentes/Header/"
import Cursos from '../Cursos/Index'
import Conhecimento from '../Conhecimentos'
import ProjetosH from '../Projetos/ProjetosHome/Index'

function Home() {


  return (
    <>
     <div className="containerPrincipal">
      
        <Header />

        <div className="conteudoPagina">

          <section>
               <Cursos /> 
              <Conhecimento /> 
              <ProjetosH />
          </section>
          

        </div>
     </div>
    </>
  )
}

export default Home