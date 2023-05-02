import "./header.css"

function Header() {


    return (
      <>        
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
      </>
    )
}
export default Header