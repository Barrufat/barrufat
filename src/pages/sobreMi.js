import useMediaQuery from "../componentes/useMediaQuery";

import '../App.css';


const SobreMi = () => {

  const matches = useMediaQuery("(min-width: 600px)");

  return (
    <div className='containerSobreMi'>
      <img src='./Alex.png' alt='Alex' width='70%' />
    </div>
  )
}

export default SobreMi;
