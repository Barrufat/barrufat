
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SiGithub, SiLinkedin, SiFreelancer } from "react-icons/si";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
// import Jeto from './componentes/jeto';
import useMediaQuery from './componentes/useMediaQuery';
import Gadjet from './componentes/Gadjet';
import Home from './pages/home';
import SobreMi from './pages/sobreMi';

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

  const [t, i18n] = useTranslation("global");
  const [displayES, setDisplayES] = useState('lngOn')
  const [displayEN, setDisplayEN] = useState('lngOff')

  const ActivoEs = () => {
    setDisplayES('lngOn');
    setDisplayEN('lngOff');
    i18n.changeLanguage("es");
  }

  const ActivoEn = () => {
    setDisplayEN('lngOn');
    setDisplayES('lngOff');
    i18n.changeLanguage("en");
  }

  return (
    <div>
      <div className='gadjet'>
        <Gadjet toggleJeto={toggleJeto} />
      </div>
      <Router>
        <header> {matches ?
          <div className="cabezalBarru1" onMouseEnter={MenuOn} onMouseLeave={MenuOff} >
            <HashLink className="cabezalLogo" to="/#header" smooth><img className='cabezalImg' src='./logo1barru.png' alt='logo' onClick={JetOff} /></HashLink>
            <div className={displayMenu}>
              <Link className="cabezal" to="/sobre" smooth><h4>{t("apartado1")}</h4></Link>
              <HashLink className="cabezal" to="/#habilidades" smooth><h4 >{t("apartado2")}</h4></HashLink>
              <HashLink className="cabezal" to="/#proyectos" smooth><h4 >{t("apartado3")}</h4></HashLink>
              <HashLink className="cabezal" to="/#contacto" smooth><h4>{t("apartado4")}</h4></HashLink>
            </div>
          </div>
          :
          <div className="cabezalBarruRes" onMouseEnter={MenuOn} onMouseLeave={MenuOff} >
            <HashLink className="cabezalLogoRes" to="/#header" smooth><img className='cabezalImg' src='./logo1barru.png' alt='logo' onClick={JetOff} /></HashLink>
            <div className={displayMenuRes}>
              <Link className="cabezal" to="/sobre" smooth><h4>{t("apartado1")}</h4></Link>
              <HashLink className="cabezal" to="/#habilidades" smooth><h4 >{t("apartado2")}</h4></HashLink>
              <HashLink className="cabezal" to="/#proyectos" smooth><h4 >{t("apartado3")}</h4></HashLink>
              <HashLink className="cabezal" to="/#contacto" smooth><h4 >{t("apartado4")}</h4></HashLink>
            </div>
          </div>}

        </header>
        <main>
          <div className='falsoHeader' id='header'>
            <a className='icono' href="https://www.freelancer.es/u/barrufat?from=search" target='_blank' rel="noreferrer"><SiFreelancer /></a>
            <a className='icono' href="https://github.com/Barrufat" target='_blank' rel="noreferrer"><SiGithub /></a>
            <a className='icono' href="https://www.linkedin.com/in/alex-barbero-arrufat/" target='_blank' rel="noreferrer"><SiLinkedin /></a>
            <div className='contLng'>
              <button className={displayES} onClick={ActivoEs}>ES</button>
              <button className={displayEN} onClick={ActivoEn}>EN</button>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<SobreMi />} />
          </Routes>

        </main>
      </Router>
    </div>
  );
}

export default App;
