
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SiGithub, SiLinkedin, SiFreelancer } from "react-icons/si";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import Home from './pages/home';
// import Jeto from './componentes/jeto';
import useMediaQuery from './componentes/useMediaQuery';
import Gadjet from './componentes/Gadjet';

function App() {

  const [toggleJeto, setToggleJeto] = useState(false);
  const [displayMenu, setDisplayMenu] = useState('closed');
  const [displayMenuRes, setDisplayMenuRes] = useState('closed');
  console.log('ToggleJeto: ' + toggleJeto);

  const MenuOn = () => {
    setDisplayMenu('openMenu');
    setDisplayMenuRes('openMenuRes');
  }

  const MenuOff = () => {
    setDisplayMenu('closed');
    setDisplayMenuRes('closed');
  }

  const JetOff = () => {
    setToggleJeto(true);
  }

  const matches = useMediaQuery("(min-width: 800px)");

  return (
    <div>
      <div className='gadjet'>
        <Gadjet toggleJeto={toggleJeto} />
      </div>
      <Router>
        <header> {matches ?
          <Link className="cabezalBarru1" onMouseEnter={MenuOn} onMouseLeave={MenuOff} >
            <HashLink className="cabezalLogo" to="#header" smooth><img className='cabezalImg' src='./logo1barru.png' alt='logo' onClick={JetOff} /></HashLink>
            <div className={displayMenu}>
              <HashLink className="cabezal" to="#sobreMi" smooth><h4>SOBRE MI</h4></HashLink>
              <HashLink className="cabezal" to="#habilidades" smooth><h4 >HABILIADES</h4></HashLink>
              <HashLink className="cabezal" to="#proyectos" smooth><h4 >PROYECTOS</h4></HashLink>
              <HashLink className="cabezal" to="#contacto" smooth><h4>CONTACTO</h4></HashLink>
            </div>
          </Link>
          :
          <Link className="cabezalBarruRes" to="/" onMouseEnter={MenuOn} onMouseLeave={MenuOff} >
          <HashLink className="cabezalLogoRes" to="#header" smooth><img className='cabezalImg' src='./logo1barru.png' alt='logo' onClick={JetOff} /></HashLink>
            <div className={displayMenuRes}>
              <HashLink className="cabezal" to="#sobreMi" smooth><h4>SOBRE MI</h4></HashLink>
              <HashLink className="cabezal" to="#habilidades" smooth><h4 >HABILIADES</h4></HashLink>
              <HashLink className="cabezal" to="#proyectos" smooth><h4 >PROYECTOS</h4></HashLink>
              <HashLink className="cabezal" to="#contacto" smooth><h4 >CONTACTO</h4></HashLink>
            </div>
          </Link>}

        </header>
        <main>
          <div className='falsoHeader' id='header'>
          <a className='icono' href="https://www.freelancer.es/u/barrufat?from=search" target='_blank' rel="noreferrer"><SiFreelancer /></a>
            <a className='icono' href="https://github.com/Barrufat" target='_blank' rel="noreferrer"><SiGithub /></a>
            <a className='icono' href="https://www.linkedin.com/in/alex-barbero-arrufat/" target='_blank' rel="noreferrer"><SiLinkedin /></a>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

        </main>
      </Router>
    </div>
  );
}

export default App;
