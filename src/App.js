
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Home from './pages/home';
import Jeto from './componentes/jeto';
import useMediaQuery from './componentes/useMediaQuery';

function App() {
  const [toggleJeto, setToggleJeto] = useState(false);
  console.log('ToggleJeto: ' + toggleJeto);

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
          <Link to="/"><img className="cabezalBarru1" src='./logo1barru.png'
            alt='logo' width='300px' onClick={JetOff} /></Link>
          :
          <Link to="/"><img className="cabezalBarruRes" src='./logo1barru.png'
            alt='logo' width='300px' onClick={JetOff} /></Link>}
        </header>
        <main>
          <div>{matches ?
            <div className='falsoHeader'>
              <Link className="cabezal" to="/"><h4>SOBRE MI</h4></Link>
              <Link className="cabezal" to="/"><h4 >TECNOLOGÍAS</h4></Link>
              <Link className="cabezal" to="/"><h4 >CONTACTO</h4></Link>
            </div> :
            <div className='falsoHeader' />}
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <div>{matches ?
            <div className='falsoFooter'>
              <Link className="cabezal" to="/"><h4>SOBRE MI</h4></Link>
              <Link className="cabezal" to="/"><h4 >TECNOLOGÍAS</h4></Link>
              <Link className="cabezal" to="/"><h4 >CONTACTO</h4></Link>
            </div> :
            <div className='falsoFooter' />}
          </div>
        </main>
      </Router>
    </div>
  );
}

export default App;
