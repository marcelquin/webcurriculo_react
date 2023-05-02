import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
     <div className="containerPrincipal">

        <header>
            <div className="logo"></div>
            <nav>

                <a href='#'>Home</a>
                <a href='#'>Cursos</a>
                <a href='#'>
                  <details>
                    <summary>Projetos</summary>
                    <span><a href='#'>Hotel </a></span>
                    <span><a href='#'>Doceria </a></span>
                    <span><a href='#'>Web Curriculo </a></span>
                  </details>
                </a>
           
            </nav>
        </header>

        <div className="conteudoPagina">

          <section>
            <div className='boxPerfil'> 
                  <div className='imgPerfil'>
                    IMG perfil
                  </div>
                  <div className='informação'>
                    <h1>Nome</h1>
                    <p>Objetico</p>
                  </div>
            </div>

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
        <footer>
            <span>telefone:(65)99672-5190 </span>
            <span>Email:quinteiromarcel@gmail.com </span>
        </footer>
     </div>
    </>
  )
}

export default App
