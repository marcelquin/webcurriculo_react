import "../../App.css"
import {Link} from "react-router-dom"
function Header() {


    return (
      <>        
            <header>
            <div className="logo"></div>
            <nav>
                <Link to="/"><span> Home </span></Link>
                <Link to="/Cursos"> <span>Cursos </span> </Link>
                <Link to="/Projetoshome"><span> Projetos</span> </Link>
            </nav>
        </header>
      </>
    )
}
export default Header