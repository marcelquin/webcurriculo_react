import '../../App.css'
import './cursos.css'
import Header from "../../componentes/Header/"
import Perfil from "../../componentes/Perfil/"
import Footer from '../../componentes/Footer/'

const instFID ={
  inst: 'FID',
  curso: 'Baicharelado em  Sistema de Informação',
  ano: 2013
};

const inscurso24={
  inst: 'CURSO24H',
  curso: 'Segurança na Internet',
  curso2: 'Redes e Noções de Hardwar',
  ano: 2011,
};

const insudemy={
  inst: 'UDEMY',
  curso: 'Java Completo Programaão Orinetada a Objetos + projetos',
  curso2: 'Spring Boot & MVC com Thymeleaf',
  curso3: 'HTML5 e CSS3 : Tecnicas Avançadas<',
  ano: 2023,
  
};

Curso24h

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
              <h3>{instFID.inst}</h3>
              <p>{instFID.curso}</p>
              <p>Ano: {instFID.ano}</p>
            </div>                

            
            <div className='blocoCurso'>
              <h3>{insudemy.inst}</h3>
              <p>{insudemy.curso}</p>
              <p>Ano: {insudemy.ano}</p>
            </div>

            
            <div className='blocoCurso'>
              <h3>{insudemy.inst}</h3>
              <p>{insudemy.curso2}</p>
              <p>Ano: {insudemy.ano}</p>
            </div>

            <div className='blocoCurso'>
              <h3>{insudemy.inst}</h3>
              <p>{insudemy.curso3}</p>
              <p>Ano: {insudemy.ano}</p>
            </div>
            
            <div className='blocoCurso'>
              <h3>{inscurso24.inst}</h3>
              <p>{inscurso24.curso}</p>
              <p>Ano: {inscurso24.ano}</p>
            </div>

            <div className='blocoCurso'>
              <h3>{inscurso24.inst}</h3>
              <p>{inscurso24.curso2}</p>
              <p>{inscurso24.ano}</p>
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