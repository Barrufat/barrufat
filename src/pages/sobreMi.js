import useMediaQuery from "../componentes/useMediaQuery";
import { useTranslation } from 'react-i18next';

import '../App.css';


const SobreMi = () => {

  const matches = useMediaQuery("(min-width: 600px)");
  const [t, i18n] = useTranslation("global");

  return (
    <div className='containerSobreMi'>
      {matches ?
        <>
          <img src='./Alex.png' alt='Alex' width='70%' />
          <div className='contenidoSobreMI'>
            <h1 className='tituloSobreMI'>{t("sobremi1")}<br />{t("sobremi2")}</h1>
            <h3 className='textoSobreMI'>{t("sobremi3")}</h3>
          </div>
        </>
        :
        <div className='containerSobreMiRes'>
          <img className='imgSobreMIRes' src='./Alex.png' alt='Alex' width='70%' />
          <div className='contenidoSobreMIRes'>
            <h1 className='tituloSobreMIRes'>{t("sobremi1")}<br />{t("sobremi2")}</h1>
            <h3 className='textoSobreMIRes'>{t("sobremi3")}</h3>
          </div>
        </div>
      }
    </div>
  )
}

export default SobreMi;
