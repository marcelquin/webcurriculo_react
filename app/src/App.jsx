import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./componentes/Header/"
import Perfil from "./pages/Sobre/"
import Footer from './componentes/Footer/'

function App() {


  return (
    <>
     <div className="containerPrincipal">
      
        <Header />

        <div className="conteudoPagina">

          <section>
            
            <Perfil />

            <div className='boxCurso'>

              <details className='fid'>
                  <summary><h2>Fid</h2></summary>
                  <p>aaaa</p>
                  <p>aaaa</p>
                  <p>aaaa</p>
              </details>
              <details className='udemy'>
              <summary><h2>Udemy</h2></summary>
                  <p>aaaa</p>
                  <p>aaaa</p>
                  <p>aaaa</p>
              </details>
              <details className='curso24h'>
              <summary><h2>Curso24h</h2></summary>
                  <p>aaaa</p>
                  <p>aaaa</p>
                  <p>aaaa</p>
              </details> 

           </div>

          </section>

        </div>
          <Footer />
     </div>
    </>
  )
}

export default App
