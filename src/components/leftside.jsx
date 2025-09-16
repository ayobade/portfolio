import React from 'react'


function Sidebar() {
    return (
      <aside className="sidebar">
        <div className="brand">Makinde Ayobade</div>
        <nav className="nav">
          <a href="#intro">Intro</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#fun">Fun</a>
          <a href="#writings">Writings</a>
        </nav>
        <div className="social">
        
          <a href="#">Twitter (X)</a>
          <a href="#">LinkedIn</a>
          <a href="#">Github</a>
          <a href="#">Behance</a>
         
        </div>
      </aside>
    )
  }

  export default Sidebar