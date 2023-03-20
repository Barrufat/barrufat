
import React, { useRef, useState, useEffect } from "react";
import useVideoPlayer from '../componentes/videoPlayer';
import useVideoPlayer2 from "../componentes/videoPlayer2";
import useVideoPlayer3 from "../componentes/videoPlayer3";
// import useVideoPlayer4 from "../componentes/videoPlayer4";
import Modal from "../componentes/modal";
import CarouselHome from "../componentes/carousel";
import CarouselHomeRes from "../componentes/carouselRes";
import useMediaQuery from "../componentes/useMediaQuery";
import '../App.css';

import { Row, Col } from 'react-bootstrap';

const Home = () => {

  const videoElement = useRef(null);
  const videoElement2 = useRef(null);
  const videoElement3 = useRef(null);
  // const videoElement4 = useRef(null);

  const {
    // playerState,
    togglePlay,
    handleOnTimeUpdate,
    // handleVideoProgress,
    // handleVideoSpeed,
    // toggleMute,
  } = useVideoPlayer(videoElement);

  const {
    // playerState2,
    togglePlay2,
    handleOnTimeUpdate2,
    // handleVideoProgress,
    // handleVideoSpeed,
    // toggleMute,
  } = useVideoPlayer2(videoElement2);

  const {
    // playerState3,
    togglePlay3,
    handleOnTimeUpdate3,
    // handleVideoProgress,
    // handleVideoSpeed,
    // toggleMute,
  } = useVideoPlayer3(videoElement3);

  // const {
  //   playerState4,
  //   togglePlay4,
  //   handleOnTimeUpdate4,
  //   // handleVideoProgress4,
  // } = useVideoPlayer4(videoElement4);

  // const [displayGadjet, setDisplayGadjet] = useState('closed');

  // const openGadjet = () => {
  //   setDisplayGadjet('gadjetOpen')
  //   togglePlay4();
  // }

  // console.log(playerState4.progress)

  // useEffect(() => {
  //   if (playerState4.progress === 100) {
  //     setDisplayGadjet('closed');
  //     setModal1(true);
  //     togglePlay4()
  //   }
  // }, [playerState4, togglePlay4, modal1]);


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


  const matches = useMediaQuery("(min-width: 600px)");


  return (
    <div>

      <div>{matches ? <CarouselHome /> : <CarouselHomeRes />}</div>

      <div className='cartaDibu'>
        <div className='cartaTitulo'>
          <img className='presentacionImg' src='./emojiBarru.png' alt='jetoTITULO'></img>
          <div className='contTextoPresentacion'>
            <h1 className='presentacionTitulo'>Diseñador & Desarrollador Web Full Stack</h1>
            <h2 className='presentacionTexto'>Es frequente que tu sitio Web sea la primera impresión que reciben tus clientes, así que asegurate de que esta sea buena. Me gusta ayudar a pequeñas empresas a crear su espacio en la red y disfruto desarrollando pequeñas aplicaciones e interactivos. </h2>
          </div>
        </div>
        <img className='manoBarru' src='./manosBarru.png' alt='manosBarru'></img>
      </div>

      <Row className='contHabilidades'>
        <Col className='colHabilidad' sm={12} xl={4}>
          <div className='cartaHabilidad'>
            <video className='vidEmotiHabilidad'
              onMouseEnter={togglePlay}
              onMouseLeave={togglePlay}
              src='./disenyador.mp4'
              ref={videoElement}
              onTimeUpdate={handleOnTimeUpdate}
            />

            <h1 className='tituloHabilidad'> Diseñador</h1>
            <p className='textoHabilidad'>Prefiero las estructuras sencillas pero eficaces, limpias y con interacciones que no dejen indiferente al usuario.</p>
            <h2 className='semiTituloHabilidad'> Que me gusta diseñar</h2>
            <p className='textoHabilidad'> Logos, Paginas Web, App, Experiencia e Interfaz Usurario</p>
            <h2 className='semiTituloHabilidad'> Herramientas que uso: </h2>
            <p className='textoHabilidad'> Paquete Adobe, Sketcher, Papel y Lapiz</p>
          </div>
        </Col>

        <Col className='colHabilidad' sm={12} xl={4}>
          <div className='cartaHabilidad'>
            <video className='vidEmotiHabilidad'
              onMouseEnter={togglePlay2}
              onMouseLeave={togglePlay2}
              src='./developer.mp4'
              ref={videoElement2}
              onTimeUpdate={handleOnTimeUpdate2}
            />
            <h1 className='tituloHabilidad'> Frontend y Backend Developer</h1>
            <p className='textoHabilidad'>Me gusta picar codigo desde zero e ir dando forma a las ideas hasta conseguir el mejor resultado para cada cliente.</p>
            <h2 className='semiTituloHabilidad'> Lenguajes y tecnologías que uso:</h2>
            <p className='textoHabilidad'>React, JavaScript, HTML, CSS, NodeJs, Sequelize, Git</p>
            <h2 className='semiTituloHabilidad'> Herramientas y Frameworks: </h2>
            <p className='textoHabilidad'>WordPress, BootStrap, Three-Fiber, Three-Drei, Github, Bittbucket</p>
          </div>
        </Col>

        <Col className='colHabilidad' sm={12} xl={4}>
          <div className='cartaHabilidad'>
            <video className='vidEmotiHabilidad'
              onMouseEnter={togglePlay3}
              onMouseLeave={togglePlay3}
              src='./animator.mp4'
              ref={videoElement3}
              onTimeUpdate={handleOnTimeUpdate3}
            />

            <h1 className='tituloHabilidad'> Animador 2D</h1>
            <p className='textoHabilidad'> Disfruto creando animaciones 2D ya sea para añidar más carácter a las Aplicaciones que desarrollo como también para publicidad, pequeños sketches, videos musicales... lo que sea!</p>
            <h2 className='semiTituloHabilidad'> Herramientas: </h2>
            <p className='textoHabilidad'> Adobe Photoshop, Animate y Premiere, Blender y 3Ds Max </p>
            <h2 className='semiTituloHabilidad'> Herramientas y Frameworks: </h2>
            <p className='textoHabilidad'>BootStrap, Three-Fiber, Three-Drei, Github, Bittbucket</p>
          </div>
        </Col>
      </Row>

      <img className='imgCambioSeccion' src='./cambiobarrufat.png' alt='cambio1' />

      <div className='cartaProyecto'>

        <div className='contPresProyectos'>
          <h1 className='proyectosTitulo'>Portfolio</h1>
          <h2 className='proyectosTexto '>Hecha un vistazo a algunos de los proyectos que he realizado y si crees que te puede interesar... ¡Mándame un email!</h2>
        </div>

        {/* <div className={displayGadjet}>
          <video className='videoGadjet' width='100%'
            src='./gadjet.mp4'
            ref={videoElement4}
            onTimeUpdate={handleOnTimeUpdate4}
          />
        </div> */}

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

          <img className='imgProyecto' src='./cajaMuseum.png' alt='museum' onClick={openModal3} />
          <Modal estado={modal3} cambiarEstado={cerrarModal3}>
              <h1 className='tituloProyecto'>The Museum</h1>
              <a className='LinkProyecto' href='https://barberobib.web.app/' target='_blank' rel="noreferrer" >
                <img className='imgLink' width='100%' src='./biblio1.png' alt='biblio1' />
              </a>
            <p className='textoProyecto'> Tour 360 en espacio 3D virtual generado a tiempo real. </p>
          </Modal>

          <img className='imgProyecto' src='./cajaVLeave.png' alt='biblio1' onClick={openModal4} />
          <Modal estado={modal4} cambiarEstado={cerrarModal4} >
              <h1 className='tituloProyecto'>Found</h1>
              <a className='LinkProyecto' href='https://barberobib.web.app/' target='_blank' rel="noreferrer" >
                <img className='imgLink' width='100%' src='./biblio1.png' alt='biblio1' />
              </a>
            <p className='textoProyecto'> Donde el usuario puede administrar su biblioteca virtual, crear nuevos elementos, organizar por casilleros,
              guardar información de cada elemento creado, etc. Incluye búsqueda y filtrado por diferentes campos (Título, autorx, etc)</p>
          </Modal>

          <img className='imgProyecto' src='./biblio1.png' alt='biblio1' onClick={openModal5} />
          <Modal estado={modal5} cambiarEstado={cerrarModal5}>
              <h1 className='tituloProyecto'>PROYECTO BIBLIOTECA INTERACTIVA</h1>
              <a className='LinkProyecto' href='https://barberobib.web.app/' target='_blank' rel="noreferrer" >
                <img className='imgLink' width='100%' src='./biblio1.png' alt='biblio1' />
              </a>
            <p className='textoProyecto'> Donde el usuario puede administrar su biblioteca virtual, crear nuevos elementos, organizar por casilleros,
              guardar información de cada elemento creado, etc. Incluye búsqueda y filtrado por diferentes campos (Título, autorx, etc)</p>
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

      <img className='imgCambioSeccion' src='./cambiobarrufat2.png' alt='cambio2' />

      <img className='imgCambioSeccion' src='./footerBarru.png' alt='cambioFooter' />
    </div>
  )
}

export default Home;
