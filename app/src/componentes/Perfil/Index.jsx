import '../../App.css'
import './perfil.css'
import React from 'react'
import {Link} from "react-router-dom"

const infoperfil={
  nome: 'MARCEL HIGOR QUINTEIRO ARAUJO',
  obj: 'Buscando um novo caminho profissional dedicando aos estudos na área de programação HTML5 CSS3, React, Java, dentre outros',
  prefone: 65,
  fone: '99672-5190',
  email: 'quinteiromarcel@gmail.com'
};

function Perfil() { 

  return (
    <>
 
            <div className='boxPerfil'> 
                  <div className='imgPerfil'> 
                    
                  </div>
                  <div className='informação'>
                    <h1>{infoperfil.nome}</h1>
                    <h4>{infoperfil.obj}</h4>
                    <h4>E-mail: {infoperfil.email}</h4>
                    <h4>({infoperfil.prefone}){infoperfil.fone}</h4>
                    <span><a href='https://github.com/marcelquin' target='_blank'><h3>GIT</h3></a></span>
                  </div>
            </div>
    </>
  )}

export default Perfil