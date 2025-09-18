import React from 'react'


function Sidebar() {
    return (
        <aside className="sidebar">
          <div className="brand">
            <img src="/logo.png" alt="Makinde Ayobade" className="desktop-logo" />
          </div>
        <nav className="nav">
          <a href="#intro">Intro</a>
          <a href="#work">ABOUT ME</a>
          <a href="#projects">Projects</a>
          <a href="#projects">Services</a>
          <a href="#fun">Fun</a>
         
        </nav>
          <div className="social">

            <a href="https://x.com/AyobadeMakinde" target="_blank" rel="noopener noreferrer">Twitter (X)</a>
            <a href="https://www.linkedin.com/in/ayobade-makinde/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/ayobade" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://www.behance.net/ayobademakinde" target="_blank" rel="noopener noreferrer">Behance</a>

          </div>
      </aside>
    )
  }

  export default Sidebar