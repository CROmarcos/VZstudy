import MainImage from '../components/MainImage/MainImage';
import Slika from '../slike/sjever.jpg'

const Unin=()=>{
    return(
        <div>
            <h1>Sveučilište Sjever</h1>
            <MainImage image={Slika} alt='UNIN'/>
        </div>
    );
}

export default Unin