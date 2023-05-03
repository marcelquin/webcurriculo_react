import '../../App.css'
import './cursos.css'
import Header from "../../componentes/Header/"
import Perfil from "../../componentes/Perfil/"
import Footer from '../../componentes/Footer/'

function Cursos() {


  return (
    <>
     <div className="containerPrincipal">
      
        <Header />

        <div className="conteudoPagina">

          <section>
            
            <Perfil />

            <div className='boxCurso'>

            <div className='blocoCurso'>
              <h3>Fid</h3>
              <p>Baicharelado em  Sistema de Informação</p>
              <p>Ano: 2013</p>
            </div>                

            
            <div className='blocoCurso'>
              <h3>Udemy</h3>
              <p>Java Completo Programaão Orinetada a Objetos + projetos</p>
              <p>Ano: 2023</p>
            </div>

            
            <div className='blocoCurso'>
              <h3>Udemy</h3>
              <p>Spring Boot & MVC com Thymeleaf</p>
              <p>Ano: 2023</p>
            </div>

            <div className='blocoCurso'>
              <h3>Udemy</h3>
              <p>HTML5 e CSS3 : Tecnicas Avançadas</p>
              <p>Ano: 2023</p>
            </div>
            
            <div className='blocoCurso'>
              <h3>Curso24h</h3>
              <p>Segurança na Internet</p>
              <p>Ano: 2011</p>
            </div>

            <div className='blocoCurso'>
              <h3>Curso24h</h3>
              <p>Redes e Noções de Hardware</p>
              <p>Ano: 2011</p>
            </div>

           </div>

          </section>

        </div>
          <Footer />
     </div>
    </>
  )
}

export default Cursos