import '../../../App.css'
import Header from "../../../componentes/Header"
import Footer from '../../../componentes/Footer/'

const infoprojeto ={
  nomeprojeto: 'HOTEL',
  descrisao: 'Feito com tecnicas de HTML5, CSS3, Flex, pronta para adição de recursos backend,',
  tec: 'HTML5',
  tec2: 'CSS3',
  tec3: 'FLEX',
  tec4: '',
  tec5: '',
};

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

              <h3>{infoprojeto.nomeprojeto}</h3>
              <span>{infoprojeto.descrisao}</span>
              
              <h3>ferramentas utilizadas</h3>
              <ul>
                <li>{infoprojeto.tec}</li>
                <li>{infoprojeto.tec2} </li>
                <li>{infoprojeto.tec3}</li> 
              </ul>  
              <h3><a href='https://github.com/marcelquin/site_hotel'>GIT</a></h3>
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