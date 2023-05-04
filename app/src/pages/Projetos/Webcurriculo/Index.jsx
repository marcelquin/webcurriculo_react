import '../../../App.css'
import '../projetos.css'
import Header from "../../../componentes/Header"
import Footer from '../../../componentes/Footer/'

const infoprojeto ={
  nomeprojeto: 'WEB Curriculo',
  descrisao: 'Feito com tecnicas de HTML5, CSS3, Flex, React, vite, dentre outras pronta para adição de recursos backend,',
  tec: 'HTML5',
  tec2: 'CSS3',
  tec3: 'FLEX',
  tec4: 'REACT',
  tec5: 'VITE',
  tec6: 'BOOTSTRAP',
};

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

              <h3>{infoprojeto.nomeprojeto}</h3>
              <span>{infoprojeto.descrisao}</span>
              
              <h3>ferramentas utilizadas</h3>
              <ul>
                <li>{infoprojeto.tec}</li>
                <li>{infoprojeto.tec2}</li>
                <li>{infoprojeto.tec3}</li>
                <li>{infoprojeto.tec4}</li>
                <li>{infoprojeto.tec5}</li>
                <li>{infoprojeto.tec6}</li>
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