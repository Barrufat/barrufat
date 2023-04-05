
import CarouselHome from "../componentes/aCarousel";
import CarouselHomeRes from "../componentes/aCarouselRes";
import Presentacion from "../componentes/aPresentacion";
import Habilidades from "../componentes/bHabilidades";
import Proyectos from "../componentes/cProyectos";

import useMediaQuery from "../componentes/useMediaQuery";
import { ContactUs } from "../componentes/dContacto";
import '../App.css';


const Home = () => {

  const matches = useMediaQuery("(min-width: 600px)");

  return (
    <div>

      <div>{matches ? <CarouselHome /> : <CarouselHomeRes />}</div>

      <Presentacion />

      <Habilidades />

      <img className='imgCambioSeccion' src='./cambiobarrufat.png' alt='cambio1' />

      <Proyectos />

      <ContactUs />

    </div>
  )
}

export default Home;
