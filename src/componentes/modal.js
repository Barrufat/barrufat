import useVideoPlayer4 from './videoPlayer4'
import { useState, useEffect, useRef } from 'react'
import './modal.css'

const Modal = ({ children, estado, cambiarEstado, play4 }) => {

    const [displayGadjet, setDisplayGadjet] = useState ('gadjetOpen')

    const videoElement4 = useRef(null);

    const {
        // playerState3,
        togglePlay4,
        handleOnTimeUpdate4,
        handleVideoProgress4,
        // handleVideoSpeed,
        // toggleMute,
      } = useVideoPlayer4(videoElement4);

      useEffect(() => {
        if (play4){
            togglePlay4();
        } else if (handleVideoProgress4 > 99){
            setDisplayGadjet('closed')
        }
      }, [play4, togglePlay4, handleVideoProgress4]);

    return (
        <>
            {estado &&
                <div className='overlay'>
                    <video className={displayGadjet}
                        src='./gadjet.mp4'
                        ref={videoElement4}
                        onTimeUpdate={handleOnTimeUpdate4}
                    />
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