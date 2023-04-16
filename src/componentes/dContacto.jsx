import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import useMediaQuery from './useMediaQuery';
import { SiGithub, SiLinkedin, SiFreelancer } from "react-icons/si";
import { useTranslation } from 'react-i18next';
import './dContacto.css'

export const ContactUs = () => {
    const form = useRef();

    const [t, i18n] = useTranslation("global");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9d44a08', 'template_s2fe2q4', form.current, 'VoubygS4yngKOPN0L')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const matches = useMediaQuery("(min-width: 800px)");

    return (
        <>{matches ?
            <div className='contContacto' id='contacto'>
                <img className='imgCambioSeccion' src='./cambiobarrufat2.png' alt='cambio2' />
                <div className='contPresProyectos'>
                    <h1 className='contactoTitulo'>{t("contacto1")}</h1>
                    <h2 className='contactoTexto '>{t("contacto2")}</h2>
                </div>
                <div className='contForm'>
                    <form className='contForm2' ref={form} onSubmit={sendEmail}>
                        <div className='datosForm'>
                            <div className='contDatos'>
                                <label className='labelForm'>{t("contacto3")}</label>
                                <input className='inputForm' type="text" name="user_name" />
                            </div>
                            <div>
                                <label className='labelForm'>{t("contacto4")}</label>
                                <input className='inputForm' type="email" name="user_email" />
                            </div>
                        </div>

                        <textarea className='textForm' name="message" placeholder={t("contacto6")} />
                        <input className='sendForm' type="submit" value={t("contacto5")} />
                    </form>
                </div>
                <div className='contIconos'>
                    <a className='iconoContacto' href="https://www.freelancer.es/u/barrufat?from=search" target='_blank' rel="noreferrer"><SiFreelancer /></a>
                    <a className='iconoContacto' href="https://www.linkedin.com/in/alex-barbero-arrufat/" target='_blank' rel="noreferrer"><SiLinkedin /></a>
                    <a className='iconoContacto' href="https://github.com/Barrufat" target='_blank' rel="noreferrer"><SiGithub /></a>

                </div>
                <img className='falsoFooter' src='./footerBarru.png' alt='cambioFooter' />
            </div>

            :

            <div className='contContacto' id='contacto'>
                <img className='imgCambioSeccion' src='./cambiobarrufat2.png' alt='cambio2' />
                <div className='contPresProyectos'>
                    <h1 className='contactoTitulo'>Contacta conmigo</h1>
                    <h2 className='contactoTexto '>Cuentáme tu idea para empezar a crear algo especial!</h2>
                </div>
                <div className='contForm'>
                    <form className='contForm2' ref={form} onSubmit={sendEmail}>
                        <div className='datosFormRes'>
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
                        <input className='sendForm' type="submit" value="ENVIAR" />
                    </form>
                </div>
                <div className='contIconos'>
                    <a className='iconoContactoRes' href="https://www.freelancer.es/u/barrufat?from=search" target='_blank' rel="noreferrer"><SiFreelancer /></a>
                    <a className='iconoContactoRes' href="https://www.linkedin.com/in/alex-barbero-arrufat/" target='_blank' rel="noreferrer"><SiLinkedin /></a>
                    <a className='iconoContactoRes' href="https://github.com/Barrufat" target='_blank' rel="noreferrer"><SiGithub /></a>

                </div>
                <img className='falsoFooterRes' src='./footerBarru.png' alt='cambioFooter' />
            </div>
        }

        </>
    );
};