import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './dContacto.css'

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9d44a08', 'template_s2fe2q4', form.current, 'VoubygS4yngKOPN0L')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='contContacto'>
            <img className='imgCambioSeccion' src='./cambiobarrufat2.png' alt='cambio2' />
            <div className='contPresProyectos'>
                <h1 className='contactoTitulo'>Contacta conmigo</h1>
                <h2 className='contactoTexto '>Cuentáme tu idea para empezar a crear algo especial!</h2>
            </div>
            <div className='contForm'>
                <form className='contForm2' ref={form} onSubmit={sendEmail}>
                    <div className='datosForm'>
                        <div className='contDatos'>
                            <label className='labelForm'>Nombre</label>
                            <input className='inputForm' type="text" name="user_name" />
                        </div>
                        <div>
                            <label className='labelForm'>Email</label>
                            <input className='inputForm' type="email" name="user_email" />
                        </div>
                    </div>

                    <textarea className='textForm' name="message" placeholder='Escribe aquí tu mensaje' />
                    <input className='sendForm' type="submit" value="Enviar" />
                </form>
            </div>
            <img className='imgCambioSeccion' src='./footerBarru.png' alt='cambioFooter' />
        </div>
    );
};