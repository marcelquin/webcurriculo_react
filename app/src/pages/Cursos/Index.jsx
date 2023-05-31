import '../../App.css'
import './cursos.css'


const instFID ={
  inst: 'FID',
  curso: 'Baicharelado em  Sistema de Informação',
  diploma: 'https://drive.google.com/file/d/1ZPHRZFHs4G9MrJPf94ruMzPI_ClXGJcs/view?usp=sharing',
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
return(
    <>
            <div className='boxCurso'>

            <div className='blocoCurso'>
              <h3>{instFID.inst}</h3>
              <p>{instFID.curso}</p>
              <p>Ano: {instFID.ano}</p>
              <a href='https://drive.google.com/file/d/1ZPHRZFHs4G9MrJPf94ruMzPI_ClXGJcs/view?usp=sharing' target='_blank' className='faculdade'>Certificado</a>
            </div> 

            <div className='blocoCurso'>
              <h3>{insudemy.inst}</h3>
              <p>{insudemy.curso}</p>
              <p>Ano: {insudemy.ano}</p>
              <a href='https://drive.google.com/file/d/10YYNVCXbKe_MZlt8_R25Ym8YXInP1rnm/view?usp=sharing' target='_blank' className='faculdade'>Certificado</a>
            </div>  

            <div className='blocoCurso'>
              <h3>{insudemy.inst}</h3>
              <p>{insudemy.curso2}</p>
              <p>Ano: {insudemy.ano}</p>
              <a href='https://drive.google.com/file/d/1ZBWF_0QY5NJE0qORK02EtfwahUCB5L8w/view?usp=sharing' target='_blank' className='faculdade'>Certificado</a>
            </div>
            <div className='blocoCurso'>
              <h3>{insudemy.inst}</h3>
              <p>{insudemy.curso3}</p>
              <p>Ano: {insudemy.ano}</p>
              <a href='https://drive.google.com/file/d/1p96IV4GtOvrge4s8wGO1G9dFlIKIZlZb/view?usp=sharing' target='_blank' className='faculdade'>Certificado</a>
            </div>
            <div className='blocoCurso'>
              <h3>{instiped.inst}</h3>
              <p>{instiped.curso}</p>
              <p>Ano: {instiped.ano}</p>
              <a href='https://drive.google.com/file/d/1fFVUMWIbxqUJQntgOt6OUoVFHaaAYb1X/view?usp=sharing' target='_blank' className='faculdade'>Certificado</a>
            </div> 
            <div className='blocoCurso'>
              <h3>{instiped.inst}</h3>
              <p>{instiped.curso2}</p>
              <p>Ano: {instiped.ano}</p>
              <a href='https://drive.google.com/file/d/1bmLQ3SaFQFpWlrV19Joa5eZNh5KnoL8T/view?usp=sharing' target='_blank' className='faculdade'>Certificado</a>
            </div> 
            <div className='blocoCurso'>
              <h3>{instbrava.inst}</h3>
              <p>{instbrava.curso}</p>
              <p>Ano: {instbrava.ano}</p>
              <a href='https://drive.google.com/file/d/15lIosh1qeZog4I_DXMz2JMXAAOguwlmA/view?usp=sharing' target='_blank' className='faculdade'>Certificado</a>
            </div> 
            <div className='blocoCurso'>
              <h3>{instsoftblue.inst}</h3>
              <p>{instsoftblue.curso}</p>
              <p>Ano: {instsoftblue.ano}</p>
              <a href='https://drive.google.com/file/d/1qzFb3rDcpisdB8iJQYapKuSAzqLlmI2F/view?usp=sharing' target='_blank' className='faculdade'>Certificado</a>
            </div> 
            <div className='blocoCurso'>
              <h3>{instensinon.inst}</h3>
              <p>{instensinon.curso}</p>
              <p>{instensinon.ano}</p>
              <a href='https://drive.google.com/file/d/15-AsgMLEolIKpHmraCm85UigB63oQGv0/view?usp=sharing' target='_blank' className='faculdade'>Certificado</a>
            </div>
            <div className='blocoCurso'>
              <h3>{instensinon.inst}</h3>
              <p>{instensinon.curso2}</p>
              <p>{instensinon.ano}</p>
              <a href='https://drive.google.com/file/d/13fFRouutFOlLrbeQzE0wEnuEMOFP752s/view?usp=sharing' target='_blank' className='faculdade'>Certificado</a>
            </div>

             <div className='blocoCurso'>
              <h3>{instFID.inst}</h3>
              <p>{instFID.curso2}</p>
              <p>Ano: {instFID.ano2}</p>
              <a href='https://drive.google.com/file/d/1UWD4G840EdqU32zWhFDrSJHPFKD5RAqU/view?usp=sharing' target='_blank' className='faculdade'>Certificado</a>
            </div> 
            <div className='blocoCurso'>
              <h3>{instFID.inst}</h3>
              <p>{instFID.curso3}</p>
              <p>Ano: {instFID.ano2}</p>
              <a href='https://drive.google.com/file/d/1NPBam1DBVcr8QxoDY8go43KXvZssXxXX/view?usp=sharing' target='_blank' className='faculdade'>Certificado</a>
            </div> 
            <div className='blocoCurso'>
              <h3>{instFID.inst}</h3>
              <p>{instFID.curso4}</p>
              <p>Ano: {instFID.ano2}</p>
              <a href='https://drive.google.com/file/d/1yrNXi8lovJGWeLMQu-cmDHRWRMQLgZLo/view?usp=sharing' target='_blank' className='faculdade'>Certificado</a>
            </div> 
            <div className='blocoCurso'>
              <h3>{instFID.inst}</h3>
              <p>{instFID.curso5}</p>
              <p>Ano: {instFID.ano2}</p>
              <a href='https://drive.google.com/file/d/1gJjk1IEiBKwbObxy8kqCQHpn-6C2-Pgw/view?usp=sharing' target='_blank' className='faculdade'>Certificado</a>
            </div>          
            
            <div className='blocoCurso'>
              <h3>{inscurso24.inst}</h3>
              <p>{inscurso24.curso}</p>
              <p>Ano: {inscurso24.ano}</p>
              <a href='https://drive.google.com/file/d/1WLv4sj6IYalZLnwfd4u0fYHr7Iy0XPIf/view?usp=sharing' target='_blank' className='faculdade'>Certificado</a>
            </div>
            <div className='blocoCurso'>
              <h3>{inscurso24.inst}</h3>
              <p>{inscurso24.curso2}</p>
              <p>{inscurso24.ano}</p>
              <a href='https://drive.google.com/file/d/1LgCkiNq0U4zbvRY7J2h3Yv119sLLPVhu/view?usp=sharing' target='_blank' className='faculdade'>Certificado</a>
            </div>

            

            <div className='blocoCurso'>
              <h3>{instensinon.inst}</h3>
              <p>{instensinon.curso3}</p>
              <p>{instensinon.ano}</p>
              <a href='https://drive.google.com/file/d/1kCFuFKc8O6oASFChdvKirPnYGtneqaJP/view?usp=sharing' target='_blank' className='faculdade'>Certificado</a>
            </div>
            <div className='blocoCurso'>
              <h3>{instensinon.inst}</h3>
              <p>{instensinon.curso4}</p>
              <p>{instensinon.ano}</p>
              <a href='https://drive.google.com/file/d/1JQoaXXTX77wEcP82hgf15ZZDux8jGkTg/view?usp=sharing' target='_blank' className='faculdade'>Certificado</a>
            </div>
          
          </div>
      </>
  )
}

export default Cursos