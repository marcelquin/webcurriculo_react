import "../../App.css"
import {Link} from "react-router-dom"
function Header() {


    return (
      <>        
            <header>
            <div className="logo"></div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Cursos">Cursos</Link>
                  <details>
                    <summary>Projetos</summary>
                    <span><Link to="/Hotel"> Hotel</Link> </span>
                    <span><Link to="/Doceria">Doceria</Link></span>
                    <span><Link to="/Webcurriculo">Web Curriculo</Link> </span>
                  </details>
           
            </nav>
        </header>
      </>
    )
}
export default Header