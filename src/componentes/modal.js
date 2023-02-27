import './modal.css'

const Modal = ({ children, estado, cambiarEstado, play4 }) => {

    return (
        <>
            {estado &&
                <div className='overlay'>
                    <div className='contModal'>
                        <div className='headerModal'>
                            <h1 className='tituloModal'>Proyecto</h1>
                            <button className='cerrarModal' type='button' onClick={() => cambiarEstado(false)}>X</button>
                        </div>
                        <div className='contContenido'>
                            {children}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Modal