import React from 'react'


const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper indigo lighten-2">
        <a href="#nome" className="brand-logo">Casa do Código</a>
        <ul id="nav-mobile" className="right ">
          <li><a href="#nome">Nome</a></li>
          <li><a href="#livro">Livro</a></li>
          <li><a href="#preco">Preco</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header