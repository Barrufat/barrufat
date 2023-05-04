import './aPresentacion.css'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import AniBarru from './aniBarru';


const Presentacion = () => {

    const [t, i18n] = useTranslation("global");
    // const [displayImg, setDisplayImg] = useState("presentacionImg");
    // const [displayAni, setDisplayAni] = useState("closed");
    // const [toggleAni, setToggleAni] = useState(false);

    // const cambiarImg = () => {
    //     setDisplayImg("closed");
    //     setDisplayAni("presentacionAni");
    //     setToggleAni(!toggleAni);
    // }

    // const cambiarAni = () => {
    //     setDisplayImg("presentacionImg");
    //     setDisplayAni("closed");
    // }

    return (
        <div className='cartaDibu' id='presentacion'>
            <div className='cartaTitulo'>
                {/* <Link className="casilla" to="/sobre" smooth>
                    <img className='presentacionImg' src='./emojiBarru.png' alt='jetoTITULO'></img>
                    <div className='presentacionAni'>
                        <AniBarru />
                    </div>
                </Link> */}

                <div className="contImgAni">
                    <Link className="presentacionImg" to="/sobre">
                        <AniBarru/>
                    </Link>
                </div>

                <div className='contTextoPresentacion'>
                    <div className='contTitulo'>
                        <div className='presentacionTitulo'>
                            <div className='letraNaranja'>D</div>
                            <div className='letraVioleta'>i</div>
                            <div className='letraVerde'>s</div>
                            <div className='letraNaranja'>e</div>
                            <div className='letraVioleta'>ñ</div>
                            <div className='letraVerde'>a</div>
                            <div className='letraNaranja'>d</div>
                            <div className='letraVioleta'>o</div>
                            <div className='letraVerde'>r</div>
                            <div className='letraNaranja'>&</div>
                        </div>
                        <div className='presentacionTitulo'>
                            <div className='letraVioleta'>D</div>
                            <div className='letraVerde'>e</div>
                            <div className='letraNaranja'>s</div>
                            <div className='letraVioleta'>a</div>
                            <div className='letraVerde'>r</div>
                            <div className='letraNaranja'>r</div>
                            <div className='letraVioleta'>o</div>
                            <div className='letraVerde'>l</div>
                            <div className='letraNaranja'>l</div>
                            <div className='letraVioleta'>a</div>
                            <div className='letraVerde'>d</div>
                            <div className='letraNaranja'>o</div>
                            <div className='letraVioleta'>r</div>
                        </div>
                        <div className='presentacionTitulo'>
                            <div className='letraVerde'>F</div>
                            <div className='letraNaranja'>u</div>
                            <div className='letraVioleta'>l</div>
                            <div className='letraVerde'>l</div>
                        </div>
                        <div className='presentacionTitulo'>
                            <div className='letraNaranja'>S</div>
                            <div className='letraVioleta'>t</div>
                            <div className='letraVerde'>a</div>
                            <div className='letraNaranja'>c</div>
                            <div className='letraVioleta'>k</div>
                        </div>
                    </div>
                    <h2 className='presentacionTexto'>{t("presentacion1")}</h2>
                </div>
            </div>
            <img className='manoBarru' src='./manosBarru.png' alt='manosBarru'></img>
        </div>
    );
}

export default Presentacion;