import MainImage from '../components/MainImage/MainImage';
import Slika from '../slike/gtf.jpg'

const Gtf=()=>{
    return(
        <div>
            <h1>Geotehnički fakultet</h1>
            <MainImage image={Slika} alt='GTF'/>
        </div>
    );
}

export default Gtf