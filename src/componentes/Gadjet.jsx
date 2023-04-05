


import './gadjet.css'

import useVideoPlayer from './videoPlayer';
import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import Gadjet2 from '../componentes/BarruGadjet2';


const Gadjet = ({ toggleJeto }) => {

    const videoElement = useRef(null);
    const {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
        // handleVideoProgress,
        // handleVideoSpeed,
        // toggleMute,
    } = useVideoPlayer(videoElement);

    const [src, setSrc] = useState(null);

    const [videoClass, setVideoClass] = useState('closed');
    const [displayGadjet, setDisplayGadjet] = useState('containerGadjet')
    const [displayCanvas, setDisplayCanvas] = useState('canvas')

    useEffect(() => {
        if (toggleJeto) {
            setDisplayGadjet('closedGadjet')
        }
    }, [toggleJeto])

    const playGadjet = (state) => {
        setVideoClass(state);
        setDisplayCanvas('closedGadjet')
        setSrc('./GadjetOpen.mp4');
        togglePlay();
    }

    useEffect(() => {
        if ( playerState.progress >= 85) {
            setDisplayGadjet('closedGadjet')
        }
    }, [src, playerState])

    return (
        <div className={displayGadjet}>
            <video className={videoClass}
                src={src}
                ref={videoElement}
                onTimeUpdate={handleOnTimeUpdate}
            />
            <div className={displayCanvas}>
                <Canvas>
                    <OrbitControls />
                    <ambientLight shadow={0.1} intensity={0.65} />
                    <pointLight position={[1, 1, 1]} intensity={0.6} />
                    <Suspense fallback={null}>
                        {/* <ModelMuseu playState={playState} camZ={camZ} cam1={cam1} cam2={cam2} cam3={cam3} cam4={cam4} cam6={cam6} cam5={cam5} tiempo={tiempo}
                    sendFlechas={cerrarFlechas} sendMapa={abrirMapa} sendYunke={abrirCard} sendArmor={abrirCard} sendGuitar1={abrirCard} sendTambores={abrirCard}
                    sendCambio2={cambioCam2} sendCambio3={cambioCam3} /> */}
                        <Gadjet2 sendGadjet={playGadjet} />
                    </Suspense>
                </Canvas>
            </div>
        </div>

    )
}

export default Gadjet;