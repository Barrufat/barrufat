import './modal.css'

const Modal = ({ children, estado, cambiarEstado, play4 }) => {

    return (
        <>
            {estado &&
                <div className='overlay'>
                    <div className='contModal'>
                        <img src='./gadjet1.png' alt='gadjet1' width='100%' />
                        <div className='headerModal'>
                            <button className='cerrarModal' type='button' onClick={() => cambiarEstado(false)}>X</button>
                        </div>
                        <div className='fondoModal'>
                            <div className='contContenido'>
                                {children}
                            </div>
                        </div>
                        <img src='./gadjet2.png' alt='gadjet2' width='100%' />
                    </div>
                </div>
            }
        </>
    )
}

export default Modal