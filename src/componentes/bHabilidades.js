import useVideoPlayer from './videoPlayer';
import useVideoPlayer2 from "./videoPlayer2";
import useVideoPlayer3 from "./videoPlayer3";
import React, { useRef, useState } from "react";
import { Row, Col } from 'react-bootstrap';
import './bHabilidades.css'

const Habilidades = () => {

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


  return (
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
  );
}

export default Habilidades;