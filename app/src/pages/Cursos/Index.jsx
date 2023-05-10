import '../../App.css'
import './cursos.css'
import Header from "../../componentes/Header/"
import Perfil from "../../componentes/Perfil/"
import Footer from '../../componentes/Footer/'


const instFID ={
  inst: 'FID',
  curso: 'Baicharelado em  Sistema de Informação',
  curso2: 'III mostra Cientifica',
  curso3: 'Marketing pessoal',
  curso4: 'XVII SEFOL',
  curso5: 'EXPOFID 2011',
  ano: 2013,
  ano2: 2011,
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
const instiped={
  inst: 'IPED',
  curso: 'CURSO DE PHP + MySQL ',
  curso2: 'CURSO DE HTML',
  ano: 2011
};

const instbrava={
  inst: 'BRAVA CURSOS',
  curso: 'CURSO DE HTML5',
  ano: 2012,
};

const instsoftblue={
  inst: 'SOFTBLUE',
  curso: 'CURSO DE SQL COMPLETO',
  ano: 2011, 
};


const instensinon={
  inst: 'ensino nacional',
  curso: 'CURSO DE HTML',
  curso2: 'CURSO DE PHO',
  curso3: 'Curso de administração de tempo',
  curso4: 'curso de informatica na educação',
  ano: 2011, 
};

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
              <a href='#' target='_blank' className='faculdade'>Certificado</a>
            </div> 

            <div className='blocoCurso'>
              <h3>{insudemy.inst}</h3>
              <p>{insudemy.curso}</p>
              <p>Ano: {insudemy.ano}</p>
              <a href='#' target='_blank' className='faculdade'>Certificado</a>
            </div>  

            <div className='blocoCurso'>
              <h3>{insudemy.inst}</h3>
              <p>{insudemy.curso2}</p>
              <p>Ano: {insudemy.ano}</p>
              <a href='#' target='_blank' className='faculdade'>Certificado</a>
            </div>
            <div className='blocoCurso'>
              <h3>{insudemy.inst}</h3>
              <p>{insudemy.curso3}</p>
              <p>Ano: {insudemy.ano}</p>
              <a href='#' target='_blank' className='faculdade'>Certificado</a>
            </div>
            <div className='blocoCurso'>
              <h3>{instiped.inst}</h3>
              <p>{instiped.curso}</p>
              <p>Ano: {instiped.ano}</p>
              <a href='#' target='_blank' className='faculdade'>Certificado</a>
            </div> 
            <div className='blocoCurso'>
              <h3>{instiped.inst}</h3>
              <p>{instiped.curso2}</p>
              <p>Ano: {instiped.ano}</p>
              <a href='#' target='_blank' className='faculdade'>Certificado</a>
            </div> 
            <div className='blocoCurso'>
              <h3>{instbrava.inst}</h3>
              <p>{instbrava.curso}</p>
              <p>Ano: {instbrava.ano}</p>
              <a href='#' target='_blank' className='faculdade'>Certificado</a>
            </div> 
            <div className='blocoCurso'>
              <h3>{instsoftblue.inst}</h3>
              <p>{instsoftblue.curso}</p>
              <p>Ano: {instsoftblue.ano}</p>
              <a href='#' target='_blank' className='faculdade'>Certificado</a>
            </div> 
            <div className='blocoCurso'>
              <h3>{instensinon.inst}</h3>
              <p>{instensinon.curso}</p>
              <p>{instensinon.ano}</p>
              <a href='#' target='_blank' className='faculdade'>Certificado</a>
            </div>
            <div className='blocoCurso'>
              <h3>{instensinon.inst}</h3>
              <p>{instensinon.curso2}</p>
              <p>{instensinon.ano}</p>
              <a href='#' target='_blank' className='faculdade'>Certificado</a>
            </div>

             <div className='blocoCurso'>
              <h3>{instFID.inst}</h3>
              <p>{instFID.curso2}</p>
              <p>Ano: {instFID.ano2}</p>
              <a href='#' target='_blank' className='faculdade'>Certificado</a>
            </div> 
            <div className='blocoCurso'>
              <h3>{instFID.inst}</h3>
              <p>{instFID.curso3}</p>
              <p>Ano: {instFID.ano2}</p>
              <a href='#' target='_blank' className='faculdade'>Certificado</a>
            </div> 
            <div className='blocoCurso'>
              <h3>{instFID.inst}</h3>
              <p>{instFID.curso4}</p>
              <p>Ano: {instFID.ano2}</p>
              <a href='#' target='_blank' className='faculdade'>Certificado</a>
            </div> 
            <div className='blocoCurso'>
              <h3>{instFID.inst}</h3>
              <p>{instFID.curso5}</p>
              <p>Ano: {instFID.ano2}</p>
              <a href='#' target='_blank' className='faculdade'>Certificado</a>
            </div>          
            
            <div className='blocoCurso'>
              <h3>{inscurso24.inst}</h3>
              <p>{inscurso24.curso}</p>
              <p>Ano: {inscurso24.ano}</p>
              <a href='#' target='_blank' className='faculdade'>Certificado</a>
            </div>
            <div className='blocoCurso'>
              <h3>{inscurso24.inst}</h3>
              <p>{inscurso24.curso2}</p>
              <p>{inscurso24.ano}</p>
              <a href='#' target='_blank' className='faculdade'>Certificado</a>
            </div>

            

            <div className='blocoCurso'>
              <h3>{instensinon.inst}</h3>
              <p>{instensinon.curso3}</p>
              <p>{instensinon.ano}</p>
              <a href='#' target='_blank' className='faculdade'>Certificado</a>
            </div>
            <div className='blocoCurso'>
              <h3>{instensinon.inst}</h3>
              <p>{instensinon.curso4}</p>
              <p>{instensinon.ano}</p>
              <a href='#' target='_blank' className='faculdade'>Certificado</a>
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