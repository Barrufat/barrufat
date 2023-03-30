import './aPresentacion.css'

const Presentacion = () => {
    return (
        <div className='cartaDibu' id='presentacion'>
            <div className='cartaTitulo'>
                <img className='presentacionImg' src='./emojiBarru.png' alt='jetoTITULO'></img>
                <div className='contTextoPresentacion'>
                    <h1 className='presentacionTitulo'>Diseñador & Desarrollador Web Full Stack</h1>
                    <h2 className='presentacionTexto'>Me gusta ayudar a empresas a crear su espacio en la red y disfruto desarrollando aplicaciones e interactivos. </h2>
                </div>
            </div>
            <img className='manoBarru' src='./manosBarru.png' alt='manosBarru'></img>
        </div>
    );
}

export default Presentacion;