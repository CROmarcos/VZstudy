import MainImage from '../components/MainImage/MainImage';
import Slika from '../slike/ttf.jpg'

const Ttf=()=>{
    return(
        <div>
            <h1>Tekstilno-tehnološki fakultet</h1>
            <MainImage image={Slika} alt='TTF'/>
        </div>
    );
}

export default Ttf