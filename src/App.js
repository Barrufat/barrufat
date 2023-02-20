
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Home from './pages/home';
import Jeto from './componentes/jeto';

function App() {
  const [toggleJeto, setToggleJeto] = useState(false);
  console.log('ToggleJeto: ' + toggleJeto);

  const JetOff = () => {
    setToggleJeto(true);
  }

  return (
    <div>
      <div className='jeto'>
        <Jeto toggleJeto={toggleJeto} />
      </div>
      <Router>
        <header>
          <Link to="/"><img className="cabezalBarru1" src='./logo1barru.png' alt='logo' width='300px' onClick={JetOff} />
          </Link>
        </header>
        <main>
          <div className='falsoHeader'>
            <Link className="cabezal" to="/"><h4>SOBRE MI</h4></Link>
            <Link className="cabezal" to="/"><h4 >TECNOLOGÍAS</h4></Link>
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
