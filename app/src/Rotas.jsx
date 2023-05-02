import Home from "./pages/home/"
import Cursos from "./pages/Cursos/"
import Hotel from "./pages/Projetos/Hotel/"
import Doceria from "./pages/Projetos/Doceria/"
import Webcurriculo from "./pages/Projetos/Webcurriculo/"

import {BrowserRouter, Routes, Route} from "react-router-dom"

function Rotas() {


    return (
      <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Cursos" element={<Cursos/>}></Route>
                <Route path="/Hotel" element={<Hotel/>}></Route>
                <Route path="/Doceria" element={<Doceria/>}></Route>
                <Route path="/Webcurriculo" element={<Webcurriculo/>}></Route>
            </Routes>
        </BrowserRouter>
      </>
    )
}

export default Rotas