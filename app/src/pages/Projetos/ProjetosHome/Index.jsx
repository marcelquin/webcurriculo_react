import '../../../App.css'
import './ProjetosHome.css'


function ProjetosH() {

  const infodoceria ={
    nomeprojeto: 'DOCERIA',
    descrisao: 'Feito com tecnicas de HTML5, CSS3, Flex, pronta para adição de recursos backend,',
    tec: 'HTML5',
    tec2: 'CSS3',
    tec3: 'FLEX',
  };

  const infopsitecomercial ={
    nomeprojeto: 'HOTEL',
    descrisao: 'Feito com tecnicas de HTML5, CSS3, Flex, pronta para adição de recursos backend,',
    tec: 'HTML5',
    tec2: 'CSS3',
    tec3: 'FLEX',
  };

  const infowebc ={
    nomeprojeto: 'WEB Curriculo',
    descrisao: 'Feito com tecnicas de HTML5, CSS3, Flex, React, vite, dentre outras pronta para adição de recursos backend,',
    tec: 'HTML5',
    tec2: 'CSS3',
    tec3: 'FLEX',
    tec4: 'REACT',
    tec5: 'VITE',
    tec6: 'BOOTSTRAP',
  };

  const infoportifolio = {
    nomeprojeto: 'WEB Curriculo',
    descrisao: 'Feito para demostrativo de Cohecimento, utilizando React em uma das versões e angular na segunda versão, ambas prontas para adição de novos recursos',
    tec: 'HTML5',
    tec2: 'CSS3',
    tec3: 'FLEX',
    tec4: 'REACT',
    tec5: 'VITE',
    tec5: 'ANGULAR',
  };

    return (
      <>   
          <div className='blocoprojetoh'>
             
             <div className='boxprojeto'>
                <div className='imgprojeto doceria'>

                </div>
                <div className='infoprojeto'>
                  <h2>{infodoceria.nomeprojeto}</h2>
                  <h3>{infodoceria.descrisao}</h3>
                  <h2>Tecnologias Utullizadas</h2>
                  <ul>
                    <li>{infodoceria.tec}</li>
                    <li>{infodoceria.tec2}</li>
                    <li>{infodoceria.tec3}</li>
                    <li><a href='https://github.com/marcelquin/doceria' target='_blank'>GIT</a></li>
                  </ul>
                </div>
             </div>
            
             <div className='boxprojeto'>
                <div className='imgprojeto sitecomercial'>

                </div>
                <div className='infoprojeto'>
                  <h2>{infopsitecomercial.nomeprojeto}</h2>
                  <h3>{infopsitecomercial.descrisao}</h3>
                  <h2>Tecnologias Utullizadas</h2>
                  <ul>
                    <li>{infopsitecomercial.tec}</li>
                    <li>{infopsitecomercial.tec2}</li>
                    <li>{infopsitecomercial.tec3}</li>
                    <li><a href='https://github.com/marcelquin/site_hotel' target='_blank'>GIT</a></li>
                  </ul>
                </div>
             </div>

             <div className='boxprojeto'>
                <div className='imgprojeto webcurriculo'>

                </div>
                <div className='infoprojeto'>
                  <h2>{infowebc.nomeprojeto}</h2>
                  <h3>{infowebc.descrisao}</h3>
                  <h2>Tecnologias Utullizadas</h2>
                  <ul>
                    <li>{infowebc.tec}</li>
                    <li>{infowebc.tec2}</li>
                    <li>{infowebc.tec3}</li>
                    <li>{infowebc.tec4}</li>
                    <li>{infowebc.tec5}</li>
                    <li>{infowebc.tec6}</li>
                    <li><a href='https://github.com/marcelquin/webcurriculo_reack' target='_blank'>GIT</a></li>
                  </ul>
                </div>
             </div>

             <div className='boxprojeto'>
                <div className='imgprojeto portifolio'>

                </div>
                <div className='infoprojeto'>
                  <h2>{infoportifolio.nomeprojeto}</h2>
                  <h3>{infoportifolio.descrisao}</h3>
                  
                  <h2>Tecnologias Utullizadas</h2>
                  <ul>
                    <li>{infoportifolio.tec}</li>
                    <li>{infoportifolio.tec2}</li>
                    <li>{infoportifolio.tec3}</li>
                    <li>{infoportifolio.tec4}</li>
                    <li>{infoportifolio.tec5}</li>
                    <li>{infoportifolio.tec6}</li>
                    <li><a href='https://github.com/marcelquin/Portifolio' target='_blank'>GIT</a></li>
                    <li><a href='https://github.com/marcelquin/portifolio2_angular' target='_blank'>GIT Angular</a></li>
                  </ul>
                  
                </div>
             </div>

          </div>
      </>
    )
}
export default ProjetosH