import React, { useRef, useState } from "react";
import { HashLink } from 'react-router-hash-link';
import Modal from "./modal";
import './cProyectos.css'

const Proyectos = () => {

  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);
  const [modal6, setModal6] = useState(false);


  const openModal1 = () => {
    setModal1(true);
  }
  const openModal2 = () => {
    setModal2(true);
  }
  const openModal3 = () => {
    setModal3(true);
  }
  const openModal4 = () => {
    setModal4(true);
  }
  const openModal5 = () => {
    setModal5(true);
  }
  const openModal6 = () => {
    setModal6(true);
  }

  const cerrarModal1 = (estado) => {
    setModal1(estado);
  }
  const cerrarModal2 = (estado) => {
    setModal2(estado);
  }
  const cerrarModal3 = (estado) => {
    setModal3(estado);
  }
  const cerrarModal4 = (estado) => {
    setModal4(estado);
  }
  const cerrarModal5 = (estado) => {
    setModal5(estado);
  }
  const cerrarModal6 = (estado) => {
    setModal6(estado);
  }

  return (
    <div className='cartaProyecto' id='proyectos'>
      <div className='contPresProyectos'>
        <h1 className='proyectosTitulo'>Portfolio</h1>
        <h2 className='proyectosTexto '>Hecha un vistazo a algunos de los proyectos que he realizado y si quieres...</h2>
        {/* <button className='messageButton'> Mándame un e-mail</button> */}
        <HashLink className='messageButton' to="#contacto" smooth>Mándame un e-mail</HashLink>
      </div>

      <div className='gridProyectos'>
        <img className='imgProyecto' src='./cajaQuiz.png' alt='quiz' onClick={openModal1} />
        <Modal estado={modal1} cambiarEstado={cerrarModal1} >
          <h1 className='tituloProyecto'>QUIZ</h1>
          <a className='LinkProyecto' href='https://barberobib.web.app/' target='_blank' rel="noreferrer" >
            <img className='imgLink' width='100%' src='./montajeQUIZ.png' alt='quiz' />
          </a>
          <p className='textoProyecto'> Interactivo educativo tipo questionario para museo en Abudabi</p>
        </Modal>


        <img className='imgProyecto' src='./cajaDaikin.png' alt='daikin' onClick={openModal2} />
        <Modal estado={modal2} cambiarEstado={cerrarModal2}>
          <h1 className='tituloProyecto'>DAIKIN</h1>
          <a className='LinkProyecto' href='https://daikinish23.com/' target='_blank' rel="noreferrer" >
            <img className='imgLink' width='100%' src='./montajeDAIKIN.png' alt='daikin' />
          </a>
          <p className='textoProyecto'> Pagina para proyecto ISE 2023 de DAIKIN</p>
        </Modal>

        <img className='imgProyecto' src='./cajaVLeave.png' alt='biblio1' onClick={openModal4} />
        <Modal estado={modal4} cambiarEstado={cerrarModal4} >
          <h1 className='tituloProyecto'>VLeave</h1>
          <a className='LinkProyecto' href='https://barberobib.web.app/' target='_blank' rel="noreferrer" >
            <img className='imgLink' width='100%' src='./montajeVLeave.png' alt='biblio1' />
          </a>
          <p className='textoProyecto'> E-commerce de mobiliario para Campers que incluye modelador virtual 3D donde el usuario puede diseñar y organizar el producto segun sus necesidades antes de su compra. </p>
        </Modal>

        <img className='imgProyecto' src='./cajaMuseum.png' alt='museum' onClick={openModal3} />
        <Modal estado={modal3} cambiarEstado={cerrarModal3}>
          <h1 className='tituloProyecto'>The Museum</h1>
          <a className='LinkProyecto' href='https://barberobib.web.app/' target='_blank' rel="noreferrer" >
            <img className='imgLink' width='100%' src='./biblio1.png' alt='biblio1' />
          </a>
          <p className='textoProyecto'> Tour 360 en espacio 3D virtual generado a tiempo real. </p>
        </Modal>

        <img className='imgProyecto' src='./cajaGratx.png' alt='gratx' onClick={openModal5} />
        <Modal estado={modal5} cambiarEstado={cerrarModal5}>
          <h1 className='tituloProyecto'>El Gratx L'H</h1>
          <a className='LinkProyecto' href='https://elgratx.com/' target='_blank' rel="noreferrer" >
            <img className='imgLink' width='100%' src='./montajeGratx.png' alt='biblio1' />
          </a>
          <p className='textoProyecto'> E-Commerce para espacio creativo y taller de Serigrafía</p>
        </Modal>

        <img className='imgProyecto' src='./biblio1.png' alt='biblio1' onClick={openModal6} />
        <Modal estado={modal6} cambiarEstado={cerrarModal6}>
          <h1 className='tituloProyecto'>PROYECTO BIBLIOTECA INTERACTIVA</h1>
          <a className='LinkProyecto' href='https://barberobib.web.app/' target='_blank' rel="noreferrer" >
            <img className='imgLink' width='100%' src='./biblio1.png' alt='biblio1' />
          </a>
          <p className='textoProyecto'> Donde el usuario puede administrar su biblioteca virtual, crear nuevos elementos, organizar por casilleros,
            guardar información de cada elemento creado, etc. Incluye búsqueda y filtrado por diferentes campos (Título, autorx, etc)</p>
        </Modal>
      </div>
    </div>
  );
}

export default Proyectos;