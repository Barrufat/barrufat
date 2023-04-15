import useVideoPlayer from './videoPlayer';
import useVideoPlayer2 from "./videoPlayer2";
import useVideoPlayer3 from "./videoPlayer3";
import React, { useRef, useState } from "react";
import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './bHabilidades.css'

const Habilidades = () => {

  const videoElement = useRef(null);
  const videoElement2 = useRef(null);
  const videoElement3 = useRef(null);

  const [t, i18n] = useTranslation("global");

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


  return (
    <Row className='contHabilidades' id='habilidades'>
      <div className='contPresHabilidades'>
        <h1 className='habilidadesTitulo'>{t("habilidades1")}</h1>
        {/* <h2 className='contactoTexto '></h2> */}
      </div>
      <Col className='colHabilidad' sm={12} xl={4}>
        <div className='cartaHabilidad'>
          <video className='vidEmotiHabilidad'
            onMouseEnter={togglePlay}
            onMouseLeave={togglePlay}
            src='./disenyador.mp4'
            ref={videoElement}
            onTimeUpdate={handleOnTimeUpdate}
          />

          <h1 className='tituloHabilidad'>{t("habilidades2")}</h1>
          <p className='textoHabilidad'>{t("habilidades3")}</p>
          <h2 className='semiTituloHabilidad'>{t("habilidades4")}</h2>
          <p className='textoHabilidad'>{t("habilidades5")}</p>
          <h2 className='semiTituloHabilidad'>{t("habilidades6")}</h2>
          <p className='textoHabilidad'>{t("habilidades7")}</p>
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
          <h1 className='tituloHabilidad'>{t("habilidades8")}</h1>
          <p className='textoHabilidad'>{t("habilidades9")}</p>
          <h2 className='semiTituloHabilidad'>{t("habilidades10")}</h2>
          <p className='textoHabilidad'>{t("habilidades11")}</p>
          <h2 className='semiTituloHabilidad'>{t("habilidades12")}</h2>
          <p className='textoHabilidad'>{t("habilidades13")}</p>
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

          <h1 className='tituloHabilidad'>{t("habilidades14")}</h1>
          <p className='textoHabilidad'>{t("habilidades15")}</p>
          <h2 className='semiTituloHabilidad'>{t("habilidades16")}</h2>
          <p className='textoHabilidad'>{t("habilidades17")}</p>
          <h2 className='semiTituloHabilidad'>{t("habilidades18")}</h2>
          <p className='textoHabilidad'>{t("habilidades19")}</p>
        </div>
      </Col>
    </Row>
  );
}

export default Habilidades;