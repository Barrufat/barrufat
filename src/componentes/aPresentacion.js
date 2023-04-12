import './aPresentacion.css'

const Presentacion = () => {
    return (
        <div className='cartaDibu' id='presentacion'>
            <div className='cartaTitulo'>
                <div className="casilla">
                    <img className='presentacionImg' src='./emojiBarru.png' alt='jetoTITULO'></img>
                    <img className='presentacionImg' src='./emojiBarru2.png' alt='jetoTITULO2'></img>
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
                    <h2 className='presentacionTexto'>Me gusta ayudar a empresas a crear su espacio en la red y disfruto desarrollando aplicaciones e interactivos. </h2>
                </div>
            </div>
            <img className='manoBarru' src='./manosBarru.png' alt='manosBarru'></img>
        </div>
    );
}

export default Presentacion;