
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SiGithub, SiLinkedin } from "react-icons/si";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Home from './pages/home';
import Jeto from './componentes/jeto';
import useMediaQuery from './componentes/useMediaQuery';

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
      <div className='jeto'>
        <Jeto toggleJeto={toggleJeto} />
      </div>
      <Router>
        <header> {matches ?
          <Link className="cabezalBarru1" to="/" onMouseEnter={MenuOn} onMouseLeave={MenuOff} >
            <img className='cabezalImg'src='./logo1barru.png' alt='logo' onClick={JetOff} />
            <div className={displayMenu}>
              <Link className="cabezal" to="/"><h4>SOBRE MI</h4></Link>
              <Link className="cabezal" to="/"><h4 >TECNOLOGÍAS</h4></Link>
              <Link className="cabezal" to="/"><h4 >CONTACTO</h4></Link>
            </div>
          </Link>
          :
          <Link className="cabezalBarruRes" to="/" onMouseEnter={MenuOn} onMouseLeave={MenuOff} >
            <img className='cabezalImgRes' src='./logo1barru.png' alt='logo' onClick={JetOff} />
            <div className={displayMenuRes}>
              <Link className="cabezal" to="/"><h4>SOBRE MI</h4></Link>
              <Link className="cabezal" to="/"><h4 >TECNOLOGÍAS</h4></Link>
              <Link className="cabezal" to="/"><h4 >CONTACTO</h4></Link>
            </div>
          </Link>}


        </header>
        <main>
          <div>{matches ?
            <div className='falsoHeader'>
              <a className='icono' href="https://github.com/Barrufat" target='_blank' rel="noreferrer"><SiGithub /></a>
              <a className='icono' href="https://www.linkedin.com/in/alex-barbero-arrufat/" target='_blank' rel="noreferrer"><SiLinkedin /></a>
            </div> :
            <div className='falsoHeader' />}
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
