
import React, { useRef, useState, useEffect } from "react";
import useVideoPlayer from '../componentes/videoPlayer';
import useVideoPlayer2 from "../componentes/videoPlayer2";
import useVideoPlayer3 from "../componentes/videoPlayer3";
import Modal from "../componentes/modal";
import CarouselHome from "../componentes/carousel";
import '../App.css';

const Home = () => {

  const videoElement = useRef(null);
  const videoElement2 = useRef(null);
  const videoElement3 = useRef(null);

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

  const [modal1, setModal1] = useState(false);

  const openModal1 = () => {
    setModal1(!modal1)
  }

  return (
    <div>
      <div className='carHome'>
        <CarouselHome />
      </div>

      <div className='cartaDibu'>
        <img className='manoBarru' src='./manoIzkBarru.png' alt='manoIzkTITULO'></img>
        <div className='cartaTitulo'>
          <img className='presentacionImg' src='./emojiBarru.png' alt='jetoTITULO' width='40%'></img>
          <h1 className='presentacionTitulo'>Diseñador & Desarrollador Web Full Stack</h1>
          <h2 className='presentacionTexto'>Es frequente que tu sitio Web sea la primera impresión que reciben tus clientes, así que asegurate de que esta sea buena. Me gusta ayudar a pequeñas empresas a crear su espacio en la red y disfruto desarrollando pequeñas aplicaciones e interactivos. Hecha un vistazo a algunos de los proyectos que he realizado y si crees que te puede interesar... ¡Mándame un email!</h2>
        </div>
        <img className='manoBarru' src='./manoDerBarru.png' alt='manoDerTITULO'></img>
      </div>

      <div className='contHabilidades'>
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

        <div className='cartaHabilidad'>
          <video className='vidEmotiHabilidad'
            onMouseEnter={togglePlay3}
            onMouseLeave={togglePlay3}
            src='./animator.mp4'
            ref={videoElement3}
            onTimeUpdate={handleOnTimeUpdate3}
          />

          <h1 className='tituloHabilidad'> Animador 2D</h1>
          <p className='textoHabilidad'> Disfruto creando pequeñas animaciones 2D ya sea para añidar más carácter a las Aplicaciones que desarrollo como también para publicidad, pequeños sketches, videos musicales... lo que sea!</p>
          <h2 className='semiTituloHabilidad'> Herramientas: </h2>
          <p className='textoHabilidad'> Adobe Photoshop, Animate y Premiere, Blender y 3Ds Max </p>
          <h2 className='semiTituloHabilidad'> Herramientas y Frameworks: </h2>
          <p className='textoHabilidad'>BootStrap, Three-Fiber, Three-Drei, Github, Bittbucket</p>
        </div>
      </div>
      <img className='imgCambioSeccion' src='./cambiobarrufat.png' alt='cambio1'/>

      <div className='cartaProyecto'>
        <div className='contenedorProyecto'>
          <img width='500px' src='./biblio1.png' alt='biblio1' onClick={openModal1} />
          <Modal estado={modal1} cambiarEstado={openModal1}>
            <div>
              <h1 className='tituloProyecto'>PROYECTO BIBLIOTECA INTERACTIVA:</h1>
              <a className='LinkProyecto' href='https://barberobib.web.app/' target='_blank' rel="noreferrer" >
                <img width='250px' src='./biblio1.png' alt='biblio1' />
                <img width='250px' src='./H_biblio1.png' alt='biblio1' />
              </a>
            </div>
            <p className='textoProyecto'> Donde el usuario puede administrar su biblioteca virtual, crear nuevos elementos, organizar por casilleros,
              guardar información de cada elemento creado, etc. Incluye búsqueda y filtrado por diferentes campos (Título, autorx, etc)</p>
          </Modal>
        </div>
        <div className='contenedorProyecto'>
          <img width='500px' src='./biblio1.png' alt='biblio1' onClick={openModal1} />
          <Modal estado={modal1} cambiarEstado={openModal1}>
            <div>
              <h1 className='tituloProyecto'>PROYECTO BIBLIOTECA INTERACTIVA:</h1>
              <a className='LinkProyecto' href='https://barberobib.web.app/' target='_blank' rel="noreferrer" >
                <img width='250px' src='./biblio1.png' alt='biblio1' />
                <img width='250px' src='./H_biblio1.png' alt='biblio1' />
              </a>
            </div>
            <p className='textoProyecto'> Donde el usuario puede administrar su biblioteca virtual, crear nuevos elementos, organizar por casilleros,
              guardar información de cada elemento creado, etc. Incluye búsqueda y filtrado por diferentes campos (Título, autorx, etc)</p>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Home;
