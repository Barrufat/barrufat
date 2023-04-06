


import './gadjet.css'

import useVideoPlayer from './videoPlayer';
import useVideoPlayer2 from "./videoPlayer2";
import useVideoPlayer3 from "./videoPlayer3";
import useVideoPlayer4 from './videoPlayer4';
import useVideoPlayer5 from "./videoPlayer5";

import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import Gadjet2 from '../componentes/BarruGadjet2';


const Gadjet = ({ toggleJeto }) => {

    const videoElement = useRef(null);
    const videoElement2 = useRef(null);
    const videoElement3 = useRef(null);
    const videoElement4 = useRef(null);
    const videoElement5 = useRef(null);

    const {
        playerState,
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
        playerState3,
        togglePlay3,
        handleOnTimeUpdate3,
        // handleVideoProgress,
        // handleVideoSpeed,
        // toggleMute,
    } = useVideoPlayer3(videoElement3);

    const {
        playerState4,
        togglePlay4,
        handleOnTimeUpdate4,
        // handleVideoProgress,
        // handleVideoSpeed,
        // toggleMute,
    } = useVideoPlayer4(videoElement4);

    const {
        playerState5,
        togglePlay5,
        handleOnTimeUpdate5,
        // handleVideoProgress,
        // handleVideoSpeed,
        // toggleMute,
    } = useVideoPlayer5(videoElement5);

    const [videoClass, setVideoClass] = useState('closed');
    const [audioClass, setAudioClass] = useState('closed');
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
        togglePlay();
        togglePlay2();
    }

    const playAudio1 = (state) => {
        setAudioClass(state)
        togglePlay3();
    }

    const playAudio2 = (state) => {
        setAudioClass(state)
        togglePlay4();
    }

    const playAudio3 = (state) => {
        setAudioClass(state)
        togglePlay5();
    }


    useEffect(() => {
        if (playerState.progress >= 85) {
            setDisplayGadjet('closedGadjet')
        }
    }, [playerState])

    useEffect(() => {
        if (playerState3.progress === 100) {
            togglePlay3();
        }
    }, [playerState3])

    useEffect(() => {
        if (playerState4.progress === 100) {
            togglePlay4();
        }
    }, [playerState4])

    useEffect(() => {
        if (playerState5.progress === 100) {
            togglePlay5();
        }
    }, [playerState5])

    return (
        <div className={displayGadjet}>
            <video className={videoClass}
                src='./GadjetOpen.mp4'
                ref={videoElement}
                onTimeUpdate={handleOnTimeUpdate}
            />
            <video className={videoClass}
                src='./GadjetOpenSound.mp3'
                ref={videoElement2}
                onTimeUpdate={handleOnTimeUpdate2}
            />
            <video className={audioClass}
                src='./GadjetSound1.mp3'
                ref={videoElement3}
                onTimeUpdate={handleOnTimeUpdate3}
            />
            <video className={audioClass}
                src='./GadjetSound2.mp3'
                ref={videoElement4}
                onTimeUpdate={handleOnTimeUpdate4}
            />
            <video className={audioClass}
                src='./GadjetSound3.mp3'
                ref={videoElement5}
                onTimeUpdate={handleOnTimeUpdate5}
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
                        <Gadjet2 sendGadjet={playGadjet} sendAudio1={playAudio1} sendAudio2={playAudio2} sendAudio3={playAudio3} />
                    </Suspense>
                </Canvas>
            </div>
        </div>

    )
}

export default Gadjet;